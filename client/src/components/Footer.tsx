import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiLinkedin, SiX, SiFacebook } from "react-icons/si";
import logo from "@assets/FullLogo_Transparent_NoBuffer_1760418284342.png";

const footerSections = [
  {
    title: "Services",
    links: ["Private Cars", "Tour Guides", "Custom Packages", "Corporate Travel", "Airport Transfer"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Partner With Us", "Press & Media", "Contact"],
  },
  {
    title: "Support",
    links: ["Help Center", "Booking Policy", "Cancellation", "Safety", "FAQ"],
  },
  {
    title: "Legal",
    links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Insurance"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <img 
              src={logo} 
              alt="Shikoku Japan Guides" 
              className="h-12 w-auto mb-4" 
              data-testid="img-footer-logo"
            />
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Premium B2B travel solutions for businesses and professionals exploring Japan.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span data-testid="text-phone">+81 3-1234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span data-testid="text-email">contact@japantravel.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span data-testid="text-address">Tokyo, Japan</span>
              </div>
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4" data-testid={`text-footer-section-${index}`}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-${link.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © 2024 Japan Travel Services. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="h-9 w-9" data-testid="button-linkedin">
                <SiLinkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9" data-testid="button-twitter">
                <SiX className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9" data-testid="button-facebook">
                <SiFacebook className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
