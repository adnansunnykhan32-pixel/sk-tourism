"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BUSINESS_INFO } from "@/lib/constants";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";

export const CTABanner: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_INFO.whatsappMessageDefault
  )}`;

  return (
    <section className="py-16 relative bg-[#071D33] overflow-hidden text-white border-y border-[#D4AF37]/40">
      {/* Background Dubai Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=80"
          alt="Dubai Luxury Sunset"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071D33] via-[#0A365C]/90 to-[#071D33]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <Badge variant="gold" className="px-5 py-1.5 font-bold tracking-widest text-xs">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#D4AF37]" />
            Your Gateway To Unmatched Luxury
          </Badge>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold tracking-tight text-white max-w-4xl mx-auto">
            Book Your Dubai <span className="gold-text-gradient">Journey Today</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Experience bespoke private tours, executive chauffeur transfers, and 7-star Arabian luxury with SK Tourism.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="#booking" className="w-full sm:w-auto">
            <Button variant="gold" size="lg" className="w-full sm:w-auto px-10 shadow-2xl space-x-2">
              <span>Book Now</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="whatsapp" size="lg" className="w-full sm:w-auto px-8 shadow-2xl space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Contact WhatsApp VIP</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
