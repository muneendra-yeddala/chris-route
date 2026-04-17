// Import your images here
import yokohamaImage from "@assets/stock_images/yokohama-photo-7948633.jpg";
import kamakuraImage from "@assets/stock_images/kamakura.jpg";
import hakoneImage from "@assets/stock_images/free-photo-of-hakone-shrine-in-japan.jpg";
import tokyoImage from "@assets/stock_images/tokyo-biccamera.jpeg";

export interface Tour {
  slug: string;
  image: string;
  title: string;
  location: string;
  priceRange: string;
  capacity: string;
  duration: string;
  description: string; // Add a long description
  highlights: string[]; // Add specific things they will see
}

export const tours: Tour[] = [
  {
    slug: "yokohama-bay-tour",
    image: yokohamaImage,
    title: "Yokohama Shore Excursions",
    location: "Yokohama",
    priceRange: "¥19,800 - ¥24,200",
    capacity: "1-5 guests",
    duration: "Half day",
    description: "Discover the vibrant port city of Yokohama, just a short train ride from Tokyo. Experience stunning bay views while indulging in delicious street food in the lively Chinatown. For thrill-seekers, an exhilarating ride on Vanish! - The diving roller coaster at CosmoWorld awaits. This personalized tour, led by a local English-speaking guide, allows for itinerary adjustments to fit your preferences, ensuring a unique and tailored experience.",
    highlights: ["Explore Yokohama's picturesque bayside area and stunning views"
      , "Savor diverse street delicacies in the bustling Chinatown"
      , " Experience thrills at CosmoWorld with the Vanish. roller coaster",
      "Enjoy a flexible itinerary with a knowledgeable local guide"
    ]
  },
   {
    slug: "tokyo-day-trip",
    image: tokyoImage,
    title: "Tokyo Tour from Yokohama Port",
    location: "Tokyo",
    priceRange: "¥27,500 - ¥33,000",
    capacity: "1-5 guests",
    duration: "Full day",
    description: "Famous for hot springs and views of Mt. Fuji, Hakone is a must-visit mountain resort area.",
    highlights: ["Lake Ashi Cruise", "Owakudani Volcanic Valley", "Hakone Shrine"]
  },
  {
    slug: "kamakura-enoshima",
    image: kamakuraImage,
    title: "Kamakura Tour from Yokohama",
    location: "Kamakura",
    priceRange: "¥24,200 - ¥27,500",
    capacity: "1-5 guests",
    duration: "Full day",
    description: "Step back in time in the 'Kyoto of Eastern Japan'. Visit the Great Buddha and explore the scenic island of Enoshima.",
    highlights: ["Kotoku-in (Great Buddha)", "Hasedera Temple", "Enoshima Island"]
  }
 
];