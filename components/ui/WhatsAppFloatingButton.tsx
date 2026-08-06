"use client";

import React, { useState } from "react";
import { BUSINESS_INFO } from "@/lib/constants";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_INFO.whatsappMessageDefault
  )}`;

  return (
    <aside aria-label="Floating WhatsApp VIP Contact" className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2 group">
      {/* Tooltip Badge */}
      {showTooltip && (
        <div className="relative bg-[#0F4C81] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xl border border-[#D4AF37]/40 flex items-center space-x-2 animate-bounce">
          <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
          <span>Chat with VIP Concierge</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-300 hover:text-white ml-1 p-0.5 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] rounded"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pulse relative bg-[#25D366] hover:bg-[#1EBE5D] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        aria-label="Open WhatsApp VIP Concierge Chat"
      >
        <MessageCircle className="w-8 h-8 fill-current text-white" />
        <span className="sr-only">Book on WhatsApp</span>

        {/* Live Online Badge */}
        <span className="absolute top-0 right-0 block h-3.5 w-3.5 rounded-full ring-2 ring-white bg-emerald-400" />
      </a>
    </aside>
  );
}
