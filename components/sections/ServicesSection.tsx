"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES, BUSINESS_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/context/CurrencyContext";
import {
  Compass,
  Plane,
  Sun,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

// Select 3 strongest primary services: Airport Transfer, Desert Safari, City Tour
const FEATURED_SERVICES = SERVICES.slice(0, 3);

const ICON_MAP: Record<string, React.ElementType> = {
  Plane,
  Sun,
  Compass,
};

export const ServicesSection: React.FC = () => {
  const { formatPrice } = useCurrency();

  const getWhatsAppLink = (serviceTitle: string) => {
    const msg = `Hello SK Tourism, I would like to inquire about booking: ${serviceTitle}. Please share availability and rates.`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="services" className="py-16 bg-[#F8F5F0] relative" aria-label="Our Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#D9C6A5] bg-[#0F4A43] px-4 py-1.5 rounded-full">
            Premium Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#0F4A43] tracking-tight">
            Our Luxury <span className="sand-text-gradient">Services</span>
          </h2>
          <p className="text-base text-[#2F6B5F] font-light leading-relaxed">
            Tailored luxury travel services crafted for high-net-worth travelers, executive delegations, and discerning guests.
          </p>
        </div>

        {/* 3 Premium Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_SERVICES.map((service, idx) => {
            const IconComponent = ICON_MAP[service.iconName] || Compass;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-white border border-[#B7BCAF]/40 hover:border-[#D9C6A5] transition-all duration-500 hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`SK Tourism — ${service.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F4A43]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {service.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#D9C6A5] text-[#0F4A43] text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full shadow-md">
                        {service.badge}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-[#0F4A43]/90 backdrop-blur-md border border-[#D9C6A5]/40 flex items-center justify-center text-[#D9C6A5] shadow-xl group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-xl font-bold text-[#0F4A43] group-hover:text-[#2F6B5F] transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-xs font-bold text-[#D9C6A5] bg-[#0F4A43]/10 px-2.5 py-0.5 rounded-full border border-[#D9C6A5]/20 whitespace-nowrap">
                        From {formatPrice(service.startingPriceUSD)}
                      </span>
                    </div>

                    <p className="text-xs text-[#2F6B5F] leading-relaxed font-light mb-3">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-1.5">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2 text-xs text-[#0F4A43]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D9C6A5] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-[#B7BCAF]/30 flex items-center gap-2">
                    <a href="#booking" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full justify-center space-x-1 text-xs font-bold py-2">
                        <span>Book Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </a>
                    <a
                      href={getWhatsAppLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="whatsapp" size="sm" className="w-full justify-center space-x-1 text-xs font-bold py-2">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
