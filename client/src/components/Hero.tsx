import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
// import heroImageDesktop from "@assets/stock_images/home_banner.jpeg";
//import heroImageMobile from "@assets/stock_images/home_banner_mobile.jpeg";
import heroImageDesktop from "@assets/stock_images/P1000727.jpg";
import heroImageMobile from "@assets/stock_images/P1000727-mobile.jpg";


export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] min-h-[400px] md:min-h-[600px] flex items-start justify-center overflow-hidden">
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
      
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center pt-4 md:pt-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2" data-testid="text-hero-title">
         Yokohama Shore Excursions
        </h1>
       <p className="text-lg min-[400px]:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-md whitespace-nowrap">
        Private Tours from Yokohama Cruise Port
      </p>
      </div>

      {/* <div className="relative z-10 max-w-5xl mx-auto px-8 text-center pt-16 md:pt-24">
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-lg">
          Discover Yokohama, Kamakura, & Hakone with a local expert by your side
        </p>
      </div> */}
      

      
    </section>
  );
}
