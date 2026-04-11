import { Metadata } from "next";
import ClientTrustSection from "@/components/ClientTrustSection";

export const metadata: Metadata = {
  title: "About Us - Veloxa",
  description: "Learn about Veloxa, our mission, and the team behind our high-performance web development services.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-black tracking-tight mb-8">Crafting Digital Excellence.</h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              At Veloxa, we believe that a website is more than just code. It's the digital heartbeat of your brand. Our mission is to empower businesses with fast, secure, and stunning web solutions.
            </p>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded in New Delhi, we've grown into a boutique agency serving clients globally, focused on one thing: performance that drives results.
            </p>
          </div>
          <div className="relative aspect-square bg-[#185FA5]/5 rounded-[2rem] flex items-center justify-center border border-[#185FA5]/10">
            <span className="text-8xl">🚀</span>
          </div>
        </div>
      </div>
      <ClientTrustSection />
    </div>
  );
}
