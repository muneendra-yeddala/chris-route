import ServiceCard from "./ServiceCard";
import carImage from "@assets/stock_images/luxury_black_car_tok_b4adb192.jpg";
import guideImage from "@assets/stock_images/professional_japanes_6dfa3a6f.jpg";
import kyotoImage from "@assets/stock_images/traditional_kyoto_te_7ab57085.jpg";

//todo: remove mock functionality
const services = [
  {
    image: carImage,
    title: "Executive Car - Tokyo",
    location: "Tokyo",
    priceRange: "¥30,000 - ¥50,000",
    capacity: "1-3 passengers",
    duration: "Full day",
    featured: true,
    verified: true,
  },
  {
    image: guideImage,
    title: "Cultural Tour Guide",
    location: "Kyoto",
    priceRange: "¥20,000 - ¥35,000",
    duration: "Half/Full day",
    verified: true,
  },
  {
    image: kyotoImage,
    title: "Heritage Package",
    location: "Kyoto & Nara",
    priceRange: "¥45,000 - ¥75,000",
    capacity: "Up to 6 people",
    duration: "2 days",
    featured: true,
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-featured-title">
            Featured Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-picked premium services for discerning business travelers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
