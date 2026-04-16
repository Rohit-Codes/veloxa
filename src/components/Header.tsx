"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
        <div
          className={`pointer-events-auto transition-all duration-500 rounded-full px-5 py-2 flex items-center justify-between ${
            isScrolled
              ? "w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-sm"
              : "w-full max-w-6xl bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Veloxa - Website Development Agency"
            className="flex items-center"
          >
            <div className="relative h-14 w-32 md:w-40">
              <Image
                src="/images/logo_new.webp"
                alt="Veloxa Logo"
                fill
                sizes="(max-width: 768px) 112px, 144px"
                className="object-contain object-left [mix-blend-mode:multiply]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center space-x-1 rounded-full px-2 py-1 ">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="px-4 py-2 rounded-full text-sm font-semibold text-[#2C2C2A] hover:bg-white hover:shadow-sm hover:text-[#185FA5] transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-welcome-popup"))}
              className="group relative inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-white bg-[#0F2744] overflow-hidden transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#185FA5] to-[#1D9E75] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2 text-sm">
                Get My Website Quote{" "}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#0F2744] rounded-full hover:bg-white/50 focus:outline-none transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-[#F1EFE8]/95 backdrop-blur-xl transition-all duration-500 ease-out flex flex-col justify-center px-8 ${
          mobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <button
          className="absolute top-8 right-8 p-3 bg-white rounded-full text-[#0F2744] shadow-sm hover:scale-110 transition-transform"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <h2 className="text-[#0F2744] font-black tracking-tighter text-4xl mb-12">
            Menu.
          </h2>
        </div>

        <nav className="flex flex-col space-y-6">
          <a
            href="/"
            className="text-3xl font-bold text-[#0F2744] border-b border-[#0F2744]/10 pb-4 flex justify-between items-center group"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home{" "}
            <ChevronRight className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all text-[#185FA5]" />
          </a>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-3xl font-bold text-[#0F2744] border-b border-[#0F2744]/10 pb-4 flex justify-between items-center group"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}{" "}
              <ChevronRight className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all text-[#185FA5]" />
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
