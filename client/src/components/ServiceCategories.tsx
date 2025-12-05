import { Card, CardContent } from "@/components/ui/card";
import { Users, Camera, Compass } from "lucide-react";

const categories = [
  {
    icon: Users,
    title: "Personal Guides",
    description: "One-on-one local experts who customize your experience to your interests and pace",
    color: "text-chart-1",
  },
  {
    icon: Compass,
    title: "Tour Conductors",
    description: "Professional tour leaders for small groups exploring iconic destinations together",
    color: "text-chart-2",
  },
  {
    icon: Camera,
    title: "Photo Tours",
    description: "Capture your memories with guides who know the best spots and perfect timing",
    color: "text-chart-3",
  },
];

export default function ServiceCategories() {
  return (
    <section id="services" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-categories-title">
            How Would You Like to Explore?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect guide experience for your journey through Japan's Kanto region
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="hover-elevate active-elevate-2 cursor-pointer transition-all"
              data-testid={`card-category-${index}`}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <category.icon className={`h-16 w-16 mx-auto ${category.color}`} />
                </div>
                <h3 className="text-2xl font-semibold mb-3" data-testid={`text-category-title-${index}`}>
                  {category.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
