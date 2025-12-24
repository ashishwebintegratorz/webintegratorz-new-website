"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black flex items-center justify-center">

      {/* 🎬 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-110"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* ✨ Light overlay to keep video bright */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* 🖤 Black Box with Your Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 
  bg-black/75 backdrop-blur-lg rounded-2xl p-8 
  w-[92%] sm:w-[85%] md:w-[70%] lg:w-[60%] max-w-4xl 
  text-center border border-white/10 shadow-2xl">


        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
          Webintegratorz
        </h1>

        {/* Main Text */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-3 leading-relaxed">
          We Innovate, Build and Excel — crafting modern, secure, and scalable digital products
          that drive business growth through intelligent engineering and seamless AI integration.
        </p>

        {/* Sub Text */}
        <p className="text-sm sm:text-base md:text-lg text-white/70 mb-6 leading-relaxed">
          From custom web platforms to backend-powered systems, automation, and security-first software —
          we transform ideas into high-performance solutions for startups, professionals, and enterprises.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            className="px-6 py-3 bg-[#27ccae] text-black font-semibold text-lg rounded-full hover:shadow-lg hover:shadow-[#27ccae]/40 transition"
          >
            Get Started
          </a>

          <a
            href="#"
            className="px-6 py-3 border border-[#27ccae] text-[#27ccae] font-semibold text-lg rounded-full hover:bg-[#27ccae]/10 transition"
          >
            Get Quote
          </a>
        </div>

      </div>
    </section>
  );
}
