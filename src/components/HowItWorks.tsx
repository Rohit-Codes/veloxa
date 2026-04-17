"use client";
import { Search, PenTool, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Strategy & Discovery",
    description: "We analyze your niche, competitors, and target audience to create a roadmap for conversion.",
    color: "bg-blue-500/10 text-blue-600 border-blue-200",
  },
  {
    icon: PenTool,
    title: "2. Custom High-End Design",
    description: "Our designers craft a premium, custom interface that builds instant authority for your brand.",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  },
  {
    icon: Rocket,
    title: "3. Speed Optimized Launch",
    description: "We develop and launch your site in 7-14 days, optimized for mobile, SEO, and lightning speed.",
    color: "bg-amber-500/10 text-amber-600 border-amber-200",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F1EFE8]/30 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#1D9E75]/10 border border-[#1D9E75]/20">
            <span className="text-[#1D9E75] font-bold text-xs uppercase tracking-widest">Our Framework</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F2744] tracking-tight mb-6">
            Get Your Website Live in <span className="text-[#1D9E75]">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-[#2C2C2A]/70 font-medium">
            We&apos;ve simplified the process to get you from idea to conversion-ready website in record time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl p-8 border border-[#0F2744]/5 hover:border-[#1D9E75]/30 hover:shadow-[0_20px_50px_-15px_rgba(29,158,117,0.1)] transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${step.color}`}>
                <step.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0F2744] mb-4">{step.title}</h3>
              <p className="text-[#2C2C2A]/70 font-medium leading-relaxed">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 z-20">
                  <ArrowRight className="text-[#0F2744]/10 w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-welcome-popup"))}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0F2744] text-white rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-lg text-sm cursor-pointer"
            >
              Start My 14-Day Sprint
              <ArrowRight size={16} />
            </button>
        </div>
      </div>
    </section>
  );
}
