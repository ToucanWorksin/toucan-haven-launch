import { useEmailSubscription } from "@/hooks/use-email-subscription";

const Footer = () => {
  const { email, setEmail, isSubmitting, handleSubscribe } = useEmailSubscription('footer_form');
  return (
    <footer className="bg-toucan-teal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/6bd18264-401e-4570-877f-411df52ac384.png"
                alt="ToucanWorks"
                className="h-8 object-contain"
              />
            </div>
            <p className="text-white/80 max-w-sm">
              Flat-pack, slottable furniture and toys that grow with your children - easy to assemble, no tools required.
            </p>
            <div className="text-white/80">
              <p>📍 Coimbatore, India</p>
              <p>🚀 Coming Soon</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#mission" className="block text-white/80 hover:text-white transition-colors">
                Our Mission
              </a>
              <a href="#innovation" className="block text-white/80 hover:text-white transition-colors">
                Innovation
              </a>
              <a href="#contact" className="block text-white/80 hover:text-white transition-colors">
                Contact Us
              </a>
              <a href="#subscribe" className="block text-white/80 hover:text-white transition-colors">
                Subscribe
              </a>
            </div>
          </div>

          {/* Email Subscription */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <p className="text-white/80">
              Be the first to hear about our revolutionary products and exclusive early access opportunities.
            </p>
            
            {/* Email Subscription Form */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/15"
                  onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                  autoComplete="email"
                  maxLength={254}
                  required
                />
                <button
                  onClick={handleSubscribe}
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-toucan-orange text-white rounded-lg hover:bg-toucan-orange/90 transition-colors font-medium whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-sm">📧</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-sm">📱</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-sm">💼</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; 2024 ToucanWorks. All rights reserved. Made with ❤️ in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;