import { Metadata } from "next";
import AboutClientContent from "./AboutClientContent";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "About Veloxa | Web Development Agency Built for Growth",
  description: "Learn about Veloxa — a results-driven web development agency helping startups and businesses across India go from idea to online, fast. Meet our values, our story, and our mission.",
  openGraph: {
    title: "About Veloxa | Web Development Agency",
    description: "From idea to online — fast. Discover the team and values behind Veloxa's high-performance web development services.",
    url: "https://veloxa.in/about",
    type: "website",
  },
  alternates: {
    canonical: "https://veloxa.in/about",
  },
};

export default function AboutPage() {
  return (
  <>
  <AboutClientContent />
  <ContactSection/>
 
</>
  );
}
