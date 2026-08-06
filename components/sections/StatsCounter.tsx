"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Clock, ShieldCheck, Star } from "lucide-react";

const STATS = [
  {
    icon: Users,
    value: "15,000+",
    label: "Happy Guests",
    subtext: "Worldwide Clientele",
  },
  {
    icon: Clock,
    value: "99.8%",
    label: "On-Time Guarantee",
    subtext: "Punctual Chauffeur Service",
  },
  {
    icon: ShieldCheck,
    value: "50+",
    label: "Luxury Fleet Vehicles",
    subtext: "Rolls-Royce, Maybach & Escalade",
  },
  {
    icon: Star,
    value: "4.9 ★",
    label: "Customer Rating",
    subtext: "Over 1,200+ Guest Reviews",
  },
];

export const StatsCounter: React.FC = () => {
  return (
    <div className="w-full bg-[#0F4A43] py-6 relative overflow-hidden border-y border-[#D9C6A5]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="text-center space-y-1 py-1"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#D9C6A5]/20 text-[#D9C6A5] mb-1">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-extrabold sand-text-gradient tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-white/90">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
