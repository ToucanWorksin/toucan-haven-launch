-- Create table for email subscriptions
CREATE TABLE public.email_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  source TEXT DEFAULT 'website',
  is_active BOOLEAN DEFAULT true
);

-- Enable Row Level Security
ALTER TABLE public.email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (since this is a public subscription)
CREATE POLICY "Anyone can subscribe to emails" 
ON public.email_subscriptions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading (for admin purposes later)
CREATE POLICY "Anyone can view subscriptions" 
ON public.email_subscriptions 
FOR SELECT 
USING (true);

-- Create index for better performance on email lookups
CREATE INDEX idx_email_subscriptions_email ON public.email_subscriptions(email);
CREATE INDEX idx_email_subscriptions_subscribed_at ON public.email_subscriptions(subscribed_at DESC);