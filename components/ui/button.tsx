"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9C6A5] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        gold: "bg-transparent border border-[#D9C6A5] text-[#D9C6A5] hover:bg-[#D9C6A5] hover:text-[#0F4A43] font-bold uppercase tracking-wider",
        navy: "bg-[#0F4A43] text-[#F8F5F0] hover:bg-[#09332E] border border-[#0F4A43] font-semibold uppercase tracking-wider",
        accent: "bg-[#2F6B5F] text-[#F8F5F0] hover:bg-[#0F4A43] shadow-md transition-all",
        outline: "bg-transparent border border-[#0F4A43] text-[#0F4A43] hover:bg-[#0F4A43] hover:text-[#F8F5F0]",
        glass: "bg-white/10 backdrop-blur-md text-[#F8F5F0] border border-white/20 hover:bg-white/20 hover:border-[#D9C6A5]",
        ghost: "text-[#0F4A43] hover:bg-[#0F4A43]/10",
        whatsapp: "bg-[#25D366] text-white hover:bg-[#1EBE5D] font-bold shadow-md",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-sm",
        sm: "h-9 px-4 text-xs rounded-xl",
        lg: "h-12 px-8 py-3 text-sm rounded-xl font-bold tracking-wide",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
