import { Search, CalendarCheck, Heart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse & Choose",
    description: "Explore our guides, read reviews, and find the perfect match for your interests and travel style",
  },
  {
    icon: CalendarCheck,
    title: "Book Your Date",
    description: "Select your preferred date and customize your itinerary with your guide before your trip",
  },
  {
    icon: Heart,
    title: "Enjoy Your Adventure",
    description: "Meet your guide and discover hidden gems, local favorites, and unforgettable experiences",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-how-it-works-title">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your personal guide in three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center" data-testid={`step-${index}`}>
              <div className="mb-6 relative">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <step.icon className="h-10 w-10" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-full w-full h-0.5 bg-border hidden md:block last:hidden" />
              </div>
              <h3 className="text-2xl font-semibold mb-3" data-testid={`text-step-title-${index}`}>
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
