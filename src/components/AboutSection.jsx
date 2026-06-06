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

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mt-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <p className="text-silver/80 text-base sm:text-lg leading-relaxed">
                LJ Consultancy is a South African immigration and visa
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
              className="space-y-4 pt-4 border-t border-white/5"
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
                LJ Consultancy bridges the gap between applicants and
                regulatory requirements by providing structured guidance and
                administrative support.
              </p>
            </motion.div>
          </div>

          {/* Visual Showcase Asymmetric Grid */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-2xl overflow-hidden border border-white/10 group hover:border-[#C5A059]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#C5A059]/5"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/images/owner.jpeg"
                  alt="Founder of LJ Consultancy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] sm:text-xs font-semibold text-gold tracking-widest uppercase">FOUNDER & LEAD CONSULTANT</span>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-wide mt-1">LJ Consultancy Executive</h4>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass rounded-xl overflow-hidden border border-white/10 group hover:border-[#2D5BFF]/30 transition-all duration-500"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <img
                    src="/images/person.jpeg"
                    alt="Consultant Team Member"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <p className="text-xs font-semibold text-white">Immigration Team</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass rounded-xl overflow-hidden border border-white/10 group hover:border-[#2D5BFF]/30 transition-all duration-500"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <img
                    src="/images/person2.jpeg"
                    alt="Immigration Associate"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <p className="text-xs font-semibold text-white">Consulting Partner</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-xl overflow-hidden border border-white/10 p-4 flex items-center gap-4 group hover:border-[#C5A059]/30 transition-all duration-500"
            >
              <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0">
                <img
                  src="/images/freinnds.jpeg"
                  alt="LJ Consultancy Team and Clients"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <p className="text-silver/80 text-xs sm:text-sm font-medium">Professional Client Network</p>
                <p className="text-silver/40 text-[10px] sm:text-xs uppercase tracking-wider mt-0.5">Reliable & Dedicated Service</p>
              </div>
            </motion.div>
          </div>
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
