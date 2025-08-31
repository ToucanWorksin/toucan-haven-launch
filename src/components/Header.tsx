import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/daf3c6f1-8aa1-4fcd-8d54-a3a187098e57.png"
              alt="ToucanWorks"
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-foreground">
              ToucanWorks
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#mission" className="text-foreground hover:text-primary transition-colors">
              Mission
            </a>
            <a href="#innovation" className="text-foreground hover:text-primary transition-colors">
              Innovation
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="hero" size="sm">
            Get Notified
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;