import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle subscription
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <section className="min-h-screen bg-gradient-subtle flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                The Future of
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  Kids' Furniture
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Flat-pack, slottable furniture and toys that grow with your children. 
                No tools required - just slot, click, and play!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Get Early Access
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </div>

            {/* Email Subscription */}
            <div className="bg-card p-6 rounded-2xl shadow-soft border">
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Be the first to know when we launch!
              </h3>
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" variant="toucan">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-playful">
              <img
                src={heroImage}
                alt="Revolutionary kids furniture and toys"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-hero rounded-full shadow-playful animate-bounce" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-toucan-teal rounded-full shadow-card animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;