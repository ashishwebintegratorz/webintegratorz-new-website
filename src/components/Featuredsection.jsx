'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Featuredsection() {
  const mediaLogos = [
    { name: "Forbes", img: "/icone1.png" },
    { name: "Fortune", img: "/icone3.png" },
    { name: "TechCrunch", img: "/icone4.webp" },
    { name: "Yahoo", img: "/icone5.svg" },
    { name: "AOL", img: "/icone6.webp" },
  ];

  // Triple logos to ensure a massive continuous track for high-speed seamlessness
  const marqueeLogos = [...mediaLogos, ...mediaLogos, ...mediaLogos, ...mediaLogos];

  return (
    <section className="w-full bg-white py-24 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 mb-16 relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px] bg-[#25ccad]"></span>
            <span className="text-xs font-black text-[#25ccad] uppercase tracking-[0.4em]">Media Recognition</span>
            <span className="w-8 h-[2px] bg-[#25ccad]"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
          >
            Trusted by the <span className="text-[#25ccad]">Global Leaders</span>
          </motion.h2>
        </div>
      </div>

      {/* Modern Marquee Container */}
      <div className="relative flex items-center">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-12 md:gap-24"
        >
          {marqueeLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[160px] md:min-w-[220px] h-24 transition-all duration-500 cursor-pointer group"
            >
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <Image
                  src={logo.img}
                  alt={logo.name}
                  width={200}
                  height={80}
                  className="object-contain transform group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 160px, 200px"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <span className="text-[20vw] font-black text-black leading-none">TRUSTED</span>
      </div>
    </section>
  );
}
