"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface FloatingSelectOption {
  label: string;
  value: string;
}

export interface FloatingSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: FloatingSelectOption[];
  error?: string;
  icon?: React.ReactNode;
}

export const FloatingSelect = React.forwardRef<
  HTMLSelectElement,
  FloatingSelectProps
>(({ className, label, options, error, icon, id, value, ...props }, ref) => {
  const selectId = id || `select-${label.toLowerCase().replace(/\s+/g, "-")}`;
  const hasValue = value !== undefined && value !== "";

  return (
    <div className="relative w-full">
      <div className="relative">
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0F4C81] z-10">
            {icon}
          </div>
        )}
        <select
          id={selectId}
          ref={ref}
          value={value}
          className={cn(
            "peer w-full rounded-xl border bg-white/80 px-4 py-3.5 text-sm text-[#1F2937] outline-none transition-all duration-200 appearance-none cursor-pointer",
            "border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:bg-white",
            icon ? "pl-11" : "pl-4",
            error ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "",
            className
          )}
          {...props}
        >
          <option value="" disabled hidden></option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <label
          htmlFor={selectId}
          className={cn(
            "pointer-events-none absolute text-xs font-semibold text-[#6B7280] transition-all duration-200 uppercase tracking-wider",
            !hasValue ? "top-3.5 text-sm font-normal normal-case tracking-normal" : "-top-2.5 text-xs font-semibold text-[#0F4C81] bg-white px-1.5 rounded uppercase tracking-wider",
            "peer-focus:-top-2.5 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#0F4C81] peer-focus:bg-white peer-focus:px-1.5 peer-focus:rounded peer-focus:uppercase peer-focus:tracking-wider",
            icon ? (!hasValue ? "left-11" : "left-3.5") : "left-3.5"
          )}
        >
          {label}
        </label>

        {/* Custom Chevron Arrow */}
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
      {error && (
        <p className="mt-1 text-xs font-medium text-red-500 pl-1">{error}</p>
      )}
    </div>
  );
});

FloatingSelect.displayName = "FloatingSelect";
