'use client';

import React, { useId } from 'react';

export default function WiLogo({ className = "", size = "md", showWordmark = true }) {
  const id = useId().replace(/:/g, '');

  // Size presets
  const sizeMap = {
    sm: { icon: 32, text: "text-lg", sub: "text-[9px]" },
    md: { icon: 40, text: "text-xl", sub: "text-[10px]" },
    lg: { icon: 52, text: "text-2xl", sub: "text-xs" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  const gradPrimaryId = `wiGradPrimary-${id}`;
  const gradAccentId = `wiGradAccent-${id}`;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* "Wi" Geometric Monogram Icon */}
      <div 
        className="relative flex items-center justify-center rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300 flex-shrink-0"
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 rounded-xl blur-sm pointer-events-none" />
        
        {/* Icon Backdrop */}
        <div className="relative w-full h-full rounded-xl bg-[#070b14] border border-cyan-400/30 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[78%] h-[78%]"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={gradPrimaryId} x1="6" y1="14" x2="40" y2="35" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <linearGradient id={gradAccentId} x1="37" y1="11" x2="43" y2="17" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00f2fe" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>

            {/* Geometric "W" */}
            <path
              d="M6 14L13.5 35L20 20L26.5 35L34 14"
              stroke={`url(#${gradPrimaryId})`}
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Futuristic "i" Stem */}
            <path
              d="M40 22V35"
              stroke={`url(#${gradPrimaryId})`}
              strokeWidth="4.5"
              strokeLinecap="round"
            />

            {/* Illuminated "i" Neural Node Outer Glow Ring */}
            <circle
              cx="40"
              cy="14"
              r="4.5"
              fill="#00f2fe"
              opacity="0.25"
            />

            {/* Illuminated "i" Neural Node Core Dot */}
            <circle
              cx="40"
              cy="14"
              r="2.8"
              fill={`url(#${gradAccentId})`}
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
