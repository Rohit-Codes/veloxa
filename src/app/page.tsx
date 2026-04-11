import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import PASSection from "@/components/PASSection";
import ServicesSection from "@/components/ServicesSection";
import ClientTrustSection from "@/components/ClientTrustSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

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
