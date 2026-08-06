"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants";
import { Users, Briefcase, MessageCircle, ShieldCheck, CheckCircle } from "lucide-react";

interface Vehicle {
  id: string;
  name: string;
  category: string;
  passengers: number;
  luggage: number;
  image: string;
  features: string[];
  rate: string;
  badge?: string;
}

const FLEET_DATA: Vehicle[] = [
  {
    id: "rolls-royce-cullinan",
    name: "Rolls-Royce Cullinan",
    category: "Supercars",
    passengers: 4,
    luggage: 4,
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1000&q=80",
    features: ["Starlight Roof", "Massage Seats", "Champagne Cooler", "Privacy Glass"],
    rate: "Ultra VIP Preferred",
    badge: "Pinnacle of Luxury",
  },
  {
    id: "mercedes-maybach-s-class",
    name: "Mercedes-Maybach S-Class",
    category: "Executive Sedans",
    passengers: 3,
    luggage: 3,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80",
    features: ["First-Class Rear Lounge", "Burmester 4D Audio", "Chilled Refreshments", "Discreet Chauffeur"],
    rate: "Executive Standard",
    badge: "VIP Choice",
  },
  {
    id: "bmw-7-series",
    name: "BMW 7 Series i7",
    category: "Executive Sedans",
    passengers: 3,
    luggage: 3,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
    features: ["31-inch Theatre Screen", "Executive Lounge Seating", "5G High Speed Wi-Fi", "Panoramic Sky Roof"],
    rate: "Executive VIP",
  },
  {
    id: "cadillac-escalade",
    name: "Cadillac Escalade ESV Platinum",
    category: "Luxury SUVs",
    passengers: 6,
    luggage: 6,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80",
    features: ["Extended Wheelbase", "AKG Studio Sound", "Executive Leather Captain Chairs", "Privacy Tint"],
    rate: "SUV Platinum",
    badge: "Popular Group",
  },
  {
    id: "mercedes-v-class",
    name: "Mercedes-Benz V-Class VIP",
    category: "VIP Vans & Minibuses",
    passengers: 6,
    luggage: 6,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
    features: ["Face-to-Face Conference Seating", "Electric Footrests", "Ample Luggage Capacity", "Ambient LED"],
    rate: "Family / Delegation",
    badge: "Family VIP",
  },
  {
    id: "toyota-hiace-vip",
    name: "Toyota Hiace VIP Luxury Executive",
    category: "VIP Vans & Minibuses",
    passengers: 9,
    luggage: 10,
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80",
    features: ["Individual Reclining Captain Seats", "High-Roof Spacious Cabin", "Dual Air Conditioning", "Luggage Trunk"],
    rate: "Group Transfer",
    badge: "High Capacity",
  },
];

const CATEGORIES = ["All", "Executive Sedans", "Luxury SUVs", "VIP Vans & Minibuses", "Supercars"];

export const FleetSection: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredFleet =
    selectedCat === "All"
      ? FLEET_DATA
      : FLEET_DATA.filter((v) => v.category === selectedCat);

  const getWhatsAppFleetLink = (vehicleName: string) => {
    const text = `Hello SK Tourism, I would like to check chauffeur / rental availability for vehicle: ${vehicleName}. Please provide pricing details.`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="fleet" className="py-20 bg-[#071D33] relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge variant="gold" className="px-4 py-1.5 font-bold tracking-widest">
            Immaculate & Pristine Vehicles
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight">
            Our Luxury <span className="gold-text-gradient">Chauffeur Fleet</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            Every vehicle in our fleet is brand-new, meticulously sanitized, and driven by licensed uniformed executive chauffeurs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCat === cat
                  ? "bg-[#D4AF37] text-[#0F4C81] shadow-lg shadow-[#D4AF37]/30 scale-105"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vehicle Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredFleet.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card-dark rounded-2xl overflow-hidden border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-2xl flex flex-col justify-between group"
              >
                {/* Vehicle Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A365C] via-transparent to-transparent opacity-80" />

                  {vehicle.badge && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="gold">{vehicle.badge}</Badge>
                    </div>
                  )}

                  {/* Specs Pill */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center space-x-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                      <span className="flex items-center space-x-1">
                        <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{vehicle.passengers} Seats</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{vehicle.luggage} Bags</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                      {vehicle.name}
                    </h3>
                    <div className="flex items-center space-x-1 text-xs text-[#D4AF37] mb-3">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Uniformed VIP Chauffeur Included</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                      {vehicle.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-1.5">
                          <CheckCircle className="w-3 h-3 text-[#D4AF37] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="text-xs">
                      <span className="text-gray-400 block">Class Level</span>
                      <span className="font-bold text-white">{vehicle.rate}</span>
                    </div>

                    <a
                      href={getWhatsAppFleetLink(vehicle.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="whatsapp" size="sm" className="space-x-1.5">
                        <MessageCircle className="w-4 h-4" />
                        <span>Reserve Vehicle</span>
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FleetSection;
