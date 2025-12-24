"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [desktopServices, setDesktopServices] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black">
      {/* ================= TOP NAV BAR ================= */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between text-white">

        {/* LOGO */}
        <Link href="/" className="leading-tight">
          <h1 className="text-2xl font-bold">
            Web<span className="text-[#25ccad]">integratorz</span>
          </h1>
          <p className="text-[10px] tracking-widest text-white/60">
            WE INNOVATE, BUILD AND EXCEL
          </p>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">

          <Link href="/" className="hover:text-[#25ccad] transition">
            HOME
          </Link>

          {/* SERVICES (DESKTOP) */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopServices(true)}
            onMouseLeave={() => setDesktopServices(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#25ccad] transition">
              SERVICES <ChevronDown size={14} />
            </div>

            <AnimatePresence>
              {desktopServices && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-full mt-4 left-0 w-72 bg-black border border-white/10 shadow-2xl"
                >
                  <div className="h-[2px] bg-[#25ccad] w-16 ml-4" />

                  <ul className="py-3">
                    <DesktopItem href="/services/web-development" label="Web Development" />
                    <DesktopItem href="/services/mobile-development" label="Mobile Development" />
                    <DesktopItem href="/services/cms-solution" label="CMS Solution" />
                    <DesktopItem href="/services/ui-ux" label="UI/UX" />
                    <DesktopItem href="/services/digital-marketing" label="Digital Marketing" />
                    <DesktopItem href="/services/it-staff-augmentation" label="IT Staff Augmentation" />
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className="hover:text-[#25ccad] transition">
            ABOUT
          </Link>

          <Link href="/news" className="hover:text-[#25ccad] transition">
            NEWS
          </Link>

          <Link href="/contact" className="hover:text-[#25ccad] transition">
            CONTACT US
          </Link>
        </nav>

        {/* ================= RIGHT ICONS ================= */}
        <div className="flex items-center gap-3">
          <button className="hidden md:block p-2 rounded-full hover:bg-white/10 transition">
            <Search size={18} />
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* ================= MOBILE FULLSCREEN MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black md:hidden"
          >
            {/* MOBILE HEADER */}
            <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <h2 className="text-xl font-bold text-white">
                  Web<span className="text-[#25ccad]">integratorz</span>
                </h2>
                <p className="text-[10px] tracking-widest text-white/60">
                  WE INNOVATE, BUILD AND EXCEL
                </p>
              </Link>

              {/* ✅ FIXED CLOSE BUTTON */}
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-[#25ccad]/20 transition"
                aria-label="Close menu"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* MOBILE MENU ITEMS */}
            <div className="px-6 py-10 space-y-8 text-lg font-semibold text-white">

              <MobileLink href="/" close={setMobileOpen} label="HOME" />

              {/* MOBILE SERVICES */}
              <div>
                <button
                  onClick={() => setMobileServices(!mobileServices)}
                  className="flex items-center justify-between w-full hover:text-[#25ccad]"
                >
                  SERVICES
                  <ChevronDown
                    size={18}
                    className={`transition ${mobileServices ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {mobileServices && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="ml-4 mt-5 space-y-4 text-white/90"
                    >
                      <MobileLink href="/services/web-development" label="Web Development" close={setMobileOpen} />
                      <MobileLink href="/services/mobile-development" label="Mobile Development" close={setMobileOpen} />
                      <MobileLink href="/services/cms-solution" label="CMS Solution" close={setMobileOpen} />
                      <MobileLink href="/services/ui-ux" label="UI/UX" close={setMobileOpen} />
                      <MobileLink href="/services/digital-marketing" label="Digital Marketing" close={setMobileOpen} />
                      <MobileLink href="/services/it-staff-augmentation" label="IT Staff Augmentation" close={setMobileOpen} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <MobileLink href="/about" close={setMobileOpen} label="ABOUT" />
              <MobileLink href="/news" close={setMobileOpen} label="NEWS" />
              <MobileLink href="/contact" close={setMobileOpen} label="CONTACT US" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ================= COMPONENTS ================= */

function DesktopItem({ href, label }) {
  return (
    <li className="border-b border-white/5">
      <Link
        href={href}
        className="block px-5 py-3 text-sm text-white hover:text-[#25ccad] hover:bg-white/5 transition"
      >
        {label}
      </Link>
    </li>
  );
}

function MobileLink({ href, label, close }) {
  return (
    <Link
      href={href}
      onClick={() => close(false)}
      className="block hover:text-[#25ccad]"
    >
      {label}
    </Link>
  );
}
