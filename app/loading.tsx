import React from "react";
import SKLogo from "@/components/brand/SKLogo";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-[#0A365C] text-white flex flex-col items-center justify-center space-y-6">
      <div className="animate-pulse">
        <SKLogo variant="light" size="lg" />
      </div>

      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-[#D4AF37] animate-bounce" />
        <div className="w-3 h-3 rounded-full bg-[#D4AF37] animate-bounce [animation-delay:-0.15s]" />
        <div className="w-3 h-3 rounded-full bg-[#D4AF37] animate-bounce [animation-delay:-0.3s]" />
      </div>

      <p className="text-xs uppercase font-semibold tracking-[0.3em] text-[#D4AF37]">
        Preparing Dubai VIP Experience...
      </p>
    </div>
  );
}
