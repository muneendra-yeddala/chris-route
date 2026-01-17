import ServiceCard from "./ServiceCard";
import guideImage from "@assets/stock_images/professional_japanes_6dfa3a6f.jpg";
import kyotoImage from "@assets/stock_images/traditional_kyoto_te_7ab57085.jpg";
import tokyoImage from "@assets/stock_images/tokyo_cityscape_skyl_8baf1edb.jpg";
import yokohamaImage from "@assets/stock_images/yokohama-photo-7948633.jpg";
import kamakuraImage  from "@assets/stock_images/kamakura.jpg";
import hakone  from "@assets/stock_images/free-photo-of-hakone-shrine-in-japan.jpg";
import { tours } from "../lib/tours";

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
         {tours.map((tour) => (
            <ServiceCard key={tour.slug} {...tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
