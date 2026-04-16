"use client";
import Link from "next/link";
import { ArrowRight, Sparkles, Star, GitBranch, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-[#F1EFE8] pt-28 pb-12 sm:pt-32">
      {/* Aurora Ambient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#185FA5]/20 blur-[120px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#1D9E75]/20 blur-[120px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-[#185FA5]/10 blur-[100px] pointer-events-none mix-blend-multiply"></div>

      {/* Modern High-End Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(#0F2744 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      {/* --- ANIMATED CODING OBJECTS (Hidden on Mobile) --- */}
      {/* Sliding beam lines */}
      <div className="hidden md:block absolute top-[18%] left-0 w-48 h-[2px] bg-gradient-to-r from-transparent via-[#185FA5] to-transparent blur-[1px] opacity-60 animate-[slide-x_12s_ease-in-out_infinite_alternate]"></div>
      <div className="hidden md:block absolute top-0 right-[22%] w-[2px] h-48 bg-gradient-to-b from-transparent via-[#1D9E75] to-transparent blur-[1px] opacity-60 animate-[slide-y_16s_ease-in-out_infinite_alternate]"></div>

      {/* Floating HTML tag — top-left background */}
      <div className="hidden lg:flex absolute top-[28%] left-[4%] items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#185FA5]/8 border border-[#185FA5]/15 backdrop-blur-sm text-[#185FA5]/50 font-mono text-xs animate-[float_14s_ease-in-out_infinite] select-none pointer-events-none">
        <span className="text-[#1D9E75]/60">&lt;</span>
        <span>div</span>
        <span className="text-[#1D9E75]/60">/&gt;</span>
      </div>

      {/* Floating curly braces — bottom-left background */}
      <div className="hidden lg:flex absolute bottom-[25%] left-[6%] items-center justify-center w-14 h-14 rounded-2xl bg-white/40 border border-[#185FA5]/12 backdrop-blur-md shadow-sm text-[#185FA5]/40 font-mono text-2xl font-black animate-[pan-y_28s_linear_infinite_alternate] select-none pointer-events-none">
        {"{ }"}
      </div>

      {/* Rotating code slash — top-right background */}
      <div className="hidden lg:flex absolute top-[12%] right-[5%] items-center justify-center w-12 h-12 rounded-xl bg-[#1D9E75]/8 border border-[#1D9E75]/15 backdrop-blur-sm text-[#1D9E75]/40 font-mono text-xl font-black animate-[spin-slow_20s_linear_infinite] select-none pointer-events-none">
        /&gt;
      </div>

      {/* Terminal prompt dots — bottom-right background */}
      <div className="hidden lg:flex absolute bottom-[18%] right-[4%] flex-col gap-1 px-3 py-2 rounded-lg bg-[#0F2744]/6 border border-[#0F2744]/10 backdrop-blur-sm animate-[float_18s_ease-in-out_infinite_reverse] select-none pointer-events-none">
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-[#FF5F57]/50"></span>
          <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/50"></span>
          <span className="w-2 h-2 rounded-full bg-[#28C840]/50"></span>
        </div>
        <span className="font-mono text-[10px] text-[#185FA5]/50">
          $ npm run dev
        </span>
      </div>

      {/* Floating Glass Card — Build (top left) */}
      <div className="absolute top-[15%] left-[2%] xl:left-[7%] hidden xl:flex items-center gap-3 bg-white/70 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.05)] animate-[float_6s_ease-in-out_infinite] z-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F2744]/8 text-[#0F2744]">
          <Terminal size={18} />
        </div>
        <div>
          <p className="text-xs font-bold text-[#2C2C2A] uppercase tracking-wider">
            Build
          </p>
          <p className="text-base font-black text-[#1D9E75] font-mono">
            ✓ 1.2s
          </p>
        </div>
      </div>

      {/* Floating Glass Card — Git Deploy (right) */}
      <div className="absolute top-[45%] right-[2%] xl:right-[7%] hidden xl:flex items-center gap-3 bg-white/70 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.05)] animate-[float_8s_ease-in-out_infinite_reverse] z-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1D9E75]/10 text-[#1D9E75]">
          <GitBranch size={20} />
        </div>
        <div>
          <p className="text-xs font-bold text-[#2C2C2A] uppercase tracking-wider">
            Deployed
          </p>
          <p className="text-base font-black text-[#0F2744]">main ✓</p>
        </div>
      </div>

      {/* --- ALL CONTENT WRAPPER FOR VERTICAL CENTERING --- */}
      <div className="relative z-10 w-full flex flex-col items-center mt-4 sm:mt-10">
        {/* MAIN HERO CONTENT */}
        <div className="w-full max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          {/* Value Badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#1D9E75]/10 border border-[#1D9E75]/30 backdrop-blur-md animate-[pulse-green-glow_3s_ease-in-out_infinite] transition-all duration-300">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#1D9E75] shadow-[0_0_8px_#1D9E75]"></span>
            <span className="text-[#0a6e50] font-bold text-[10px] sm:text-[11px] tracking-wider">
              Starting at ₹10K
            </span>
          </div>

          {/* Modern Pill Tagline */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm animate-[fade-in_0.5s_ease-out_forwards]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D9E75]"></span>
            </span>
            <span className="text-[#0F2744] font-medium text-[11px] sm:text-xs tracking-wide">
              From idea to online — fast.
            </span>
          </div>

          {/* Scaled-down Exaggerated Typography H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-[#0F2744] tracking-tight leading-[1.1] mb-5 sm:mb-6 animate-[fade-in-up_0.6s_ease-out_forwards]">
            <span className="block text-sm sm:text-base uppercase tracking-[0.3em] text-[#1D9E75] mb-3 font-bold">
              Expert Web Development Agency
            </span>
            Transform Your Vision Into a{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#185FA5]/10 to-[#1D9E75]/10 blur-sm filter"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#185FA5] via-[#1D9E75] to-[#185FA5] bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
                Stunning Website
              </span>
            </span>
          </h1>

          {/* Much Shorter, Smaller Supporting Paragraph */}
          <p className="max-w-xl text-sm sm:text-base text-[#2C2C2A]/80 leading-relaxed font-medium mb-8 sm:mb-10 text-balance animate-[fade-in-up_0.6s_ease-out_0.1s_forwards] px-2 sm:px-0">
            We build high-performance, fast-loading Next.js websites that
            effortlessly convert your visitors into loyal customers.
          </p>

          {/* Magnetic/Modern CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-12 sm:mb-16 animate-[fade-in-up_0.6s_ease-out_0.2s_forwards]">
            <button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-welcome-popup"))
              }
              className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-white bg-[#0F2744] overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_10px_40px_-10px_rgba(15,39,68,0.5)] text-sm cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#185FA5] to-[#1D9E75] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles size={16} />
                Claim My ₹10K Website
              </span>
            </button>
            <a
              href="#services"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-white/50 backdrop-blur-md border border-[#0F2744]/10 hover:border-[#0F2744]/30 font-bold rounded-full text-[#0F2744] transition-all duration-300 hover:bg-white hover:shadow-lg text-sm cursor-pointer"
            >
              View Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-300" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-[#0F2744]/55 font-semibold -mt-7 sm:-mt-10 mb-12 sm:mb-16 animate-[fade-in-up_0.6s_ease-out_0.3s_forwards]">
            Response within 2 hours (Mon-Fri)
          </p>
        </div>

        {/* --- TRUST & RATING ELEMENTS --- (Now positioned directly under buttons) */}
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-6 pt-8 sm:pt-10 border-t border-[#0F2744]/5 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 animate-[fade-in-up_0.6s_ease-out_0.4s_forwards]">
          <div className="flex flex-col items-center md:items-start gap-2 sm:gap-3">
            <div className="flex -space-x-2">
              {[
                { initials: "AK", from: "#185FA5", to: "#0F2744" },
                { initials: "PR", from: "#1D9E75", to: "#0a6e50" },
                { initials: "SM", from: "#185FA5", to: "#1D9E75" },
                { initials: "RV", from: "#0F2744", to: "#185FA5" },
                { initials: "NK", from: "#1D9E75", to: "#185FA5" },
              ].map((client, i) => (
                <div
                  key={i}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-[#F1EFE8] overflow-hidden relative shadow-sm flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${client.from}, ${client.to})`,
                  }}
                  aria-label={`Client ${client.initials}`}
                >
                  <span className="text-white font-bold text-[9px] sm:text-[10px] select-none">
                    {client.initials}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col text-center md:text-left text-[13px] sm:text-sm text-[#2C2C2A]/80 font-medium">
              <div className="flex items-center gap-1.5 justify-center md:justify-start text-amber-500">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-[#0F2744] font-bold ml-1">5.0</span>
              </div>
              <span>From 50+ happy clients</span>
            </div>
          </div>

          {/* Trusted By Logos (Faux Typography Logos) */}
          <div className="flex flex-col items-center md:items-end gap-2 sm:gap-3 text-[#2C2C2A]/60 text-sm font-medium w-full md:w-auto">
            <p className="tracking-widest uppercase text-[10px] sm:text-xs">
              Trusted by innovative teams
            </p>
            <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 md:gap-8 opacity-60 grayscale">
              <span className="font-serif italic font-bold text-base sm:text-lg">
                Vortex.
              </span>
              <span className="font-sans font-black tracking-tighter text-lg sm:text-xl">
                NEXA
              </span>
              <span className="font-mono font-bold text-base sm:text-lg">
                &lt;Q/&gt;Labs
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes gradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
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
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; box-shadow: 0 0 8px rgba(24, 95, 165, 0.2); }
          50% { opacity: 0.8; box-shadow: 0 0 20px rgba(24, 95, 165, 0.5); }
        }
        @keyframes pulse-green-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(29, 158, 117, 0.2); border-color: rgba(29, 158, 117, 0.3); }
          50% { box-shadow: 0 0 15px rgba(29, 158, 117, 0.5); border-color: rgba(29, 158, 117, 0.6); }
        }
      `,
        }}
      />
    </section>
  );
}
