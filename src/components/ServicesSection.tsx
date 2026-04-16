"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Monitor, TrendingUp, ShoppingBag } from "lucide-react";

export default function ServicesSection() {
  const industries = [
    "SaaS & Tech Startups",
    "E-Commerce & Retail",
    "Healthcare & MedTech",
    "Real Estate & PropTech",
    "Finance & Fintech",
    "Education & EdTech",
    "Restaurants & Food",
    "Legal & Law Firms",
    "Travel & Hospitality",
    "Fitness & Wellness",
    "Fashion & Lifestyle",
    "Media & Publishing",
    "Non-Profits & NGOs",
    "Logistics & Supply Chain",
    "Architecture & Design",
    "Automotive & Mobility",
    "Beauty & Cosmetics",
    "Events & Entertainment",
    "Recruiting & HR Tech",
    "Manufacturing & B2B",
  ];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative w-full overflow-hidden py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-[#F1EFE8]"
    >
      {/* Soft ambient orbs matching ProjectShowcase */}
      <div className="absolute top-0 left-[-8%] w-[45%] h-[70%] rounded-full bg-[#185FA5]/12 blur-[60px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-8%] w-[45%] h-[70%] rounded-full bg-[#1D9E75]/12 blur-[60px] md:blur-[120px] pointer-events-none" />

      {/* Subtle modern Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(#0F2744 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-start lg:w-[45%]">
          {/* Modern Pill Sub-label */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D9E75]"></span>
            </span>
            <span className="text-[#0F2744] font-medium text-[11px] sm:text-xs tracking-widest uppercase">
              What We Do
            </span>
          </div>

          {/* Heading */}
          <h2
            id="services-heading"
            className="text-4xl sm:text-5xl md:text-5xl font-black text-[#0F2744] tracking-tight leading-[1.1] max-w-md mb-8"
          >
            Websites That Drive{" "}
            <span className="relative inline-block whitespace-nowrap">
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
                Growth
              </span>
            </span>
            , Not Just Traffic
          </h2>

          {/* Industry Marquee */}
          <div className="w-full max-w-xs mb-12">
            <p className="text-xs uppercase tracking-widest text-[#0F2744]/40 mb-3 font-semibold">
              Industries We Work With
            </p>
            <div
              className="relative h-48 md:h-56 overflow-hidden w-fit group"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
              }}
              aria-label="Industries we work with"
              role="marquee"
            >
              <div className="flex flex-col marquee-vertical group-hover:[animation-play-state:paused]">
                {/* Double list for infinite loop */}
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex flex-col pb-2">
                    {industries.map((ind, idx) => (
                      <div
                        key={`${i}-${idx}`}
                        className="py-2.5 text-sm font-semibold text-[#0F2744]/60 border-l-[3px] border-[#1D9E75]/40 pl-4 my-1 transition-all duration-300 hover:text-[#0F2744] hover:border-[#1D9E75] cursor-default w-max"
                      >
                        {ind}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-welcome-popup"))}
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white bg-[#0F2744] overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_10px_40px_-10px_rgba(15,39,68,0.3)] text-sm cursor-pointer"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#185FA5] to-[#1D9E75] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-2">
              Let&apos;s Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4 pt-8 lg:pt-0 lg:w-[50%]">
          {/* Card 1 */}
          <div className="group relative flex flex-col sm:flex-row items-start gap-3 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-white/60 border border-white/60 backdrop-blur-md shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white hover:border-[#1D9E75]/30">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#185FA5] to-[#1D9E75] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="shrink-0 w-full sm:w-[180px]">
              <h3 className="text-[1.1rem] font-bold text-[#0F2744] leading-tight group-hover:text-[#185FA5] transition-colors duration-300">
                Custom Web Design & Development
              </h3>
            </div>

            <div className="flex flex-col items-start flex-1 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#185FA5]/10 text-[#185FA5] flex items-center justify-center mb-2 group-hover:bg-[#185FA5] group-hover:text-white transition-all duration-300 shadow-sm object-cover">
                <span aria-hidden="true">
                  <Monitor className="w-5 h-5" />
                </span>
              </div>
              <p className="text-[13px] text-[#2C2C2A]/75 leading-relaxed font-medium">
                We design and develop pixel-perfect, responsive websites tailored
                to your brand — built with Next.js for speed, scalability, and
                seamless user experience.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative flex flex-col sm:flex-row items-start gap-3 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-white/60 border border-white/60 backdrop-blur-md shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white hover:border-[#1D9E75]/30">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#1D9E75] to-[#185FA5] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="shrink-0 w-full sm:w-[180px]">
              <h3 className="text-[1.1rem] font-bold text-[#0F2744] leading-tight group-hover:text-[#1D9E75] transition-colors duration-300">
                SEO & Web Performance
              </h3>
            </div>

            <div className="flex flex-col items-start flex-1 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1D9E75]/10 text-[#1D9E75] flex items-center justify-center mb-2 group-hover:bg-[#1D9E75] group-hover:text-white transition-all duration-300 shadow-sm">
                <span aria-hidden="true">
                  <TrendingUp className="w-5 h-5" />
                </span>
              </div>
              <p className="text-[13px] text-[#2C2C2A]/75 leading-relaxed font-medium">
                From Core Web Vitals to on-page SEO, we engineer websites that
                rank on Google and load in milliseconds — giving your business a
                competitive edge.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative flex flex-col sm:flex-row items-start gap-3 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-white/60 border border-white/60 backdrop-blur-md shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white hover:border-[#1D9E75]/30">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#185FA5] to-[#1D9E75] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="shrink-0 w-full sm:w-[180px]">
              <h3 className="text-[1.1rem] font-bold text-[#0F2744] leading-tight group-hover:text-[#185FA5] transition-colors duration-300">
                E-Commerce & Web App Creation
              </h3>
            </div>

            <div className="flex flex-col items-start flex-1 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#185FA5]/10 text-[#185FA5] flex items-center justify-center mb-2 group-hover:bg-[#185FA5] group-hover:text-white transition-all duration-300 shadow-sm">
                <span aria-hidden="true">
                  <ShoppingBag className="w-5 h-5" />
                </span>
              </div>
              <p className="text-[13px] text-[#2C2C2A]/75 leading-relaxed font-medium">
                From Shopify stores to full-stack web applications, we build
                powerful digital products that convert visitors into customers
                and ideas into revenue.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes gradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .marquee-vertical {
          animation: marqueeUp 24s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-vertical { animation: none !important; }
        }
      `}} />
    </section>
  );
}
