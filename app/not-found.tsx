import React from "react";
import Link from "next/link";
import SKLogo from "@/components/brand/SKLogo";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function NotFound() {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello SK Tourism, I reached an unlisted page on your website. Please assist me."
  )}`;

  return (
    <div className="min-h-screen bg-[#0A365C] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="text-center space-y-6 max-w-lg relative z-10">
        <SKLogo variant="light" size="lg" />

        <div className="font-serif text-8xl font-extrabold gold-text-gradient">
          404
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold">
          Page Not Found
        </h1>

        <p className="text-sm text-gray-300 font-light leading-relaxed">
          The requested luxury experience page does not exist or has been relocated by our VIP Concierge team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link href="/">
            <Button variant="gold" className="space-x-2 w-full sm:w-auto">
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Button>
          </Link>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" className="space-x-2 w-full sm:w-auto">
              <MessageCircle className="w-4 h-4" />
              <span>Contact Concierge</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
