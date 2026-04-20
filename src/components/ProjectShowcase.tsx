"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ─── Project data ─────────────────────────────────────────── */
interface Project {
  id: number;
  alt: string;
  imageSrc: string;
}

const PROJECTS_ROW_1: Project[] = [
  { id: 1, alt: "Premium Website Design 1", imageSrc: "/images/1.webp" },
  { id: 2, alt: "Premium Website Design 2", imageSrc: "/images/2.webp" },
  { id: 3, alt: "Premium Website Design 3", imageSrc: "/images/3.webp" },
  { id: 4, alt: "Premium Website Design 4", imageSrc: "/images/4.webp" },
  { id: 5, alt: "Premium Website Design 5", imageSrc: "/images/5.webp" },
  { id: 6, alt: "Premium Website Design 6", imageSrc: "/images/6.webp" },
];

const PROJECTS_ROW_2: Project[] = [
  { id: 7, alt: "Premium Website Design 7", imageSrc: "/images/7.webp" },
  { id: 8, alt: "Premium Website Design 8", imageSrc: "/images/8.webp" },
  { id: 9, alt: "Premium Website Design 9", imageSrc: "/images/9.webp" },
  { id: 10, alt: "Premium Website Design 10", imageSrc: "/images/10.webp" },
  { id: 11, alt: "Premium Website Design 11", imageSrc: "/images/11.webp" },
  { id: 12, alt: "Premium Website Design 12", imageSrc: "/images/12.webp" },
];

/* ─── Image-only card ───────────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      style={{ width: "340px", height: "340px", flexShrink: 0 }}
      className="project-card relative overflow-hidden group cursor-pointer border-[10px] border-white rounded-2xl shadow-lg m-0 bg-white"
      aria-label={project.alt}
    >
      <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-[1.12]">
        <Image
          src={project.imageSrc}
          alt={project.alt}
          fill
          sizes="340px"
          className="object-cover"
          priority
        />
      </div>
      {/* Frame Inset Shadow */}
      <div className="absolute inset-0 pointer-events-none rounded-lg shadow-[inset_0_4px_12px_rgba(0,0,0,0.25)] border border-black/5 z-10" />
    </article>
  );
}

/* ─── Marquee strip ─────────────────────────────────────────── */
function MarqueeRow({
  projects,
  direction,
  speed = 40,
}: {
  projects: Project[];
  direction: "ltr" | "rtl";
  speed?: number;
}) {
  const items = [...projects, ...projects];
  return (
    <div
      className="marquee-wrapper relative w-full overflow-hidden"
      role="region"
      aria-label={`Project carousel ${direction === "rtl" ? "right to left" : "left to right"}`}
    >
      <div
        className={`marquee-track flex flex-nowrap ${direction === "rtl" ? "animate-marquee-rtl" : "animate-marquee-ltr"}`}
        style={{ animationDuration: `${speed}s`, gap: "12px" }} // Reduced gap between cards
      >
        {items.map((project, idx) => (
          <ProjectCard key={`${project.id}-${idx}`} project={project} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main section ──────────────────────────────────────────── */
export default function ProjectShowcase() {
  return (
    <section
      id="projects"
      className="showcase-section relative w-full overflow-hidden py-16 md:py-24 bg-[#F1EFE8]"
      aria-label="Project Showcase"
    >
      <h2 className="sr-only">Our Recent Web Design Projects</h2>
      {/* Soft ambient orbs */}
      <div className="absolute top-0 left-[-8%] w-[45%] h-[70%] rounded-full bg-[#185FA5]/12 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-8%] w-[45%] h-[70%] rounded-full bg-[#1D9E75]/12 blur-[120px] pointer-events-none" />

      {/* Marquees + Circle */}
      <div className="relative flex flex-col gap-8">
        {" "}
        {/* Increased gap between marquee rows and central div */}
        <MarqueeRow projects={PROJECTS_ROW_1} direction="rtl" speed={40} />
        <MarqueeRow projects={PROJECTS_ROW_2} direction="ltr" speed={40} />
        {/* Central Exploration Circle */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center z-20 pointer-events-none">
          <div
            className="brand-circle pointer-events-auto relative flex flex-col items-center justify-center gap-1.5
              w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px]
              rounded-full bg-[#F1EFE8]
              border-[3px] border-[#1D9E75]
              shadow-[0_15px_35px_rgba(29,158,117,0.15)]"
            aria-label="Explore our work"
          >
            {/* Inner aesthetic sub-ring */}
            <div className="absolute inset-2 rounded-full border border-[#185FA5]/10 pointer-events-none" />

            {/* Favicon/Icon */}
            <div className="relative mb-1">
              <Image
                src="/icon.png"
                alt="Veloxa Icon"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>

            {/* Stats Text */}
            <div className="text-center">
              <p className="text-[#0F2744] font-extrabold text-xl sm:text-2xl leading-tight m-0">
                50+ designs
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
