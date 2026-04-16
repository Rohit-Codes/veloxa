"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Check, ArrowRight, Zap } from "lucide-react";

function useScrollReveal(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: "0px" }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function PASSection() {
  const sectionRef = useScrollReveal(0.1);

  const painPoints = [
    "Visitors bounce in seconds without contacting you",
    "Your site looks outdated compared to competitors",
    "Updates take developers days or weeks",
    "You have no idea if Google is showing your site",
  ];

  const outcomes = [
    "Understood in 5 secs",
    "Ranks exactly on Google",
    "You stay in control",
    "Grows leads 24/7",
  ];

  return (
    <section id="about" className="relative w-full bg-[#F1EFE8] py-16 sm:py-24 overflow-hidden flex justify-center">
      
      {/* Background Ambience */}
      <div className="absolute top-[0%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#185FA5]/15 blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#1D9E75]/15 blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#0F2744 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div ref={sectionRef.ref} className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        <div className={`grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 transition-all duration-1000 transform ${sectionRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* ======================================= */}
          {/* LEFT COL: PROBLEM & AGITATION (5 Cols)  */}
          {/* ======================================= */}
          <div className="xl:col-span-5 flex flex-col justify-between space-y-8 lg:space-y-0">
            
            {/* The Problem */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-white shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5F57] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5F57]"></span>
                </span>
                <span className="text-[#0F2744] font-bold text-[10px] sm:text-xs tracking-wide uppercase">
                  Sound Familiar?
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-[#0F2744] tracking-tight leading-[1.05] mb-5 text-balance">
                Your website is silently costing you customers.
              </h2>
              
              <p className="text-base text-[#2C2C2A]/80 font-medium mb-6 leading-relaxed">
                You're doing everything right — ads, outreach, social media. But you're sending traffic to a website that visually fails to convert.
              </p>

              <ul className="space-y-3 mb-8">
                {painPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white border border-[#FF5F57]/20 text-[#FF5F57] flex items-center justify-center shrink-0 shadow-sm">
                      <X size={12} strokeWidth={4} />
                    </div>
                    <span className="text-[#0F2744]/90 font-bold text-sm sm:text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Agitation Box */}
            <div className="relative bg-[#0F2744] rounded-3xl p-6 sm:p-8 border-2 border-white shadow-xl overflow-hidden mt-auto">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#185FA5] rounded-full blur-[40px] opacity-40" />
              
              <h3 className="font-serif italic font-black text-2xl sm:text-3xl text-[#F1EFE8] leading-tight mb-5 relative z-10">
                 "Every day your website underperforms, <span className="text-white border-b-2 border-[#1D9E75]">someone else gets the sale.</span>"
              </h3>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between border border-white/10 relative z-10">
                 <div>
                    <h4 className="text-3xl font-black text-white leading-none">96%</h4>
                    <p className="text-[#F1EFE8]/70 text-[10px] uppercase tracking-widest font-bold mt-1">Bounce Rate</p>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-[#FF5F57]/20 flex items-center justify-center">
                    <X className="text-[#FF5F57]" size={18} strokeWidth={3} />
                 </div>
              </div>
            </div>

            {/* CTA Button placed on left below agitation for mobile/desktop flow */}
            <div className="hidden xl:block mt-6">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-welcome-popup"))}
                className="group relative inline-flex w-full items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-[#0F2744] overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_10px_30px_-10px_rgba(15,39,68,0.5)] border border-[#185FA5]/30 cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#185FA5] to-[#1D9E75] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Transform Your Website
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

          </div>


          {/* ======================================= */}
          {/* RIGHT COL: THE SOLUTION SHIFT (7 Cols)  */}
          {/* ======================================= */}
          <div className="xl:col-span-7 flex flex-col relative h-full">
            
            <div className="flex-1 bg-white/70 backdrop-blur-xl border-2 border-white shadow-[0_20px_50px_-15px_rgba(24,95,165,0.15)] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 flex flex-col">
               
               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#1D9E75]/30 shadow-sm">
                   <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D9E75]"></span>
                   </span>
                   <span className="text-[#0F2744] font-bold text-[10px] tracking-wide uppercase">The Shift</span>
                 </div>
                 <p className="text-[#0F2744] font-black text-lg max-w-[280px] sm:text-right leading-tight">
                   Turn your website into your best 24/7 salesperson.
                 </p>
               </div>

               {/* Ultra Modern Presentation Mockup */}
               <div className="relative w-full flex-1 perspective-2000 group">
                 {/* Aura Glow */}
                <div className="absolute -inset-10 bg-gradient-to-tr from-[#185FA5]/20 via-[#1D9E75]/20 to-[#185FA5]/10 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                <div className="relative h-full min-h-[300px] sm:min-h-[400px] rounded-[1.5rem] border-[6px] border-white shadow-[0_20px_50px_-15px_rgba(15,39,68,0.2)] overflow-hidden bg-black transform rotate-x-[3deg] group-hover:rotate-x-0 group-hover:scale-[1.01] transition-all duration-500">
                  {/* Glass Header */}
                  <div className="bg-[#f2f2f2] w-full h-8 flex items-center px-3 gap-2 border-b border-black/5 z-10 relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] shadow-sm" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-sm" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840] shadow-sm" />
                  </div>
                  
                  {/* Splendid Center Stage Image */}
                  <div className="relative w-full h-[calc(100%-32px)]">
                    <Image 
                      src="/images/latest-mockup.webp" 
                      alt="Modern UI Website Upgrade" 
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1200px) 100vw, 800px"
                    />
                    
                    {/* Modern Overlay Badges */}
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-xl border border-white/20 text-white px-3 py-1.5 rounded-lg shadow-lg hidden sm:block">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 block">Old Way</span>
                       <span className="text-sm font-black">Plain & Slow</span>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-gradient-to-br from-[#1D9E75] to-[#185FA5] border border-white/30 text-white px-3 py-2 rounded-xl shadow-xl flex items-center gap-2 transform hover:-translate-y-1 transition-transform">
                       <Zap size={16} className="fill-white" />
                       <div>
                         <span className="text-[8px] font-bold uppercase tracking-widest text-white/80 block">New Standard</span>
                         <span className="text-sm font-black">High Converting</span>
                       </div>
                    </div>
                  </div>
                </div>
               </div>

               {/* Condensed Outcome Pills */}
               <div className="flex flex-wrap gap-2 mt-6">
                 {outcomes.map((point, index) => (
                   <div key={index} className="flex items-center gap-1.5 bg-white/50 backdrop-blur border border-white px-3 py-1.5 rounded-full shadow-sm text-[#0F2744]">
                     <Check size={12} strokeWidth={4} className="text-[#1D9E75]" />
                     <span className="font-bold text-[11px] sm:text-xs">{point}</span>
                   </div>
                 ))}
               </div>

            </div>
          </div>
          
          {/* CTA for Mobile/Tablet */}
          <div className="xl:hidden w-full mt-4">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-welcome-popup"))}
              className="group relative inline-flex w-full items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-[#0F2744] overflow-hidden transition-all shadow-lg cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#185FA5] to-[#1D9E75] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Transform Your Website
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
