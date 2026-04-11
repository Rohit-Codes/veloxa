import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Veloxa",
  description: "The rules and regulations for using Veloxa's services.",
};

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-black mb-8">Terms of Service.</h1>
        <div className="prose prose-lg prose-slate">
          <p className="mb-6">By accessing or using Veloxa's services, you agree to be bound by these terms.</p>
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">The services provided by Veloxa are subject to the following Terms of Service ("TOS"). Veloxa reserves the right to update the TOS at any time without notice.</p>
          <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
          <p className="mb-6">Veloxa provides custom web development and design services as described on this website.</p>
          <h2 className="text-2xl font-bold mb-4">3. User Conduct</h2>
          <p className="mb-6">Users are expected to provide accurate information and respect intellectual property rights when interacting with our site.</p>
          <p className="mt-12 text-sm text-gray-400 italic">Last updated: April 11, 2026</p>
        </div>
      </div>
    </div>
  );
}
