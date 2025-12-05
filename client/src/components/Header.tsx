import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import logo from "@assets/FullLogo_Transparent_NoBuffer (1)_1760418700290.png";
import { Link } from 'react-router-dom';
// import { Link } from 'wouter';

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
            {/* <Button variant="ghost" size="icon" className="hidden md:flex" data-testid="button-language">
              <Globe className="h-5 w-5" />
            </Button> */}
            
            {/* <ThemeToggle /> */}
            
            {/* <Button 
              className="hidden md:flex bg-destructive text-destructive-foreground hover-elevate active-elevate-2"
              data-testid="button-inquire-now"
            >
              Inquire Now
            </Button> */}

            <div className="flex items-center gap-4">
              {/* ... other items ... */}
              
              <a 
                href="mailto:your.email@example.com?subject=Inquiry%20from%20Website"
                // Pass the button styling and data-testid to the anchor tag
               className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 
                   bg-destructive text-destructive-foreground hover:bg-destructive/90 
                   active-elevate-2" // Note: You may need to adjust classes based on your Button's default styles
        data-testid="button-mobile-inquire-now"
         >
                {/* The Button component is now just for appearance */}
                {/* <Button  className="bg-transparent text-destructive-foreground hover:bg-transparent" >
                  Inquire Now
                </Button> */}
                 Inquire Now
              </a>

            </div>

            
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
              {/* <Button className="w-full bg-destructive text-destructive-foreground" data-testid="button-mobile-inquire-now">
                Inquire Now
              </Button> */}
              <a 
        href="mailto:your.email@example.com?subject=Mobile%20Inquiry%20from%20Website" 
        target="_blank" // Optional: Opens mail app in a new context
        // Apply the button's styling classes directly to the anchor tag
        className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 
                   bg-destructive text-destructive-foreground hover:bg-destructive/90 
                   active-elevate-2" // Note: You may need to adjust classes based on your Button's default styles
        data-testid="button-mobile-inquire-now">
        Inquire Now
      </a>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
