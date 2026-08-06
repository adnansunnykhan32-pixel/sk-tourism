"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
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
    "Hello SK Tourism, I have a specific question regarding your Dubai VIP services."
  )}`;

  return (
    <section id="faq" className="py-12 bg-[#F8F9FA] relative" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <Badge variant="gold" className="px-3 py-1 font-bold tracking-widest text-[10px]">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#1F2937] tracking-tight">
            Clear <span className="gold-text-gradient">Transparency</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FEATURED_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  aria-expanded={isOpen}
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 rounded-full bg-[#0F4C81]/10 text-[#0F4C81] flex items-center justify-center shrink-0">
                      <HelpCircle className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-serif font-bold text-sm sm:text-base text-[#1F2937]">
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full bg-gray-100 text-[#0F4C81] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#D4AF37] text-[#071D33]" : ""
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
                      className="border-t border-gray-100"
                    >
                      <div className="p-4 sm:p-5 text-xs sm:text-sm text-[#6B7280] leading-relaxed bg-[#F8F9FA]/50 font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
