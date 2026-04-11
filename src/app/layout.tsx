import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  keywords: "website development, web development services, custom websites, Next.js development, responsive web design, veloxa",
  manifest: "/manifest.json",
  authors: [{ name: "Veloxa Team" }],
  creator: "Veloxa",
  publisher: "Veloxa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://veloxa.tech",
  },
  openGraph: {
    title: "Veloxa - Fast, Professional Website Development",
    description: "Transform your ideas into high-performance websites with Veloxa.",
    url: "https://veloxa.tech",
    siteName: "Veloxa",
    images: [
      {
        url: "/images/latest-mockup.png",
        width: 1200,
        height: 630,
        alt: "Veloxa Website Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veloxa - Fast, Professional Website Development",
    description: "Transform your ideas into high-performance websites with Veloxa.",
    images: ["/images/latest-mockup.png"],
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE_HERE", // Replace with actual code from GSC
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    url: "https://veloxa.tech",
    logo: "https://veloxa.tech/logo.png",
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
        <Footer />
      </body>
    </html>
  );
}
