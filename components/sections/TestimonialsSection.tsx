"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { REVIEWS } from "@/lib/constants";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="py-12 bg-[#F8F5F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#D9C6A5] bg-[#0F4A43] px-4 py-1.5 rounded-full">
            Guest Reviews
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#0F4A43] tracking-tight">
            Guest <span className="sand-text-gradient">Experiences</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-[#B7BCAF]/40 shadow-md relative"
            >
              <Quote className="w-10 h-10 text-[#D9C6A5]/30 absolute top-4 right-6 pointer-events-none" />

              {/* 5-Star Rating */}
              <div className="flex items-center space-x-1 text-[#D9C6A5] mb-3">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Review Comment */}
              <p className="font-serif text-base sm:text-lg text-[#0F4A43] italic leading-relaxed mb-4">
                &ldquo;{currentReview.comment}&rdquo;
              </p>

              {/* Author Details */}
              <div className="flex items-center justify-between pt-6 border-t border-[#B7BCAF]/30">
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full border-2 border-[#D9C6A5] overflow-hidden shadow-md">
                    <Image
                      src={currentReview.avatar}
                      alt={currentReview.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#0F4A43]">
                      {currentReview.name}
                    </h3>
                    <p className="text-xs text-[#2F6B5F]">{currentReview.location}</p>
                    <span className="text-[10px] font-semibold text-[#D9C6A5]">
                      {currentReview.serviceUsed}
                    </span>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full bg-[#0F4A43] text-white flex items-center justify-center hover:bg-[#D9C6A5] hover:text-[#0F4A43] transition-colors"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full bg-[#0F4A43] text-white flex items-center justify-center hover:bg-[#D9C6A5] hover:text-[#0F4A43] transition-colors"
                    aria-label="Next Review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-[#D9C6A5]"
                    : "w-2.5 bg-[#B7BCAF] hover:bg-[#2F6B5F]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
