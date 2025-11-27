import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import testimonial1 from "@assets/stock_images/businessman_professi_bba68d93.jpg";
import testimonial2 from "@assets/stock_images/businessman_professi_66e8c5fb.jpg";

//todo: remove mock functionality
const testimonials = [
  {
    name: "Michael Thompson",
    location: "California, USA",
    image: testimonial1,
    content: "Our guide Yuki made our Tokyo trip absolutely magical! She took us to hidden ramen spots, explained the local customs, and even helped us navigate the train system. Worth every yen!",
    rating: 5,
  },
  {
    name: "Emma Richardson",
    location: "London, UK",
    image: testimonial2,
    content: "The Kamakura day trip exceeded all expectations. Our guide knew the best times to avoid crowds at the temples and shared fascinating stories about the history. A must-do experience!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-testimonials-title">
            What Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from travelers who explored Japan with our guides
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} data-testid={`testimonial-${index}`}>
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-lg mb-6 leading-relaxed" data-testid={`text-testimonial-content-${index}`}>
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold" data-testid={`text-testimonial-name-${index}`}>
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-location-${index}`}>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
