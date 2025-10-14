import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Car } from "lucide-react";
import heroImage from "@assets/stock_images/mount_fuji_with_cher_68b5c08c.jpg";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" data-testid="text-hero-title">
          Premium Travel Services in Japan
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
          Book private cars and expert tour guides for your business travel across Japan
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-destructive text-destructive-foreground hover-elevate active-elevate-2 border border-destructive-border"
            data-testid="button-start-booking"
          >
            Start Booking
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20"
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
        </div>

        <div className="bg-white/95 dark:bg-card/95 backdrop-blur-md rounded-xl p-6 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Location in Japan" 
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                data-testid="input-location"
              />
            </div>
            <div className="flex items-center gap-3 border-l-0 md:border-l border-border pl-0 md:pl-4">
              <Car className="h-5 w-5 text-muted-foreground" />
              <select 
                className="flex-1 bg-transparent border-none outline-none text-foreground"
                data-testid="select-service-type"
              >
                <option>Private Car</option>
                <option>Tour Guide</option>
                <option>Custom Package</option>
              </select>
            </div>
            <div className="flex items-center gap-3 border-l-0 md:border-l border-border pl-0 md:pl-4">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <input 
                type="date" 
                className="flex-1 bg-transparent border-none outline-none text-foreground"
                data-testid="input-date"
              />
            </div>
          </div>
          <Button 
            className="w-full mt-4 bg-primary text-primary-foreground hover-elevate active-elevate-2"
            data-testid="button-search"
          >
            Search Services
          </Button>
        </div>
      </div>
    </section>
  );
}
