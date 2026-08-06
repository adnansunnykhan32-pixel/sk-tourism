"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface FloatingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

export const FloatingInput = React.forwardRef<
  HTMLInputElement,
  FloatingInputProps
>(({ className, label, error, icon, id, type = "text", ...props }, ref) => {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="relative w-full">
      <div className="relative">
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0F4C81]">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          type={type}
          ref={ref}
          placeholder=" "
          className={cn(
            "peer w-full rounded-xl border bg-white/80 px-4 py-3.5 text-sm text-[#1F2937] outline-none transition-all duration-200",
            "border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:bg-white",
            icon ? "pl-11" : "pl-4",
            error ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "",
            className
          )}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={cn(
            "pointer-events-none absolute text-xs font-semibold text-[#6B7280] transition-all duration-200 uppercase tracking-wider",
            "peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal",
            "peer-focus:-top-2.5 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#0F4C81] peer-focus:bg-white peer-focus:px-1.5 peer-focus:rounded peer-focus:uppercase peer-focus:tracking-wider",
            "peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-[#0F4C81] peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1.5 peer-not-placeholder-shown:rounded",
            icon ? "peer-placeholder-shown:left-11 left-3.5" : "left-3.5"
          )}
        >
          {label}
        </label>
      </div>
      {error && (
        <p className="mt-1 text-xs font-medium text-red-500 pl-1">{error}</p>
      )}
    </div>
  );
});

FloatingInput.displayName = "FloatingInput";
