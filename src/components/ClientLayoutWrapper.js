"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayoutWrapper({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      {!mobileOpen && (
        <>
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
