"use client";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFadeOut(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 300); // Super fast transition
      return () => clearTimeout(timer);
    };

    if (document.readyState === "complete") {
      // If already loaded, don't even show it or hide it instantly
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      const fallback = setTimeout(handleLoad, 600); // Super short fallback for instant feel
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      id="preloader"
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#F1EFE8] transition-opacity duration-400 ease-out ${
        fadeOut ? "opacity-0 invisible pointer-events-none" : "opacity-100 visible"
      }`}
      style={{ willChange: "opacity" }}
    >
      <div className="flex flex-col items-center">
        {/* Logo - Using standard img for faster LCP detection and less JS overhead */}
        <div className="relative w-40 h-16 md:w-48 md:h-20 mb-8 overflow-hidden">
          <img
            src="/images/logo_new.webp"
            alt="Veloxa"
            className={`w-full h-full object-contain ${
              fadeOut ? "opacity-0 scale-95 transition-all duration-300" : "animate-logo-pulse"
            }`}
            loading="eager"
          />
        </div>

        {/* Performance-friendly Loading Bar */}
        <div className="w-48 h-0.5 bg-[#0F2744]/5 rounded-full overflow-hidden relative">
          <div 
            className={`absolute inset-0 bg-gradient-to-r from-[#185FA5] via-[#1D9E75] to-[#185FA5] bg-[length:200%_100%] ${
              fadeOut ? "opacity-0" : "animate-loading-bar"
            }`} 
          />
        </div>

        <div className="mt-6">
          <p className="text-[9px] font-bold tracking-[0.4em] text-[#0F2744]/30 uppercase">
            {fadeOut ? "Ready" : "Loading"}
          </p>
        </div>
      </div>

      {/* Subtle decorative glow - optimized with low opacity and blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#185FA5]/3 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
