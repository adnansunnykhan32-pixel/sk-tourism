"use client";

import React from "react";
import Image from "next/image";

/**
 * SKLogo — Fully Dynamic Logo Component
 *
 * Size is controlled ONLY via the SIZE_MAP below using Tailwind CSS classes.
 * When public/logo.png is replaced, the component automatically uses the new file.
 * Width/height ratio is always preserved via object-contain.
 *
 * Usage:
 *   Header / Mobile Menu → size="sm"
 *   Footer               → size="md"
 *   Hero (if used)       → size="md"
 *   Error / Loading      → size="lg"
 */

interface SKLogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark" | "gold";
  showText?: boolean;
  className?: string;
}

// All sizes are controlled here — ONE place, no hardcoded integers anywhere else.
const SIZE_MAP = {
  xs: { container: "w-16",  textClass: "text-[6px]"  },
  sm: { container: "w-24",  textClass: "text-[7px]"  },
  md: { container: "w-32",  textClass: "text-[8px]"  },
  lg: { container: "w-44",  textClass: "text-[10px]" },
  xl: { container: "w-56",  textClass: "text-[12px]" },
} as const;

// Subtext color per variant
const VARIANT_TEXT = {
  light: "text-white",
  dark:  "text-[#0F4A43]",
  gold:  "text-[#D9C6A5]",
} as const;

export const SKLogo: React.FC<SKLogoProps> = ({
  size = "md",
  variant = "light",
  showText = true,
  className = "",
}) => {
  const { container, textClass } = SIZE_MAP[size];
  const textColor = VARIANT_TEXT[variant];

  return (
    <div
      className={`inline-flex flex-col items-center justify-center select-none ${className}`}
    >
      {/*
       * Using a sized container div + fill=true keeps the rendered image
       * fully responsive to whatever dimensions logo.png actually has.
       * object-contain ensures no cropping or distortion.
       */}
      <div className={`relative ${container} aspect-[3/1]`}>
        <Image
          src="/SKlogo.png"
          alt="SK Tourism — Dubai Luxury Travel"
          fill
          priority
          sizes="(max-width: 768px) 96px, 128px"
          className="object-contain"
        />
      </div>

      {/* TOURISM caption — centered, uppercase, same width as logo */}
      {showText && (
        <span
          className={`w-full text-center uppercase font-sans font-bold tracking-[0.45em] mt-0.5 transition-colors duration-300 ${textClass} ${textColor}`}
        >
          TOURISM
        </span>
      )}
    </div>
  );
};

export default SKLogo;