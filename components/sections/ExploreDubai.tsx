"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
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
          <Badge variant="gold" className="px-4 py-1.5 font-bold tracking-widest text-xs">
            Dubai Destinations Showcase
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#1F2937] tracking-tight">
            Explore <span className="gold-text-gradient">Dubai</span>
          </h2>
          <p className="text-base text-[#6B7280] font-light leading-relaxed">
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
                    ? "bg-[#071D33] text-[#D4AF37] shadow-lg border border-[#D4AF37]"
                    : "bg-[#F8F9FA] text-[#6B7280] hover:bg-gray-200 border border-gray-200"
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
                className="group rounded-2xl overflow-hidden bg-[#F8F9FA] border border-gray-200 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071D33]/80 via-transparent to-transparent opacity-60" />

                  {/* Rating & Category Badges */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="bg-[#071D33]/90 text-[#D4AF37] border border-[#D4AF37]/50 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md flex items-center space-x-1 text-xs font-bold text-[#1F2937] shadow">
                    <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                    <span>{item.rating}</span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                    <div className="flex items-center space-x-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{item.duration}</span>
                    </div>
                    <span className="bg-[#D4AF37] text-[#071D33] px-3 py-1 rounded-full font-bold text-xs shadow-md">
                      From {formatPrice(item.priceUSD)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1F2937] group-hover:text-[#0F4C81] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between space-x-2">
                    <a href="#booking" className="w-1/2">
                      <Button variant="gold" size="sm" className="w-full justify-center space-x-1 text-xs">
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
