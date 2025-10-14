import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            <h1 className="text-2xl font-bold" data-testid="text-header-brand">
              Japan Travel
            </h1>
            
            <nav className="hidden md:flex items-center gap-8">
              <a 
                href="#services" 
                className="text-sm font-medium hover:text-destructive transition-colors"
                data-testid="link-services"
              >
                Services
              </a>
              <a 
                href="#how-it-works" 
                className="text-sm font-medium hover:text-destructive transition-colors"
                data-testid="link-how-it-works"
              >
                How It Works
              </a>
              <a 
                href="#about" 
                className="text-sm font-medium hover:text-destructive transition-colors"
                data-testid="link-about"
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium hover:text-destructive transition-colors"
                data-testid="link-contact"
              >
                Contact
              </a>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex" data-testid="button-language">
              <Globe className="h-5 w-5" />
            </Button>
            
            <ThemeToggle />
            
            <Button 
              className="hidden md:flex bg-destructive text-destructive-foreground hover-elevate active-elevate-2"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border" data-testid="mobile-menu">
            <nav className="flex flex-col gap-4">
              <a href="#services" className="text-sm font-medium" data-testid="link-mobile-services">
                Services
              </a>
              <a href="#how-it-works" className="text-sm font-medium" data-testid="link-mobile-how-it-works">
                How It Works
              </a>
              <a href="#about" className="text-sm font-medium" data-testid="link-mobile-about">
                About
              </a>
              <a href="#contact" className="text-sm font-medium" data-testid="link-mobile-contact">
                Contact
              </a>
              <Button className="w-full bg-destructive text-destructive-foreground" data-testid="button-mobile-get-started">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
