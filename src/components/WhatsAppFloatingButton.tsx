"use client";

import { MessageCircleMore } from "lucide-react";

const whatsappLink =
  "https://wa.me/919205568939?text=Hi%20Veloxa%2C%20I%20saw%20your%20ad%20for%20Next.js%20sites%20starting%20at%20%E2%82%B910k.%20I%27d%20like%20to%20discuss%20a%20project.";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Veloxa on WhatsApp"
      className="fixed bottom-5 right-5 z-[70] group"
    >
      <span className="sr-only">Chat with Veloxa on WhatsApp</span>
      <div className="flex items-center gap-3 rounded-full border border-[#1D9E75]/20 bg-white/85 px-4 py-3 shadow-[0_18px_50px_-20px_rgba(15,39,68,0.45)] backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#1D9E75]/40">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1D9E75] text-white shadow-[0_10px_30px_-15px_rgba(29,158,117,0.8)]">
          <MessageCircleMore className="h-5 w-5" />
        </div>
        <div className="hidden sm:flex flex-col pr-1">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0F2744]/45">
            WhatsApp
          </span>
          <span className="text-sm font-bold text-[#0F2744]">
            30-sec chat
          </span>
        </div>
      </div>
    </a>
  );
}
