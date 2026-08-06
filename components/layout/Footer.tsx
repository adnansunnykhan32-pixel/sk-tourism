"use client";

import React, { useState } from "react";
import SKLogo from "@/components/brand/SKLogo";
import { BUSINESS_INFO, SERVICES } from "@/lib/constants";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ChevronRight,
  ShieldCheck,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Footer: React.FC = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<"privacy" | "terms" | null>(null);

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_INFO.whatsappMessageDefault
  )}`;

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Fleet", href: "#fleet" },
    { label: "Packages", href: "#packages" },
    { label: "Gallery", href: "#gallery" },
    { label: "Booking", href: "#booking" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0F4A43] text-white pt-12 pb-6 border-t border-[#D9C6A5]/20 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#2F6B5F]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#09332E]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-white/10">

          {/* Column 1: SK Logo & Brand */}
          <div className="space-y-4">
            {/* Pure White Logo */}
            <SKLogo size="md" variant="light" showText={true} />
            <p className="text-xs text-[#B7BCAF] leading-relaxed font-light">
              SK Tourism is Dubai&apos;s premier luxury tourism operator — bespoke tours, executive chauffeurs, desert safaris, and hotel bookings.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 text-[#D9C6A5]">
              {/* Instagram */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D9C6A5] hover:text-[#0F4A43] flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D9C6A5] hover:text-[#0F4A43] flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
              {/* X Twitter */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D9C6A5] hover:text-[#0F4A43] flex items-center justify-center transition-all duration-300"
                aria-label="X Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D9C6A5] hover:text-[#0F4A43] flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-sm text-white mb-4 border-b border-[#D9C6A5]/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs text-[#B7BCAF]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#D9C6A5] flex items-center space-x-1.5 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-[#D9C6A5]" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-serif font-bold text-sm text-white mb-4 border-b border-[#D9C6A5]/30 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2 text-xs text-[#B7BCAF]">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-[#D9C6A5] flex items-center space-x-1.5 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-[#D9C6A5]" />
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-3 text-xs text-[#B7BCAF]">
            <h3 className="font-serif font-bold text-sm text-white mb-4 border-b border-[#D9C6A5]/30 pb-2">
              Contact
            </h3>

            <div className="flex items-start space-x-2.5">
              <MapPin className="w-3.5 h-3.5 text-[#D9C6A5] shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address}</span>
            </div>

            <div className="flex items-center space-x-2.5">
              <Phone className="w-3.5 h-3.5 text-[#D9C6A5] shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phonePrimary}`} className="hover:text-[#D9C6A5] transition-colors">
                {BUSINESS_INFO.phonePrimary}
              </a>
            </div>

            <div className="flex items-center space-x-2.5">
              <Mail className="w-3.5 h-3.5 text-[#D9C6A5] shrink-0" />
              <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#D9C6A5] transition-colors">
                {BUSINESS_INFO.email}
              </a>
            </div>

            <div className="flex items-center space-x-2.5">
              <Clock className="w-3.5 h-3.5 text-[#D9C6A5] shrink-0" />
              <span>{BUSINESS_INFO.openingHours}</span>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-lg"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#B7BCAF] gap-3">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D9C6A5]" />
            <span>© {new Date().getFullYear()} SK Tourism (Dubai Tourism Services LLC). All Rights Reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setActiveLegalModal("privacy")}
              className="hover:text-[#D9C6A5] transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveLegalModal("terms")}
              className="hover:text-[#D9C6A5] transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      <AnimatePresence>
        {activeLegalModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-8 text-[#0F4A43] shadow-2xl relative border border-[#D9C6A5] max-h-[80vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveLegalModal(null)}
                className="absolute top-4 right-4 p-2 text-[#B7BCAF] hover:text-[#0F4A43]"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-serif text-2xl font-bold text-[#0F4A43] mb-4">
                {activeLegalModal === "privacy" ? "Privacy Policy" : "Terms & Conditions"}
              </h3>

              <div className="text-xs text-[#2F6B5F] space-y-3 leading-relaxed">
                <p>
                  <strong className="text-[#0F4A43]">SK Tourism (Dubai Tourism Services LLC)</strong> is committed to honoring guest confidentiality, security, and data protection according to UAE regulations.
                </p>
                <p>
                  1. <strong className="text-[#0F4A43]">Personal Data Handling:</strong> Information collected via our booking forms is used exclusively for service dispatch and confirmation. We never share or sell guest information to third parties.
                </p>
                <p>
                  2. <strong className="text-[#0F4A43]">Chauffeur & Vehicle Standards:</strong> All chauffeurs assigned are licensed by RTA Dubai, security-screened, and fluently trained. Vehicles are insured under UAE transport statutes.
                </p>
                <p>
                  3. <strong className="text-[#0F4A43]">Cancellation & Amendments:</strong> Modifications to bookings can be made without penalty up to 24 hours prior to scheduled pick-up time.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#B7BCAF]/30 text-right">
                <button
                  onClick={() => setActiveLegalModal(null)}
                  className="bg-[#0F4A43] text-white px-6 py-2 rounded-xl text-xs font-bold hover:bg-[#D9C6A5] hover:text-[#0F4A43] transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
