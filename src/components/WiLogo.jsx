'use client';

import React from 'react';

export default function WiLogo({ className = "", size = "md", showWordmark = true }) {
  // Size presets
  const sizeMap = {
    sm: { icon: 32, text: "text-lg", sub: "text-[9px]" },
    md: { icon: 40, text: "text-xl", sub: "text-[10px]" },
    lg: { icon: 52, text: "text-2xl", sub: "text-xs" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* "Wi" Geometric Monogram Icon */}
      <div 
        className="relative flex items-center justify-center rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300 flex-shrink-0"
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-indigo-500/30 to-fuchsia-500/30 rounded-xl blur-md pointer-events-none" />
        
        {/* Icon Backdrop */}
        <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-[#0b1120] via-[#070b14] to-[#030712] border border-cyan-400/30 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.25)]">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[78%] h-[78%]"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="wiGradPrimary" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <linearGradient id="wiGradAccent" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00f2fe" />
                <stop offset="100%" stopColor="#4facfe" />
              </linearGradient>
              <filter id="wiGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="glow" />
                <feComposite in="SourceGraphic" in2="glow" operator="over" />
              </filter>
            </defs>

            {/* Geometric "W" */}
            <path
              d="M6 14L13.5 35L20 20L26.5 35L34 14"
              stroke="url(#wiGradPrimary)"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Futuristic "i" Stem */}
            <path
              d="M40 22V35"
              stroke="url(#wiGradPrimary)"
              strokeWidth="4.5"
              strokeLinecap="round"
            />

            {/* Illuminated "i" Neural Node Dot */}
            <circle
              cx="40"
              cy="14"
              r="3"
              fill="url(#wiGradAccent)"
              filter="url(#wiGlow)"
            />
          </svg>
        </div>
      </div>

      {/* Brand Typography Wordmark */}
      {showWordmark && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-center gap-0.5">
            <span className={`font-black tracking-tight text-white ${currentSize.text} font-sans`}>
              WEBINTEGRATORZ
            </span>
          </div>
          <span className={`font-extrabold tracking-[0.28em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 uppercase mt-0.5 ${currentSize.sub}`}>
            TECHNOLOGIES
          </span>
        </div>
      )}
    </div>
  );
}
