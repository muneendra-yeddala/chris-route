import { Star } from "lucide-react";

export default function PartnerLogos() {
  return (
    <section className="py-16 px-8 bg-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-2xl font-semibold mb-2" data-testid="text-rating">
          4.9 out of 5 stars
        </p>
        <p className="text-muted-foreground" data-testid="text-reviews-count">
          Based on 500+ traveler reviews
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <span>Featured on TripAdvisor</span>
          <span>Viator Partner</span>
          <span>Japan Tourism Agency Certified</span>
        </div>
      </div>
    </section>
  );
}
