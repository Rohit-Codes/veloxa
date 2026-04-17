"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/contactSchema";
import {
  Phone,
  Mail,
  Clock,
  User,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function ContactSection() {
  const [isClient, setIsClient] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      services: [],
    },
  });

  const selectedServices = watch("services") || [];

  const handleServiceToggle = (service: string) => {
    const isSelected = selectedServices.includes(service);
    if (isSelected) {
      setValue(
        "services",
        selectedServices.filter((s) => s !== service),
        { shouldValidate: true },
      );
    } else {
      setValue("services", [...selectedServices, service], {
        shouldValidate: true,
      });
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setApiError(null);
    setShowSuccess(false);
    try {
      const templateParams = {
        to_name: "Veloxa Team",
        from_name: data.fullName,
        from_email: data.email,
        phone: data.phone,
        location: "Collected in follow-up",
        message: "Collected in follow-up",
        services: data.services?.join(", ") || "None selected",
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_ee405ls",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      );

      setShowSuccess(true);
      reset();

      if (typeof window !== "undefined" && "gtag" in window) {
        (window as { gtag: Function }).gtag("event", "generate_lead", {
          currency: "INR",
          value: 1,
          form_name: "contact_form",
          services_selected: data.services?.join(", ") || "None",
        });
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setApiError(
        "Something went wrong. Please try again or email us directly at info@veloxa.tech",
      );
      throw err;
    }
  };

  if (!isClient) {
    return null; // Prevent hydration warnings
  }

  const inputBaseClass =
    "w-full bg-white/70 border border-[#0F2744]/15 rounded-xl px-4 py-3 md:py-3.5 text-[#0F2744] placeholder-[#0F2744]/40 text-base md:text-sm focus:outline-none focus:border-[#1D9E75] focus:bg-white focus:ring-2 focus:ring-[#1D9E75]/20 transition-all duration-200";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden py-10 md:py-36 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#F1EFE8]"
    >
      {/* Top Separator matching light theme */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0F2744]/10 to-transparent" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(#0F2744 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glow Orbs */}
      <div className="absolute top-[0%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#185FA5]/12 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#1D9E75]/12 blur-[120px] pointer-events-none" />

      <style>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .submit-btn, .animated-el {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Block */}
        <div
          className="max-w-2xl mx-auto text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-red-100/80 backdrop-blur-sm border border-red-200 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-red-700 font-bold text-[10px] sm:text-xs tracking-widest uppercase">
              Only 3 project slots left this month
            </span>
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F2744] tracking-tight leading-[1.1] text-center mt-4"
          >
            Ready to <span className="text-[#1D9E75]">See Your Pricing?</span>
          </h2>

          <p className="text-base sm:text-lg text-[#2C2C2A]/75 font-medium leading-relaxed text-center max-w-xl mx-auto mt-6 px-2 sm:px-4">
            Get your custom website plan in 24 hours. Start with the essentials below — it takes less than 30 seconds.
          </p>
        </div>

        {/* Two-Column Grid - Reversed on mobile to show form first */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 xl:gap-16 items-stretch">
          {/* Left Column: Contact Info */}
          <div
            className="flex flex-col justify-center h-full"
          >
            <h3 className="text-xl md:text-3xl font-bold text-[#0F2744] mb-3">
              Other Ways to Connect
            </h3>
            <p className="text-sm md:text-base text-[#2C2C2A]/75 font-medium leading-relaxed mb-8 md:mb-10 max-w-sm">
              Prefer a direct message? Reach out through the channel that feels fastest for you.
            </p>

            <div className="space-y-7">
              {/* Item 1 - Phone */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white shadow-sm border border-[#0F2744]/5 group-hover:border-[#1D9E75]/30 group-hover:scale-105 transition-all duration-300">
                  <Phone
                    className="text-[#185FA5] w-5 h-5"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="text-xs uppercase font-semibold tracking-widest text-[#0F2744]/50 mb-1">
                    Call Us
                  </div>
                  <a
                    href="tel:+919205568939"
                    className="text-base font-semibold text-[#0F2744] group-hover:text-[#1D9E75] hover:underline decoration-[#1D9E75]/50 underline-offset-4 transition-all duration-300"
                  >
                    +91 92055 68939
                  </a>
                </div>
              </div>

              {/* Item 2 - Email */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white shadow-sm border border-[#0F2744]/5 group-hover:border-[#1D9E75]/30 group-hover:scale-105 transition-all duration-300">
                  <Mail className="text-[#1D9E75] w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs uppercase font-semibold tracking-widest text-[#0F2744]/50 mb-1">
                    Email Us
                  </div>
                  <a
                    href="mailto:info@veloxa.tech"
                    className="text-base font-semibold text-[#0F2744] group-hover:text-[#1D9E75] hover:underline decoration-[#1D9E75]/50 underline-offset-4 transition-all duration-300"
                  >
                    info@veloxa.tech
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-[#1D9E75]/20 via-[#185FA5]/20 to-transparent mt-10 mb-10" />

            {/* Response Promise Badge */}
            <div className="flex items-center gap-2 sm:gap-3 bg-white/70 backdrop-blur-sm border border-[#1D9E75]/20 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 w-max max-w-full shadow-sm">
              <Clock
                className="text-[#1D9E75] w-4 h-4 sm:w-5 sm:h-5 animate-pulse shrink-0"
                aria-hidden="true"
              />
              <span className="text-[10px] sm:text-sm text-[#0F2744]/80 font-bold uppercase tracking-wider">
                Response within 2 hours (Mon-Fri), custom plan within 24 hours.
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className="flex flex-col h-full"
          >
            <h3 className="text-xl md:text-3xl font-bold text-[#0F2744] mb-2 text-center lg:text-left">
              Get a Quick Quote
            </h3>
            <p className="text-sm text-[#2C2C2A]/75 font-medium mb-8 text-center lg:text-left">
              Start with the essentials only. We&apos;ll collect more details in the follow-up.
            </p>

            <div className="bg-white/60 border border-white/60 backdrop-blur-md shadow-sm rounded-3xl p-6 sm:p-8 md:p-10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:bg-white hover:border-[#1D9E75]/30 transition-all duration-500 flex-1 flex flex-col">
              <form
                noValidate
                aria-label="Contact Veloxa for a quick website quote"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 flex-1 flex flex-col"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Field 1: Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="text-[10px] md:text-[11px] uppercase tracking-widest text-[#0F2744]/60 mb-2 block font-bold"
                    >
                      Your Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="fullName"
                        placeholder="e.g. Arjun Mehta"
                        autoComplete="name"
                        aria-required="true"
                        aria-describedby={
                          errors.fullName ? "fullName-error" : undefined
                        }
                        aria-invalid={errors.fullName ? "true" : "false"}
                        className={`${inputBaseClass} ${
                          errors.fullName
                            ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20 pr-10"
                            : !errors.fullName && watch("fullName")
                              ? "border-[#1D9E75]/60 pr-10"
                              : "pr-10"
                        }`}
                        {...register("fullName")}
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                        <User
                          className={`w-4 h-4 ${
                            errors.fullName
                              ? "text-red-500"
                              : !errors.fullName && watch("fullName")
                                ? "text-[#1D9E75]"
                                : "text-[#0F2744]/30"
                          }`}
                        />
                      </div>
                    </div>
                    {errors.fullName && (
                      <span
                        id="fullName-error"
                        role="alert"
                        className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1"
                        style={{ animation: "fadeIn 0.2s ease" }}
                      >
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  {/* Field 2: Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="text-[11px] uppercase tracking-widest text-[#0F2744]/60 mb-2 block font-bold"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        placeholder="e.g. hello@yourbrand.in"
                        autoComplete="email"
                        aria-required="true"
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        aria-invalid={errors.email ? "true" : "false"}
                        className={`${inputBaseClass} ${
                          errors.email
                            ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20 pr-10"
                            : !errors.email && watch("email")
                              ? "border-[#1D9E75]/60 pr-10"
                              : "pr-10"
                        }`}
                        {...register("email")}
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                        <Mail
                          className={`w-4 h-4 ${
                            errors.email
                              ? "text-red-500"
                              : !errors.email && watch("email")
                                ? "text-[#1D9E75]"
                                : "text-[#0F2744]/30"
                          }`}
                        />
                      </div>
                    </div>
                    {errors.email && (
                      <span
                        id="email-error"
                        role="alert"
                        className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1"
                        style={{ animation: "fadeIn 0.2s ease" }}
                      >
                        <AlertCircle className="w-3 h-3" />
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Field 3: WhatsApp Number */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="phone"
                      className="text-[11px] uppercase tracking-widest text-[#0F2744]/60 mb-2 block font-bold"
                    >
                      WhatsApp Number *
                    </label>
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 flex items-center px-3 border-r border-[#0F2744]/10 text-xs font-semibold text-[#0F2744]/50 bg-white/50 rounded-l-xl">
                        +91
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="e.g. 98765 43210"
                        autoComplete="tel"
                        aria-required="true"
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                        aria-invalid={errors.phone ? "true" : "false"}
                        className={`${inputBaseClass} pl-14 ${
                          errors.phone
                            ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20 pr-10"
                            : !errors.phone && watch("phone")
                              ? "border-[#1D9E75]/60 pr-10"
                              : "pr-10"
                        }`}
                        {...register("phone")}
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                        <Phone
                          className={`w-4 h-4 ${
                            errors.phone
                              ? "text-red-500"
                              : !errors.phone && watch("phone")
                                ? "text-[#1D9E75]"
                                : "text-[#0F2744]/30"
                          }`}
                        />
                      </div>
                    </div>
                    {errors.phone && (
                      <span
                        id="phone-error"
                        role="alert"
                        className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1"
                        style={{ animation: "fadeIn 0.2s ease" }}
                      >
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Field 3: Services Interested In */}
                <div>
                  <label className="text-[11px] uppercase tracking-widest text-[#0F2744]/60 mb-3 block font-bold">
                    What can we help you with?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Business Website",
                      "E-Commerce Store",
                      "Web Application",
                      "SEO Optimization",
                    ].map((service) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          aria-pressed={isSelected}
                          className={`transition-all duration-200 font-bold ${
                            isSelected
                              ? "bg-[#1D9E75]/15 border border-[#1D9E75] text-[#1D9E75] rounded-full px-4 py-2 text-[10px] sm:text-xs shadow-sm"
                              : "border border-[#0F2744]/15 bg-white/50 text-[#0F2744]/60 rounded-full px-4 py-2 text-[10px] sm:text-xs cursor-pointer hover:border-[#1D9E75]/40 hover:text-[#0F2744] hover:bg-white"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                   <div className="flex items-center gap-2 text-[#0F2744]/70 font-bold text-[11px]">
                      <CheckCircle2 size={14} className="text-[#1D9E75]" />
                      FREE custom design preview before you pay
                   </div>
                   <div className="flex items-center gap-2 text-[#0F2744]/70 font-bold text-[11px]">
                      <CheckCircle2 size={14} className="text-[#1D9E75]" />
                      100% Satisfaction or Money Back
                   </div>
                </div>
                {/* API Error Banner */}
                {apiError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <p className="text-sm font-medium text-red-800">
                      {apiError}
                    </p>
                  </div>
                )}

                <div className="mt-auto pt-6 flex flex-col">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group submit-btn w-full bg-[#0F2744] text-white rounded-xl px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold flex items-center justify-center gap-3 hover:bg-[#185FA5] hover:shadow-[0_10px_40px_-10px_rgba(24,95,165,0.4)] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span>Sending...</span>
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>See My Website Price Now</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  <p className="mt-3 text-xs sm:text-sm text-[#0F2744]/55 font-semibold text-center">
                    Response within 2 hours (Mon-Fri)
                  </p>

                  {showSuccess && (
                    <div
                      className="mt-4 p-4 rounded-xl bg-[#1D9E75]/10 border border-[#1D9E75]/20 flex items-center justify-center gap-2 text-[#1D9E75] font-bold text-sm animate-in fade-in slide-in-from-top-2 duration-500"
                      role="status"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      Thank you for submitting
                    </div>
                  )}

                  <p className="text-xs font-medium text-[#2C2C2A]/60 text-center mt-5 leading-relaxed">
                    By submitting this form, you agree to our{" "}
                    <a
                      href="/privacy-policy"
                      className="hover:text-[#1D9E75] text-[#0F2744] font-semibold underline decoration-[#0F2744]/30 hover:decoration-[#1D9E75] transition-colors"
                    >
                      Privacy Policy
                    </a>
                    . We never share your data with third parties.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
