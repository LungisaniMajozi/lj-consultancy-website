import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection({ heroImage }) {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Futuristic skyscraper reflecting golden sunset"
          className="w-full h-full object-cover scale-110"
          style={{ transform: "translateZ(0)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070A]/80 via-[#05070A]/60 to-[#05070A]" />
      </div>

      {/* Giant "J" Monolith */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[40vw] sm:text-[30vw] font-display font-bold text-white/[0.02] leading-none">
          J
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 glass rounded-full text-xs sm:text-sm tracking-[0.3em] uppercase text-gold font-medium">
            Immigration & Visa Consulting
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight"
        >
          <span className="block">J CONSULTANCY</span>
          <span className="block text-gold mt-2">SERVICES</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-6 sm:mt-8 text-silver/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
        >
          Your Trusted Partner for South African Immigration and Visa Solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="px-8 py-3.5 bg-gold text-[#05070A] font-semibold rounded tracking-wider text-sm hover:bg-[#d4af6a] transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A059]/20"
          >
            EXPLORE SERVICES
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 glass text-silver font-medium rounded tracking-wider text-sm hover:bg-white/10 transition-all duration-300"
          >
            GET IN TOUCH
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() =>
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-xs text-silver/40 tracking-[0.2em] uppercase">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
