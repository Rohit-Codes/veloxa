"use client";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter (Lead Magnet)",
    price: "₹6,999",
    description: "Launch your presence fast. Perfect for new businesses.",
    features: [
      "3–5 Pages",
      "Mobile Responsive Design",
      "Modern Basic Design",
      "Delivery in 5–7 Days",
      "Essential Security",
    ],
    cta: "Start My Project",
    popular: false,
  },
  {
    name: "Business (Most Popular)",
    price: "₹14,999",
    description: "Our main revenue driver. High performance and results.",
    features: [
      "5–10 Pages",
      "SEO & Speed Optimized",
      "Conversion-Focused Design",
      "Premium Brand Identity",
      "WhatsApp Chat Integration",
      "Priority Support",
    ],
    cta: "Get Business Plan",
    popular: true,
  },
  {
    name: "Premium (Custom)",
    price: "₹29,999+",
    description: "Serious solutions for serious growth. Full funnel setup.",
    features: [
      "Full Custom UX/UI Design",
      "Advanced Lead Funnels",
      "Third-Party Integrations",
      "E-Commerce Functionality",
      "CMS Training & Manuals",
      "Ongoing Performance Audit",
    ],
    cta: "Build My Funnel",
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F2744] mb-4">
            Transparent Pricing. <span className="text-[#1D9E75]">No Hidden Costs.</span>
          </h2>
          <p className="text-lg text-[#2C2C2A]/70 max-w-2xl mx-auto">
            Get your high-converting website at a price that works for your business. All packages include high-speed hosting and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                plan.popular
                  ? "border-[#1D9E75] bg-white shadow-2xl scale-105 z-10"
                  : "border-[#0F2744]/10 bg-white hover:border-[#1D9E75]/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#1D9E75] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#0F2744] mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black text-[#0F2744]">{plan.price}</span>
                  <span className="text-sm text-[#2C2C2A]/60 font-medium">one-time</span>
                </div>
                <p className="text-sm text-[#2C2C2A]/70 leading-relaxed italic">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm font-medium text-[#0F2744]/80">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#1D9E75]/10 flex items-center justify-center shrink-0">
                      <Check className="text-[#1D9E75] w-3 h-3" strokeWidth={4} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("open-welcome-popup"));
                  if (typeof (window as any).fbq === "function") {
                    // Standard event for Meta optimization ✅
                    (window as any).fbq("track", "Lead");
                    // Custom event for your own tracking ✅
                    (window as any).fbq("trackCustom", "CheckCostClick");
                  }
                }}
                className={`w-full py-4 rounded-2xl font-black transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                  plan.popular
                    ? "bg-[#0F2744] text-white hover:bg-[#185FA5] shadow-xl"
                    : "bg-white border-2 border-[#0F2744] text-[#0F2744] hover:bg-[#0F2744] hover:text-white"
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-sm text-[#0F2744]/60 font-bold mb-4">
               Need a custom enterprise solution?
            </p>
            <a 
              href="https://wa.me/919205568939?text=I%20need%20a%20custom%20website%20quote"
              className="inline-flex items-center gap-2 text-[#1D9E75] font-black hover:underline underline-offset-4"
            >
              Chat on WhatsApp <ArrowRight size={16} />
            </a>
        </div>
      </div>
    </section>
  );
}
