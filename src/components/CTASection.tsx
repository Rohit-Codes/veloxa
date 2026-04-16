"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check, Zap } from "lucide-react";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-intersected", "true");
            const elements = entry.target.querySelectorAll(".observe-me");
            elements.forEach((el) => {
              el.setAttribute("data-intersected", "true");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      aria-labelledby="cta-heading"
      className="relative w-full overflow-hidden py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#F1EFE8] flex justify-center"
    >
      {/* Background Ambience (matching PAS/Services) */}
      <div className="absolute top-[0%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#185FA5]/10 blur-[60px] md:blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#1D9E75]/10 blur-[60px] md:blur-[120px] pointer-events-none mix-blend-multiply" />

      {/* Contained CTA Banner */}
      <div className="relative z-10 w-full max-w-6xl mx-auto bg-[#0F2744] rounded-[2rem] sm:rounded-[2.5rem] border-2 border-white/60 shadow-2xl p-8 sm:p-12 md:p-16 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Banner Inner Gradient */}
        <div className="absolute top-[-50%] left-[-20%] w-[70%] h-[200%] bg-gradient-to-br from-[#185FA5]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-50%] right-[-20%] w-[70%] h-[200%] bg-gradient-to-tl from-[#1D9E75]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        {/* Left Content Side */}
        <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left flex-1 max-w-2xl">
          
          {/* Micro Label Pill */}
          <div className="observe-me opacity-0 -translate-y-4 data-[intersected=true]:opacity-100 data-[intersected=true]:translate-y-0 transition-all duration-700 ease-out inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D9E75]"></span>
            </span>
            <span className="text-[#F1EFE8] font-bold text-[10px] sm:text-xs tracking-widest uppercase">
              Ready to Launch?
            </span>
          </div>

          <h2 
            id="cta-heading"
            className="observe-me opacity-0 scale-95 data-[intersected=true]:opacity-100 data-[intersected=true]:scale-100 transition-all duration-700 ease-out delay-150 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-[#F1EFE8] mb-5 tracking-tight"
          >
            Your Next Website Is{" "}
            <span 
              className="relative inline-block text-transparent bg-clip-text mt-1 pb-1"
               style={{
                background: "linear-gradient(90deg, #185FA5, #1D9E75, #185FA5)",
                backgroundSize: "200% auto",
                animation: "gradientShift 4s linear infinite",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              One Conversation Away
            </span>
          </h2>

          <p className="observe-me opacity-0 translate-y-4 data-[intersected=true]:opacity-100 data-[intersected=true]:translate-y-0 transition-all duration-700 ease-out delay-300 text-base md:text-lg text-[#F1EFE8]/70 leading-relaxed max-w-[90%] lg:max-w-xl">
            Whether you&apos;re a startup with a bold idea or an established business ready to upgrade your digital presence, Veloxa delivers high-performance websites that rank, convert, and scale — without the wait.
          </p>

          {/* Trust Micro-line */}
          <div className="observe-me opacity-0 data-[intersected=true]:opacity-100 transition-opacity duration-700 delay-500 mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-x-4 gap-y-2 text-xs text-[#F1EFE8]/50 tracking-wide font-medium">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <Check className="w-3.5 h-3.5 text-[#1D9E75]" /> No contracts.
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <Check className="w-3.5 h-3.5 text-[#1D9E75]" /> No hidden fees.
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <Check className="w-3.5 h-3.5 text-[#1D9E75]" /> Just results.
            </span>
          </div>

        </div>

        {/* Right CTA / Interactive Side */}
        <div className="relative z-10 flex flex-col items-center justify-center lg:shrink-0">
          <div className="observe-me opacity-0 scale-90 data-[intersected=true]:opacity-100 data-[intersected=true]:scale-100 transition-all duration-700 delay-300 w-full">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-welcome-popup"))}
              aria-label="Get your website quote with Veloxa"
              className="cta-button group relative flex items-center justify-center gap-3 w-full sm:w-auto bg-[#F1EFE8] text-[#0F2744] hover:text-white rounded-full px-6 py-4 sm:px-10 sm:py-5 text-sm sm:text-base md:text-lg font-black transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(29,158,117,0.3)] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#185FA5] to-[#1D9E75] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2 tracking-wide">
                Launch My Site in 14 Days
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
              </span>
            </button>
            <p className="mt-3 text-xs sm:text-sm text-[#F1EFE8]/65 font-semibold text-center">
              Get a custom plan in 24 hours
            </p>
          </div>

          {/* Floating Stat Badge relative to CTA Button */}
          <div 
            className="observe-me opacity-0 data-[intersected=true]:opacity-100 transition-all duration-1000 delay-700 absolute -bottom-10 -right-4 sm:-right-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2.5 flex items-center gap-2 pointer-events-none"
            style={{ animation: "floatWobble 6s ease-in-out infinite", willChange: "transform" }}
            aria-hidden="true"
          >
            <div className="w-8 h-8 rounded-full bg-[#1D9E75]/30 flex items-center justify-center text-[#1D9E75] shadow-sm">
              <Zap className="w-3.5 h-3.5 fill-current" />
            </div>
            <div className="flex flex-col pr-1">
              <span className="text-[#F1EFE8] text-sm font-black leading-none">90+</span>
              <span className="text-[#F1EFE8]/70 text-[9px] uppercase tracking-widest font-bold mt-0.5">Vitals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Global Embedded Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes buttonPulse {
          0% { box-shadow: 0 0 0 0 rgba(29,158,117,0.4); }
          70% { box-shadow: 0 0 0 14px rgba(29,158,117,0); }
          100% { box-shadow: 0 0 0 0 rgba(29,158,117,0); }
        }
        @keyframes floatWobble {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(0, -8px, 0) rotate(2deg); }
        }

        .cta-button[data-intersected="true"] {
          animation: buttonPulse 2.5s ease-out 1s infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-button[data-intersected="true"] { animation: none !important; box-shadow: none !important; }
          .animate-ping { animation: none !important; }
        }
      `}} />
    </section>
  );
}
