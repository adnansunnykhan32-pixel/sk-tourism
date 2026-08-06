"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants";
import { Clock, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";

const TOUR_PACKAGES = [
  {
    id: "dubai-city-tour-package",
    title: "Dubai City Tour",
    priceUSD: 299,
    suffix: "/ package",
    duration: "Full Day (8 Hours)",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Private Mercedes Chauffeur Pickup",
      "Burj Khalifa & Dubai Mall Tour",
      "Palm Jumeirah & Atlantis Photo Stop",
      "Historic Al Fahidi Souk Walk",
    ],
    badge: "Best Seller",
  },
  {
    id: "evening-desert-safari",
    title: "Evening Desert Safari",
    priceUSD: 250,
    suffix: "/ package",
    duration: "6 Hours (3 PM - 9 PM)",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Private 4x4 Land Cruiser Dune Bashing",
      "Sunset Falconry & Camel Ride",
      "Private VIP Royal Camp Cabana",
      "Gourmet BBQ Buffet & Live Shows",
    ],
    badge: "Popular",
  },
  {
    id: "abu-dhabi-tour",
    title: "Abu Dhabi Grand Tour",
    priceUSD: 380,
    suffix: "/ package",
    duration: "Full Day (10 Hours)",
    image: "https://images.unsplash.com/photo-1512632578553-468660ed24b3?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Sheikh Zayed Grand Mosque Entry",
      "Louvre Abu Dhabi Museum Access",
      "Emirates Palace Coffee Experience",
      "Corniche Luxury Drive",
    ],
    badge: "Cultural Highlight",
  },
  {
    id: "museum-of-the-future",
    title: "Museum of the Future",
    priceUSD: 199,
    suffix: "/ package",
    duration: "4 Hours",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Fast-Track Priority Entry",
      "Futuristic Interactive Exhibition",
      "Private Chauffeur Drop-off & Pickup",
      "Photo Stop at Sheikh Zayed Road",
    ],
  },
  {
    id: "burj-khalifa-vip-experience",
    title: "Burj Khalifa At The Top SKY",
    priceUSD: 220,
    suffix: "/ person",
    duration: "3 Hours",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Priority Access to 148th Floor Lounge",
      "Signature Refreshments & Dates",
      "360-Degree Panoramic Observatory",
      "Dedicated Guest Ambassador",
    ],
    badge: "Top Rated",
  },
  {
    id: "helicopter-tour",
    title: "Dubai Aerial Helicopter Flight",
    priceUSD: 450,
    suffix: "/ flight",
    duration: "20 Minutes Flight",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Fly Over Palm Jumeirah & The World Islands",
      "Close Aerial View of Burj Al Arab",
      "Private Chauffeur Helipad Transfers",
      "Commemorative Flight Certificate",
    ],
    badge: "Exclusive",
  },
  {
    id: "yacht-experience",
    title: "Luxury Yacht Marina Sunset Cruise",
    priceUSD: 600,
    suffix: "/ charter",
    duration: "3 Hours Charter",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "50ft Private Yacht with Captain & Crew",
      "Complimentary Soft Drinks & Ice",
      "Dubai Marina & Ain Dubai Sunset Views",
      "Upper Deck Sunbathing & Sound System",
    ],
    badge: "Royal Choice",
  },
];

export const PackagesSection: React.FC = () => {
  const { formatPrice } = useCurrency();

  const getWhatsAppPackageLink = (title: string) => {
    const text = `Hello SK Tourism, I would like to inquire about booking the package: ${title}. Please share availability and details.`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="packages" className="py-20 bg-[#F8F5F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#D9C6A5] bg-[#0F4A43] px-4 py-1.5 rounded-full">
            Tour Packages
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#0F4A43] tracking-tight">
            Featured <span className="sand-text-gradient">Tour Packages</span>
          </h2>
          <p className="text-base sm:text-lg text-[#2F6B5F] font-light leading-relaxed">
            Handcrafted luxury experiences combining iconic landmarks, private chauffeurs, and royal hospitality.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card rounded-2xl overflow-hidden border border-[#B7BCAF]/40 hover:border-[#D9C6A5] transition-all duration-500 hover:shadow-2xl flex flex-col justify-between group"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F4A43]/80 via-transparent to-transparent opacity-60" />

                {pkg.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D9C6A5] text-[#0F4A43] text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full shadow-md">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                  <div className="flex items-center space-x-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    <Clock className="w-3.5 h-3.5 text-[#D9C6A5]" />
                    <span>{pkg.duration}</span>
                  </div>
                  <span className="bg-[#D9C6A5] text-[#0F4A43] px-3 py-1 rounded-full font-bold text-xs shadow-md">
                    {formatPrice(pkg.priceUSD)} {pkg.suffix}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0F4A43] group-hover:text-[#2F6B5F] transition-colors mb-3">
                    {pkg.title}
                  </h3>

                  <div className="space-y-2">
                    {pkg.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center space-x-2 text-xs text-[#0F4A43]">
                        <CheckCircle2 className="w-4 h-4 text-[#D9C6A5] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#B7BCAF]/30 flex items-center justify-between space-x-2">
                  <a href="#booking" className="w-1/2">
                    <Button variant="outline" size="sm" className="w-full justify-center space-x-1">
                      <span>Reserve</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </a>
                  <a
                    href={getWhatsAppPackageLink(pkg.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2"
                  >
                    <Button variant="whatsapp" size="sm" className="w-full justify-center space-x-1">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
