"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FileSearch, 
  Network, 
  Palette, 
  Code2, 
  Rocket, 
  Settings, 
  Sparkles
} from "lucide-react";

export default function WorkflowCycle() {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      number: "01",
      icon: FileSearch,
      title: "Requirement Gathering & Discovery",
      subtitle: "Planning, Feasibility & Architecture Spec",
      color: "#155dfc",
      gradient: "from-[#155dfc] to-[#2563eb]",
      badgePos: { left: '34.6%', top: '24%' },
      calloutPos: { left: '2%', top: '3%' },
      textAlign: "text-right"
    },
    {
      number: "02",
      icon: Network,
      title: "Sitemap, Wireframe & Architecture",
      subtitle: "Information Architecture & User Flow Models",
      color: "#0ea5e9",
      gradient: "from-[#0ea5e9] to-[#38bdf8]",
      badgePos: { left: '56.6%', top: '73.1%' },
      calloutPos: { left: '68%', top: '84%' },
      textAlign: "text-left"
    },
    {
      number: "03",
      icon: Palette,
      title: "UI/UX Design & Prototyping",
      subtitle: "Design Systems, Tokens & Clickable High-Fi",
      color: "#50a2ff",
      gradient: "from-[#50a2ff] to-[#38bdf8]",
      badgePos: { left: '81%', top: '50%' },
      calloutPos: { left: '94%', top: '44%' },
      textAlign: "text-left"
    },
    {
      number: "04",
      icon: Code2,
      title: "Development & Sprint Engineering",
      subtitle: "Frontend, Backend & Microservice Coding",
      color: "#2563eb",
      gradient: "from-[#2563eb] to-[#155dfc]",
      badgePos: { left: '65.4%', top: '24%' },
      calloutPos: { left: '76%', top: '3%' },
      textAlign: "text-left"
    },
    {
      number: "05",
      icon: Rocket,
      title: "Testing, QA, Review & Launch",
      subtitle: "UAT, Security Audits & Zero-Downtime Deploy",
      color: "#38bdf8",
      gradient: "from-[#38bdf8] to-[#50a2ff]",
      badgePos: { left: '43.4%', top: '73.1%' },
      calloutPos: { left: '3%', top: '84%' },
      textAlign: "text-right"
    },
    {
      number: "06",
      icon: Settings,
      title: "Maintenance & Continuous Evolution",
      subtitle: "24/7 SLA Telemetry, Security Patches & Scale",
      color: "#1e40af",
      gradient: "from-[#1e40af] to-[#155dfc]",
      badgePos: { left: '19%', top: '50%' },
      calloutPos: { left: '0%', top: '44%' },
      textAlign: "text-right"
    }
  ];

  // Auto-play pulse cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section id="process" className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#030712] overflow-hidden border-t border-white/[0.08]">
      {/* Background ambient lighting effects tailored to Brand UI */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[#155dfc]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#50a2ff]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#155dfc]/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Subtle background tech grid */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`, 
          backgroundSize: '32px 32px' 
        }} 
      />

      <div className="relative max-w-[1360px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030712] border border-[#155dfc]/30 mb-5 font-bold shadow-lg backdrop-blur-md"
          >
            <Sparkles size={14} className="text-[#50a2ff] animate-pulse" />
            <span className="text-[#50a2ff] text-xs tracking-[0.2em] uppercase font-bold">
              SDLC & Web Dev Lifecycle
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl"
          >
            From Concept to Scale: <br />
            <span className="bg-gradient-to-r from-[#155dfc] via-[#2b7fff] to-[#50a2ff] bg-clip-text text-transparent">
              Our 6-Phase Engineering Workflow
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl font-normal leading-relaxed"
          >
            A unified execution framework harmonizing the Web Development Life Cycle (WDLC) and Software Development Life Cycle (SDLC) — from requirements gathering to enterprise cloud deployment.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* ANIMATED INFINITY LOOP DIAGRAM (Brand UI Palette) */}
        {/* ========================================================= */}
        <div className="relative w-full select-none overflow-x-auto pb-6 scrollbar-none">
          <div className="relative min-w-[800px] max-w-[1140px] mx-auto aspect-[1140/560]">
            
            {/* SVG Canvas for Infinity Ribbon and Animated Light Track */}
            <svg 
              viewBox="0 0 1140 560" 
              className="w-full h-full overflow-visible drop-shadow-[0_0_40px_rgba(21,93,252,0.15)]"
            >
              <defs>
                {/* Brand UI Gradients */}
                <linearGradient id="brandLeftLoopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e40af" />
                  <stop offset="45%" stopColor="#155dfc" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
                
                <linearGradient id="brandRightLoopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="50%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#50a2ff" />
                </linearGradient>

                <linearGradient id="brandCrossoverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#50a2ff" />
                  <stop offset="50%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#155dfc" />
                </linearGradient>

                <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                
                <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.75" />
                </filter>
              </defs>

              {/* Central Background Ambient Glows */}
              <circle cx="395" cy="280" r="140" fill="#155dfc" opacity="0.08" filter="url(#glowFilter)" />
              <circle cx="745" cy="280" r="140" fill="#50a2ff" opacity="0.08" filter="url(#glowFilter)" />

              {/* ---------------------------------------------------- */}
              {/* LEFT LOOP: Webintegratorz Ribbon Strand (Brand Blue) */}
              {/* ---------------------------------------------------- */}
              <path
                d="M 570 280 C 490 380, 410 420, 330 420 C 200 420, 130 350, 130 280 C 130 210, 200 140, 330 140 C 410 140, 490 180, 570 280"
                fill="none"
                stroke="url(#brandLeftLoopGrad)"
                strokeWidth="56"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-95"
              />

              {/* Left Loop Inner Track Line */}
              <path
                d="M 570 280 C 490 380, 410 420, 330 420 C 200 420, 130 350, 130 280 C 130 210, 200 140, 330 140 C 410 140, 490 180, 570 280"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeOpacity="0.25"
                strokeDasharray="6 6"
              />

              {/* ---------------------------------------------------- */}
              {/* RIGHT LOOP: Web Dev Cycle Strand (Cyan / Sky Blue) */}
              {/* ---------------------------------------------------- */}
              <path
                d="M 570 280 C 650 180, 730 140, 810 140 C 940 140, 1010 210, 1010 280 C 1010 350, 940 420, 810 420 C 730 420, 650 380, 570 280"
                fill="none"
                stroke="url(#brandRightLoopGrad)"
                strokeWidth="56"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-95"
              />

              {/* ---------------------------------------------------- */}
              {/* CROSSOVER STRAND: 3D Layered Cyan Diagonal Ribbon */}
              {/* ---------------------------------------------------- */}
              <g filter="url(#softShadow)">
                <path
                  d="M 450 190 C 510 230, 540 260, 570 280 C 600 300, 630 330, 690 370"
                  fill="none"
                  stroke="url(#brandCrossoverGrad)"
                  strokeWidth="56"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              {/* Right Loop Inner Track Line */}
              <path
                d="M 570 280 C 650 180, 730 140, 810 140 C 940 140, 1010 210, 1010 280 C 1010 350, 940 420, 810 420 C 730 420, 650 380, 570 280"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeOpacity="0.25"
                strokeDasharray="6 6"
              />

              {/* ---------------------------------------------------- */}
              {/* ANIMATED LIGHT BEAM TRAVELING ALONG THE INFINITY TRACK */}
              {/* ---------------------------------------------------- */}
              <path
                d="M 395 155 C 490 210, 550 260, 645 405 C 730 440, 870 440, 960 350 C 1030 280, 1000 190, 910 150 C 830 120, 750 140, 690 180 C 600 240, 540 300, 495 405 C 410 440, 270 440, 180 350 C 110 280, 140 190, 230 150 C 290 120, 340 130, 395 155 Z"
                fill="none"
                stroke="#50a2ff"
                strokeWidth="4"
                strokeDasharray="40 240"
                className="opacity-90"
              >
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="0" 
                  to="-1120" 
                  dur="7s" 
                  repeatCount="indefinite" 
                />
              </path>

              {/* Glowing Particle */}
              <circle r="6.5" fill="#ffffff" filter="url(#glowFilter)">
                <animateMotion 
                  dur="7s" 
                  repeatCount="indefinite"
                  path="M 395 155 C 490 210, 550 260, 645 405 C 730 440, 870 440, 960 350 C 1030 280, 1000 190, 910 150 C 830 120, 750 140, 690 180 C 600 240, 540 300, 495 405 C 410 440, 270 440, 180 350 C 110 280, 140 190, 230 150 C 290 120, 340 130, 395 155 Z"
                />
              </circle>

              {/* ---------------------------------------------------- */}
              {/* CENTER LABELS: Webintegratorz & Web Dev Cycle */}
              {/* ---------------------------------------------------- */}
              {/* Left Loop Center Text */}
              <g className="cursor-default select-none">
                <circle cx="330" cy="280" r="75" fill="#030712" fillOpacity="0.9" stroke="rgba(21,93,252,0.3)" strokeWidth="1.5" />
                <polygon points="400,280 390,273 390,287" fill="#155dfc" opacity="0.95" />
                <text 
                  x="330" 
                  y="274" 
                  textAnchor="middle" 
                  className="fill-white font-extrabold text-[15px] tracking-tight"
                >
                  Webintegratorz
                </text>
                <text 
                  x="330" 
                  y="292" 
                  textAnchor="middle" 
                  className="fill-[#50a2ff] font-semibold text-[9.5px] uppercase tracking-widest"
                >
                  SDLC Architecture
                </text>
              </g>

              {/* Right Loop Center Text */}
              <g className="cursor-default select-none">
                <circle cx="810" cy="280" r="75" fill="#030712" fillOpacity="0.9" stroke="rgba(80,162,255,0.3)" strokeWidth="1.5" />
                <polygon points="740,280 750,273 750,287" fill="#50a2ff" opacity="0.95" />
                <text 
                  x="810" 
                  y="274" 
                  textAnchor="middle" 
                  className="fill-white font-extrabold text-[15px] tracking-tight"
                >
                  Web Dev Cycle
                </text>
                <text 
                  x="810" 
                  y="292" 
                  textAnchor="middle" 
                  className="fill-[#50a2ff] font-semibold text-[9.5px] uppercase tracking-widest"
                >
                  Agile Flow & DevOps
                </text>
              </g>

              {/* ---------------------------------------------------- */}
              {/* CONNECTOR LEADER LINES TO CALLOUT TEXT LABELS */}
              {/* ---------------------------------------------------- */}
              {/* 01: Top-Left (Requirement Gathering & Discovery) */}
              <g className="transition-all duration-300">
                <polyline 
                  points="395,140 395,65 290,65" 
                  fill="none" 
                  stroke={activeStep === 0 ? "#155dfc" : "#334155"} 
                  strokeWidth={activeStep === 0 ? "2.5" : "1.5"} 
                  strokeDasharray={activeStep === 0 ? "none" : "3 3"} 
                />
                <circle cx="395" cy="140" r="3.5" fill="#155dfc" />
                <polygon points="288,65 296,61 296,69" fill={activeStep === 0 ? "#155dfc" : "#334155"} />
              </g>

              {/* 04: Top-Right (Development & Sprint Engineering) */}
              <g className="transition-all duration-300">
                <polyline 
                  points="745,140 745,65 850,65" 
                  fill="none" 
                  stroke={activeStep === 3 ? "#2563eb" : "#334155"} 
                  strokeWidth={activeStep === 3 ? "2.5" : "1.5"} 
                  strokeDasharray={activeStep === 3 ? "none" : "3 3"}
                />
                <circle cx="745" cy="140" r="3.5" fill="#2563eb" />
                <polygon points="852,65 844,61 844,69" fill={activeStep === 3 ? "#2563eb" : "#334155"} />
              </g>

              {/* 03: Right (UI/UX Design & Prototyping) */}
              <g className="transition-all duration-300">
                <polyline 
                  points="990,280 1045,280" 
                  fill="none" 
                  stroke={activeStep === 2 ? "#50a2ff" : "#334155"} 
                  strokeWidth={activeStep === 2 ? "2.5" : "1.5"} 
                  strokeDasharray={activeStep === 2 ? "none" : "3 3"}
                />
                <circle cx="990" cy="280" r="3.5" fill="#50a2ff" />
                <polygon points="1048,280 1040,276 1040,284" fill={activeStep === 2 ? "#50a2ff" : "#334155"} />
              </g>

              {/* 02: Bottom-Right (Sitemap, Wireframe & Architecture) */}
              <g className="transition-all duration-300">
                <polyline 
                  points="645,420 645,495 755,495" 
                  fill="none" 
                  stroke={activeStep === 1 ? "#0ea5e9" : "#334155"} 
                  strokeWidth={activeStep === 1 ? "2.5" : "1.5"} 
                  strokeDasharray={activeStep === 1 ? "none" : "3 3"}
                />
                <circle cx="645" cy="420" r="3.5" fill="#0ea5e9" />
                <polygon points="758,495 750,491 750,499" fill={activeStep === 1 ? "#0ea5e9" : "#334155"} />
              </g>

              {/* 05: Bottom-Left (Testing, QA, Review & Launch) */}
              <g className="transition-all duration-300">
                <polyline 
                  points="495,420 495,495 385,495" 
                  fill="none" 
                  stroke={activeStep === 4 ? "#38bdf8" : "#334155"} 
                  strokeWidth={activeStep === 4 ? "2.5" : "1.5"} 
                  strokeDasharray={activeStep === 4 ? "none" : "3 3"}
                />
                <circle cx="495" cy="420" r="3.5" fill="#38bdf8" />
                <polygon points="382,495 390,491 390,499" fill={activeStep === 4 ? "#38bdf8" : "#334155"} />
              </g>

              {/* 06: Left (Maintenance & Continuous Evolution) */}
              <g className="transition-all duration-300">
                <polyline 
                  points="150,280 95,280" 
                  fill="none" 
                  stroke={activeStep === 5 ? "#155dfc" : "#334155"} 
                  strokeWidth={activeStep === 5 ? "2.5" : "1.5"} 
                  strokeDasharray={activeStep === 5 ? "none" : "3 3"}
                />
                <circle cx="150" cy="280" r="3.5" fill="#155dfc" />
                <polygon points="92,280 100,276 100,284" fill={activeStep === 5 ? "#155dfc" : "#334155"} />
              </g>
            </svg>

            {/* ========================================================= */}
            {/* HTML OVERLAYS: Interactive Step Badges (Brand UI Styled) */}
            {/* ========================================================= */}

            {/* 01: Top Left */}
            <div 
              style={{ left: '34.6%', top: '24%' }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <button
                type="button"
                onClick={() => setActiveStep(0)}
                onMouseEnter={() => setHoveredStep(0)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`group relative flex items-center justify-center p-1 rounded-full transition-all duration-300 cursor-pointer ${
                  activeStep === 0 ? "scale-115" : "hover:scale-105"
                }`}
              >
                {activeStep === 0 && (
                  <span className="absolute inset-0 rounded-full bg-[#155dfc]/40 animate-ping" />
                )}
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 ${
                  activeStep === 0 
                    ? "bg-[#155dfc] text-white border-white/60 shadow-[#155dfc]/60" 
                    : "bg-[#030712]/90 text-gray-200 border-[#155dfc]/30 hover:border-[#50a2ff]"
                }`}>
                  <span className="text-xs font-black tracking-wider">01</span>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <FileSearch size={11} className="text-white" />
                  </div>
                </div>
              </button>
            </div>

            {/* 02: Bottom Right Crossover */}
            <div 
              style={{ left: '56.6%', top: '73.1%' }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <button
                type="button"
                onClick={() => setActiveStep(1)}
                onMouseEnter={() => setHoveredStep(1)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`group relative flex items-center justify-center p-1 rounded-full transition-all duration-300 cursor-pointer ${
                  activeStep === 1 ? "scale-115" : "hover:scale-105"
                }`}
              >
                {activeStep === 1 && (
                  <span className="absolute inset-0 rounded-full bg-[#0ea5e9]/40 animate-ping" />
                )}
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 ${
                  activeStep === 1 
                    ? "bg-[#0ea5e9] text-white border-white/60 shadow-[#0ea5e9]/60" 
                    : "bg-[#030712]/90 text-gray-200 border-[#0ea5e9]/30 hover:border-[#50a2ff]"
                }`}>
                  <span className="text-xs font-black tracking-wider">02</span>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <Network size={11} className="text-white" />
                  </div>
                </div>
              </button>
            </div>

            {/* 03: Far Right */}
            <div 
              style={{ left: '81%', top: '50%' }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <button
                type="button"
                onClick={() => setActiveStep(2)}
                onMouseEnter={() => setHoveredStep(2)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`group relative flex items-center justify-center p-1 rounded-full transition-all duration-300 cursor-pointer ${
                  activeStep === 2 ? "scale-115" : "hover:scale-105"
                }`}
              >
                {activeStep === 2 && (
                  <span className="absolute inset-0 rounded-full bg-[#50a2ff]/40 animate-ping" />
                )}
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 ${
                  activeStep === 2 
                    ? "bg-[#50a2ff] text-[#030712] font-black border-white/80 shadow-[#50a2ff]/60" 
                    : "bg-[#030712]/90 text-gray-200 border-[#50a2ff]/30 hover:border-[#50a2ff]"
                }`}>
                  <span className="text-xs font-black tracking-wider">03</span>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${activeStep === 2 ? "bg-[#030712]/20 text-[#030712]" : "bg-white/20 text-white"}`}>
                    <Palette size={11} />
                  </div>
                </div>
              </button>
            </div>

            {/* 04: Top Right */}
            <div 
              style={{ left: '65.4%', top: '24%' }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <button
                type="button"
                onClick={() => setActiveStep(3)}
                onMouseEnter={() => setHoveredStep(3)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`group relative flex items-center justify-center p-1 rounded-full transition-all duration-300 cursor-pointer ${
                  activeStep === 3 ? "scale-115" : "hover:scale-105"
                }`}
              >
                {activeStep === 3 && (
                  <span className="absolute inset-0 rounded-full bg-[#2563eb]/40 animate-ping" />
                )}
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 ${
                  activeStep === 3 
                    ? "bg-[#2563eb] text-white border-white/60 shadow-[#2563eb]/60" 
                    : "bg-[#030712]/90 text-gray-200 border-[#2563eb]/30 hover:border-[#50a2ff]"
                }`}>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <Code2 size={11} className="text-white" />
                  </div>
                  <span className="text-xs font-black tracking-wider">04</span>
                </div>
              </button>
            </div>

            {/* 05: Bottom Left Crossover */}
            <div 
              style={{ left: '43.4%', top: '73.1%' }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <button
                type="button"
                onClick={() => setActiveStep(4)}
                onMouseEnter={() => setHoveredStep(4)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`group relative flex items-center justify-center p-1 rounded-full transition-all duration-300 cursor-pointer ${
                  activeStep === 4 ? "scale-115" : "hover:scale-105"
                }`}
              >
                {activeStep === 4 && (
                  <span className="absolute inset-0 rounded-full bg-[#38bdf8]/40 animate-ping" />
                )}
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 ${
                  activeStep === 4 
                    ? "bg-[#38bdf8] text-[#030712] font-black border-white/80 shadow-[#38bdf8]/60" 
                    : "bg-[#030712]/90 text-gray-200 border-[#38bdf8]/30 hover:border-[#50a2ff]"
                }`}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${activeStep === 4 ? "bg-[#030712]/20 text-[#030712]" : "bg-white/20 text-white"}`}>
                    <Rocket size={11} />
                  </div>
                  <span className="text-xs font-black tracking-wider">05</span>
                </div>
              </button>
            </div>

            {/* 06: Far Left */}
            <div 
              style={{ left: '19%', top: '50%' }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <button
                type="button"
                onClick={() => setActiveStep(5)}
                onMouseEnter={() => setHoveredStep(5)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`group relative flex items-center justify-center p-1 rounded-full transition-all duration-300 cursor-pointer ${
                  activeStep === 5 ? "scale-115" : "hover:scale-105"
                }`}
              >
                {activeStep === 5 && (
                  <span className="absolute inset-0 rounded-full bg-[#155dfc]/40 animate-ping" />
                )}
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 ${
                  activeStep === 5 
                    ? "bg-[#155dfc] text-white border-white/60 shadow-[#155dfc]/60" 
                    : "bg-[#030712]/90 text-gray-200 border-[#155dfc]/30 hover:border-[#50a2ff]"
                }`}>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <Settings size={11} className="text-white" />
                  </div>
                  <span className="text-xs font-black tracking-wider">06</span>
                </div>
              </button>
            </div>

            {/* ========================================================= */}
            {/* CALLOUT LABELS (Brand UI Colored) */}
            {/* ========================================================= */}
            
            {/* Top Left Callout (01: Requirement Gathering & Discovery) */}
            <div 
              style={{ left: '2%', top: '3%' }}
              className="absolute max-w-[260px] z-10 text-right"
            >
              <button
                type="button"
                onClick={() => setActiveStep(0)}
                className={`group text-right transition-all duration-300 p-2 rounded-xl text-left cursor-pointer ${
                  activeStep === 0 ? "bg-[#155dfc]/10 border border-[#155dfc]/40 shadow-lg" : "hover:bg-white/[0.03]"
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-sky-300 block">
                  Phase 01 • Analysis & Planning
                </span>
                <span className={`text-sm sm:text-[15px] font-bold block leading-snug ${activeStep === 0 ? "text-white" : "text-gray-200 group-hover:text-white"}`}>
                  Requirement Gathering & Discovery
                </span>
                <span className="text-[11px] text-gray-300 block mt-0.5 font-medium">
                  Feasibility & Architecture Spec
                </span>
              </button>
            </div>

            {/* Top Right Callout (04: Development & Sprint Engineering) */}
            <div 
              style={{ left: '76%', top: '3%' }}
              className="absolute max-w-[260px] z-10 text-left"
            >
              <button
                type="button"
                onClick={() => setActiveStep(3)}
                className={`group text-left transition-all duration-300 p-2 rounded-xl cursor-pointer ${
                  activeStep === 3 ? "bg-[#155dfc]/10 border border-[#155dfc]/40 shadow-lg" : "hover:bg-white/[0.03]"
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-sky-300 block">
                  Phase 04 • Implementation
                </span>
                <span className={`text-sm sm:text-[15px] font-bold block leading-snug ${activeStep === 3 ? "text-white" : "text-gray-200 group-hover:text-white"}`}>
                  Development & Sprint Coding
                </span>
                <span className="text-[11px] text-gray-300 block mt-0.5 font-medium">
                  Frontend, Backend & Microservices
                </span>
              </button>
            </div>

            {/* Mid Right Callout (03: UI/UX Design & Prototyping) */}
            <div 
              style={{ left: '94%', top: '44%' }}
              className="absolute max-w-[210px] z-10 text-left -translate-y-1/2"
            >
              <button
                type="button"
                onClick={() => setActiveStep(2)}
                className={`group text-left transition-all duration-300 p-2 rounded-xl cursor-pointer ${
                  activeStep === 2 ? "bg-[#50a2ff]/10 border border-[#50a2ff]/40 shadow-lg" : "hover:bg-white/[0.03]"
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-sky-300 block">
                  Phase 03 • UI/UX Design
                </span>
                <span className={`text-sm sm:text-[15px] font-bold block leading-snug ${activeStep === 2 ? "text-white" : "text-gray-200 group-hover:text-white"}`}>
                  Design & Prototyping
                </span>
                <span className="text-[11px] text-gray-300 block mt-0.5 font-medium">
                  Design Systems & Tokens
                </span>
              </button>
            </div>

            {/* Bottom Right Callout (02: Sitemap, Wireframe & Architecture) */}
            <div 
              style={{ left: '68%', top: '84%' }}
              className="absolute max-w-[260px] z-10 text-left"
            >
              <button
                type="button"
                onClick={() => setActiveStep(1)}
                className={`group text-left transition-all duration-300 p-2 rounded-xl cursor-pointer ${
                  activeStep === 1 ? "bg-[#0ea5e9]/10 border border-[#0ea5e9]/40 shadow-lg" : "hover:bg-white/[0.03]"
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-sky-300 block">
                  Phase 02 • System Modeling
                </span>
                <span className={`text-sm sm:text-[15px] font-bold block leading-snug ${activeStep === 1 ? "text-white" : "text-gray-200 group-hover:text-white"}`}>
                  Sitemap & Wireframing
                </span>
                <span className="text-[11px] text-gray-300 block mt-0.5 font-medium">
                  Information & User Flow Maps
                </span>
              </button>
            </div>

            {/* Bottom Left Callout (05: Testing, QA, Review & Launch) */}
            <div 
              style={{ left: '3%', top: '84%' }}
              className="absolute max-w-[260px] z-10 text-right"
            >
              <button
                type="button"
                onClick={() => setActiveStep(4)}
                className={`group text-right transition-all duration-300 p-2 rounded-xl text-left cursor-pointer ${
                  activeStep === 4 ? "bg-[#38bdf8]/10 border border-[#38bdf8]/40 shadow-lg" : "hover:bg-white/[0.03]"
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-sky-300 block">
                  Phase 05 • QA & Deployment
                </span>
                <span className={`text-sm sm:text-[15px] font-bold block leading-snug ${activeStep === 4 ? "text-white" : "text-gray-200 group-hover:text-white"}`}>
                  Testing, QA, & Launch
                </span>
                <span className="text-[11px] text-gray-300 block mt-0.5 font-medium">
                  UAT, Pentests & CI/CD Release
                </span>
              </button>
            </div>

            {/* Mid Left Callout (06: Maintenance & Continuous Evolution) */}
            <div 
              style={{ left: '0%', top: '44%' }}
              className="absolute max-w-[210px] z-10 text-right -translate-y-1/2"
            >
              <button
                type="button"
                onClick={() => setActiveStep(5)}
                className={`group text-right transition-all duration-300 p-2 rounded-xl text-left cursor-pointer ${
                  activeStep === 5 ? "bg-[#155dfc]/10 border border-[#155dfc]/40 shadow-lg" : "hover:bg-white/[0.03]"
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-sky-300 block">
                  Phase 06 • Operations
                </span>
                <span className={`text-sm sm:text-[15px] font-bold block leading-snug ${activeStep === 5 ? "text-white" : "text-gray-200 group-hover:text-white"}`}>
                  Maintenance & Support
                </span>
                <span className="text-[11px] text-gray-300 block mt-0.5 font-medium">
                  24/7 Telemetry & Evolution
                </span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}