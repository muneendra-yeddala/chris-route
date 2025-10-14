import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Clock } from "lucide-react";

interface ServiceCardProps {
  image: string;
  title: string;
  location: string;
  priceRange: string;
  capacity?: string;
  duration?: string;
  featured?: boolean;
  verified?: boolean;
}

export default function ServiceCard({
  image,
  title,
  location,
  priceRange,
  capacity,
  duration,
  featured,
  verified,
}: ServiceCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-shadow" data-testid={`card-service-${title}`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {featured && (
            <Badge className="bg-destructive text-destructive-foreground" data-testid="badge-featured">
              Featured
            </Badge>
          )}
          {verified && (
            <Badge className="bg-primary text-primary-foreground" data-testid="badge-verified">
              Verified
            </Badge>
          )}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2" data-testid="text-service-title">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          <span className="text-sm" data-testid="text-location">{location}</span>
        </div>
        
        <div className="flex gap-4 mb-4">
          {capacity && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span data-testid="text-capacity">{capacity}</span>
            </div>
          )}
          {duration && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span data-testid="text-duration">{duration}</span>
            </div>
          )}
        </div>
        
        <div className="text-2xl font-bold" data-testid="text-price">
          {priceRange}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button className="w-full" variant="outline" data-testid="button-view-details">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
