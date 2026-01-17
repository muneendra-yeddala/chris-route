import { useParams, useLocation } from "wouter";
import { tours } from "../lib/tours";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, CheckCircle2 } from "lucide-react";

export default function TourDetails() {
  const { slug } = useParams();
  const [, setLocation] = useLocation();

  // Find the specific tour data based on the URL slug
  const tour = tours.find((t) => t.slug === slug);

  // If the slug doesn't exist, show an error or redirect
  if (!tour) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Tour not found</h1>
        <Button onClick={() => setLocation("/")} className="mt-4">Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Image Section */}
      <div className="relative h-[400px] w-full">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 left-8 text-white">
          <Button variant="secondary" onClick={() => setLocation("/")} className="mb-4">
            ← Back
          </Button>
          <h1 className="text-5xl font-bold">{tour.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">About this Experience</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {tour.description}
          </p>

          <h3 className="text-xl font-semibold mb-4">Tour Highlights</h3>
          <ul className="space-y-3">
            {tour.highlights.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar Info */}
        <div className="bg-card border rounded-xl p-6 h-fit sticky top-8">
          <div className="text-2xl font-bold mb-6">{tour.priceRange}</div>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5" /> <span>{tour.location}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Users className="h-5 w-5" /> <span>{tour.capacity}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Clock className="h-5 w-5" /> <span>{tour.duration}</span>
            </div>
          </div>
          {/* <Button className="w-full size-lg">Inquire Now</Button> */}
        </div>
      </div>
    </div>
  );
}