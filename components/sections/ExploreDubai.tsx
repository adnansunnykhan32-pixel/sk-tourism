"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { EXPLORE_DUBAI_ITEMS, BUSINESS_INFO } from "@/lib/constants";
import { useCurrency } from "@/context/CurrencyContext";
import { Star, Clock, MessageCircle, ArrowRight } from "lucide-react";

const CATEGORIES = ["All", "Downtown", "Palm Jumeirah", "Desert", "Marina", "Cultural"];

export const ExploreDubai: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { formatPrice } = useCurrency();

  const filteredItems = activeCategory === "All"
    ? EXPLORE_DUBAI_ITEMS
    : EXPLORE_DUBAI_ITEMS.filter((item) => item.category === activeCategory);

  const getWhatsAppLink = (title: string) => {
    const msg = `Hello SK Tourism, I would like to inquire about exploring: ${title}. Please send full details.`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="explore" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#D9C6A5] bg-[#0F4A43] px-4 py-1.5 rounded-full">
            Dubai Destinations
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#0F4A43] tracking-tight">
            Explore <span className="sand-text-gradient">Dubai</span>
          </h2>
          <p className="text-base text-[#2F6B5F] font-light leading-relaxed">
            Discover iconic landmarks, pristine shorelines, and desert sanctuaries with our luxury concierge.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#0F4A43] text-[#D9C6A5] shadow-lg border border-[#D9C6A5]/40"
                    : "bg-[#F8F5F0] text-[#2F6B5F] hover:bg-[#B7BCAF]/20 border border-[#B7BCAF]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl overflow-hidden bg-white border border-[#B7BCAF]/40 hover:border-[#D9C6A5] transition-all duration-500 hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F4A43]/80 via-transparent to-transparent opacity-60" />

                  {/* Rating & Category Badges */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="bg-[#0F4A43]/90 text-[#D9C6A5] border border-[#D9C6A5]/50 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md flex items-center space-x-1 text-xs font-bold text-[#0F4A43] shadow">
                    <Star className="w-3.5 h-3.5 text-[#D9C6A5] fill-[#D9C6A5]" />
                    <span>{item.rating}</span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                    <div className="flex items-center space-x-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                      <Clock className="w-3.5 h-3.5 text-[#D9C6A5]" />
                      <span>{item.duration}</span>
                    </div>
                    <span className="bg-[#D9C6A5] text-[#0F4A43] px-3 py-1 rounded-full font-bold text-xs shadow-md">
                      From {formatPrice(item.priceUSD)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#0F4A43] group-hover:text-[#2F6B5F] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#2F6B5F] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#B7BCAF]/30 flex items-center justify-between space-x-2">
                    <a href="#booking" className="w-1/2">
                      <Button variant="outline" size="sm" className="w-full justify-center space-x-1 text-xs">
                        <span>Book Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </a>
                    <a
                      href={getWhatsAppLink(item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2"
                    >
                      <Button variant="whatsapp" size="sm" className="w-full justify-center space-x-1 text-xs">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreDubai;
