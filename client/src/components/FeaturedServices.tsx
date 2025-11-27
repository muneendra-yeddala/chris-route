import ServiceCard from "./ServiceCard";
import guideImage from "@assets/stock_images/professional_japanes_6dfa3a6f.jpg";
import kyotoImage from "@assets/stock_images/traditional_kyoto_te_7ab57085.jpg";
import tokyoImage from "@assets/stock_images/tokyo_cityscape_skyl_8baf1edb.jpg";

//todo: remove mock functionality
const services = [
  {
    image: tokyoImage,
    title: "Tokyo Discovery Tour",
    location: "Tokyo",
    priceRange: "¥15,000 - ¥25,000",
    capacity: "1-4 guests",
    duration: "Full day",
    featured: true,
    verified: true,
  },
  {
    image: guideImage,
    title: "Kamakura & Enoshima",
    location: "Kamakura",
    priceRange: "¥12,000 - ¥20,000",
    duration: "6-8 hours",
    verified: true,
  },
  {
    image: kyotoImage,
    title: "Nikko Temples & Nature",
    location: "Nikko",
    priceRange: "¥18,000 - ¥30,000",
    capacity: "1-6 guests",
    duration: "Full day",
    featured: true,
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-featured-title">
            Popular Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most loved tours and guide experiences in the Kanto region
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
