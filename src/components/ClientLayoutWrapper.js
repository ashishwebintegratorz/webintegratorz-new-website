"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayoutWrapper({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Skip to Main Content Link for WCAG 2.2 / ADA / Section 508 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-[#00f5a0] focus:text-black focus:font-bold focus:rounded-xl focus:shadow-2xl focus:outline-none"
      >
        Skip to main content
      </a>

      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      
      {!mobileOpen && (
        <>
          <main id="main-content" tabIndex="-1" className="outline-none">
            {children}
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
