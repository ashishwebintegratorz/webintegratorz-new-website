'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Trophy } from "lucide-react";

export default function Featuredsection() {
  const mediaLogos = [
    { name: "Forbes", img: "/icone1.png" },
    { name: "Fortune", img: "/icone3.png" },
    { name: "TechCrunch", img: "/icone4.webp" },
    { name: "Yahoo Finance", img: "/icone5.svg" },
    { name: "AOL", img: "/icone6.webp" },
  ];

  // Quadruple logos for seamless infinite smooth marquee
  const marqueeLogos = [...mediaLogos, ...mediaLogos, ...mediaLogos, ...mediaLogos];

  return (
    <section className="w-full bg-[#030712] py-20 overflow-hidden relative border-t border-white/[0.06] content-auto">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 font-bold"
          >
            <Trophy size={14} className="text-[#00f5a0]" />
            <span className="text-[#00f5a0] text-xs font-bold uppercase tracking-[0.25em]">Industry Recognition</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Featured &amp; Trusted Across <span className="text-gradient-emerald">Global Media</span>
          </motion.h2>
        </div>
      </div>

      {/* Marquee Track with Frosted Glass Cards */}
      <div className="relative flex items-center">
        {/* Gradient edge masks for smooth fade in/out */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-6 sm:gap-8"
        >
          {marqueeLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[180px] sm:min-w-[220px] h-24 sm:h-28 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/30 hover:bg-white/[0.06] backdrop-blur-md transition-all duration-300 group px-6"
            >
              <div className="relative w-full h-full flex items-center justify-center filter brightness-90 contrast-125 group-hover:brightness-110 group-hover:scale-105 transition-all duration-300">
                <Image
                  src={logo.img}
                  alt={logo.name}
                  width={140}
                  height={50}
                  loading="lazy"
                  decoding="async"
                  className="object-contain max-h-12"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
