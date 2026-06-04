import React from "react";
import { motion } from "framer-motion";
import { MapPin, Building2, Users, Globe } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15 },
  }),
};

export default function AboutSection({ aboutImage }) {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={aboutImage}
          alt="Modern boardroom interior"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070A] via-[#05070A]/95 to-[#05070A]" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="text-cobalt text-sm tracking-[0.3em] uppercase font-medium">
            Who We Are
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-gold mb-6 tracking-tight"
        >
          COMPANY OVERVIEW
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <p className="text-silver/80 text-base sm:text-lg leading-relaxed">
              J Consultancy Services is a South African immigration and visa
              consulting company based in Midrand, Johannesburg. The company
              assists individuals, families, students, skilled professionals,
              entrepreneurs, investors, and corporate clients with navigating
              South Africa's immigration framework.
            </p>
            <p className="text-silver/80 text-base sm:text-lg leading-relaxed mt-6">
              Our services are designed to simplify complex immigration
              procedures, reduce administrative burdens, and improve application
              readiness.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=31+North+Road,+Old+Pretoria+Road,+Halfway+House,+Midrand,+Johannesburg,+1685"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-start gap-3 text-silver/60 hover:text-gold transition-colors duration-300"
            >
              <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
              <span className="text-sm leading-relaxed">
                31 North Road, Old Pretoria Road, Halfway House, Midrand,
                Johannesburg, 1685
              </span>
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="space-y-6"
          >
            <h3 className="font-display font-bold text-lg sm:text-xl text-gold tracking-tight">
              INDUSTRY BACKGROUND
            </h3>
            <p className="text-silver/70 text-base leading-relaxed">
              South Africa remains one of Africa's most significant economic
              hubs, attracting skilled professionals, international students,
              investors, entrepreneurs, and tourists. Immigration processes
              require careful preparation, regulatory compliance, and detailed
              documentation.
            </p>
            <p className="text-silver/70 text-base leading-relaxed">
              J Consultancy Services bridges the gap between applicants and
              regulatory requirements by providing structured guidance and
              administrative support.
            </p>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { icon: Building2, label: "Based in", value: "Midrand, JHB" },
            {
              icon: Users,
              label: "Serving",
              value: "Individuals & Corporates",
            },
            { icon: Globe, label: "Focus", value: "SA Immigration" },
            { icon: MapPin, label: "Coverage", value: "Southern Africa" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass rounded-xl p-5 sm:p-6 text-center group hover:border-[#C5A059]/30 transition-all duration-500"
            >
              <stat.icon className="w-6 h-6 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform duration-500" />
              <p className="text-silver font-semibold text-sm sm:text-base">
                {stat.value}
              </p>
              <p className="text-silver/40 text-xs mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
