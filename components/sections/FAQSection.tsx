"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/lib/constants";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Keep top 3 most important questions only
  const FEATURED_FAQS = FAQS.slice(0, 3);

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello SK Tourism, I have a specific question regarding your Dubai services."
  )}`;

  return (
    <section id="faq" className="py-12 bg-[#F8F5F0] relative" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#D9C6A5] bg-[#0F4A43] px-4 py-1.5 rounded-full">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#0F4A43] tracking-tight">
            Clear <span className="sand-text-gradient">Transparency</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FEATURED_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#B7BCAF]/40 overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  aria-expanded={isOpen}
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 rounded-full bg-[#0F4A43]/10 text-[#0F4A43] flex items-center justify-center shrink-0">
                      <HelpCircle className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-serif font-bold text-sm sm:text-base text-[#0F4A43]">
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#F8F5F0] text-[#0F4A43] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#D9C6A5] text-[#0F4A43]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-[#B7BCAF]/30"
                    >
                      <div className="p-4 sm:p-5 text-xs sm:text-sm text-[#2F6B5F] leading-relaxed bg-[#F8F5F0]/50 font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* More Questions CTA */}
        <div className="mt-8 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-bold text-[#2F6B5F] hover:text-[#0F4A43] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Have more questions? Chat with us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
