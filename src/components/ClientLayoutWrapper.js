"use client";
import dynamic from "next/dynamic";

const SmoothScrollProvider = dynamic(() => import("@/components/SmoothScrollProvider"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function ClientLayoutWrapper({ children }) {
  return (
    <SmoothScrollProvider>
      {children}
      <Footer />
    </SmoothScrollProvider>
  );
}
