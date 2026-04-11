import { Metadata } from "next";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "Our Services - Veloxa",
  description: "Explore our wide range of web development services, from custom apps to SEO optimization.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen">
      <ServicesSection />
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We combine cutting-edge technology with creative design to deliver websites that don't just look good but perform exceptionally.
        </p>
      </div>
    </div>
  );
}
