"use client";

import React from "react";
import { DUBAI_LOCATIONS } from "@/lib/constants";
import { MapPin } from "lucide-react";

export const CountryMarquee: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...DUBAI_LOCATIONS, ...DUBAI_LOCATIONS, ...DUBAI_LOCATIONS];

  return (
    <div
      className="bg-[#071D33] text-white py-3.5 border-y border-[#D4AF37]/40 overflow-hidden relative shadow-inner select-none"
      aria-label="Famous Dubai Locations Showcase"
    >
      {/* Decorative Gold Glow Effects */}
      <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-[#071D33] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-[#071D33] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap" aria-hidden="true">
        {marqueeItems.map((location, idx) => (
          <div
            key={`${location}-${idx}`}
            className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-wider text-white/90 group cursor-default"
          >
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 group-hover:scale-125 transition-transform" />
            <span className="uppercase tracking-widest">{location}</span>
            <span className="text-[#D4AF37]/60 text-xs ml-4">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryMarquee;
