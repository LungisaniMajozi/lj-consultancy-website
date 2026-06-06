import { motion } from "framer-motion";
import {
  UserCheck,
  FileSearch,
  ArrowRight,
  Building2,
  Settings,
  Lock,
  CheckCircle,
} from "lucide-react";

const ADVANTAGES = [
  {
    icon: UserCheck,
    title: "Personalized Client Service",
    desc: "Tailored solutions for every unique immigration journey.",
  },
  {
    icon: FileSearch,
    title: "Professional Documentation Review",
    desc: "Thorough review ensuring completeness and compliance.",
  },
  {
    icon: ArrowRight,
    title: "End-to-End Application Support",
    desc: "From initial consultation to final submission.",
  },
  {
    icon: Building2,
    title: "Corporate & Individual Solutions",
    desc: "Serving businesses and individuals with equal expertise.",
  },
  {
    icon: Settings,
    title: "Strong Administrative Processes",
    desc: "Systematic workflows for efficient processing.",
  },
  {
    icon: Lock,
    title: "Confidential Handling",
    desc: "Your information is protected with the highest standards.",
  },
  {
    icon: CheckCircle,
    title: "Compliance & Accuracy Focus",
    desc: "Meticulous attention to regulatory requirements.",
  },
];

const TARGET_MARKET = [
  "International Students",
  "Skilled Professionals",
  "Foreign Employees",
  "Entrepreneurs & Investors",
  "Families Seeking Reunification",
  "Non-Profit Organizations",
  "Corporations Employing Foreign Nationals",
  "Medical Travelers",
];

export default function AdvantagesSection({ networkImage }) {
  return (
    <section
      id="advantages"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={networkImage}
          alt="Professional consulting team working together"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070A] via-[#05070A]/98 to-[#05070A]" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-cobalt text-sm tracking-[0.3em] uppercase font-medium"
        >
          Our Edge
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-gold mt-4 mb-16 tracking-tight"
        >
          WHY CHOOSE US
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mb-20 sm:mb-28">
          {ADVANTAGES.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass rounded-xl p-5 sm:p-6 group hover:border-[#2D5BFF]/30 transition-all duration-500 hover:scale-[1.02]"
            >
              <adv.icon className="w-6 h-6 text-cobalt mb-3 group-hover:text-gold transition-colors duration-500" />
              <h3 className="font-semibold text-silver text-sm sm:text-base mb-2">
                {adv.title}
              </h3>
              <p className="text-silver/50 text-xs sm:text-sm leading-relaxed">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Target Market */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-cobalt text-sm tracking-[0.3em] uppercase font-medium">
            Who We Serve
          </span>
          <h3 className="font-display font-bold text-xl sm:text-3xl text-gold mt-4 mb-8 tracking-tight">
            TARGET MARKET
          </h3>

          <div className="flex flex-wrap gap-3">
            {TARGET_MARKET.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="px-4 sm:px-5 py-2.5 glass rounded-full text-xs sm:text-sm text-silver/70 hover:text-gold hover:border-[#C5A059]/30 transition-all duration-300 cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
