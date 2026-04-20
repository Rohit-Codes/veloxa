"use client";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px or when reaching footer
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden duration-300">
      <div className="flex gap-3">
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
          className="flex-1 bg-[#0F2744] text-white font-black py-4 rounded-2xl shadow-[0_15px_45px_-10px_rgba(15,39,68,0.6)] border border-white/20 active:scale-95 transition-transform text-sm"
        >
          GET FREE QUOTE
        </button>
        <a
          href="https://wa.me/919205568939?text=I'm%20interested%20in%20a%20website%20plan"
          className="w-14 h-14 bg-[#25D366] text-white flex items-center justify-center rounded-2xl shadow-[0_15px_45px_-10px_rgba(37,211,102,0.4)] active:scale-95 transition-transform shrink-0"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} fill="currentColor" />
        </a>
      </div>
    </div>
  );
}
