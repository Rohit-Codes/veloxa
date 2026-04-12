"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// Custom SVG Icons for missing brand icons
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success">(
    "idle",
  );

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    // TODO: Connect to Mailchimp / ConvertKit / Resend when ready
    // For now, acknowledge the submission so the user gets feedback
    setNewsletterStatus("success");
    setNewsletterEmail("");
    setTimeout(() => setNewsletterStatus("idle"), 4000);
  };

  return (
    <footer className="bg-[#0F2744] text-[#F1EFE8] pt-20 pb-10 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1D9E75]/30 to-transparent" />
      <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[50%] rounded-full bg-[#185FA5]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[40%] rounded-full bg-[#1D9E75]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Section 1: Logo & Tagline */}
          <div className="flex flex-col">
            <Link href="/" className="mb-6 inline-block w-fit">
              <div className="relative h-16 w-48">
                <Image
                  src="/images/logo_new.png"
                  alt="Veloxa Logo"
                  fill
                  sizes="(max-width: 768px) 192px, 192px"
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-[#F1EFE8]/70 text-sm font-medium leading-relaxed max-w-xs">
              From idea to online — fast. We build high-performance, custom
              websites that drive growth and convert visitors into loyal
              customers.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#F1EFE8]/70 text-sm font-medium hover:text-[#1D9E75] hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-[#F1EFE8]/70 group">
                <MapPin className="w-5 h-5 text-[#185FA5] mt-0.5 group-hover:text-[#1D9E75] transition-colors shrink-0" />
                <span className="text-sm font-medium leading-relaxed">
                  Connaught Place,
                  <br /> New Delhi, India 110001
                </span>
              </li>
              <li className="flex items-center gap-3 text-[#F1EFE8]/70 group">
                <Phone className="w-5 h-5 text-[#185FA5] group-hover:text-[#1D9E75] transition-colors shrink-0" />
                <a
                  href="tel:+919205568939"
                  className="text-sm font-medium hover:text-white transition-colors"
                >
                  +91 92055 68939
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#F1EFE8]/70 group">
                <Mail className="w-5 h-5 text-[#185FA5] group-hover:text-[#1D9E75] transition-colors shrink-0" />
                <a
                  href="mailto:info@veloxa.tech"
                  className="text-sm font-medium hover:text-white transition-colors"
                >
                  info@veloxa.tech
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4: Subscription & Social Media */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">
              Newsletter
            </h4>
            <p className="text-[#F1EFE8]/70 text-sm font-medium mb-4">
              Subscribe to get the latest web development tips and agency news.
            </p>
            <form className="mb-8" onSubmit={handleNewsletterSubmit}>
              {newsletterStatus === "success" ? (
                <div className="flex items-center gap-2 bg-[#1D9E75]/15 border border-[#1D9E75]/30 rounded-xl py-3 px-4 text-sm text-[#1D9E75] font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  You&apos;re subscribed! We&apos;ll be in touch.
                </div>
              ) : (
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#1D9E75] focus:bg-white/10 transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#185FA5] hover:bg-[#1D9E75] text-white rounded-lg transition-colors duration-300"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </form>

            <h4 className="text-sm font-bold mb-4 text-white tracking-wide uppercase">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/veloxatech1609/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Veloxa on Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#1D9E75] hover:border-[#1D9E75] hover:-translate-y-1 transition-all duration-300"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/people/Veloxa/61573277101288/?mibextid=wwXIfr&rdid=oRn3jtNR9kvkdca7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EH65e75GE%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#185FA5] hover:border-[#185FA5] hover:-translate-y-1 transition-all duration-300"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F1EFE8]/50 text-sm font-medium text-center md:text-left">
            &copy; {currentYear} Veloxa. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-[#F1EFE8]/50">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
