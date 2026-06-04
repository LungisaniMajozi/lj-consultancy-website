import React from "react";
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
  hero: "https://media.base44.com/images/public/6a21c592e18dd4ed3ad7506b/4354fbcb0_generated_4c02d8aa.png",
  services:
    "https://media.base44.com/images/public/6a21c592e18dd4ed3ad7506b/55e547ffe_generated_ca303ea0.png",
  about:
    "https://media.base44.com/images/public/6a21c592e18dd4ed3ad7506b/da0368f5c_generated_63c8ade2.png",
  contact:
    "https://media.base44.com/images/public/6a21c592e18dd4ed3ad7506b/4789b676b_generated_22496113.png",
  vision:
    "https://media.base44.com/images/public/6a21c592e18dd4ed3ad7506b/94f4b0fb0_generated_b2c2cd7e.png",
  network:
    "https://media.base44.com/images/public/6a21c592e18dd4ed3ad7506b/19a4bf5fb_generated_947d31cd.png",
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
