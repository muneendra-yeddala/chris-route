import { SiToyota, SiSony, SiNintendo, SiPanasonic } from "react-icons/si";

//todo: remove mock functionality
const partners = [
  { name: "Toyota", icon: SiToyota },
  { name: "Sony", icon: SiSony },
  { name: "Nintendo", icon: SiNintendo },
  { name: "Panasonic", icon: SiPanasonic },
];

export default function PartnerLogos() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-12" data-testid="text-trusted-by">
          Trusted by Leading Companies
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
              data-testid={`logo-${partner.name.toLowerCase()}`}
            >
              <partner.icon className="h-12 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
