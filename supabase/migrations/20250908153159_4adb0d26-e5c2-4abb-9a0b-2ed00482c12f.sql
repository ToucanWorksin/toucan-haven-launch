-- Remove the overly permissive SELECT policy that allows anyone to view email addresses
DROP POLICY IF EXISTS "Anyone can view subscriptions" ON public.email_subscriptions;

-- Create a new policy that only allows authenticated admins to view email subscriptions
-- For now, we'll restrict it to service role only since there's no admin system yet
CREATE POLICY "Only service role can view subscriptions" 
ON public.email_subscriptions 
FOR SELECT 
USING (false); -- This effectively blocks all SELECT access from the client side

-- Note: When admin functionality is implemented later, this policy can be updated to:
-- USING (auth.jwt() ->> 'role' = 'admin' OR auth.jwt() ->> 'role' = 'service_role');