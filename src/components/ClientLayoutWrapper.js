"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import AccessibilityWidget from "./AccessibilityWidget";
import SmoothScroll from "./SmoothScroll";

export default function ClientLayoutWrapper({ children }) {
  return (
    <SmoothScroll>
      {/* Skip to Main Content Link for WCAG 2.2 / ADA / Section 508 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-blue-600 focus:text-white focus:font-bold focus:rounded-xl focus:shadow-2xl focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Global Ambient Light Gradient Glow Background System (Hardware-accelerated) */}
      <div className="bg-ambient-light-glow" aria-hidden="true">
        <div className="glow-orb-primary" />
        <div className="glow-orb-secondary" />
        <div className="glow-orb-tertiary" />
        <div className="glow-orb-quaternary" />
      </div>

      <Navbar />
      
      <main id="main-content" tabIndex="-1" className="outline-none relative z-10">
        {children}
      </main>
      <Footer />

      <AccessibilityWidget />
    </SmoothScroll>
  );
}
