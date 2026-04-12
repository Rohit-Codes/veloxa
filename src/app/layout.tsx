import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://veloxa.tech"),
  title: {
    default: "Veloxa - Fast, Professional Website Development Services",
    template: "%s | Veloxa",
  },
  description:
    "Transform your ideas into high-performance websites. Veloxa offers custom web development with Next.js, SEO optimization, and lightning-fast load times.",
  keywords: [
    "website development",
    "web development services",
    "custom websites",
    "Next.js development",
    "responsive web design",
    "veloxa",
    "UI/UX design",
    "SEO optimization",
    "landing page design",
    "frontend development"
  ],
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
  const GA_MEASUREMENT_ID = "G-682G153K5S";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://veloxa.tech/#organization",
        "name": "Veloxa",
        "url": "https://veloxa.tech",
        "logo": "https://veloxa.tech/images/logo_new.png",
        "image": "https://veloxa.tech/images/logo_new.png",
        "description": "Professional website development services and custom Next.js development.",
        "slogan": "From idea to online — fast.",
        "telephone": "+919205568939",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Connaught Place",
          "addressLocality": "New Delhi",
          "addressCountry": "IN",
          "postalCode": "110001"
        },
        "priceRange": "$$",
        "sameAs": [
          "https://www.facebook.com/people/Veloxa/61573277101288/",
          "https://twitter.com/veloxa",
          "https://linkedin.com/company/veloxa"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://veloxa.tech/#website",
        "url": "https://veloxa.tech",
        "name": "Veloxa Website Development",
        "publisher": {
          "@id": "https://veloxa.tech/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
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

