import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactSection({ contactImage }) {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={contactImage}
          alt="Johannesburg skyline"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-[#05070A]/95 to-[#05070A]" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="text-cobalt text-sm tracking-[0.3em] uppercase font-medium">
            Start Today
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-6xl text-gold mt-4 mb-6 tracking-tight">
            START YOUR
            <br />
            IMMIGRATION JOURNEY
          </h2>
          <p className="text-silver/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Get expert guidance on your visa and immigration needs. Contact J
            Consultancy Services today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-6 sm:p-8 text-center group hover:border-[#C5A059]/30 transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C5A059]/20 transition-colors">
              <Phone className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-semibold text-silver text-sm mb-2">
              Telephone
            </h3>
            <div className="flex flex-col gap-1">
              <a
                href="tel:0721005848"
                className="text-silver/60 text-sm hover:text-gold transition-colors duration-300 block"
              >
                072 100 5848
              </a>
              <a
                href="tel:0744540730"
                className="text-silver/60 text-sm hover:text-gold transition-colors duration-300 block"
              >
                074 454 0730
              </a>
            </div>
            <ArrowUpRight className="w-4 h-4 text-gold/0 group-hover:text-gold/60 transition-all duration-300 mx-auto mt-3" />
          </motion.div>

          {/* Email */}
          <motion.a
            href="mailto:ljmconsultancyservice@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6 sm:p-8 text-center group hover:border-[#C5A059]/30 transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C5A059]/20 transition-colors">
              <Mail className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-semibold text-silver text-sm mb-2">Email</h3>
            <p className="text-silver/60 text-xs sm:text-sm break-all group-hover:text-gold transition-colors duration-300">
              ljmconsultancyservice@gmail.com
            </p>
            <ArrowUpRight className="w-4 h-4 text-gold/0 group-hover:text-gold/60 transition-all duration-300 mx-auto mt-3" />
          </motion.a>

          {/* Address */}
          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=31+North+Road,+Old+Pretoria+Road,+Halfway+House,+Midrand,+Johannesburg,+1685"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-6 sm:p-8 text-center group hover:border-[#C5A059]/30 transition-all duration-500 md:col-span-2 lg:col-span-1 hover:scale-[1.02] block"
          >
            <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C5A059]/20 transition-colors">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-semibold text-silver text-sm mb-2">Address</h3>
            <p className="text-silver/60 text-xs sm:text-sm leading-relaxed group-hover:text-gold transition-colors duration-300">
              31 North Road, Old Pretoria Road
              <br />
              Halfway House, Midrand
              <br />
              Johannesburg, 1685
            </p>
            <ArrowUpRight className="w-4 h-4 text-gold/0 group-hover:text-gold/60 transition-all duration-300 mx-auto mt-3" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
