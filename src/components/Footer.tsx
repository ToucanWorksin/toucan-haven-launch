const Footer = () => {
  return (
    <footer className="bg-toucan-teal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/061259f8-9f9a-4bb8-8333-ccd65ea98508.png"
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

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <p className="text-white/80">
              Be the first to hear about our revolutionary products and exclusive early access opportunities.
            </p>
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