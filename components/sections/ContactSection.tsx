"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";

export const ContactSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_INFO.whatsappMessageDefault
  )}`;

  return (
    <section id="contact" className="py-20 bg-[#F8F5F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#D9C6A5] bg-[#0F4A43] px-4 py-1.5 rounded-full">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#0F4A43] tracking-tight">
            Contact <span className="sand-text-gradient">SK Tourism</span>
          </h2>
          <p className="text-base sm:text-lg text-[#2F6B5F] font-light leading-relaxed">
            Our executive team is available around the clock to organize your private transfers, tours, and tailored itineraries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards & Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            <div className="glass-card p-8 rounded-3xl border border-[#B7BCAF]/40 shadow-xl space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#0F4A43]">
                Dubai Headquarters
              </h3>

              {/* Office Location */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#0F4A43]/10 text-[#0F4A43] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#D9C6A5] block">
                    Address
                  </span>
                  <p className="text-sm font-medium text-[#0F4A43] mt-0.5">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone Primary */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#0F4A43]/10 text-[#0F4A43] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#D9C6A5] block">
                    Phone Numbers
                  </span>
                  <p className="text-sm font-bold text-[#0F4A43] mt-0.5">
                    {BUSINESS_INFO.phonePrimary} / {BUSINESS_INFO.phoneSecondary}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#0F4A43]/10 text-[#0F4A43] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#D9C6A5] block">
                    Email Address
                  </span>
                  <p className="text-sm font-medium text-[#0F4A43] mt-0.5">
                    {BUSINESS_INFO.email}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#0F4A43]/10 text-[#0F4A43] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#D9C6A5] block">
                    Working Hours
                  </span>
                  <p className="text-sm font-medium text-[#0F4A43] mt-0.5">
                    {BUSINESS_INFO.openingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <a href={`tel:${BUSINESS_INFO.phonePrimary}`} className="w-full">
                <Button variant="navy" className="w-full py-3 space-x-1 text-xs justify-center">
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </Button>
              </a>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="whatsapp" className="w-full py-3 space-x-1 text-xs justify-center">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </Button>
              </a>

              <a href={`mailto:${BUSINESS_INFO.email}`} className="w-full">
                <Button variant="outline" className="w-full py-3 space-x-1 text-xs justify-center">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl border border-[#B7BCAF]/40 min-h-[350px]"
          >
            <iframe
              title="SK Tourism Dubai Headquarters Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786539269224!2d55.2721877760927!3d25.197196931700683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            <div className="absolute top-4 left-4 bg-[#0F4A43] text-white text-xs px-4 py-2 rounded-xl shadow-lg border border-[#D9C6A5]/40 flex items-center space-x-2">
              <Navigation className="w-4 h-4 text-[#D9C6A5]" />
              <span>Downtown Dubai HQ • Opposite Burj Khalifa</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
