import { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us - Veloxa",
  description: "Get in touch with Veloxa for your next project. We're here to help you scale your digital presence.",
  alternates: {
    canonical: "https://veloxa.tech/contact",
  },
  openGraph: {
    title: "Contact Us - Veloxa",
    description: "Get in touch with Veloxa for your next project. We're here to help you scale your digital presence.",
    url: "https://veloxa.tech/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-black tracking-tight mb-4">Let's Talk.</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have a vision? We have the tools to build it. Reach out today for a free consultation and website audit.
        </p>
      </div>
      <ContactSection />
    </div>
  );
}
