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
  <div className="py-20 bg-[#F8F9FA] flex items-center justify-center">
    <div className="w-10 h-10 rounded-full border-4 border-[#D4AF37] border-t-transparent animate-spin" />
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
    <main className="min-h-screen bg-[#F8F9FA] text-[#1F2937]">
      {/* 1. Compact Sticky Glass Navigation Bar */}
      <Header />

      {/* 2. Ultra-Clean Hero Section with Overlapping Destination Cards Carousel */}
      <HeroSection />

      {/* 3. Primary Services Section (3 Ultra-Premium Services) */}
      <ServicesSection />

      {/* 4. Why Choose SK Tourism (4 Clean Cards) */}
      <WhyChooseUs />

      {/* 5. Featured VIP Tour Packages */}
      <PackagesSection />

      {/* 6. Explore Dubai Showcase Section */}
      <ExploreDubai />

      {/* 7. Luxury Vehicle Fleet Showcase */}
      <FleetSection />

      {/* 8. Option B Stacked Auto-Rotating Dubai Gallery Showcase */}
      <GallerySection />

      {/* 9. Compact Guest Testimonials Section */}
      <TestimonialsSection />

      {/* 10. Compact FAQ Section (3 Essential Questions) */}
      <FAQSection />

      {/* 11. VIP Booking Form Desk */}
      <BookingForm />

      {/* 12. Contact Section & Map */}
      <ContactSection />

      {/* 13. Elegant Stats Counter Section (Moved near Footer) */}
      <StatsCounter />

      {/* 14. Comprehensive Dark Navy Footer */}
      <Footer />
    </main>
  );
}
