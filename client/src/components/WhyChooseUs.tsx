import { Shield, Globe, Award, Clock } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "All drivers and guides are thoroughly vetted, licensed, and insured for your safety and peace of mind.",
  },
  {
    icon: Globe,
    title: "Nationwide Coverage",
    description: "From Tokyo to Osaka, Kyoto to Hokkaido - we cover all major Japanese cities and tourist destinations.",
  },
  {
    icon: Award,
    title: "Cultural Expertise",
    description: "Deep local knowledge and multilingual support ensure authentic, enriching travel experiences.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service for bookings, changes, and emergency assistance during your trip.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-why-choose-us-title">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading corporations for reliable, premium travel services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex gap-6 p-6 rounded-xl bg-card hover-elevate transition-all"
              data-testid={`benefit-${index}`}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-benefit-title-${index}`}>
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
