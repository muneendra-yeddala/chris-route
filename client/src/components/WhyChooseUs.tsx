import { Heart, Globe, Star, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Local Experts",
    description: "Our guides are passionate locals who share authentic stories, hidden spots, and insider tips you won't find in guidebooks.",
  },
  {
    icon: Globe,
    title: "Multilingual Guides",
    description: "Fluent in English and Japanese, our guides bridge the language gap so you can fully immerse in Japanese culture.",
  },
  {
    icon: Star,
    title: "Personalized Experiences",
    description: "Every tour is tailored to your interests - whether it's food, history, anime, photography, or off-the-beaten-path adventures.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description: "Chat directly with your guide before your trip to plan the perfect itinerary and get local recommendations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-why-choose-us-title">
            Why Travel With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience Japan like a local with guides who truly care about your journey
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
