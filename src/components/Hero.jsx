"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection({ mobileOpen }) {
  const heroRef = useRef(null);
  const router = useRouter();

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heroRef.current.style.setProperty("--x", `${x}px`);
    heroRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="hero relative w-full h-auto min-h-screen min-h-[100dvh] md:min-h-screen overflow-hidden bg-black"
      style={{ display: mobileOpen ? "none" : "block" }}
    >
      {!mobileOpen && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover brightness-90"
          >
            <source src="/herovedio.webm" type="video/webm" />
            <source src="/hero.mp4" type="video/mp4" />
            <track kind="captions" src={null} label="No captions needed" default />
          </video>
          {/* Mobile-only overlay for better readability */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
          <div className="md:hidden absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,204,173,0.1)_0%,transparent_50%)]" />
        </>
      )}

      <div className="glow-layer absolute inset-0 pointer-events-none" />

      {/* Hero Content Container - Desktop & Mobile Optimized */}
      <div className="absolute inset-0 z-10 flex flex-col">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 pt-28 sm:pt-32 md:pt-36 pb-4 sm:pb-6 flex flex-col flex-1">

          {/* Tagline at top */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 md:bg-transparent md:border-none md:p-0">
              <div className="w-1.5 h-1.5 rounded-full bg-[#25ccad] animate-pulse md:hidden" />
              <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-white/90 tracking-[0.15em] uppercase">
                INNOVATE / BUILD / EXCEED
              </p>
            </div>
          </motion.div>

          {/* Main Hero Text */}
          <div className="flex-1 flex flex-col justify-center gap-4">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-white max-w-4xl"
            >
              A Top <span style={{ color: "#25ccad" }}>IT Company in India</span> <br className="hidden md:block" />
              Powering Global Digital Transformation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/90 max-w-3xl"
            >
              We deliver <span className="text-white md:text-[#25ccad] md:font-medium">AI-powered, scalable, and future-ready digital solutions</span> for startups and enterprises across global markets, ensuring innovation and excellence in every project.
            </motion.p>

            {/* Button with Arrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4 md:mt-2"
            >
              <button
                onClick={() => router.push("/contact-us")}
                className="group relative px-6 py-3 md:px-8 md:py-3.5 text-base md:text-lg font-bold rounded-2xl md:rounded-xl transition-all duration-300 flex items-center justify-center gap-3 w-full md:w-auto overflow-hidden hover:scale-110 active:scale-95"
                style={{ backgroundColor: "#25ccad", color: "#000" }}
              >
                <span className="relative z-10">Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
            </motion.div>
          </div>

          {/* Certification Badges at Bottom - Optimized Grid for Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-auto pt-6"
          >
            <div className="grid grid-cols-2 md:flex md:flex-wrap items-end gap-x-4 sm:gap-x-8 gap-y-4 md:gap-10 lg:gap-12">

              {/* AWS Certified Badge */}
              <div className="flex flex-col items-start group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-2 flex items-center justify-start transition-transform duration-300 group-hover:scale-105 relative">
                  <Image src="/AWS.png" alt="AWS" fill className="object-contain" />
                </div>
                <p className="text-white text-[9px] md:text-xs font-bold leading-tight tracking-wide">AWS CERTIFIED</p>
                <p className="text-white/70 text-[8px] md:text-[10px] font-medium mt-1">PROFESSIONAL</p>
              </div>

              {/* LinkedIn Badge */}
              <div className="flex flex-col items-start group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-2 flex items-center justify-start transition-transform duration-300 group-hover:scale-105 relative">
                  <Image src="/linkedin-logo.svg" alt="LinkedIn" fill className="object-contain" />
                </div>
                <p className="text-white text-[9px] md:text-xs font-bold leading-tight tracking-wide">TOP RATED AGENCY</p>
                <p className="text-white/70 text-[8px] md:text-[10px] font-medium mt-1">2023 & 2024</p>
              </div>

              {/* Digital Marketing Badge */}
              <div className="flex flex-col items-start group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-2 flex items-center justify-start transition-transform duration-300 group-hover:scale-105 relative">
                  <Image src="/digital.png" alt="Digital Marketing" fill className="object-contain" />
                </div>
                <p className="text-white text-[9px] md:text-xs font-bold leading-tight tracking-wide">DIGITAL MARKETING</p>
                <p className="text-white/70 text-[8px] md:text-[10px] font-medium mt-1">CERTIFIED</p>
              </div>

              {/* Excellence Award Badge */}
              <div className="flex flex-col items-start group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-2 flex items-center justify-start transition-transform duration-300 group-hover:scale-105">
                  <Award className="w-10 h-10 md:w-14 md:h-14 text-[#25ccad]" strokeWidth={1.5} />
                </div>
                <p className="text-white text-[9px] md:text-xs font-bold leading-tight tracking-wide">EXCELLENCE AWARD</p>
                <p className="text-white/70 text-[8px] md:text-[10px] font-medium mt-1">CERTIFIED PROF.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom overlay gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}