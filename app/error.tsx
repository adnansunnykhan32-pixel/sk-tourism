"use client";

import React, { useEffect } from "react";
import SKLogo from "@/components/brand/SKLogo";
import { Button } from "@/components/ui/button";
import { RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application runtime error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0A365C] text-white flex flex-col items-center justify-center p-6 text-center space-y-6">
      <SKLogo size="lg" />

      <h1 className="font-serif text-3xl font-bold text-white">
        Something Went Wrong
      </h1>

      <p className="text-sm text-gray-300 max-w-md font-light leading-relaxed">
        We encountered a temporary disruption. Please refresh or return to the main homepage.
      </p>

      <div className="flex items-center space-x-4 pt-2">
        <Button onClick={() => reset()} variant="gold" className="space-x-2">
          <RefreshCw className="w-4 h-4" />
          <span>Try Again</span>
        </Button>

        <a href="/">
          <Button variant="glass" className="space-x-2">
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Button>
        </a>
      </div>
    </div>
  );
}
