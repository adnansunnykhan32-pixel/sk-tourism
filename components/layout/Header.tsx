"use client";

import React, { useState, useEffect } from "react";
import SKLogo from "@/components/brand/SKLogo";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/context/CurrencyContext";
import { Menu, X, ChevronRight, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home",     href: "#"         },
    { label: "Services", href: "#services" },
    { label: "Gallery",  href: "#gallery"  },
    { label: "About",    href: "#why-us"   },
    { label: "Booking",  href: "#booking"  },
    { label: "Contact",  href: "#contact"  },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* ── Compact Main Navigation Bar ── */}
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#F8F5F0]/95 backdrop-blur-xl shadow-sm py-2 border-b border-[#E2DDD5]"
            : "bg-[#0F4A43]/90 backdrop-blur-md py-2.5 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo (LEFT) */}
          <a href="#" aria-label="SK Tourism — Home" className="flex-shrink-0">
            <SKLogo size="sm" variant={isScrolled ? "dark" : "light"} showText={true} />
          </a>

          {/* Desktop Nav Menu (CENTER — Always visible on desktop, hidden on mobile) */}
          <div className="hidden lg:flex items-center space-x-7 xl:space-x-8" role="menubar">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                role="menuitem"
                className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 py-1 relative group ${
                  isScrolled
                    ? "text-[#0F4A43] hover:text-[#2F6B5F]"
                    : "text-[#F8F5F0] hover:text-[#D9C6A5]"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D9C6A5] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Right Side: Currency & Book Now Button ONLY */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Currency Selector */}
            <div className="flex items-center bg-black/10 rounded-lg p-0.5 border border-[#D9C6A5]/40 text-[10px] font-bold">
              <button
                onClick={() => setCurrency("AED")}
                className={`px-2 py-1 rounded transition-colors ${
                  currency === "AED"
                    ? "bg-[#D9C6A5] text-[#0F4A43]"
                    : isScrolled
                    ? "text-[#0F4A43] hover:text-[#2F6B5F]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                AED
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-2 py-1 rounded transition-colors ${
                  currency === "USD"
                    ? "bg-[#D9C6A5] text-[#0F4A43]"
                    : isScrolled
                    ? "text-[#0F4A43] hover:text-[#2F6B5F]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                USD
              </button>
            </div>

            {/* Book Now Transparent Button */}
            <a href="#booking">
              <Button
                variant="gold"
                size="sm"
                className={`text-xs font-bold px-5 py-2 rounded-xl transition-all ${
                  isScrolled
                    ? "border-[#0F4A43] text-[#0F4A43] hover:bg-[#0F4A43] hover:text-[#F8F5F0]"
                    : "border-[#D9C6A5] text-[#D9C6A5] hover:bg-[#D9C6A5] hover:text-[#0F4A43]"
                }`}
              >
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Right Side Controls (Hamburger Menu ONLY on Mobile) */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setCurrency(currency === "AED" ? "USD" : "AED")}
              className={`text-[10px] font-bold px-2 py-1 rounded border border-[#D9C6A5] ${
                isScrolled ? "bg-[#0F4A43] text-[#D9C6A5]" : "bg-white/10 text-white"
              }`}
            >
              {currency}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#D9C6A5] ${
                isScrolled ? "text-[#0F4A43]" : "text-white"
              }`}
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0F4A43] border-b border-[#D9C6A5]/30 shadow-2xl overflow-hidden"
            role="dialog"
            aria-label="Mobile Navigation Menu"
          >
            <div className="px-6 py-6 space-y-5">
              {/* Logo inside mobile drawer */}
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <SKLogo size="sm" variant="light" showText={true} />
                <div className="flex items-center space-x-1.5 text-xs text-[#D9C6A5] font-bold">
                  <Globe className="w-3.5 h-3.5" />
                  <span>{currency}</span>
                </div>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-[#F8F5F0] hover:text-[#D9C6A5] text-sm font-semibold py-2.5 border-b border-white/10 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#D9C6A5]" />
                  </a>
                ))}
              </nav>

              {/* Mobile CTAs */}
              <div className="pt-2">
                <a href="#booking" onClick={() => setMobileMenuOpen(false)} className="block">
                  <Button variant="gold" className="w-full justify-center text-xs font-bold py-3">
                    Book Now
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;