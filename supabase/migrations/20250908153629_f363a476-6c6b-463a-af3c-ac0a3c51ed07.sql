-- Remove the overly permissive SELECT policy that allows anyone to view email addresses
DROP POLICY IF EXISTS "Anyone can view subscriptions" ON public.email_subscriptions;

-- Create a restrictive policy that blocks public access to email addresses
CREATE POLICY "Block public email access" 
ON public.email_subscriptions 
FOR SELECT 
USING (false); -- This blocks all SELECT access from the client side, protecting emails from harvesting