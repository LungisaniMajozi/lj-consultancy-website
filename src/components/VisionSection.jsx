import { motion } from "framer-motion";
import { Eye, Target, Gem } from "lucide-react";

const ITEMS = [
  {
    num: "01",
    icon: Eye,
    title: "VISION",
    text: "To become a leading immigration consultancy in Southern Africa recognized for professionalism, reliability, compliance excellence, and customer-centered service.",
  },
  {
    num: "02",
    icon: Target,
    title: "MISSION",
    text: "To provide professional immigration advisory services that help clients achieve their travel, study, work, investment, family reunification, and permanent residency goals through accurate guidance and efficient support.",
  },
  {
    num: "03",
    icon: Gem,
    title: "VALUES",
    text: "Integrity, Professionalism, Accountability, Confidentiality, Service Excellence, Innovation, and Client Satisfaction.",
  },
];

export default function VisionSection({ visionImage }) {
  return (
    <section
      id="vision"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#05070A] via-[#0a0f18] to-[#05070A]" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Sticky Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-cobalt text-sm tracking-[0.3em] uppercase font-medium">
              Our Direction
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-gold mt-4 mb-8 tracking-tight">
              THE STRATEGY LAB
            </h2>
            <div className="rounded-2xl overflow-hidden glass group">
              <img
                src={visionImage}
                alt="Professional immigration consultation and guidance"
                className="w-full aspect-[4/3] object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right - Scrolling Items */}
          <div className="space-y-8 sm:space-y-12">
            {ITEMS.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="glass rounded-2xl p-6 sm:p-8 group hover:border-[#C5A059]/30 transition-all duration-500"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="font-display font-bold text-3xl sm:text-5xl text-white/[0.06] leading-none shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="w-5 h-5 text-gold" />
                      <h3 className="font-display font-bold text-base sm:text-lg text-gold tracking-wider">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-silver/70 text-sm sm:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
