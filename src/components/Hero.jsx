"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Award } from "lucide-react";

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
      className="hero relative w-full min-h-screen overflow-hidden bg-black"
      style={{ display: mobileOpen ? "none" : "block" }}
    >
      {!mobileOpen && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-90"
        >
          <source src="/herovedio.webm" type="video/webm" />
        </video>
      )}

      <div className="glow-layer absolute inset-0 pointer-events-none" />

      {/* Hero Content Container - Desktop & Mobile Optimized */}
      <div className="absolute inset-0 z-10 flex flex-col">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-20 flex flex-col flex-1">
        
        {/* Tagline at top */}
        <div className="mb-6 sm:mb-8">
          <p className="text-[10px] sm:text-xs md:text-sm font-medium text-white/70 tracking-wider uppercase">
            INNOVATE / BUILD / EXCEED
          </p>
        </div>

        {/* Main Hero Text */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white max-w-3xl">
            Your Partner in <br />
            Web, Mobile, SaaS &<br />
            <span style={{ color: "#25ccad" }}>AI/ML Solutions</span>
          </h1>
          
          <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/90 max-w-2xl">
            <span style={{ color: "#25ccad", fontWeight: 600 }}>At Webintegratorz</span>{" "}
            we empower businesses globally with{" "}
            <span style={{ color: "#25ccad", fontWeight: 500 }}>
              Web, Mobile, SaaS & AI/ML solutions
            </span>{" "}
            that scale securely and perform seamlessly — helping brands grow with confidence.
          </p>

          {/* Button with Arrow */}
          <div className="mt-6 sm:mt-8 md:mt-10">
            <button
              onClick={() => router.push("/contact-us")}
              className="px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-lg sm:rounded-xl transition-transform duration-300 flex items-center gap-2 sm:gap-3 group"
              style={{ backgroundColor: "#25ccad", color: "#000" }}
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Certification Badges at Bottom - Mobile & Desktop Optimized */}
        <div className="mt-auto pt-7 sm:pt-8 md:pt-10">
          <div className="flex flex-wrap items-end gap-8 sm:gap-10 md:gap-14 lg:gap-20">
            
            {/* AWS Certified Badge */}
            <div className="flex flex-col items-start">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 sm:mb-4 flex items-center justify-start">
                <img
                  src="/AWS.png"
                  alt="AWS"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white text-xs sm:text-sm md:text-base font-bold leading-tight tracking-wide">
                AWS CERTIFIED
              </p>
              <p className="text-white/70 text-[10px] sm:text-xs md:text-sm font-medium mt-1">
                PROFESSIONAL
              </p>
            </div>

            {/* LinkedIn Badge */}
            <div className="flex flex-col items-start">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 sm:mb-4 flex items-center justify-start">
                <img 
                  src="/linkedin-logo.svg" 
                  alt="LinkedIn" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white text-xs sm:text-sm md:text-base font-bold leading-tight tracking-wide">
                TOP RATED AGENCY
              </p>
              <p className="text-white/70 text-[10px] sm:text-xs md:text-sm font-medium mt-1">
                2023 & 2024
              </p>
            </div>

            {/* Digital Marketing Badge */}
            <div className="flex flex-col items-start">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 sm:mb-4 flex items-center justify-start">
                <img 
                  src="/digital.png" 
                  alt="Digital Marketing" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white text-xs sm:text-sm md:text-base font-bold leading-tight tracking-wide">
                DIGITAL MARKETING
              </p>
              <p className="text-white/70 text-[10px] sm:text-xs md:text-sm font-medium mt-1">
                CERTIFIED
              </p>
            </div>

            {/* Excellence Award Badge */}
            <div className="flex flex-col items-start">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 sm:mb-4 flex items-center justify-start">
                <Award className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#25ccad]" strokeWidth={1.5} />
              </div>
              <p className="text-white text-xs sm:text-sm md:text-base font-bold leading-tight tracking-wide">
                EXCELLENCE AWARD
              </p>
              <p className="text-white/70 text-[10px] sm:text-xs md:text-sm font-medium mt-1">
                CERTIFIED PROFESSIONAL
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Bottom overlay gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black to-transparent" />

      {/* Hover Scale Effect */}
      <style jsx>{`
        button:hover {
          transform: scale(1.12);
        }
        
        /* Mobile specific adjustments */
        @media (max-width: 640px) {
          .hero {
            min-height: 100vh;
            height: auto;
          }
        }
      `}</style>
    </section>
  );
}