import { Card, CardContent } from "@/components/ui/card";
import { Car, Users, Package } from "lucide-react";

const categories = [
  {
    icon: Car,
    title: "Private Cars",
    description: "Luxury vehicles with professional drivers for business travel",
    color: "text-chart-1",
  },
  {
    icon: Users,
    title: "Tour Guides",
    description: "Expert guides with deep cultural knowledge and language skills",
    color: "text-chart-2",
  },
  {
    icon: Package,
    title: "Custom Packages",
    description: "Tailored travel solutions for corporate groups and events",
    color: "text-chart-3",
  },
];

export default function ServiceCategories() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-categories-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium travel solutions tailored for businesses and professionals
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
