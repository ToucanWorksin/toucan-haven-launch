import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { validateEmail, sanitizeEmail, emailRateLimiter } from "@/lib/email-validation";

export type SubscriptionSource = 'hero_form' | 'footer_form';

/**
 * Secure email subscription hook with enhanced validation and monitoring
 */
export function useEmailSubscription(source: SubscriptionSource) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!email || isSubmitting) return;

    // Sanitize and validate email
    const sanitizedEmail = sanitizeEmail(email);
    const validation = validateEmail(sanitizedEmail);
    
    if (!validation.isValid) {
      toast({
        title: "Invalid email",
        description: validation.error,
        variant: "destructive",
      });
      return;
    }

    // Check rate limiting
    if (!emailRateLimiter.canSubmit(sanitizedEmail)) {
      const remainingTime = emailRateLimiter.getRemainingTime(sanitizedEmail);
      toast({
        title: "Too many attempts",
        description: `Please wait ${remainingTime} seconds before trying again.`,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Log subscription attempt for monitoring
      const attemptData = {
        email: sanitizedEmail,
        source,
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
      };

      // Insert the email subscription
      const { error } = await supabase
        .from('email_subscriptions')
        .insert([
          { 
            email: sanitizedEmail,
            source: source
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already subscribed!",
            description: "This email is already on our list. We'll keep you updated!",
          });
          
          // Log duplicate attempt for monitoring
          console.info('Duplicate subscription attempt:', {
            email: sanitizedEmail.replace(/(.{3}).+@/, '$1***@'), // Partially mask for logs
            source,
            timestamp: new Date().toISOString()
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Successfully subscribed!",
          description: "We'll notify you when we launch. Thank you for your interest!",
        });
        
        // Log successful subscription for monitoring
        console.info('Successful subscription:', {
          source,
          timestamp: new Date().toISOString(),
          masked_email: sanitizedEmail.replace(/(.{3}).+@/, '$1***@')
        });
      }
      
      setEmail("");
    } catch (error) {
      // Enhanced error logging for security monitoring
      const errorDetails = {
        error: error instanceof Error ? error.message : 'Unknown error',
        source,
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        // Don't log the actual email in error cases for privacy
      };
      
      console.error('Subscription error:', errorDetails);
      
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (value: string) => {
    // Basic input sanitization on change
    const sanitized = value.slice(0, 254).replace(/[<>'"]/g, '');
    setEmail(sanitized);
  };

  return {
    email,
    setEmail: handleEmailChange,
    isSubmitting,
    handleSubscribe
  };
}