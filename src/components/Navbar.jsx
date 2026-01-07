"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [desktopServices, setDesktopServices] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-black text-white border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO - Left Side */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="leading-tight">
            <img src="/weblogo.webp" alt="Company Logo" className="w-17 h-16 object-contain" />
          </Link>
        </div>

        {/* DESKTOP NAV - Center/Right aligned */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-[#25ccad] transition">HOME</Link>

            {/* SERVICES DROPDOWN */}
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
                    className="absolute top-full mt-4 left-0 w-72 bg-black border border-white/10 shadow-2xl overflow-hidden"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: 64 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="h-[2px] bg-[#25ccad] ml-4"
                    />
                    <ul className="py-3">
                      <ServiceItem href="/services/web-development" label="Web Development" active delay={0.1} />
                      <ServiceItem href="/services/mobile-development" label="Mobile Development" delay={0.15} />
                      <ServiceItem href="/services/cms-solution" label="CMS Solution" delay={0.2} />
                      <ServiceItem href="/services/ui-ux" label="UI/UX Design" delay={0.25} />
                      <ServiceItem href="/services/digital-marketing" label="Digital Marketing" delay={0.3} />
                      <ServiceItem href="/services/ai-integration" label="AI Integration" delay={0.35} />
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="hover:text-[#25ccad] transition">ABOUT</Link>
            <Link href="/news" className="hover:text-[#25ccad] transition">NEWS</Link>
            <Link href="/contact-us" className="hover:text-[#25ccad] transition">CONTACT US</Link>
          </nav>

          {/* GET STARTED BUTTON */}
          <button
            type="button"
            onClick={() => router.push("/contact-us")}
            className="px-6 py-3 bg-[#25ccad] hover:bg-[#1fa98d] rounded-lg text-black font-medium transition whitespace-nowrap"
          >
            Get Started
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-black flex flex-col h-screen overflow-y-auto"
            style={{ pointerEvents: "auto" }}
            onWheel={(e) => {
              e.currentTarget.scrollTop += e.deltaY;
            }}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="fixed top-6 right-6 z-[1000] text-white bg-black/30 p-2 rounded-lg"
            >
              <X size={28} />
            </button>

            {/* LOGO */}
            <div className="px-6 pt-8">
              <Link href="/" onClick={() => setMobileOpen(false)} className="leading-tight">
                <img src="/weblogo.webp" alt="Company Logo" className="w-22 h-14 object-contain" />
              </Link>
            </div>

            {/* MENU LINKS */}
            <div className="px-6 py-20 space-y-8 text-lg font-semibold text-white flex-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="block hover:text-[#25ccad] transition">
                HOME
              </Link>

              {/* SERVICES ACCORDION */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServices(!mobileServices)}
                  className="flex items-center justify-between w-full hover:text-[#25ccad] transition"
                >
                  SERVICES
                  <ChevronDown size={20} className={`transition-transform ${mobileServices ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {mobileServices && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 mt-5 space-y-5 text-white/90 text-base"
                    >
                      <MobileItem href="/services/web-development" label="Web Development" close={setMobileOpen} />
                      <MobileItem href="/services/mobile-development" label="Mobile Development" close={setMobileOpen} />
                      <MobileItem href="/services/cms-solution" label="CMS Solution" close={setMobileOpen} />
                      <MobileItem href="/services/ui-ux" label="UI/UX Design" close={setMobileOpen} />
                      <MobileItem href="/services/digital-marketing" label="Digital Marketing" close={setMobileOpen} />
                      <MobileItem href="/services/ai-integration" label="AI Integration" close={setMobileOpen} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <MobileItem href="/about" label="ABOUT" close={setMobileOpen} />
              <MobileItem href="/news" label="NEWS" close={setMobileOpen} />
              <MobileItem href="/contact-us" label="CONTACT US" close={setMobileOpen} />
            </div>

            {/* MOBILE GET STARTED BUTTON */}
            <div className="px-6 pb-10">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setMobileOpen(false);
                  router.push("/contact-us");
                }}
                className="w-full py-4 bg-[#25ccad] hover:bg-[#1fa98d] rounded-lg text-black font-bold text-sm transition"
              >
                Get Started
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ServiceItem({ href, label, active, delay = 0 }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
      className="border-b border-white/10"
    >
      <Link
        href={href}
        className={`block px-5 py-3 text-sm font-medium ${
          active ? "text-[#25ccad]" : "text-white"
        } hover:bg-[#25ccad]/20 hover:text-[#25ccad] transition`}
      >
        {label}
      </Link>
    </motion.li>
  );
}

function MobileItem({ href, label, close }) {
  return (
    <Link href={href} onClick={() => close(false)} className="block hover:text-[#25ccad] transition">
      {label}
    </Link>
  );
}