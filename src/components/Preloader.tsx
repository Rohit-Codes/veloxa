"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // We want to wait for the window load event which fires when all resources (images, etc) are loaded
    const handleLoad = () => {
      // Small delay to ensure the user actually sees the premium brand
      const timer = setTimeout(() => {
        setFadeOut(true);
        // Remove from DOM after transition
        const removeTimer = setTimeout(() => {
          setLoading(false);
          // Restore scrolling
          document.body.style.overflow = "";
        }, 800);
        return () => clearTimeout(removeTimer);
      }, 1200);
      return () => clearTimeout(timer);
    };

    // Lock scrolling while loading
    document.body.style.overflow = "hidden";

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback: don't loop forever if something hangs
      const fallback = setTimeout(handleLoad, 6000);
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
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#F1EFE8] transition-all duration-800 ease-[cubic-bezier(0.65,0,0.35,1)] ${
        fadeOut ? "opacity-0 invisible pointer-events-none scale-105" : "opacity-100 visible"
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Logo Container */}
        <div className="relative w-48 h-20 mb-10 overflow-hidden transform transition-all duration-1000">
          <Image
            src="/images/logo_new.webp"
            alt="Veloxa"
            fill
            className={`object-contain transition-all duration-1000 ${
              fadeOut ? "scale-90 opacity-0" : "animate-logo-pulse scale-100 opacity-100"
            }`}
            priority
          />
        </div>

        {/* Premium Loading Progress */}
        <div className="w-56 h-1 bg-[#185FA5]/5 rounded-full overflow-hidden relative">
          <div 
            className={`absolute inset-0 bg-gradient-to-r from-[#185FA5] via-[#1D9E75] to-[#185FA5] bg-[length:200%_100%] transition-transform duration-500 ${
              fadeOut ? "opacity-0" : "animate-loading-bar"
            }`} 
          />
        </div>

        {/* Status Text */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <p className="text-[10px] font-bold tracking-[0.3em] text-[#0F2744]/40 uppercase">
             {fadeOut ? "Experience Ready" : "Initializing Platform"}
          </p>
          <div className="flex gap-1.5 mt-1">
             <span className="w-1 h-1 rounded-full bg-[#185FA5]/20 animate-bounce [animation-delay:-0.3s]" />
             <span className="w-1 h-1 rounded-full bg-[#185FA5]/30 animate-bounce [animation-delay:-0.15s]" />
             <span className="w-1 h-1 rounded-full bg-[#1D9E75]/40 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Aesthetic decorative elements */}
      <div className="absolute top-12 left-12 w-32 h-32 bg-[#185FA5]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-12 right-12 w-48 h-48 bg-[#1D9E75]/5 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
    </div>
  );
}
