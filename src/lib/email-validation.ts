/**
 * Robust email validation utility with security enhancements
 */

// Comprehensive email regex that follows RFC 5322 standards
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// Common disposable email domains to prevent abuse
const DISPOSABLE_DOMAINS = [
  'tempmail.org', '10minutemail.com', 'guerrillamail.com', 'mailinator.com',
  'throwaway.email', 'temp-mail.org', 'getnada.com', 'maildrop.cc'
];

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates email address with comprehensive security checks
 */
export function validateEmail(email: string): ValidationResult {
  // Basic sanitization
  const sanitizedEmail = email.trim().toLowerCase();
  
  // Check for empty or null
  if (!sanitizedEmail) {
    return { isValid: false, error: "Email is required" };
  }
  
  // Check length constraints
  if (sanitizedEmail.length > 254) {
    return { isValid: false, error: "Email is too long" };
  }
  
  if (sanitizedEmail.length < 3) {
    return { isValid: false, error: "Email is too short" };
  }
  
  // Basic format validation
  if (!EMAIL_REGEX.test(sanitizedEmail)) {
    return { isValid: false, error: "Please enter a valid email address" };
  }
  
  // Check for suspicious patterns
  if (sanitizedEmail.includes('..') || sanitizedEmail.startsWith('.') || sanitizedEmail.endsWith('.')) {
    return { isValid: false, error: "Invalid email format" };
  }
  
  // Check for disposable email domains
  const domain = sanitizedEmail.split('@')[1];
  if (DISPOSABLE_DOMAINS.includes(domain)) {
    return { isValid: false, error: "Temporary email addresses are not allowed" };
  }
  
  // Check for suspicious characters or patterns that might indicate injection
  if (sanitizedEmail.includes('<script>') || sanitizedEmail.includes('javascript:')) {
    return { isValid: false, error: "Invalid email format" };
  }
  
  return { isValid: true };
}

/**
 * Sanitizes email input to prevent XSS and other injection attacks
 */
export function sanitizeEmail(email: string): string {
  return email
    .trim()
    .toLowerCase()
    .replace(/[<>'"]/g, '') // Remove potentially dangerous characters
    .slice(0, 254); // Enforce max length
}

/**
 * Simple rate limiting for email submissions (client-side)
 */
class EmailRateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts = 3;
  private readonly windowMs = 60000; // 1 minute
  
  canSubmit(email: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(email) || [];
    
    // Remove old attempts outside the window
    const recentAttempts = attempts.filter(time => now - time < this.windowMs);
    
    // Check if under limit
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    // Record this attempt
    recentAttempts.push(now);
    this.attempts.set(email, recentAttempts);
    
    return true;
  }
  
  getRemainingTime(email: string): number {
    const attempts = this.attempts.get(email) || [];
    if (attempts.length === 0) return 0;
    
    const oldestAttempt = Math.min(...attempts);
    const remaining = this.windowMs - (Date.now() - oldestAttempt);
    
    return Math.max(0, Math.ceil(remaining / 1000)); // Return seconds
  }
}

export const emailRateLimiter = new EmailRateLimiter();