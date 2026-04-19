"use client";

import { Check, X, Shield, Zap, Search, Wallet, Code2, ArrowRight } from "lucide-react";

export default function ComparisonSection() {
  const comparisonData = [
    {
      feature: "Technology",
      icon: <Code2 className="w-5 h-5" />,
      competitor: "Generic WordPress Templates",
      veloxa: "Custom Next.js / React",
    },
    {
      feature: "Speed",
      icon: <Zap className="w-5 h-5" />,
      competitor: "4-6 Seconds (Slow)",
      veloxa: "<1 Second (Instant)",
    },
    {
      feature: "SEO",
      icon: <Search className="w-5 h-5" />,
      competitor: "Hard to rank on Google",
      veloxa: "Google-First Architecture",
    },
    {
      feature: "Security",
      icon: <Shield className="w-5 h-5" />,
      competitor: "High Risk of Hacking",
      veloxa: "Bank-Grade Security",
    },
    {
      feature: "Hidden Costs",
      icon: <Wallet className="w-5 h-5" />,
      competitor: "Monthly Plugin/Hosting Fees",
      veloxa: "Zero Hidden Fees",
    },
  ];

  return (
    <section 
      id="comparison" 
      aria-labelledby="comparison-heading"
      className="relative py-24 bg-[#F1EFE8] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[#185FA5]/10 blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#1D9E75]/10 blur-[80px] md:blur-[120px] pointer-events-none" />
      
      {/* Subtle modern Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.2]"
        style={{
          backgroundImage: "radial-gradient(#0F2744 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D9E75]"></span>
            </span>
            <span className="text-[#0F2744] font-medium text-[11px] sm:text-xs tracking-widest uppercase">
              The Visual Winner
            </span>
          </div>
          
          <h2 
            id="comparison-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0F2744] tracking-tight leading-[1.1] mb-6"
          >
            Why Veloxa is <br className="hidden sm:block" />
            <span className="relative inline-block sm:whitespace-nowrap">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#185FA5]/10 to-[#1D9E75]/10 blur-sm filter"></span>
              <span
                className="relative text-transparent bg-clip-text animate-[gradient_4s_linear_infinite]"
                style={{
                  background: "linear-gradient(90deg, #185FA5, #1D9E75, #185FA5)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Better Than The Rest
              </span>
            </span>
          </h2>
          
          <p className="text-lg text-[#2C2C2A]/70 max-w-2xl mx-auto font-medium">
            Business owners love Veloxa because we don&apos;t just build websites; we build high-performance assets that dominate competitors.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-hidden rounded-[2.5rem] border-2 border-white bg-white/40 backdrop-blur-xl shadow-2xl relative">
          {/* Veloxa Column Highlight Overlay */}
          <div className="absolute top-0 right-0 w-[35%] h-full bg-white/40 border-l border-white/60 pointer-events-none z-0" />
          
          <table className="w-full text-left border-collapse relative z-10">
            <thead>
              <tr>
                <th className="p-10 text-[#0F2744] font-black text-2xl w-[30%]">Feature</th>
                <th className="p-10 text-[#0F2744]/40 font-bold text-xl w-[35%]">Cheap Agencies (₹3,999)</th>
                <th className="p-10 bg-[#0F2744] text-white w-[35%]">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1D9E75] mb-1">Recommended</span>
                    <span className="text-2xl font-black">Veloxa Next.js (₹10,000)</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0F2744]/5">
              {comparisonData.map((row, index) => (
                <tr key={index} className="group hover:bg-white/40 transition-colors">
                  <td className="p-8">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#0F2744] text-[#F1EFE8] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        {row.icon}
                      </div>
                      <span className="font-bold text-xl text-[#0F2744]">{row.feature}</span>
                    </div>
                  </td>
                  <td className="p-8">
                    <div className="flex items-center gap-3 text-[#FF5F57]/60 font-semibold text-lg italic">
                      <X className="w-5 h-5 shrink-0" strokeWidth={3} />
                      {row.competitor}
                    </div>
                  </td>
                  <td className="p-8 bg-white/60 backdrop-blur-sm">
                    <div className="flex items-center gap-4 text-[#0F2744] font-black text-xl">
                      <div className="w-8 h-8 rounded-full bg-[#1D9E75] flex items-center justify-center text-white shadow-lg shadow-[#1D9E75]/30">
                        <Check className="w-5 h-5" strokeWidth={4} />
                      </div>
                      {row.veloxa}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile & Tablet Card View */}
        <div className="lg:hidden space-y-6">
          {comparisonData.map((row, index) => (
            <div key={index} className="group rounded-3xl border border-white bg-white/60 backdrop-blur-md p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative">
               <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-2xl bg-[#0F2744] text-white flex items-center justify-center shadow-lg">
                   {row.icon}
                 </div>
                 <h3 className="text-2xl font-black text-[#0F2744]">{row.feature}</h3>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="p-5 rounded-2xl bg-[#FF5F57]/5 border border-[#FF5F57]/10 flex flex-col justify-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#FF5F57]/60 mb-2 block">Cheap Agency</span>
                    <div className="flex items-center gap-2 text-base font-bold text-[#FF5F57]/80">
                       <X className="w-4 h-4 shrink-0" />
                       {row.competitor}
                    </div>
                 </div>
                 
                 <div className="p-5 rounded-2xl bg-[#1D9E75]/10 border-2 border-[#1D9E75]/30 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 opacity-10">
                      <Check className="w-12 h-12 text-[#1D9E75]" strokeWidth={4} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#1D9E75] mb-2 block relative z-10">Veloxa Standard</span>
                    <div className="flex items-center gap-2 text-lg font-black text-[#0F2744] relative z-10">
                       <div className="w-6 h-6 rounded-full bg-[#1D9E75] flex items-center justify-center text-white shrink-0">
                         <Check className="w-4 h-4" strokeWidth={4} />
                       </div>
                       {row.veloxa}
                    </div>
                 </div>
               </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
             <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-welcome-popup"))}
                className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-full font-black text-white bg-[#0F2744] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(15,39,68,0.3)] cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#185FA5] to-[#1D9E75] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-3 text-lg tracking-tight">
                  Choose the High-Performance Option
                  <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
              <p className="mt-6 text-[#0F2744]/40 text-sm font-bold uppercase tracking-widest">
                Start ranking on Google in 7 days
              </p>
        </div>
      </div>
    </section>
  );
}
