"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayoutWrapper>
          <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

          {/* Hide Hero/background when mobile menu is open */}
          {!mobileOpen && children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
