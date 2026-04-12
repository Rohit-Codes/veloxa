import { Metadata } from "next";
import PortfolioClientContent from "./PortfolioClientContent";

export const metadata: Metadata = {
  title: "Our Portfolio - Digital Excellence | Veloxa",
  description: "Explore Veloxa's premium web development portfolio. From high-performance E-commerce to complex SaaS dashboards, we build digital solutions that drive growth.",
  alternates: {
    canonical: "https://veloxa.tech/portfolio",
  },
  openGraph: {
    title: "Our Portfolio - Digital Excellence | Veloxa",
    description: "Explore Veloxa's premium web development portfolio. From high-performance E-commerce to complex SaaS dashboards, we build digital solutions that drive growth.",
    url: "https://veloxa.tech/portfolio",
    type: "website",
  },
};

export default function PortfolioPage() {
  return <PortfolioClientContent />;
}
