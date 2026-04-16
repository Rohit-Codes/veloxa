"use client";

import dynamic from "next/dynamic";

const WhatsAppFloatingButton = dynamic(() => import("@/components/WhatsAppFloatingButton"), { ssr: false });
const WelcomePopup = dynamic(() => import("@/components/WelcomePopup"), { ssr: false });

export default function ClientWrapper() {
  return (
    <>
      <WhatsAppFloatingButton />
      <WelcomePopup />
    </>
  );
}
