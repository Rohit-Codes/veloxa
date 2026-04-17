import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import TargetAudience from "@/components/TargetAudience";
import HowItWorks from "@/components/HowItWorks";
import PASSection from "@/components/PASSection";
import ServicesSection from "@/components/ServicesSection";
import ClientTrustSection from "@/components/ClientTrustSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PricingSection />
      <ProjectShowcase />
      <TargetAudience />
      <HowItWorks />
      <PASSection />
      <CTASection />
      <ServicesSection />
      <ClientTrustSection />
      <FAQSection />
      <ContactSection />
      <StickyCTA />
    </>
  );
}
