"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/contactSchema";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  MessageSquare,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function ContactSection() {
  const [isClient, setIsClient] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
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
        { shouldValidate: true }
      );
    } else {
      setValue("services", [...selectedServices, service], {
        shouldValidate: true,
      });
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setApiError(null);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // In a real app, you would send this to your API (e.g., fetch('/api/contact', ...))
    } catch (err) {
      setApiError("Something went wrong. Please try again or email us directly at info@veloxa.tech");
    }
  };

  const messageValue = watch("message") || "";

  if (!isClient) {
    return null; // Prevent hydration warnings
  }

  const inputBaseClass =
    "w-full bg-white/70 border border-[#0F2744]/15 rounded-xl px-4 py-3.5 text-[#0F2744] placeholder-[#0F2744]/40 text-sm focus:outline-none focus:border-[#1D9E75] focus:bg-white focus:ring-2 focus:ring-[#1D9E75]/20 transition-all duration-200";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden py-28 md:py-36 px-6 md:px-16 lg:px-24 bg-[#F1EFE8]"
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
        <div className="max-w-2xl mx-auto text-center mb-16 animated-el" style={{ animation: "fadeInScale 0.6s ease-out both" }}>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D9E75]"></span>
            </span>
            <span className="text-[#0F2744] font-medium text-[11px] sm:text-xs tracking-widest uppercase">
              Let's Connect
            </span>
          </div>

          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-black text-[#0F2744] tracking-tight leading-[1.1] text-center mt-4"
          >
            Start Your Web Project —{" "}
            <span
              className="relative inline-block whitespace-nowrap"
            >
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#185FA5]/10 to-[#1D9E75]/10 blur-sm filter"></span>
              <span
                className="relative text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(to right, #1D9E75, #185FA5, #1D9E75)",
                  backgroundSize: "200% auto",
                  animation: "gradientShift 4s ease-in-out infinite",
                }}
              >
                Get a Free Consultation Today
              </span>
            </span>
          </h2>

          <p className="text-base md:text-lg text-[#2C2C2A]/75 font-medium leading-relaxed text-center max-w-xl mx-auto mt-6">
            Ready to take your business online or upgrade your existing website? Tell us about your project and we'll get back to you within 24 hours — no sales pressure, just an honest conversation about what's possible.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-stretch">
          {/* Left Column: Contact Info */}
          <div className="animated-el flex flex-col justify-center h-full" style={{ animation: "popIn 0.8s ease-out 0.2s both" }}>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0F2744] mb-3">
              Contact Information
            </h3>
            <p className="text-base text-[#2C2C2A]/75 font-medium leading-relaxed mb-10 max-w-sm">
              We'd love to hear about your project, your goals, and how Veloxa can help you grow online. Reach out through any of the channels below — our team typically responds within one business day.
            </p>

            <div className="space-y-7">
              {/* Item 1 - Location */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white shadow-sm border border-[#0F2744]/5 group-hover:border-[#1D9E75]/30 group-hover:scale-105 transition-all duration-300">
                  <MapPin className="text-[#1D9E75] w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs uppercase font-semibold tracking-widest text-[#0F2744]/50 mb-1">
                    Our Office
                  </div>
                  <address className="not-italic text-sm font-semibold text-[#0F2744] group-hover:text-[#1D9E75] transition-colors duration-300">
                    Connaught Place, New Delhi, India<br />
                    110001
                  </address>
                </div>
              </div>

              {/* Item 2 - Phone */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white shadow-sm border border-[#0F2744]/5 group-hover:border-[#1D9E75]/30 group-hover:scale-105 transition-all duration-300">
                  <Phone className="text-[#185FA5] w-5 h-5" aria-hidden="true" />
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

              {/* Item 3 - Email */}
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
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-[#1D9E75]/20 rounded-2xl px-5 py-4 w-max max-w-full shadow-sm">
              <Clock className="text-[#1D9E75] w-5 h-5 animate-pulse shrink-0" aria-hidden="true" />
              <span className="text-sm text-[#0F2744]/80 font-semibold">
                We respond within 24 hours — guaranteed.
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="animated-el flex flex-col h-full" style={{ animation: "popIn 0.8s ease-out 0.4s both" }}>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0F2744] mb-2">
              Tell Us About Your Project
            </h3>
            <p className="text-sm text-[#2C2C2A]/75 font-medium mb-8">
              Fill in the details below and we'll get back to you with a custom plan — completely free.
            </p>

            <div className="bg-white/60 border border-white/60 backdrop-blur-md shadow-sm rounded-3xl p-8 md:p-10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:bg-white hover:border-[#1D9E75]/30 transition-all duration-500 flex-1 flex flex-col">
              {isSubmitSuccessful ? (
                <div
                  className="flex flex-col items-center justify-center py-10 text-center flex-1"
                  role="status"
                  aria-live="polite"
                  style={{ animation: "fadeInScale 0.5s ease-out" }}
                >
                  <CheckCircle2 className="text-[#1D9E75] w-16 h-16 mb-6" />
                  <h4 className="text-2xl font-bold text-[#0F2744] mb-3">
                    We've received your message!
                  </h4>
                  <p className="text-[#2C2C2A]/75 font-medium max-w-md">
                    Our team will get back to you within 24 hours. Check your inbox for a confirmation.
                  </p>
                </div>
              ) : (
                <form
                  noValidate
                  aria-label="Contact Veloxa for a free website consultation"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 flex-1 flex flex-col"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Field 1: Full Name */}
                    <div>
                      <label htmlFor="fullName" className="text-[11px] uppercase tracking-widest text-[#0F2744]/60 mb-2 block font-bold">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="fullName"
                          placeholder="e.g. Arjun Mehta"
                          autoComplete="name"
                          aria-required="true"
                          aria-describedby={errors.fullName ? "fullName-error" : undefined}
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
                        <span id="fullName-error" role="alert" className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1" style={{ animation: "fadeIn 0.2s ease" }}>
                          <AlertCircle className="w-3 h-3" />
                          {errors.fullName.message}
                        </span>
                      )}
                    </div>

                    {/* Field 2: Email */}
                    <div>
                      <label htmlFor="email" className="text-[11px] uppercase tracking-widest text-[#0F2744]/60 mb-2 block font-bold">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          placeholder="e.g. hello@yourcompany.in"
                          autoComplete="email"
                          aria-required="true"
                          aria-describedby={errors.email ? "email-error" : undefined}
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
                        <span id="email-error" role="alert" className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1" style={{ animation: "fadeIn 0.2s ease" }}>
                          <AlertCircle className="w-3 h-3" />
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    {/* Field 3: Phone Number */}
                    <div>
                      <label htmlFor="phone" className="text-[11px] uppercase tracking-widest text-[#0F2744]/60 mb-2 block font-bold">
                        Phone Number *
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
                          aria-describedby={errors.phone ? "phone-error" : undefined}
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
                        <span id="phone-error" role="alert" className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1" style={{ animation: "fadeIn 0.2s ease" }}>
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone.message}
                        </span>
                      )}
                    </div>

                    {/* Field 4: Location */}
                    <div>
                      <label htmlFor="location" className="text-[11px] uppercase tracking-widest text-[#0F2744]/60 mb-2 block font-bold">
                        Your Location *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="location"
                          placeholder="e.g. Mumbai, Maharashtra"
                          autoComplete="address-level2"
                          aria-required="true"
                          aria-describedby={errors.location ? "location-error" : "location-helper"}
                          aria-invalid={errors.location ? "true" : "false"}
                          className={`${inputBaseClass} ${
                            errors.location
                              ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20 pr-10"
                              : !errors.location && watch("location")
                              ? "border-[#1D9E75]/60 pr-10"
                              : "pr-10"
                          }`}
                          {...register("location")}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                          <MapPin
                            className={`w-4 h-4 ${
                              errors.location
                                ? "text-red-500"
                                : !errors.location && watch("location")
                                ? "text-[#1D9E75]"
                                : "text-[#0F2744]/30"
                            }`}
                          />
                        </div>
                      </div>
                      {errors.location ? (
                        <span id="location-error" role="alert" className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1" style={{ animation: "fadeIn 0.2s ease" }}>
                          <AlertCircle className="w-3 h-3" />
                          {errors.location.message}
                        </span>
                      ) : (
                        <span id="location-helper" className="text-[10px] uppercase font-semibold tracking-wider text-[#0F2744]/40 mt-1.5 block">
                          Helps us understand your timezone and market
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Field 5: Message */}
                  <div>
                    <label htmlFor="message" className="text-[11px] uppercase tracking-widest text-[#0F2744]/60 mb-2 block font-bold">
                      Tell Us About Your Project *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Describe your website goals, features you need, your timeline, and any other details..."
                        aria-required="true"
                        aria-describedby={errors.message ? "message-error" : undefined}
                        aria-invalid={errors.message ? "true" : "false"}
                        className={`${inputBaseClass} resize-none pt-3.5 pb-8 ${
                          errors.message
                            ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20 pr-10"
                            : !errors.message && watch("message")
                            ? "border-[#1D9E75]/60 pr-10"
                            : "pr-10"
                        }`}
                        {...register("message")}
                      ></textarea>
                      <div className="absolute right-3 top-3.5 flex items-center pointer-events-none">
                        <MessageSquare
                          className={`w-4 h-4 ${
                            errors.message
                              ? "text-red-500"
                              : !errors.message && watch("message")
                              ? "text-[#1D9E75]"
                              : "text-[#0F2744]/30"
                          }`}
                        />
                      </div>
                      <div
                        className={`absolute bottom-3 right-3 text-xs font-semibold ${
                          messageValue.length >= 900
                            ? "text-red-500"
                            : messageValue.length >= 20
                            ? "text-[#1D9E75]"
                            : "text-[#0F2744]/40"
                        }`}
                      >
                        {messageValue.length} / 1000
                      </div>
                    </div>
                    {errors.message && (
                      <span id="message-error" role="alert" className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1" style={{ animation: "fadeIn 0.2s ease" }}>
                        <AlertCircle className="w-3 h-3" />
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  {/* Field 6: Services Interested In */}
                  <div>
                    <label className="text-[11px] uppercase tracking-widest text-[#0F2744]/60 mb-3 block font-bold">
                      Services You're Interested In
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Business Website",
                        "E-Commerce Store",
                        "Web Application",
                        "SEO Optimization",
                        "Website Redesign",
                        "Landing Page",
                      ].map((service) => {
                        const isSelected = selectedServices.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => handleServiceToggle(service)}
                            aria-pressed={isSelected}
                            className={`transition-all duration-200 font-semibold ${
                              isSelected
                                ? "bg-[#1D9E75]/15 border border-[#1D9E75] text-[#1D9E75] rounded-full px-4 py-1.5 text-xs shadow-sm"
                                : "border border-[#0F2744]/15 bg-white/50 text-[#0F2744]/60 rounded-full px-4 py-1.5 text-xs cursor-pointer hover:border-[#1D9E75]/40 hover:text-[#0F2744] hover:bg-white"
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* API Error Banner */}
                  {apiError && (
                    <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <p className="text-sm font-medium text-red-800">{apiError}</p>
                    </div>
                  )}

                  <div className="mt-auto pt-6 flex flex-col">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group submit-btn w-full bg-[#0F2744] text-white rounded-xl px-8 py-4 text-base font-bold flex items-center justify-center gap-3 hover:bg-[#185FA5] hover:shadow-[0_10px_40px_-10px_rgba(24,95,165,0.4)] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span>Sending...</span>
                          <Loader2 className="w-5 h-5 animate-spin" />
                        </>
                      ) : (
                        <>
                          <span>Get Free Consultation</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                        </>
                      )}
                    </button>

                    <p className="text-xs font-medium text-[#2C2C2A]/60 text-center mt-5 leading-relaxed">
                      By submitting this form, you agree to our <a href="/privacy-policy" className="hover:text-[#1D9E75] text-[#0F2744] font-semibold underline decoration-[#0F2744]/30 hover:decoration-[#1D9E75] transition-colors">Privacy Policy</a>. We never share your data with third parties.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
