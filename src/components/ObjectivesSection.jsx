import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Handshake, Monitor, Building2, Award } from "lucide-react";

const OBJECTIVES = [
  { icon: TrendingUp, text: "Expand service coverage across South Africa." },
  {
    icon: Handshake,
    text: "Build strategic partnerships with legal, education, and business organizations.",
  },
  { icon: Monitor, text: "Develop digital consultation capabilities." },
  { icon: Building2, text: "Increase corporate immigration clientele." },
  {
    icon: Award,
    text: "Become a recognized immigration support brand within Gauteng and nationally.",
  },
];

export default function ObjectivesSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f18] via-[#05070A] to-[#0a0f18]" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-cobalt text-sm tracking-[0.3em] uppercase font-medium"
        >
          Forward Thinking
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-gold mt-4 mb-6 tracking-tight"
        >
          BUSINESS OBJECTIVES
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-silver/50 text-lg mb-12"
        >
          2026 — 2030
        </motion.p>

        <div className="space-y-4">
          {OBJECTIVES.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-xl p-5 sm:p-6 flex items-start gap-4 group hover:border-[#C5A059]/30 transition-all duration-500 max-w-3xl"
            >
              <div className="w-10 h-10 rounded-lg bg-[#2D5BFF]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C5A059]/10 transition-colors duration-500">
                <obj.icon className="w-5 h-5 text-cobalt group-hover:text-gold transition-colors duration-500" />
              </div>
              <p className="text-silver/80 text-sm sm:text-base leading-relaxed">
                {obj.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
