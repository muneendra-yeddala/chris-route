import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import HowItWorks from "@/components/HowItWorks";
import FeaturedServices from "@/components/FeaturedServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import PartnerLogos from "@/components/PartnerLogos";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServiceCategories />
        <HowItWorks />
        <FeaturedServices />
        <WhyChooseUs />
        <PartnerLogos />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
