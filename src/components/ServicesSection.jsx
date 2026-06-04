import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Heart,
  Building2,
  Globe,
  FileText,
  Users,
  Shield,
  RefreshCcw,
  Scale,
  Plane,
  Star,
  UserCheck,
  Landmark,
} from "lucide-react";

const SERVICES = [
  {
    icon: Briefcase,
    title: "General Work Visa",
    desc: "Support with employer documentation, application preparation, eligibility reviews, and submission readiness.",
  },
  {
    icon: Star,
    title: "Critical Skills Visa",
    desc: "Assistance for professionals in priority sectors such as engineering, ICT, healthcare, finance, construction, and specialized technical fields.",
  },
  {
    icon: Building2,
    title: "Business Visa",
    desc: "Guidance for foreign entrepreneurs and investors establishing or acquiring businesses in South Africa, including business plan support and compliance guidance.",
  },
  {
    icon: GraduationCap,
    title: "Study Visa",
    desc: "Assistance for students enrolling at South African institutions, including document preparation and visa maintenance requirements.",
  },
  {
    icon: Heart,
    title: "Medical Visa",
    desc: "Support for medical travelers seeking healthcare services in South Africa.",
  },
  {
    icon: Plane,
    title: "Visitor's Visa",
    desc: "Applications for tourists and short-term visitors to South Africa.",
  },
  {
    icon: Users,
    title: "Relative Visa",
    desc: "Assistance with relative visa applications, including supporting evidence preparation.",
  },
  {
    icon: Heart,
    title: "Life Partner Visa",
    desc: "Support for life partner visa applications with comprehensive documentation.",
  },
  {
    icon: UserCheck,
    title: "Spousal Visa",
    desc: "Assistance with spousal visa applications, including supporting evidence preparation.",
  },
  {
    icon: Globe,
    title: "Voluntary Visa",
    desc: "Applications for voluntary and charitable work in South Africa.",
  },
  {
    icon: Landmark,
    title: "Permanent Residence",
    desc: "Comprehensive support for qualifying applicants seeking long-term residency status.",
  },
  {
    icon: RefreshCcw,
    title: "Visa Renewals & Extensions",
    desc: "Timely assistance with renewing and extending existing visas.",
  },
  {
    icon: Scale,
    title: "Waiver Applications",
    desc: "Preparation of supporting motivations and documentation where waivers are required.",
  },
  {
    icon: Shield,
    title: "Corporate Immigration",
    desc: "Employee relocation support, work authorization guidance, immigration compliance assistance, and foreign talent onboarding.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05 },
  }),
};

export default function ServicesSection({ servicesImage }) {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={servicesImage}
          alt="Abstract data streams"
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
          What We Offer
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-gold mt-4 mb-6 tracking-tight"
        >
          CORE SERVICES
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-silver/60 max-w-2xl text-base sm:text-lg leading-relaxed mb-12 sm:mb-16"
        >
          Comprehensive immigration and visa solutions tailored to individuals,
          families, and corporate clients.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group glass rounded-xl p-5 sm:p-6 hover:border-[#C5A059]/30 transition-all duration-500 hover:scale-[1.02] cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 flex items-center justify-center mb-4 group-hover:bg-[#C5A059]/20 transition-colors duration-500">
                <service.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-semibold text-silver text-sm sm:text-base mb-2">
                {service.title}
              </h3>
              <p className="text-silver/50 text-xs sm:text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
