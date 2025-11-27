import { Button } from "@/components/ui/button";
import tokyoImage from "@assets/stock_images/tokyo_cityscape_skyl_8baf1edb.jpg";

export default function CTASection() {
  return (
    <section className="relative py-32 px-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${tokyoImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" data-testid="text-cta-title">
          Ready for Your Adventure?
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Connect with a local guide and experience the Kanto region like never before
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-destructive text-destructive-foreground hover-elevate active-elevate-2 border border-destructive-border text-lg px-8"
            data-testid="button-find-guide"
          >
            Find a Guide
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8"
            data-testid="button-view-tours"
          >
            View All Tours
          </Button>
        </div>
      </div>
    </section>
  );
}
