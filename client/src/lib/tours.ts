// Import your images here
import yokohamaImage from "@assets/stock_images/yokohama-photo-7948633.jpg";
import kamakuraImage from "@assets/stock_images/kamakura.jpg";
import hakoneImage from "@assets/stock_images/free-photo-of-hakone-shrine-in-japan.jpg";

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
    title: "Yokohama Bay Tour",
    location: "Yokohama",
    priceRange: "¥19,800 - ¥24,200",
    capacity: "1-5 guests",
    duration: "Half day",
    description: "Experience the futuristic Minato Mirai skyline and the historic Red Brick Warehouse. This tour takes you through the best of Japan's largest port city.",
    highlights: ["Sankeien Garden", "Cup Noodle Museum", "Gundam Factory"]
  },
  {
    slug: "kamakura-enoshima",
    image: kamakuraImage,
    title: "Kamakura & Enoshima",
    location: "Kamakura",
    priceRange: "¥24,200 - ¥27,500",
    capacity: "1-5 guests",
    duration: "Full day",
    description: "Step back in time in the 'Kyoto of Eastern Japan'. Visit the Great Buddha and explore the scenic island of Enoshima.",
    highlights: ["Kotoku-in (Great Buddha)", "Hasedera Temple", "Enoshima Island"]
  },
  {
    slug: "hakone-day-trip",
    image: hakoneImage,
    title: "Hakone Day Trip",
    location: "Hakone",
    priceRange: "¥27,500 - ¥33,000",
    capacity: "1-5 guests",
    duration: "Full day",
    description: "Famous for hot springs and views of Mt. Fuji, Hakone is a must-visit mountain resort area.",
    highlights: ["Lake Ashi Cruise", "Owakudani Volcanic Valley", "Hakone Shrine"]
  }
];