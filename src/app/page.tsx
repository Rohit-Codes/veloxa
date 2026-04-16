import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import PASSection from "@/components/PASSection";

// Dynamically load below-the-fold components to improve initial mobile performance
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const ClientTrustSection = dynamic(() => import("@/components/ClientTrustSection"));
const CTASection = dynamic(() => import("@/components/CTASection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectShowcase />
      <PASSection />
      <CTASection />
      <ServicesSection />
      <ClientTrustSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
