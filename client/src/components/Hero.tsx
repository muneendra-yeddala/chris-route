import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import heroImageDesktop from "@assets/stock_images/home_banner.jpeg";
import heroImageMobile from "@assets/stock_images/home_banner_mobile.jpeg";

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] min-h-[400px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* MOBILE IMAGE (Below 768px) */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden"
            style={{ 
              backgroundImage: `url(${heroImageMobile})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: "center",
              backgroundColor: "#1a1a1a"
            }}
          />

          {/* DESKTOP IMAGE (768px and Above) */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center hidden md:block"
            style={{ 
              backgroundImage: `url(${heroImageDesktop})`,
              backgroundRepeat: 'no-repeat'
            }}
          />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" /> */}
      
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
      </div>
    </section>
  );
}
