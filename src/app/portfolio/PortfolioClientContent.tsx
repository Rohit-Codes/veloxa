"use client";

import { useEffect, useRef, useState, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Code2, Globe, Layout, Search, Filter, Sparkles, Zap, Smartphone, Monitor } from "lucide-react";

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  link: string;
  size: "large" | "medium" | "small";
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "EcoSphere E-commerce",
    category: "E-commerce",
    image: "/images/1.webp",
    description: "A luxury sustainable brand experience with seamless 0.5s page loads.",
    tags: ["Next.js", "Tailwind", "Shopify"],
    link: "#",
    size: "large"
  },
  {
    id: 2,
    title: "Nova SaaS Dashboard",
    category: "SaaS",
    image: "/images/2.webp",
    description: "Complex data visualization simplified into a stunning, intuitive interface.",
    tags: ["React", "D3.js", "Firebase"],
    link: "#",
    size: "medium"
  },
  {
    id: 3,
    title: "Aura Creative Agency",
    category: "Creative",
    image: "/images/3.webp",
    description: "Immersive 3D portfolio with custom GLSL shaders and fluid animations.",
    tags: ["Three.js", "GSAP", "Framer"],
    link: "#",
    size: "medium"
  },
  {
    id: 4,
    title: "Velox Finance App",
    category: "Fintech",
    image: "/images/4.webp",
    description: "Secure, high-speed trading interface for the next generation of investors.",
    tags: ["Next.js", "Supabase", "Redis"],
    link: "#",
    size: "small"
  },
  {
    id: 5,
    title: "Skyline Real Estate",
    category: "Corporate",
    image: "/images/5.webp",
    description: "Premium property listings with AI-powered search and virtual tours.",
    tags: ["TypeScript", "Mapbox", "Sanity"],
    link: "#",
    size: "medium"
  },
  {
    id: 6,
    title: "Pulse Social Network",
    category: "Social",
    image: "/images/6.webp",
    description: "Real-time communication platform handled with sub-millisecond latency.",
    tags: ["Socket.io", "Node.js", "PostgreSQL"],
    link: "#",
    size: "large"
  },
  {
    id: 7,
    title: "Zenth Medical Portal",
    category: "Healthcare",
    image: "/images/7.webp",
    description: "Accessible, patient-first healthcare management system.",
    tags: ["Refine", "GraphQL", "Tailwind"],
    link: "#",
    size: "small"
  },
  {
    id: 8,
    title: "Orbit Learning Platform",
    category: "EdTech",
    image: "/images/8.webp",
    description: "Interactive learning environment for 100k+ concurrent students.",
    tags: ["Next.js", "Prisma", "Vercel"],
    link: "#",
    size: "medium"
  }
];

const CATEGORIES = ["All", "E-commerce", "SaaS", "Fintech", "Corporate", "Healthcare"];

export default function PortfolioClientContent() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = true; // Force true for immediate render

  return (
    <main className="bg-[#F1EFE8]">
      {/* 🌌 SECTION 1 — Portfolio Hero Banner (Matches About) */}
      <section 
        className="relative flex flex-col items-center justify-center pt-40 pb-20 px-6 md:px-16 text-center overflow-hidden bg-[#F1EFE8]"
      >
        {/* Modern High-End Grid / Dotted Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#0F2744 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        {/* Animated glow orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#185FA5]/15 blur-[120px] pointer-events-none mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#1D9E75]/15 blur-[120px] pointer-events-none mix-blend-multiply"></div>

        {/* --- ANIMATED OBJECTS --- */}
        <div className="hidden lg:flex absolute top-[25%] left-[5%] items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#185FA5]/5 border border-[#185FA5]/10 backdrop-blur-sm text-[#185FA5]/40 font-mono text-xs animate-[float_14s_ease-in-out_infinite] select-none pointer-events-none">
          <Monitor className="w-3.5 h-3.5" />
          <span>UI/UX</span>
        </div>

        <div className="hidden lg:flex absolute bottom-[25%] right-[5%] flex-col gap-1 px-3 py-2 rounded-lg bg-[#0F2744]/5 border border-[#0F2744]/10 backdrop-blur-sm animate-[float_18s_ease-in-out_infinite_reverse] select-none pointer-events-none">
          <Smartphone className="w-3.5 h-3.5 text-[#1D9E75]/40" />
          <span className="font-mono text-[10px] text-[#1D9E75]/40">Responsive</span>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D9E75]"></span>
            </span>
            <span className="text-[#0F2744] font-medium text-[11px] sm:text-xs tracking-wide">
              Selected Works
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-black text-[#0F2744] tracking-tight leading-[1.05] mb-5 sm:mb-6">
            Digital Excellence. <br/>
            <span className="relative inline-block whitespace-nowrap">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#185FA5]/10 to-[#1D9E75]/10 blur-sm filter"></span>
              <span 
                className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#185FA5] via-[#1D9E75] to-[#185FA5] bg-[length:200%_auto] animate-[gradientShift_4s_linear_infinite]"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                Measured by Success.
              </span>
            </span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-[#2C2C2A]/80 leading-relaxed font-medium mb-8 sm:mb-10 text-balance px-2 sm:px-0">
            Explore our curated collection of high-performance websites and digital solutions that drive real business growth across various industries.
          </p>
        </div>
      </section>

      {/* 🍱 SECTION 2 — Unique Project Showcase (Bento Grid) */}
      <section 
        ref={sectionRef}
        className="relative w-full pt-28 pb-32 px-6 md:px-16 lg:px-24 bg-[#F1EFE8]"
      >
        <div className="max-w-7xl mx-auto">

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {PROJECTS.map((project, idx) => (
              <div 
                key={project.id}
                className={`group relative overflow-hidden rounded-3xl border-2 border-white/60 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-[#1D9E75]/30 hover:-translate-y-1 ${
                  project.size === "large" ? "lg:col-span-2 lg:row-span-2" : 
                  project.size === "medium" ? "lg:row-span-2" : ""
                }`}
              >
                {/* Background Image */}
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                  priority
                />
                
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744] via-[#0F2744]/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#1D9E75] text-[10px] font-bold text-white rounded-full uppercase tracking-widest shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm mb-6 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-white/50 border border-white/20 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-250">
                    <Link 
                      href={project.link}
                      className="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-[#1D9E75] transition-colors"
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </Link>

                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                       <Zap className="w-5 h-5 text-[#1D9E75]" />
                    </div>
                  </div>
                </div>

                {/* Floating Badge (Glassmorphism) - Always Visible for Large Cards */}
                {project.size === "large" && (
                   <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2 group-hover:opacity-0 transition-opacity">
                      <Sparkles className="w-3 h-3 text-[#1D9E75]" />
                      <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Featured Project</span>
                   </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-24 text-center">
             <p className="text-[#0F2744]/60 font-bold mb-8">Want to see more of our specific industry results?</p>
             <Link 
              href="/contact"
              className="group relative bg-[#0F2744] text-white rounded-full px-10 py-5 font-black inline-flex items-center gap-3 shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 transition-all"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
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
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-scale {
          0% { opacity: 0; transform: scale(0.96); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}} />
    </main>
  );
}
