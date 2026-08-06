"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES, BUSINESS_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
    <section id="services" className="py-16 bg-[#F8F9FA] relative" aria-label="Our Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <Badge variant="gold" className="px-4 py-1.5 font-bold tracking-widest text-xs">
            Bespoke Dubai Experiences
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#1F2937] tracking-tight">
            Our Premium <span className="gold-text-gradient">Services</span>
          </h2>
          <p className="text-base text-[#6B7280] font-light leading-relaxed">
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
                className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`SK Tourism — ${service.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071D33]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {service.badge && (
                    <div className="absolute top-3 left-3">
                      <Badge variant="gold" className="shadow-md text-[10px]">
                        {service.badge}
                      </Badge>
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-[#071D33]/90 backdrop-blur-md border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-xl group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-xl font-bold text-[#1F2937] group-hover:text-[#0F4C81] transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/20 whitespace-nowrap">
                        From {formatPrice(service.startingPriceUSD)}
                      </span>
                    </div>

                    <p className="text-xs text-[#6B7280] leading-relaxed font-light mb-3">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-1.5">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2 text-xs text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-gray-100 flex items-center gap-2">
                    <a href="#booking" className="flex-1">
                      <Button variant="gold" size="sm" className="w-full justify-center space-x-1 text-xs font-bold py-2">
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
