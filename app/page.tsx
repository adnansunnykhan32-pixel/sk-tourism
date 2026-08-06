import React from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PackagesSection from "@/components/sections/PackagesSection";
import ExploreDubai from "@/components/sections/ExploreDubai";
import FleetSection from "@/components/sections/FleetSection";
import StatsCounter from "@/components/sections/StatsCounter";
import Footer from "@/components/layout/Footer";

// Section Skeleton Fallback
const SectionSkeleton = () => (
  <div className="py-20 bg-[#F8F5F0] flex items-center justify-center">
    <div className="w-10 h-10 rounded-full border-4 border-[#D9C6A5] border-t-transparent animate-spin" />
  </div>
);

// Dynamic Imports for Interactive Below-the-Fold Sections
const GallerySection = dynamic(() => import("@/components/sections/GallerySection"), {
  loading: () => <SectionSkeleton />,
});

const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"), {
  loading: () => <SectionSkeleton />,
});

const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), {
  loading: () => <SectionSkeleton />,
});

const BookingForm = dynamic(() => import("@/components/sections/BookingForm"), {
  loading: () => <SectionSkeleton />,
});

const ContactSection = dynamic(() => import("@/components/sections/ContactSection"), {
  loading: () => <SectionSkeleton />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#0F4A43]">
      {/* 1. Compact Sticky Navigation Bar */}
      <Header />

      {/* 2. Hero Section with Overlapping Destination Cards Carousel */}
      <HeroSection />

      {/* 3. Primary Services Section (3 Premium Services) */}
      <ServicesSection />

      {/* 4. Why Choose SK Tourism (4 Clean Cards) */}
      <WhyChooseUs />

      {/* 5. Featured Tour Packages */}
      <PackagesSection />

      {/* 6. Explore Dubai Showcase Section */}
      <ExploreDubai />

      {/* 7. Luxury Vehicle Fleet Showcase */}
      <FleetSection />

      {/* 8. Auto-Rotating Dubai Gallery Showcase */}
      <GallerySection />

      {/* 9. Guest Testimonials Section */}
      <TestimonialsSection />

      {/* 10. FAQ Section */}
      <FAQSection />

      {/* 11. Booking Form */}
      <BookingForm />

      {/* 12. Contact Section & Map */}
      <ContactSection />

      {/* 13. Stats Counter Section */}
      <StatsCounter />

      {/* 14. Footer */}
      <Footer />
    </main>
  );
}
