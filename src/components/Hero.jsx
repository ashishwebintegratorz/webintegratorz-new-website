"use client";
import React, { useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
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
      className="hero relative w-full h-[190vh] overflow-hidden bg-black"
    >
      
      {/* 🖼️ Image BEHIND */}
      <div
        className="masked-image absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/webint.webp')" }}
      />

      {/* 🎬 Video ON TOP */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.9]"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute bottom-[12%] left-[44%] -translate-x-1/2 
  bg-black/75 backdrop-blur-lg rounded-2xl p-8 w-[988px]
  text-center border border-white/10 shadow-2xl"
      >
        <img src="/rentbuddy.png" alt="Announcement" className="mx-auto mb-4" />
      </div>

      {/* ✨ Glow */}
      <div className="glow-layer absolute inset-0 pointer-events-none" />

      {/* 🧠 Content */}
      <div className="relative z-10 max-w-5xl px-40 pt-40 text-white">
        <h1 className="text-6xl font-bold leading-tight">
          Everything App <br /> for your teams
        </h1>

        <p className="mt-6 text-lg opacity-80 max-w-xl">
          Open-source platform replacing Jira, Linear, Slack & Notion.
        </p>

        <button
          className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
        >
          Get Started
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}
