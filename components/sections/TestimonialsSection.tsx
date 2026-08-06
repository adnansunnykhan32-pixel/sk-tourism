"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
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
    <section id="reviews" className="py-12 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <Badge variant="gold" className="px-3 py-1 font-bold tracking-widest text-[10px]">
            Verified Guest Reviews
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#1F2937] tracking-tight">
            Guest <span className="gold-text-gradient">Experiences</span>
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
              className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-md relative"
            >
              <Quote className="w-10 h-10 text-[#D4AF37]/20 absolute top-4 right-6 pointer-events-none" />

              {/* 5-Star Rating */}
              <div className="flex items-center space-x-1 text-[#D4AF37] mb-3">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Review Comment */}
              <p className="font-serif text-base sm:text-lg text-[#1F2937] italic leading-relaxed mb-4">
                "{currentReview.comment}"
              </p>

              {/* Author Details */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="relative w-14 h-14 rounded-full border-2 border-[#D4AF37] overflow-hidden shadow-md">
                    <Image
                      src={currentReview.avatar}
                      alt={currentReview.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#1F2937]">
                      {currentReview.name}
                    </h3>
                    <p className="text-xs text-[#6B7280]">{currentReview.location}</p>
                    <span className="text-[10px] font-semibold text-[#0F4C81]">
                      Service: {currentReview.serviceUsed}
                    </span>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-[#0F4C81] text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0F4C81] transition-colors"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-[#0F4C81] text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0F4C81] transition-colors"
                    aria-label="Next Review"
                  >
                    <ChevronRight className="w-5 h-5" />
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
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-[#D4AF37]"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
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
