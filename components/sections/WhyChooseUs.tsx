"use client";

import React from "react";
import { motion } from "framer-motion";
import { Headphones, UserCheck, Award, ShieldCheck } from "lucide-react";

// 4 strongest selling points
const WHY_CHOOSE_ITEMS = [
  {
    icon: Headphones,
    title: "24/7 Concierge Support",
    desc: "A dedicated concierge team available around the clock for instant booking confirmations, itinerary changes, and real-time assistance.",
  },
  {
    icon: UserCheck,
    title: "Professional Chauffeurs",
    desc: "RTA-certified, uniformed, multilingual executive drivers trained for diplomatic discretion and punctual airport transfers.",
  },
  {
    icon: Award,
    title: "Luxury Experience",
    desc: "Rolls-Royce, Maybach, and VIP fleet. Every journey is meticulously maintained and curated for maximum comfort.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Dubai Tourism",
    desc: "Fully licensed with the UAE Department of Economy & Tourism. Transparent pricing, zero hidden fees, and complete guest insurance.",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="why-us"
      className="py-16 bg-[#0F4A43] relative text-white overflow-hidden"
      aria-label="Why Choose SK Tourism"
    >
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#D9C6A5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#2F6B5F]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0F4A43] bg-[#D9C6A5] px-4 py-1.5 rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white tracking-tight">
            Why Choose <span className="sand-text-gradient">SK Tourism</span>
          </h2>
          <p className="text-sm text-[#B7BCAF] font-light leading-relaxed">
            We don&apos;t just book trips. We curate unforgettable luxury journeys
            with flawless execution, privacy, and distinction.
          </p>
        </div>

        {/* 4-Card Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CHOOSE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="glass-card-dark p-5 rounded-2xl border border-[#D9C6A5]/20 hover:border-[#D9C6A5]/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D9C6A5]/15 border border-[#D9C6A5]/25 flex items-center justify-center text-[#D9C6A5] mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-white mb-1.5 group-hover:text-[#D9C6A5] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#B7BCAF] leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
