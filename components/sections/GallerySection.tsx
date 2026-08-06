"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

interface GallerySlide {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
}

const GALLERY_SLIDES: GallerySlide[] = [
  {
    id: "g1",
    title: "Burj Khalifa at Golden Hour",
    category: "Downtown Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=90",
    location: "Downtown Dubai",
  },
  {
    id: "g2",
    title: "Royal Desert Safari Cabanas",
    category: "Desert Sanctuary",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=90",
    location: "Lahbab Red Dunes",
  },
  {
    id: "g3",
    title: "Palm Jumeirah Resort Skyline",
    category: "Coastal Luxury",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=2000&q=90",
    location: "Palm Jumeirah",
  },
  {
    id: "g4",
    title: "Dubai Marina Yacht Sunset Charters",
    category: "Private Charters",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=2000&q=90",
    location: "Dubai Marina",
  },
  {
    id: "g5",
    title: "Museum of the Future Architecture",
    category: "Future Wonders",
    image: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&w=2000&q=90",
    location: "Sheikh Zayed Road",
  },
];

export const GallerySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_SLIDES.length) % GALLERY_SLIDES.length);
  };

  // Auto-advance gallery slides every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const current = GALLERY_SLIDES[currentIndex];

  return (
    <section id="gallery" className="py-16 bg-[#0F4A43] relative text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0F4A43] bg-[#D9C6A5] px-4 py-1.5 rounded-full">
            Photo Gallery
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight">
            Dubai Tourism <span className="sand-text-gradient">Gallery</span>
          </h2>
          <p className="text-base text-[#B7BCAF] font-light leading-relaxed">
            Snapshots of extraordinary moments and luxury experiences enjoyed by our guests.
          </p>
        </div>

        {/* Auto-Rotating Image Carousel */}
        <div className="relative max-w-5xl mx-auto h-[430px] sm:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-[#D9C6A5]/30">

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F4A43] via-transparent to-transparent opacity-80" />
            </motion.div>
          </AnimatePresence>

          {/* Slide Details Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-10">
            <div className="space-y-2 max-w-xl">
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#D9C6A5] uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <MapPin className="w-3.5 h-3.5" />
                <span>{current.location}</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white drop-shadow-md">
                {current.title}
              </h3>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
              <button
                onClick={prevSlide}
                className="text-white/80 hover:text-[#D9C6A5] transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex space-x-1.5">
                {GALLERY_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "w-6 bg-[#D9C6A5]" : "w-2 bg-white/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="text-white/80 hover:text-[#D9C6A5] transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GallerySection;
