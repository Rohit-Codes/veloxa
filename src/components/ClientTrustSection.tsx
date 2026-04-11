"use client";

import { useEffect, useRef, useState, memo } from "react";
import { CalendarCheck, Gauge, Quote, Star } from "lucide-react";

// --- Custom Hooks ---
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

// --- Data ---
const testimonials = [
  {
    quote: "Veloxa transformed our online presence. Our enquiries doubled within 3 months. The team understood our business from day one.",
    name: "Arjun Mehta",
    role: "Founder, Mehta Realtors Pvt. Ltd.",
    initials: "AM",
    gradient: "from-[#1D9E75] to-[#185FA5]"
  },
  {
    quote: "Our store runs faster than ever and sales are up significantly. They delivered where others failed.",
    name: "Priya Sharma",
    role: "CEO, Shagun Sarees & Co.",
    initials: "PS",
    gradient: "from-[#185FA5] to-[#0F2744]"
  },
  {
    quote: "They handled all the technical details beautifully. I just had to focus on running my business.",
    name: "Dr. Rohit Kapoor",
    role: "Director, Kapoor Wellness Clinic",
    initials: "RK",
    gradient: "from-[#1D9E75] to-[#2C2C2A]"
  },
  {
    quote: "They built our platform from scratch in under 6 weeks. It's clean, fast, and our clients love it.",
    name: "Sneha Agarwal",
    role: "Founder, Agarwal Events & Hospitality",
    initials: "SA",
    gradient: "from-[#1D9E75] to-[#185FA5]"
  },
  {
    quote: "We ranked on the first page of Google within 60 days. Highly recommend their SEO expertise.",
    name: "Vikram Nair",
    role: "Owner, Nair's Auto Workshop",
    initials: "VN",
    gradient: "from-[#185FA5] to-[#0F2744]"
  },
  {
    quote: "More like a tech partner than a vendor. Our online presence has never looked better.",
    name: "Kavya Iyer",
    role: "Co-Founder, Iyer Learning Academy",
    initials: "KI",
    gradient: "from-[#1D9E75] to-[#2C2C2A]"
  }
];

// --- Components ---
const AnimatedCounter = memo(({ 
  target, 
  label, 
  inView,
  delay
}: { 
  target: number; 
  label: string; 
  inView: boolean;
  delay: string;
}) => {
  const count = useCountUp(target, 2000, inView);

  return (
    <div 
      className={`observe-me opacity-0 translate-y-4 data-[intersected=true]:opacity-100 data-[intersected=true]:translate-y-0 transition-all duration-700 ease-out ${delay} relative flex flex-col group`}
      aria-label={`${target} ${label}`}
    >
      <div className="text-4xl md:text-5xl font-black text-[#0F2744] mb-1">
        {count}<span className="text-[#1D9E75]">+</span>
      </div>
      <div className="text-sm text-[#2C2C2A]/75 font-semibold">
        {label}
      </div>
    </div>
  );
});
AnimatedCounter.displayName = 'AnimatedCounter';

export default function ClientTrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Intersection Observer for Scroll Animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            const elements = entry.target.querySelectorAll(".observe-me");
            elements.forEach((el) => {
              el.setAttribute("data-intersected", "true");
            });
            // Once triggered, we can stop observing
            if (sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);

  // Marquee Auto-Advance Interval
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section 
      ref={sectionRef}
      id="client-trust"
      aria-labelledby="trust-heading"
      className="relative w-full overflow-hidden bg-[#F1EFE8] py-16 md:py-28 px-4 sm:px-8 md:px-16 lg:px-24"
    >
      {/* Soft ambient orbs matching Services */}
      <div className="absolute top-0 left-[20%] w-[45%] h-[70%] rounded-full bg-[#185FA5]/12 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[20%] w-[45%] h-[70%] rounded-full bg-[#1D9E75]/12 blur-[120px] pointer-events-none" />

      {/* Subtle modern Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(#0F2744 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">
        
        {/* Left Column */}
        <div className="flex flex-col items-start justify-center">
          {/* Micro Pill */}
          <div className="observe-me opacity-0 translate-y-8 data-[intersected=true]:opacity-100 data-[intersected=true]:translate-y-0 transition-all duration-700 ease-out inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D9E75]"></span>
            </span>
            <span className="text-[#0F2744] font-medium text-[11px] sm:text-xs tracking-widest uppercase">
              Trusted by Founders & Businesses
            </span>
          </div>

          <h2 
            id="trust-heading"
            className="observe-me opacity-0 translate-y-8 data-[intersected=true]:opacity-100 data-[intersected=true]:translate-y-0 transition-all duration-700 ease-out delay-[100ms] text-3xl sm:text-4xl md:text-5xl font-black text-[#0F2744] tracking-tight leading-[1.1] max-w-md mb-6"
          >
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
                Real Results
              </span>
            </span>{" "}
            for Real Businesses Across India
          </h2>

          <p className="observe-me opacity-0 translate-y-8 data-[intersected=true]:opacity-100 data-[intersected=true]:translate-y-0 transition-all duration-700 ease-out delay-[200ms] text-base md:text-lg text-[#2C2C2A]/75 font-medium leading-relaxed max-w-md mb-8">
            We build high-performance, SEO-optimized websites that drive long-term growth for startups and brands across India. Our clients' success speaks for itself.
          </p>

          <div className="w-16 h-[2px] bg-gradient-to-r from-[#1D9E75] to-[#185FA5] rounded-full mb-8" />

          {/* Counters Grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <AnimatedCounter 
              target={120} 
              label="Projects Delivered" 
              inView={inView}
              delay="delay-[300ms]"
            />
            <AnimatedCounter 
              target={95} 
              label="Happy Clients" 
              inView={inView}
              delay="delay-[400ms]"
            />
          </div>
        </div>

        {/* Right Column - Marquee */}
        <div className="relative w-full flex flex-col items-center justify-center h-full min-h-[400px]">
          <div 
            className="relative w-full max-w-lg mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="region" 
            aria-label="Client testimonials" 
            aria-live="polite"
          >
            {/* Testimonials Stack */}
            <div className="relative grid grid-cols-1 grid-rows-1">
              {testimonials.map((t, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div 
                    key={idx}
                    className={`testimonial-card col-start-1 row-start-1 bg-white/60 border border-white/60 hover:bg-white hover:border-[#1D9E75]/30 backdrop-blur-md shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-600 ease-in-out ${
                      isActive 
                        ? 'opacity-100 translate-y-0 z-10' 
                        : 'opacity-0 -translate-y-2 z-0 pointer-events-none'
                    }`}
                    style={{ 
                      willChange: isActive ? 'opacity, transform' : 'auto'
                    }}
                    aria-hidden={!isActive}
                  >
                    <div className="flex flex-col items-center">
                      <Quote className="w-10 h-10 text-[#1D9E75]/50 mb-4" aria-hidden="true" fill="currentColor" />
                      
                      <p className="text-base md:text-lg text-[#2C2C2A]/85 font-medium leading-relaxed text-center italic min-h-[4.5rem] flex items-center justify-center">
                        "{t.quote}"
                      </p>

                      <div className="flex justify-center gap-1 mt-5" aria-label="5 out of 5 stars" role="img">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" aria-hidden="true" />
                        ))}
                      </div>

                      <div className="w-12 h-px bg-[#1D9E75]/30 mx-auto mt-5 mb-5" />

                      <div className="flex items-center justify-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white bg-gradient-to-br ${t.gradient}`}>
                          {t.initials}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-[#0F2744]">{t.name}</span>
                          <span className="text-xs text-[#2C2C2A]/70 mt-0.5">{t.role}</span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar (Section Indicator) */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 rounded-b-[1.5rem] overflow-hidden bg-[#0F2744]/5">
                      {isActive && (
                        <div 
                          key={`progress-${idx}`}
                          className="h-full bg-gradient-to-r from-[#1D9E75] to-[#185FA5] progress-bar"
                          style={{
                            animationPlayState: isHovered ? 'paused' : 'running'
                          }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Dots (Slider Indicators) */}
            <div className="flex justify-center gap-2 mt-12 sm:mt-16">
              {testimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  aria-label={`View testimonial ${dotIdx + 1}`}
                  className={`transition-all duration-300 w-2 h-2 rounded-full ${
                    activeIndex === dotIdx 
                      ? 'bg-[#1D9E75] w-6' 
                      : 'bg-[#0F2744]/20 hover:bg-[#0F2744]/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes progressFill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .progress-bar {
          animation: progressFill 5000ms linear forwards;
          transform-origin: left;
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-card { transition: opacity 0.1s !important; transform: none !important; }
          .observe-me { transition: opacity 0.1s !important; transform: none !important; }
          .progress-bar { animation: none !important; width: 100%; }
        }
      `}} />
    </section>
  );
}
