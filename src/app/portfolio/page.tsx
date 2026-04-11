import { Metadata } from "next";
import ProjectShowcase from "@/components/ProjectShowcase";

export const metadata: Metadata = {
  title: "Our Portfolio - Veloxa",
  description: "Check out our latest projects and see how we've helped businesses transform their online presence.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-black tracking-tight mb-4">Our Portfolio.</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A collection of digital experiences we've crafted for world-class brands and ambitious startups.
        </p>
      </div>
      <ProjectShowcase />
    </div>
  );
}
