import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@assets/FullLogo_Transparent_NoBuffer (1)_1760418700290.png";
// import { Link } from 'wouter'; // Use Wouter link if needed, otherwise use simple <a>

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            <img 
              src={logo} 
              alt="Shikoku Destination Japan" 
              className="h-8 w-auto" 
              data-testid="img-header-logo"
            />
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium hover:text-destructive transition-colors" data-testid="link-services">Services</a>
              {/* <a href="#how-it-works" className="text-sm font-medium hover:text-destructive transition-colors" data-testid="link-how-it-works">How It Works</a> */}
              <a href="#about" className="text-sm font-medium hover:text-destructive transition-colors" data-testid="link-about">About</a>
              <a href="#contact" className="text-sm font-medium hover:text-destructive transition-colors" data-testid="link-contact">Contact</a>
            </nav>
          </div>
          
          {/* 👇 THIS IS THE CORRECTED ACTION/ICON BLOCK 👇 */}
          <div className="flex items-center gap-4">
            
            {/* 1. DESKTOP INQUIRE NOW BUTTON (Styled <a> tag) */}
            <a 
              href="mailto:info@shibuyatravel.com?subject=Inquiry%20from%20Website"
              target="_blank"
              // The key to layout is the `hidden md:flex` class
              className="hidden md:flex inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 
                         bg-destructive text-destructive-foreground hover:bg-destructive/90 hover-elevate active-elevate-2"
              data-testid="button-inquire-now"
            >
              Inquire Now
            </a>
            
            {/* 2. MOBILE MENU TOGGLE (Hamburger Icon) */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" // The key to layout is the `md:hidden` class
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* 👇 THIS IS THE CORRECTED MOBILE MENU BLOCK 👇 */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border" data-testid="mobile-menu">
            <nav className="flex flex-col gap-4">
              <a href="#services" className="text-sm font-medium" data-testid="link-mobile-services">Services</a>
              {/* <a href="#how-it-works" className="text-sm font-medium" data-testid="link-mobile-how-it-works">How It Works</a> */}
              <a href="#about" className="text-sm font-medium" data-testid="link-mobile-about">About</a>
              <a href="#contact" className="text-sm font-medium" data-testid="link-mobile-contact">Contact</a>
              
              {/* 3. MOBILE INQUIRE NOW BUTTON (Styled <a> tag) */}
              <a 
                href="mailto:info@shibuyatravel.com?subject=Inquiry%20from%20Website" 
                target="_blank"
                className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 
                           bg-destructive text-destructive-foreground hover:bg-destructive/90"
                data-testid="button-mobile-inquire-now"
              >
                Inquire Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}