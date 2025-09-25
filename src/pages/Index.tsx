import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import DestinationCarousel from "@/components/DestinationCarousel";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <div id="destinos">
        <DestinationCarousel />
      </div>
      <div id="servicos">
        <ServicesSection />
      </div>
      <div id="sobre">
        <AboutSection />
      </div>
      <div id="contato">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
