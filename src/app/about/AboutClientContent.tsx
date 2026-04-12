"use client";

import { useEffect, useRef, useState, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Layers, Rocket, FolderCheck, Users, CalendarDays, Gauge, Terminal, GitBranch } from "lucide-react";

// --- Custom Hook ---
function useCountUp(target: number, duration: number = 2000, trigger: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setCount(Math.floor(easeOutQuart(progress) * target));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [target, duration, trigger]);

  return count;
}

const AnimatedCounter = memo(({ 
  target, 
  inView,
  colorClass,
  isPlus
}: { 
  target: number; 
  inView: boolean;
  colorClass: string;
  isPlus?: boolean;
}) => {
  const count = useCountUp(target, 2000, inView);

  return (
    <>
      <div className={`text-7xl md:text-8xl font-black text-[#0F2744] mb-2`}>
         {count}<span className={`${colorClass} bg-clip-text text-transparent`} style={colorClass.includes('gradient') ? { backgroundImage: 'linear-gradient(90deg, #1D9E75, #185FA5)' } : {}}>{isPlus ? '+' : ''}</span>
      </div>
    </>
  );
});
AnimatedCounter.displayName = 'AnimatedCounter';

const AnimatedCounterSmall = memo(({ 
  target, 
  inView,
  isPlus,
  className = "text-[#0F2744]"
}: { 
  target: number; 
  inView: boolean;
  isPlus?: boolean;
  className?: string;
}) => {
  const count = useCountUp(target, 2000, inView);

  return (
    <>
      <span className={`text-6xl md:text-7xl font-black ${className}`}>
         {count}{isPlus ? '+' : ''}
      </span>
    </>
  );
});
AnimatedCounterSmall.displayName = 'AnimatedCounterSmall';

const AnimatedCounterGradient = memo(({ 
  target, 
  inView,
  isPlus
}: { 
  target: number; 
  inView: boolean;
  isPlus?: boolean;
}) => {
  const count = useCountUp(target, 2000, inView);

  return (
    <>
      <span className={`text-6xl md:text-7xl font-black`} style={{
                  background: "linear-gradient(90deg, #1D9E75, #185FA5)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
         {count}{isPlus ? '+' : ''}
      </span>
    </>
  );
});
AnimatedCounterGradient.displayName = 'AnimatedCounterGradient';

export default function AboutClientContent() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const [inViewWhoWeAre, setInViewWhoWeAre] = useState(false);
  const [inViewStats, setInViewStats] = useState(false);

  useEffect(() => {
    const observerWho = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewWhoWeAre(true);
            const elements = entry.target.querySelectorAll(".observe-who");
            elements.forEach((el) => {
              el.setAttribute("data-intersected", "true");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observerWho.observe(sectionRef.current);
    
    return () => observerWho.disconnect();
  }, []);

  useEffect(() => {
    const observerStats = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewStats(true);
            const elements = entry.target.querySelectorAll(".observe-stat");
            elements.forEach((el) => {
              el.setAttribute("data-intersected", "true");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) observerStats.observe(statsRef.current);
    
    return () => observerStats.disconnect();
  }, []);

  return (
    <main>
      {/* 🌌 SECTION 1 — About Us Hero Banner */}
      <section 
        className="relative flex flex-col items-center justify-center pt-32 pb-16 px-6 md:px-16 text-center overflow-hidden bg-[#F1EFE8]"
      >
        {/* Modern High-End Grid / Dotted Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#0F2744 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        {/* Animated glow orbs - Light theme style */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#185FA5]/15 blur-[120px] pointer-events-none mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#1D9E75]/15 blur-[120px] pointer-events-none mix-blend-multiply"></div>

        {/* --- ANIMATED CODING OBJECTS --- */}
        <div className="hidden lg:flex absolute top-[25%] left-[5%] items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#185FA5]/5 border border-[#185FA5]/10 backdrop-blur-sm text-[#185FA5]/40 font-mono text-xs animate-[float_14s_ease-in-out_infinite] select-none pointer-events-none">
          <span className="text-[#1D9E75]/60">&lt;</span>
          <span>div</span>
          <span className="text-[#1D9E75]/60">/&gt;</span>
        </div>

        <div className="hidden lg:flex absolute bottom-[25%] right-[5%] flex-col gap-1 px-3 py-2 rounded-lg bg-[#0F2744]/5 border border-[#0F2744]/10 backdrop-blur-sm animate-[float_18s_ease-in-out_infinite_reverse] select-none pointer-events-none">
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-[#FF5F57]/50"></span>
            <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/50"></span>
            <span className="w-2 h-2 rounded-full bg-[#28C840]/50"></span>
          </div>
          <span className="font-mono text-[10px] text-[#185FA5]/40">$ npm run dev</span>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
          {/* Modern Pill Tagline (Matches Home) */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm opacity-0 animate-[fade-in-down_0.8s_ease-out_0.1s_forwards]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D9E75]"></span>
            </span>
            <span className="text-[#0F2744] font-medium text-[11px] sm:text-xs tracking-wide">
              About Veloxa
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-[#0F2744] tracking-tight leading-[1.1] mb-5 sm:mb-6 opacity-0 animate-[fade-in-scale_0.8s_ease-out_0.2s_forwards]">
            Driven by Performance. <br/>
            <span className="relative inline-block whitespace-nowrap">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#185FA5]/10 to-[#1D9E75]/10 blur-sm filter"></span>
              <span 
                className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#185FA5] via-[#1D9E75] to-[#185FA5] bg-[length:200%_auto] animate-[gradientShift_4s_linear_infinite]"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                Defined by Results.
              </span>
            </span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-[#2C2C2A]/80 leading-relaxed font-medium mb-8 sm:mb-10 text-balance opacity-0 animate-[fade-in-up_0.8s_ease-out_0.35s_forwards] px-2 sm:px-0">
            We combine technical excellence with strategic design to deliver websites that don’t just look great — they perform, rank, and convert.
          </p>
        </div>
      </section>

      {/* 👁️ SECTION 2 — Who We Are */}
      <section 
        ref={sectionRef}
        id="who-we-are"
        aria-labelledby="who-we-are-heading"
        className="relative w-full py-28 md:py-36 px-6 md:px-16 lg:px-24 bg-[#F1EFE8]"
      >
        {/* Bottom separator */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#185FA5]/20 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col items-start order-1">
            {/* Modern Pill (Matches Services) */}
            <div className="observe-who opacity-0 translate-y-8 data-[intersected=true]:opacity-100 data-[intersected=true]:translate-y-0 transition-all duration-700 ease-out inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D9E75]"></span>
              </span>
              <span className="text-[#0F2744] font-medium text-[11px] sm:text-xs tracking-widest uppercase">
                Who We Are
              </span>
            </div>

            <h2 
              id="who-we-are-heading"
              className="observe-who opacity-0 translate-y-8 data-[intersected=true]:opacity-100 data-[intersected=true]:translate-y-0 transition-all duration-700 delay-[100ms] text-4xl sm:text-5xl md:text-5xl font-black text-[#0F2744] tracking-tight leading-[1.1] max-w-md mb-8"
            >
              A Passionate Team Committed to Your{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#185FA5]/10 to-[#1D9E75]/10 blur-sm filter"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#185FA5] via-[#1D9E75] to-[#185FA5] bg-[length:200%_auto] animate-[gradientShift_4s_linear_infinite]"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  Growth
                </span>
              </span>
            </h2>

            {/* Core Values Vertical Marquee */}
            <div className="w-full mt-8 flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#0F2744]/40 mb-3 font-semibold">Our Core Values</span>
              
              <div 
                className="h-52 overflow-hidden w-fit relative group"
                aria-label="Veloxa core values" 
                role="marquee"
              >
                {/* Grading mask for top/bottom fading */}
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#F1EFE8] to-transparent z-10"></div>
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#F1EFE8] to-transparent z-10"></div>
                
                <div className="values-marquee flex flex-col whitespace-nowrap group-hover:[animation-play-state:paused]">
                  {/* Two lists for seamless loop */}
                  {[...Array(2)].map((_, i) => (
                    <ul key={i} className="flex flex-col">
                      {[
                        "Client-First Mindset",
                        "Speed Without Compromise",
                        "Pixel-Perfect Design",
                        "SEO-Driven Development",
                        "Transparent Communication",
                        "Continuous Innovation",
                        "Mobile-First Approach",
                        "Results Over Aesthetics",
                        "Clean & Scalable Code",
                        "Honest Pricing Always",
                        "Long-Term Partnerships",
                        "Data-Informed Decisions",
                        "Accessibility by Default",
                        "Performance is Non-Negotiable",
                        "Creative Problem Solving",
                        "Zero Hidden Fees Policy"
                      ].map((value, idx) => (
                        <li 
                          key={idx}
                          className="text-sm font-bold text-[#0F2744]/60 border-l-[3px] border-[#185FA5]/40 pl-4 py-2.5 my-1 transition-all duration-300 hover:text-[#0F2744] hover:border-[#185FA5] cursor-default w-max"
                        >
                          {value}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              href="/contact"
              className="observe-who opacity-0 data-[intersected=true]:animate-[popIn_0.5s_cubic-bezier(0.34,1.56,0.64,1)_0.4s_both] bg-[#0F2744] text-white rounded-full px-8 py-4 font-bold inline-flex items-center gap-3 mt-10 hover:shadow-[0_10px_40px_-10px_rgba(15,39,68,0.5)] active:scale-[0.97] transition-all duration-300 group"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative min-h-[550px] w-full order-2 lg:order-2 flex justify-center lg:justify-end pr-0 lg:pr-8">
            
            {/* Image 1 - Large Primary */}
            <div 
              className="absolute top-0 left-0 lg:left-4 w-[75%] aspect-[4/5] object-cover rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-[0.5rem] rounded-br-[0.5rem] border-2 border-[#1D9E75]/20 shadow-[0_32px_64px_rgba(0,0,0,0.1)] overflow-hidden animate-[floatSlow_8s_ease-in-out_infinite]"
            >
              <Image 
                src="/images/about-team.png"
                alt="Veloxa web development team collaborating in a modern office"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Floating Badge on Image 1 */}
            <div className="absolute bottom-16 lg:bottom-12 left-[-10px] lg:left-[-20px] bg-white backdrop-blur-md border border-black/5 rounded-2xl px-5 py-3 flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-20 animate-[floatSlow_6s_ease-in-out_infinite_1s]">
              <Rocket className="text-[#1D9E75] w-5 h-5" />
              <span className="text-sm font-bold text-[#0F2744]">120+ Projects Launched</span>
            </div>

            {/* Teal Corner Accent */}
            <div className="absolute top-[-12px] left-[-12px] lg:left-[4px] w-24 h-24 border-l-2 border-t-2 border-[#1D9E75]/30 rounded-tl-2xl z-20 animate-[floatSlow_8s_ease-in-out_infinite]" />

            {/* Image 2 - Smaller Overlapping */}
            <div 
              className="absolute bottom-0 right-0 w-[55%] aspect-square object-cover rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-lg rounded-bl-lg border-[3px] border-[#F1EFE8] shadow-[0_24px_48px_rgba(0,0,0,0.15)] overflow-hidden animate-[floatSlow_8s_ease-in-out_infinite_2s]"
              style={{ outline: '2px solid rgba(24,95,165,0.15)', outlineOffset: '0px' }}
            >
              <Image 
                src="/images/about-work.png"
                alt="Designer working on a modern web UI"
                fill
                className="object-cover"
              />
            </div>

            {/* Electric Blue Corner Accent */}
            <div className="absolute bottom-[-12px] right-[-12px] w-20 h-20 border-r-2 border-b-2 border-[#185FA5]/30 rounded-br-[1.5rem] z-20 animate-[floatSlow_8s_ease-in-out_infinite_2s]" />

            {/* Dot Grid Pattern cluster */}
            <div className="absolute top-[10%] right-[-5px] grid grid-cols-4 gap-2 z-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#185FA5]/20" />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 📊 SECTION 3 — Why Choose Us / Stats */}
      <section 
        ref={statsRef}
        aria-labelledby="why-choose-heading"
        className="relative w-full py-28 md:py-36 px-6 md:px-16 lg:px-24 overflow-hidden bg-[#F1EFE8]"
      >
        {/* Soft ambient orbs matching previous sections */}
        <div className="absolute top-0 left-[-8%] w-[45%] h-[70%] rounded-full bg-[#185FA5]/12 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-8%] w-[45%] h-[70%] rounded-full bg-[#1D9E75]/12 blur-[120px] pointer-events-none" />

        {/* Subtle modern Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.25]"
          style={{
            backgroundImage: "radial-gradient(#0F2744 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        {/* Top & Bottom separators */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#185FA5]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1D9E75]/20 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center">
            {/* Modern Pill (Matches Services) */}
            <div className="observe-stat opacity-0 translate-y-8 data-[intersected=true]:opacity-100 data-[intersected=true]:translate-y-0 transition-all duration-700 ease-out inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D9E75]"></span>
              </span>
              <span className="text-[#0F2744] font-medium text-[11px] sm:text-xs tracking-widest uppercase">
                Why Choose Us
              </span>
            </div>

            <h2 id="why-choose-heading" className="observe-stat opacity-0 translate-y-8 data-[intersected=true]:opacity-100 data-[intersected=true]:translate-y-0 transition-all duration-700 delay-[100ms] text-4xl sm:text-5xl md:text-5xl font-black text-[#0F2744] text-center max-w-2xl mx-auto mt-4 leading-[1.1]">
              Numbers That Prove We Deliver — <br/>
              <span className="relative inline-block whitespace-nowrap">
                <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#185FA5]/10 to-[#1D9E75]/10 blur-sm filter"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#185FA5] via-[#1D9E75] to-[#185FA5] bg-[length:200%_auto] animate-[gradientShift_4s_linear_infinite]"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  Every Single Time
                </span>
              </span>
            </h2>

            <p className="text-base md:text-lg text-[#2C2C2A]/70 text-center max-w-xl mx-auto mt-6 mb-16 observe-stat opacity-0 data-[intersected=true]:opacity-100 transition-all duration-700 delay-[200ms] ease-out">
              Behind every number is a business that trusted Veloxa to build their digital presence — and a team that delivered beyond expectations.
            </p>
          </div>

          {/* Stats Display — Unified Grid Layout with Equal Widths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat Card 1 — Projects Completed */}
            <div className="group relative flex flex-col justify-between bg-white/60 border border-white/60 rounded-3xl backdrop-blur-md p-8 overflow-hidden hover:border-[#1D9E75]/30 hover:bg-white hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-400 ease-out observe-stat opacity-0 translate-y-6 data-[intersected=true]:opacity-100 data-[intersected=true]:translate-y-0">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-[#1D9E75] rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FolderCheck className="w-10 h-10 text-[#1D9E75] mb-6 transition-transform group-hover:scale-110 duration-300" />
              <div aria-live="polite" aria-label="120+ Projects Successfully Delivered. Across India and globally.">
                <AnimatedCounterSmall target={120} inView={inViewStats} isPlus={true} className="text-[#1D9E75]" />
                <h3 className="text-lg font-bold text-[#0F2744] mt-4">Projects Delivered</h3>
                <p className="text-sm text-[#2C2C2A]/60 mt-1">Across India and globally</p>
              </div>
            </div>

            {/* Stat Card 2 — Happy Clients */}
            <div className="group relative flex flex-col justify-between bg-white/60 border border-white/60 rounded-3xl backdrop-blur-md p-8 overflow-hidden hover:border-[#185FA5]/30 hover:bg-white hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-400 ease-out observe-stat opacity-0 translate-y-6 data-[intersected=true]:opacity-100 data-[intersected=true]:translate-y-0 delay-[100ms]">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-[#185FA5] rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Users className="w-10 h-10 text-[#185FA5] mb-6 transition-transform group-hover:scale-110 duration-300" />
              <div aria-live="polite" aria-label="95+ Happy Clients. Startups to enterprises.">
                <AnimatedCounterSmall target={95} inView={inViewStats} isPlus={true} className="text-[#185FA5]" />
                <h3 className="text-lg font-bold text-[#0F2744] mt-4">Happy Clients</h3>
                <p className="text-sm text-[#2C2C2A]/60 mt-1">Startups to enterprises</p>
              </div>
            </div>

            {/* Stat Card 3 — Years of Experience */}
            <div className="group relative flex flex-col justify-between bg-white/60 border border-white/60 rounded-3xl backdrop-blur-md p-8 overflow-hidden hover:border-[#1D9E75]/30 hover:bg-white hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-400 ease-out observe-stat opacity-0 translate-y-6 data-[intersected=true]:opacity-100 data-[intersected=true]:translate-y-0 delay-[200ms]">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-[#1D9E75] rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CalendarDays className="w-10 h-10 text-[#1D9E75] mb-6 transition-transform group-hover:scale-110 duration-300" />
              <div aria-live="polite" aria-label="5+ Years in Business. Founded with a mission to deliver fast.">
                <AnimatedCounterSmall target={5} inView={inViewStats} isPlus={true} className="text-[#1D9E75]" />
                <h3 className="text-lg font-bold text-[#0F2744] mt-4">Years in Business</h3>
                <p className="text-sm text-[#2C2C2A]/60 mt-1">Dedicated to technical excellence</p>
              </div>
            </div>

            {/* Stat Card 4 — Performance Score */}
            <div className="group relative flex flex-col justify-between bg-white/60 border border-white/60 rounded-3xl backdrop-blur-md p-8 overflow-hidden hover:border-[#185FA5]/30 hover:bg-white hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-400 ease-out observe-stat opacity-0 translate-y-6 data-[intersected=true]:opacity-100 data-[intersected=true]:translate-y-0 delay-[300ms]">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-[#185FA5] rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex justify-between items-start">
                <Gauge className="w-10 h-10 text-[#185FA5] mb-6 transition-transform group-hover:scale-110 duration-300" />
                {/* Small circular progress ring */}
                <div className="relative w-12 h-12 hidden sm:block">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(15,39,68,0.05)" strokeWidth="10" />
                    <circle 
                      cx="50" cy="50" r="45" fill="none" stroke="#1D9E75" strokeWidth="10" strokeLinecap="round" 
                      className="transition-all duration-[2000ms] ease-out"
                      strokeDasharray="283"
                      strokeDashoffset={inViewStats ? 28.3 : 283} // 90%
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-[#0F2744]">
                    90+
                  </div>
                </div>
              </div>
              <div aria-live="polite" aria-label="90+ Core Web Vitals Score. Guaranteed on every project we build.">
                <AnimatedCounterSmall target={90} inView={inViewStats} isPlus={true} className="text-[#185FA5]" />
                <h3 className="text-lg font-bold text-[#0F2744] mt-4">Average Page Speed</h3>
                <p className="text-sm text-[#2C2C2A]/60 mt-1">Core Web Vitals Optimized</p>
              </div>
            </div>
          </div>

          {/* Bonus Stat Row */}
          <div className="flex flex-wrap justify-center gap-x-12 sm:gap-x-20 gap-y-8 mt-20 observe-stat opacity-0 data-[intersected=true]:opacity-100 transition-all duration-1000 ease-out delay-500">
            <div className="text-center group">
              <div className="text-3xl font-black text-[#1D9E75] group-hover:scale-110 transition-transform duration-300">24hrs</div>
              <div className="text-[11px] uppercase tracking-wider font-bold text-[#0F2744]/40 mt-2">Response Time</div>
            </div>
            <div className="w-px h-12 bg-[#0F2744]/10 hidden sm:block"></div>
            <div className="text-center group">
              <div className="text-3xl font-black text-[#185FA5] group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-[11px] uppercase tracking-wider font-bold text-[#0F2744]/40 mt-2">On-Time Delivery</div>
            </div>
            <div className="w-px h-12 bg-[#0F2744]/10 hidden sm:block"></div>
            <div className="text-center group">
              <div className="text-3xl font-black text-[#1D9E75] group-hover:scale-110 transition-transform duration-300">4.9★</div>
              <div className="text-[11px] uppercase tracking-wider font-bold text-[#0F2744]/40 mt-2">Client Rating</div>
            </div>
          </div>

          {/* Bottom CTA Strip — Now matches homepage CTASection style */}
          <div className="relative z-10 w-full max-w-7xl mx-auto bg-[#0F2744] rounded-[2rem] sm:rounded-[2.5rem] border-2 border-white/60 shadow-2xl p-10 md:p-14 mt-24 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 observe-stat opacity-0 translate-y-8 data-[intersected=true]:opacity-100 data-[intersected=true]:translate-y-0 transition-all duration-700 delay-500 ease-out">
            
            {/* Banner Inner Gradient Orbs */}
            <div className="absolute top-[-50%] left-[-20%] w-[70%] h-[200%] bg-gradient-to-br from-[#185FA5]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-50%] right-[-20%] w-[70%] h-[200%] bg-gradient-to-tl from-[#1D9E75]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-3xl md:text-3xl lg:text-4xl font-black text-[#F1EFE8] tracking-tight leading-[1.1]">
                Ready to add your business <br className="hidden lg:block"/> to these numbers?
              </h3>
              <p className="text-[#F1EFE8]/70 font-medium text-base md:text-lg mt-3 max-w-xl">
                Let's build a high-performance digital presence for your brand.
              </p>
            </div>
            
            <Link 
              href="/contact"
              className="group relative bg-[#F1EFE8] text-[#0F2744] hover:text-[#F1EFE8] rounded-full px-10 py-5 font-black inline-flex items-center gap-3 shadow-[0_0_30px_rgba(29,158,117,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#185FA5] to-[#1D9E75] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
              <span className="relative z-10 flex items-center gap-3">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes slide-x {
          0% { transform: translateX(0vw); }
          100% { transform: translateX(80vw); }
        }
        @keyframes slide-y {
          0% { transform: translateY(0vh); }
          100% { transform: translateY(60vh); }
        }
        @keyframes pan-y {
          0% { top: -10%; transform: rotate(12deg); }
          100% { top: 110%; transform: rotate(180deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes wiggle {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-4px) rotate(-2deg); }
          50% { transform: translateY(0) rotate(0deg); }
          75% { transform: translateY(2px) rotate(2deg); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-scale {
          0% { opacity: 0; transform: scale(0.96); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes marqueeUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .values-marquee {
          animation: marqueeUp 20s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .values-marquee { animation: none !important; }
          .animate-\\[float_10s_ease-in-out_infinite\\] { animation: none !important; }
          [class*="animate-"] { animation-duration: 0.01s !important; }
          .observe-who, .observe-stat { transition: opacity 0.1s !important; transform: none !important; }
          circle { transition: none !important; }
        }
      `}} />
    </main>
  );
}
