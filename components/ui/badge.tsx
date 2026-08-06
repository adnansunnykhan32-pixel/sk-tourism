import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "gold" | "navy" | "accent" | "glass" | "outline";
}

export function Badge({ className, variant = "gold", ...props }: BadgeProps) {
  const variantStyles = {
    gold: "bg-[#D9C6A5]/20 text-[#0F4A43] border border-[#D9C6A5]/50 font-semibold",
    navy: "bg-[#0F4A43] text-[#F8F5F0] font-medium",
    accent: "bg-[#2F6B5F]/15 text-[#0F4A43] border border-[#2F6B5F]/30 font-semibold",
    glass: "bg-white/15 backdrop-blur-md text-white border border-white/25 font-medium",
    outline: "border border-gray-300 text-gray-700 font-medium",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs uppercase tracking-widest transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
