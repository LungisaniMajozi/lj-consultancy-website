import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Vision", href: "#vision" },
  { label: "Why Us", href: "#advantages" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-2xl shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#hero" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.png"
              alt="LJ Consultancy Logo"
              className="h-10 sm:h-12 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-silver/70 hover:text-gold transition-colors duration-300 tracking-wider uppercase font-body"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0721005848"
              className="flex items-center gap-2 text-sm text-silver/60 hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>072 100 5848</span>
            </a>
            <button
              onClick={() => handleClick("#contact")}
              className="px-6 py-2.5 bg-gold text-[#05070A] text-sm font-semibold rounded tracking-wider hover:bg-[#d4af6a] transition-all duration-300"
            >
              GET CONSULTATION
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-silver"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-silver/80 hover:text-gold hover:bg-white/5 rounded transition-colors text-sm uppercase tracking-wider"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href="tel:0721005848"
                  className="flex items-center gap-2 px-4 text-sm text-silver/60"
                >
                  <Phone className="w-4 h-4" /> 072 100 5848
                </a>
                <a
                  href="mailto:ljmconsultancyservice@gmail.com"
                  className="flex items-center gap-2 px-4 text-sm text-silver/60"
                >
                  <Mail className="w-4 h-4" /> ljmconsultancyservice@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
