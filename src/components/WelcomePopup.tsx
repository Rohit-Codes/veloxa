"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/contactSchema";
import {
  X,
  User,
  Mail,
  Phone,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true); // Default to true until checked
  const [apiError, setApiError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const handleOpenPopup = () => {
      setIsDismissed(false);
      setIsVisible(true);
    };

    window.addEventListener("open-welcome-popup", handleOpenPopup);

    const dismissed = localStorage.getItem("veloxa_popup_dismissed");
    if (!dismissed) {
      setIsDismissed(false);
      // Show popup after 12 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 12000);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("open-welcome-popup", handleOpenPopup);
      };
    }

    return () => window.removeEventListener("open-welcome-popup", handleOpenPopup);
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

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem("veloxa_popup_dismissed", "true");
    setTimeout(() => setIsDismissed(true), 500); // Wait for animation to finish
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
        location: "Collected from Welcome Popup",
        message: "Source: Welcome Popup",
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
      
      // Track GA event if available
      if (typeof window !== "undefined" && "gtag" in window) {
        (window as { gtag: Function }).gtag("event", "generate_lead", {
          form_name: "welcome_popup_form",
          services_selected: data.services?.join(", ") || "None",
        });
      }

      // Track Meta Pixel Lead event
      if (typeof (window as any).fbq === "function") {
        (window as any).fbq("track", "Lead", {
          content_name: "Welcome Popup Form",
          content_category: "Cost Inquiry",
        });
      }

      // Close popup after success
      setTimeout(() => {
        closePopup();
      }, 2500);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setApiError("Something went wrong. Please try again or email us directly.");
    }
  };

  if (isDismissed) return null;

  const inputBaseClass =
    "w-full bg-white/70 border border-[#0F2744]/15 rounded-xl px-4 py-3 text-[#0F2744] placeholder-[#0F2744]/40 text-base md:text-sm focus:outline-none focus:border-[#1D9E75] focus:bg-white focus:ring-2 focus:ring-[#1D9E75]/20 transition-all duration-200";

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closePopup();
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .popup-content {
          animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      
      <div
        className={`relative popup-content w-full max-w-lg bg-[#F1EFE8] rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-white/20 transition-transform duration-500 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
      >
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#185FA5]/10 blur-3xl -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#1D9E75]/10 blur-3xl translate-x-1/2 translate-y-1/2 rounded-full" />

        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/50 hover:bg-white text-[#0F2744]/60 hover:text-[#0F2744] transition-all duration-200 z-20"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative z-10 p-6 md:p-10">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#1D9E75]/10 border border-[#1D9E75]/20">
              <Sparkles className="w-3 h-3 text-[#1D9E75]" />
              <span className="text-[#1D9E75] text-[9px] font-bold uppercase tracking-wider">Limited Time Offer</span>
            </div>
            <h2 className="text-xl md:text-3xl font-black text-[#0F2744] leading-tight mb-2">
              Get Your High-Converting <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D9E75] to-[#185FA5]">Website for ₹6,999</span>
            </h2>
            <p className="text-[13px] md:text-sm text-[#2C2C2A]/70 font-medium leading-relaxed">
              Launch in 7-14 days. <span className="text-red-500 font-bold">Only 3 slots available this week!</span>
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              {/* Full Name */}
              <div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className={`${inputBaseClass} ${errors.fullName ? "border-red-500/60" : ""}`}
                    {...register("fullName")}
                  />
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0F2744]/30" />
                </div>
                {errors.fullName && (
                  <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.fullName.message}</span>
                )}
              </div>

              {/* Email */}
              <div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className={`${inputBaseClass} ${errors.email ? "border-red-500/60" : ""}`}
                    {...register("email")}
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0F2744]/30" />
                </div>
                {errors.email && (
                  <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.email.message}</span>
                )}
              </div>

              {/* Phone */}
              <div>
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 flex items-center px-3 border-r border-[#0F2744]/10 text-[10px] font-bold text-[#0F2744]/50 bg-white/30 rounded-l-xl">
                    +91
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className={`${inputBaseClass} pl-12 ${errors.phone ? "border-red-500/60" : ""}`}
                    {...register("phone")}
                  />
                  <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0F2744]/30" />
                </div>
                {errors.phone && (
                  <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.phone.message}</span>
                )}
                <p className="text-[9px] text-[#0F2744]/40 font-medium mt-1.5 flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5 text-[#1D9E75]" />
                  Secure & Private. We never share your data.
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="text-[11px] uppercase font-bold text-[#0F2744]/40 mb-3 tracking-widest">Interested In:</p>
              <div className="flex flex-wrap gap-2">
                {["Business Website", "E-Commerce", "Web App"].map((service) => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`px-3 py-2 rounded-full text-[10px] md:text-[11px] font-bold transition-all duration-200 border ${
                        isSelected
                          ? "bg-[#1D9E75] border-[#1D9E75] text-white"
                          : "bg-white/50 border-[#0F2744]/10 text-[#0F2744]/60 hover:border-[#1D9E75]/40"
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            {apiError && (
              <div className="p-3 bg-red-50 border border-red-100 rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <p className="text-xs text-red-700 font-medium">{apiError}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0F2744] text-white rounded-xl py-3.5 md:py-4 text-sm font-black flex items-center justify-center gap-2 hover:bg-[#185FA5] transition-all duration-300 shadow-lg shadow-[#185FA5]/20 active:scale-[0.98] disabled:opacity-70"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>See My Website Cost Now</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {showSuccess && (
              <div className="flex items-center justify-center gap-2 text-[#1D9E75] font-bold text-sm mt-4 animate-bounce">
                <CheckCircle2 className="w-5 h-5" />
                Great! We&apos;ll contact you shortly.
              </div>
            )}

            <p className="text-[10px] text-center text-[#2C2C2A]/50 font-medium">
              By clicking, you agree to our <a href="/privacy-policy" className="underline">Privacy Policy</a>. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
