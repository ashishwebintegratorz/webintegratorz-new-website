'use client';

import React, { useId } from 'react';

export default function WiLogo({ className = "", size = "md", showWordmark = true, variant = "light" }) {
  const id = useId().replace(/:/g, '');

  // Size presets
  const sizeMap = {
    sm: { icon: 32, text: "text-lg", sub: "text-[9px]" },
    md: { icon: 40, text: "text-xl", sub: "text-[10px]" },
    lg: { icon: 50, text: "text-2xl", sub: "text-xs" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  const gradPrimaryId = `wiGradPrimary-${id}`;
  const gradAccentId = `wiGradAccent-${id}`;

  const isLight = variant === "light";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* "Wi" Geometric Monogram Icon */}
      <div 
        className="relative flex items-center justify-center rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300 flex-shrink-0"
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        {/* Soft Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/15 to-[#00D4FF]/20 rounded-xl blur-sm pointer-events-none" />
        
        {/* Icon Frame */}
        <div className="relative w-full h-full rounded-xl bg-[#0A2540] border border-slate-700/30 flex items-center justify-center shadow-[0_2px_10px_rgba(10,37,64,0.15)]">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[78%] h-[78%]"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={gradPrimaryId} x1="6" y1="14" x2="40" y2="35" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="50%" stopColor="#635BFF" />
                <stop offset="100%" stopColor="#80E9FF" />
              </linearGradient>
              <linearGradient id={gradAccentId} x1="37" y1="11" x2="43" y2="17" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="100%" stopColor="#635BFF" />
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
              fill="#00D4FF"
              opacity="0.3"
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
            <span className={`font-black tracking-tight ${isLight ? "text-[#0A2540]" : "text-white"} ${currentSize.text} font-sans`}>
              WEBINTEGRATORZ
            </span>
          </div>
          <span className={`font-extrabold tracking-[0.24em] text-[#635BFF] uppercase mt-0.5 ${currentSize.sub}`}>
            TECHNOLOGIES
          </span>
        </div>
      )}
    </div>
  );
}
