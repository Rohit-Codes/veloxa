"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

const faqData = [
  {
    question: "How long does it take to build a website?",
    answer: "The timeline depends on the scope of your project. A standard business website typically takes 2–4 weeks, while a more complex project — like an e-commerce store or custom web application — can take 6–10 weeks. At Veloxa, we work with a clear project timeline from day one so you always know what's happening and when to expect delivery."
  },
  {
    question: "How much does a website cost?",
    answer: "Our custom business websites typically start at ₹15,000 (or your actual minimum). This includes a high-performance Next.js build, SEO optimization, and mobile responsiveness. For complex E-commerce or Web Apps, we provide a detailed custom quote within 24 hours of your consultation."
  },
  {
    question: "Will my website be optimized for Google and SEO?",
    answer: "Absolutely. Every website Veloxa builds is engineered for SEO from the ground up — this includes proper heading structure (H1, H2, H3), meta tags, alt text on all images, fast page load speeds, mobile responsiveness, and clean semantic HTML. We also ensure your site scores 90+ on Core Web Vitals, which is a key ranking factor for Google in 2024 and beyond."
  },
  {
    question: "Will my website work on mobile and all devices?",
    answer: "Yes — 100%. All websites we build are fully responsive, meaning they look and perform perfectly on smartphones, tablets, laptops, and desktop screens. We design mobile-first, which means your mobile experience is never an afterthought — it's the foundation."
  },
  {
    question: "Do you provide support and maintenance after the website goes live?",
    answer: "Yes, we do. Launching your website is just the beginning. We offer ongoing support and maintenance packages that cover security updates, performance monitoring, content changes, and technical fixes. You'll never be left alone after handover — we're a long-term partner, not a one-time vendor."
  },
  {
    question: "Can you redesign my existing website instead of building from scratch?",
    answer: "Absolutely. If you already have a website that feels outdated, slow, or isn't converting visitors into customers, we can redesign and rebuild it from the ground up — keeping your brand identity while dramatically improving performance, design, and SEO. We start with a full audit of your current site so we know exactly what to fix and what to improve."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("intersected");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      aria-labelledby="faq-heading"
      className="relative w-full overflow-hidden bg-[#F1EFE8] py-20 md:py-28 px-6 md:px-16 lg:px-24 ui-section"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Main Heading */}
        <h2
          id="faq-heading"
          className="anim-heading opacity-0 translate-y-8 transition-all duration-700 ease-out text-4xl sm:text-5xl md:text-5xl font-black text-[#0F2744] tracking-tight leading-[1.1] text-center mb-12 md:mb-16"
        >
          FAQ
        </h2>

        {/* FAQ Accordion block */}
        <div className="w-full">
          {faqData.map((q, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`flex flex-col py-6 px-4 md:px-0 relative group transition-colors duration-300 border-b border-[#0F2744]/10 ${
                  index === 0 ? "border-t border-[#0F2744]/10" : ""
                } ${isOpen ? "bg-white/60 shadow-sm" : "bg-transparent"} ${isOpen && "px-4 md:px-4 -mx-4 md:-mx-4 rounded-xl"}`}
              >
                <button
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="flex justify-between items-center w-full text-left focus-visible:outline-2 focus-visible:outline-[#1D9E75] focus-visible:outline-offset-2 pr-2 md:pr-0"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <div className="relative flex items-center pr-6">
                    <span
                      className={`absolute -left-6 md:-left-8 w-1 h-6 bg-[#1D9E75] rounded-full transition-opacity duration-300 ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <span
                      className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                        isOpen
                          ? "text-[#0F2744]"
                          : "text-[#0F2744]/75 group-hover:text-[#0F2744]"
                      }`}
                    >
                      {q.question}
                    </span>
                  </div>
                  <Plus
                    className={`faq-icon w-5 h-5 text-[#1D9E75] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`faq-answer ${isOpen ? "open" : ""}`}
                >
                  <div className={`faq-answer-inner transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="pl-4 border-l-2 border-[#1D9E75]/30 mt-4 pb-2 mb-1">
                      <p className="text-base text-[#2C2C2A]/80 font-medium leading-relaxed">
                        {q.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Nudge */}
        <div className="mt-14 text-center">
          <span className="text-base text-[#2C2C2A]/60 font-medium">
            Still have questions? We're happy to help.
          </span>
          <Link
            href="#contact"
            className="text-[#1D9E75] font-semibold hover:underline underline-offset-4 decoration-[#1D9E75]/40 ml-2 inline-flex items-center"
          >
            Chat with us &rarr;
          </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .faq-answer {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 0.4s ease;
          }
          .faq-answer.open {
            grid-template-rows: 1fr;
          }
          .faq-answer-inner {
            overflow: hidden;
            min-height: 0;
          }
          .ui-section.intersected .anim-pill {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          .ui-section.intersected .anim-heading {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          @media (prefers-reduced-motion: reduce) {
            .faq-answer { transition: none !important; }
            .faq-icon { transition: none !important; }
            .anim-heading {
              transition: none !important;
            }
          }
        `,
      }} />
    </section>
  );
}
