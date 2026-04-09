import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ 
  subsets: ["latin"], 
  display: 'swap',
  variable: '--font-inter',
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Veloxa - Fast, Professional Website Development Services",
  description:
    "Transform your ideas into high-performance websites. Veloxa offers custom web development with Next.js, SEO optimization, and lightning-fast load times.",
  keywords: "website development, web development services, custom websites, Next.js development, responsive web design",
  alternates: {
    canonical: "https://veloxa.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Veloxa",
    url: "https://veloxa.com",
    logo: "https://veloxa.com/logo.png",
    description: "Professional website development services",
    slogan: "From idea to online — fast.",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${dmSans.variable} font-sans min-h-screen bg-[#F1EFE8] text-[#2C2C2A] antialiased flex flex-col`}
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-[#185FA5] text-[#F1EFE8] px-4 py-2 rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-[#1D9E75]"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
