import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import VisionSection from "../components/VisionSection";
import AdvantagesSection from "../components/AdvantagesSection";
import ObjectivesSection from "../components/ObjectivesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const IMAGES = {
  hero: "/images/visa.jpeg",
  services: "/images/visa_application_form.jpeg",
  about: "/images/customers.jpeg",
  contact: "/images/vis_help.jpeg",
  vision: "/images/vis_help.jpeg",
  network: "/images/freinnds.jpeg",
};

export default function Home() {
  return (
    <div className="bg-obsidian min-h-screen">
      <Navbar />
      <HeroSection heroImage={IMAGES.hero} />
      <AboutSection aboutImage={IMAGES.about} />
      <ServicesSection servicesImage={IMAGES.services} />
      <VisionSection visionImage={IMAGES.vision} />
      <AdvantagesSection networkImage={IMAGES.network} />
      <ObjectivesSection />
      <ContactSection contactImage={IMAGES.contact} />
      <Footer />
    </div>
  );
}
