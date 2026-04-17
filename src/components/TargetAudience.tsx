"use client";
import { Building2, Rocket, Briefcase, Store } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Small Businesses",
    description: "Get a professional presence that ranks on Google and brings local customers to your door.",
  },
  {
    icon: Rocket,
    title: "Startups & Tech",
    description: "High-performance Next.js sites that scale with your growth and impress investors.",
  },
  {
    icon: Briefcase,
    title: "Agencies & Coaches",
    description: "Personal brand websites that build instant authority and automate your lead booking.",
  },
  {
    icon: Store,
    title: "Local Shops",
    description: "Modern e-commerce solutions that make selling online as easy as selling in person.",
  },
];

export default function TargetAudience() {
  return (
    <section className="py-20 bg-[#F1EFE8]/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F2744] mb-4">
            Who This Is <span className="text-[#1D9E75]">Perfect For</span>
          </h2>
          <p className="text-lg text-[#2C2C2A]/70 max-w-2xl mx-auto">
            We specialize in niche-specific websites that don&apos;t just look good—they work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-3xl border border-[#0F2744]/5 hover:border-[#1D9E75]/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0F2744]/5 text-[#0F2744] flex items-center justify-center mb-6 group-hover:bg-[#1D9E75] group-hover:text-white transition-all duration-300">
                <audience.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0F2744] mb-3">{audience.title}</h3>
              <p className="text-sm text-[#2C2C2A]/70 leading-relaxed font-medium">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
