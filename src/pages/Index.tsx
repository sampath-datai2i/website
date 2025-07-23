import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import NewsCarousel from "@/components/NewsCarousel";
import TrustedBySection from "@/components/TrustedBySection";
import AIFeaturesSection from "@/components/AIFeaturesSection";
import PartnerSection from "@/components/PartnerSection";
import ServicesGrid from "@/components/ServicesGrid";
import IndustriesSection from "@/components/IndustriesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <NewsCarousel />
      <TrustedBySection />
      <AIFeaturesSection />
      <PartnerSection />
      <ServicesGrid />
      <IndustriesSection />
      <Footer />
    </div>
  );
};

export default Index;
