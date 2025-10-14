# Design Guidelines: Japan Travel B2B Booking Platform

## Design Approach: Reference-Based (Travel/Hospitality Focus)
Drawing inspiration from **Airbnb** (service listings, booking experience) and **Booking.com** (search/filtering patterns), enhanced with authentic Japanese aesthetic principles—minimalism, subtle cultural elements, and serene sophistication.

**Core Principle**: Balance Western B2B functionality with Japanese aesthetic sensibility (ma - negative space, wabi-sabi - understated elegance).

---

## Color Palette

### Light Mode
- **Primary**: 12 25% 15% (Deep charcoal - professional, grounded)
- **Secondary**: 350 85% 45% (Crimson red - Japanese heritage, accent only)
- **Background**: 0 0% 98% (Soft white - clean, spacious)
- **Surface**: 0 0% 100% (Pure white cards)
- **Border**: 220 15% 88% (Subtle gray borders)

### Dark Mode
- **Primary**: 40 5% 95% (Warm off-white text)
- **Secondary**: 350 75% 55% (Lighter crimson)
- **Background**: 220 15% 8% (Deep navy-black)
- **Surface**: 220 12% 12% (Elevated dark cards)
- **Border**: 220 10% 20% (Subtle dark borders)

**Strategic Color Use**: Crimson red used sparingly for CTAs and cultural accents only. Avoid overwhelming color—embrace Japanese minimalism with neutral dominance.

---

## Typography

**Font Families** (via Google Fonts CDN):
- **Primary**: 'Inter' - Clean, professional, B2B-appropriate
- **Accent**: 'Noto Sans JP' - Japanese authenticity, bilingual support

**Scale & Hierarchy**:
- Hero Headlines: text-5xl to text-7xl, font-bold
- Section Titles: text-3xl to text-4xl, font-semibold
- Service Cards: text-xl font-medium (titles), text-base (descriptions)
- Body Text: text-base to text-lg, leading-relaxed
- Captions: text-sm, text-gray-600 dark:text-gray-400

---

## Layout System

**Spacing Primitives**: Use Tailwind units of **2, 4, 8, 12, 16, 20, 24** for consistent rhythm
- Tight spacing: p-2, gap-4 (within components)
- Standard spacing: p-8, gap-8 (between elements)
- Section spacing: py-20 to py-32 (desktop), py-12 to py-16 (mobile)

**Grid Patterns**:
- Service Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Feature Highlights: grid-cols-1 lg:grid-cols-2 (text + visual pairs)
- Booking Flow: Single column max-w-3xl centered for clarity

**Container Strategy**:
- Full-width sections with max-w-7xl inner containers
- Service listings: max-w-6xl
- Booking forms: max-w-2xl centered

---

## Component Library

### Navigation
- Sticky header with blur backdrop (backdrop-blur-lg bg-white/80)
- Logo left, primary nav center, language toggle + CTA right
- Mobile: Slide-out drawer with traditional Japanese sliding animation

### Hero Section
- Full-viewport immersive hero (80vh) with high-quality Japan imagery
- Overlay gradient (from-black/60 to-transparent) for text legibility
- Centered headline + subheadline + dual CTA (primary + outline with backdrop-blur-md)
- Search bar integration: location + service type + dates (similar to Booking.com pattern)

### Service Cards
- Elevated cards with subtle shadow (shadow-md hover:shadow-xl transition)
- Image aspect ratio: 4:3 with rounded-xl overflow-hidden
- Overlay badges for "Featured" or "Verified Guide"
- Card content: Service name, location tag, price range, quick stats (capacity, duration)
- Call-to-action: "View Details" button (subtle, not aggressive)

### Booking Interface
- Multi-step wizard with progress indicator (Japanese minimalist style - simple dots or lines)
- Date picker with availability calendar (green = available, gray = unavailable)
- Service customization options in accordion panels
- Summary sidebar (sticky on desktop) showing selection and total price
- Final confirmation with clear itemized breakdown

### Trust Elements
- Partner logos carousel (major companies using the service)
- Verified guide/driver badges (Japanese certification symbols)
- Review section with star ratings and authentic testimonials
- Security badges for payment processing

### Footer
- Comprehensive footer with 4 columns: Services, Company, Support, Legal
- Newsletter signup with cultural imagery background
- Social links with Japanese market focus (LINE, regional platforms)
- Multi-language selector prominent
- Trust badges and payment icons

---

## Cultural & Visual Elements

**Japanese Aesthetic Integration**:
- Subtle sakura (cherry blossom) patterns as background SVG textures on hero/CTA sections (opacity 0.05)
- Mount Fuji silhouette in footer or hero background (tasteful, not cliché)
- Traditional color accents: Indigo, sumi-e ink blacks, washi paper textures on cards
- Ma (negative space): Generous padding, uncluttered layouts, breathing room between sections

**Iconography**:
- Use Heroicons via CDN for UI elements
- Custom icons for Japanese services: <!-- CUSTOM ICON: torii gate, bullet train, traditional guide -->

---

## Page Sections

### Landing Page Structure (6-8 sections):
1. **Hero**: Immersive Japan imagery + search functionality
2. **Service Categories**: 3-column grid (Private Cars, Tour Guides, Custom Packages)
3. **How It Works**: 3-step B2B booking process with illustrations
4. **Featured Services**: Curated highlight carousel with premium offerings
5. **Why Choose Us**: 2-column benefits (reliability, coverage, cultural expertise)
6. **Partner Logos**: Social proof from corporate clients
7. **Testimonials**: 2-column authentic client stories with photos
8. **CTA Section**: Strong booking invitation with visual Japan backdrop

### Service Listing Pages:
- Filter sidebar (left): Location, Service Type, Date, Price Range, Vehicle Type
- Results grid (right): 2-3 column responsive cards with infinite scroll
- Map toggle view (alternative layout): Split screen with interactive Japan map

### Booking Flow:
- Clean, focused single-column design
- Progress breadcrumb at top
- Each step in dedicated viewport section (no cramming)
- Mobile-optimized with clear next/previous navigation

---

## Images

**Hero Section**: Large, professional photography of iconic Japan scenes
- Priority: Tokyo skyline at dusk, Mount Fuji with cherry blossoms, traditional Kyoto streets, bullet train
- Treatment: Subtle overlay gradient, sharp focus, vibrant but not oversaturated

**Service Cards**: High-quality images of actual vehicles and guides
- Vehicles: Clean, professional shots in Japanese settings
- Guides: Authentic portraits, professional attire, welcoming expressions

**Feature Sections**: Lifestyle imagery showing service experience
- Happy clients in vehicles, guides explaining cultural sites, scenic routes

**Cultural Accents**: Subtle background imagery
- Washi paper textures, minimal geometric patterns inspired by Japanese design

---

## Accessibility & Responsiveness

- Dark mode toggle persistent across all pages (both forms and content)
- WCAG AA contrast ratios maintained in both modes
- Form inputs styled consistently with dark mode (bg-gray-800 dark mode, proper focus states)
- Touch targets minimum 44x44px for mobile booking actions
- Bilingual support without layout breaking (adequate character spacing for Japanese)

**Viewport Breakpoints**:
- Mobile: Single column, stacked navigation, simplified filters
- Tablet: 2-column grids, collapsible sidebar
- Desktop: Full 3-column grids, persistent filter sidebar, enhanced interactions