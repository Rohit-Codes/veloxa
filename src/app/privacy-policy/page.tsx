import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Veloxa",
  description: "Our commitment to protecting your privacy and personal data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-black mb-8">Privacy Policy.</h1>
        <div className="prose prose-lg prose-slate">
          <p className="mb-6">At Veloxa, your privacy is our priority. This policy outlines how we collect, use, and protect your information.</p>
          <h2 className="text-2xl font-bold mb-4">1. Information Collection</h2>
          <p className="mb-6">We collect personal information that you provide to us directly through contact forms, such as your name, email address, and phone number.</p>
          <h2 className="text-2xl font-bold mb-4">2. Use of Information</h2>
          <p className="mb-6">We use the information we collect to communicate with you, process your requests, and improve our services.</p>
          <h2 className="text-2xl font-bold mb-4">3. Data Protection</h2>
          <p className="mb-6">We implement industry-standard security measures to protect your data from unauthorized access.</p>
          <p className="mt-12 text-sm text-gray-500 italic">Last updated: April 11, 2026</p>
        </div>
      </div>
    </div>
  );
}
