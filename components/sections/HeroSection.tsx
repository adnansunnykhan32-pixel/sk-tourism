"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS_INFO, HERO_DESTINATIONS } from "@/lib/constants";
import { MessageCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = HERO_DESTINATIONS[activeIndex];

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HERO_DESTINATIONS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + HERO_DESTINATIONS.length) % HERO_DESTINATIONS.length);
  }, []);

  // Automatic slide rotation every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 2500);
    return () => clearInterval(timer);
  }, [handleNext]);

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello SK Tourism, I would like to inquire about booking a luxury Dubai experience.`
  )}`;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F4A43]"
      aria-label="SK Tourism — Experience Dubai Like Never Before"
    >
      {/* ── FULL-SCREEN BACKGROUND IMAGE CROSSFADE ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={current.image}
            alt={current.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Deep dark green gradient overlays — crisp contrast for text & cards */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F4A43]/90 via-[#0F4A43]/65 to-[#0F4A43]/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F4A43]/70 via-transparent to-[#F8F5F0]" />
        </motion.div>
      </AnimatePresence>

      {/* ── HERO CONTENT GRID ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* ── LEFT COLUMN: Clean Minimal Headline & Transparent Buttons ── */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Clean Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold text-[#F8F5F0] tracking-tight leading-[1.08] drop-shadow-md">
              Experience Dubai <br />
              <span className="sand-text-gradient">Like Never Before</span>
            </h1>

            {/* Short Subtitle (Max 2 lines) */}
            <p className="text-base sm:text-lg text-[#F8F5F0]/90 font-light leading-relaxed max-w-xl">
              Bespoke desert safaris, executive chauffeur transfers, and luxury hotel access tailored for discerning travelers.
            </p>

            {/* Transparent Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Transparent Book Now Button with Primary Sand Border */}
              <a href="#booking">
                <button className="px-8 py-3.5 text-sm font-bold tracking-wider uppercase rounded-xl border border-[#D9C6A5] text-[#D9C6A5] hover:bg-[#D9C6A5] hover:text-[#0F4A43] transition-all duration-300 flex items-center space-x-2 bg-transparent shadow-md">
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>

              {/* Transparent WhatsApp Button with WhatsApp Green Border */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-7 py-3.5 text-sm font-bold tracking-wider uppercase rounded-xl border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 flex items-center space-x-2 bg-transparent shadow-md">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </button>
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Overlapping Destination Cards (No Yellow Border) ── */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end space-y-4">
            
            {/* Overlapping Cards Container */}
            <div className="relative w-full max-w-md h-72 flex items-center justify-center overflow-visible">
              {HERO_DESTINATIONS.map((dest, idx) => {
                const total = HERO_DESTINATIONS.length;
                const offset = (idx - activeIndex + total) % total;

                // Render 3 visible cards
                if (offset !== 0 && offset !== 1 && offset !== total - 1) return null;

                const isActive = offset === 0;
                const isNext = offset === 1;

                return (
                  <motion.div
                    key={dest.id}
                    onClick={() => setActiveIndex(idx)}
                    initial={false}
                    animate={{
                      scale: isActive ? 1 : 0.85,
                      x: isActive ? 0 : isNext ? 60 : -60,
                      opacity: isActive ? 1 : 0.6,
                      zIndex: isActive ? 30 : 10,
                      rotate: isActive ? 0 : isNext ? 3 : -3,
                    }}
                    transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
                    className={`absolute w-72 sm:w-80 rounded-2xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-300 border ${
                      isActive
                        ? "border-white/20 ring-1 ring-white/20 bg-[#0F4A43]"
                        : "border-white/10 bg-[#0F4A43]/80 backdrop-blur-md"
                    }`}
                  >
                    <div className="relative h-44 w-full">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        sizes="320px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F4A43] via-transparent to-transparent opacity-90" />
                    </div>

                    <div className="p-4 text-left">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#D9C6A5] block mb-1">
                        {dest.tag}
                      </span>
                      <h4 className="text-base font-serif font-bold text-white truncate">
                        {dest.name}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Manual Carousel Controls */}
            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white/10 hover:bg-[#D9C6A5] hover:text-[#0F4A43] text-white transition-colors border border-white/10"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex space-x-1.5">
                {HERO_DESTINATIONS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === activeIndex ? "w-6 bg-[#D9C6A5]" : "bg-white/30"
                    }`}
                    aria-label={`Go to destination slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white/10 hover:bg-[#D9C6A5] hover:text-[#0F4A43] text-white transition-colors border border-white/10"
                aria-label="Next card"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Subtle Bottom Transition Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8F5F0] to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
