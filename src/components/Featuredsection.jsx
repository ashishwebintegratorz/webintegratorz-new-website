'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export default function Featuredsection() {
  const mediaLogos = [
    { name: "Forbes", img: "/icone1.webp" },
    { name: "Fortune", img: "/icone3.webp" },
    { name: "TechCrunch", img: "/icone4.webp" },
    { name: "Yahoo Finance", img: "/icone5.svg" },
    { name: "AOL", img: "/icone6.webp" },
  ];

  // Quadruple logos for seamless infinite smooth marquee
  const marqueeLogos = [...mediaLogos, ...mediaLogos, ...mediaLogos, ...mediaLogos];

  return (
    <section className="w-full bg-[#F8FAFC] py-20 overflow-hidden relative border-y border-slate-200/80 content-auto">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-3"
          >
            <Trophy size={13} className="text-[#635BFF]" />
            <span className="text-[#635BFF] text-xs font-bold uppercase tracking-wider">Industry Recognition</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl font-black text-[#0A2540] tracking-tight"
          >
            Featured &amp; Recognized Across <span className="text-[#635BFF]">Global Publications</span>
          </motion.h2>
        </div>
      </div>

      {/* Marquee Track with Light Enterprise Cards */}
      <div className="relative flex items-center">
        {/* Gradient edge masks for smooth fade in/out */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-5 sm:gap-6"
        >
          {marqueeLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[170px] sm:min-w-[200px] h-20 sm:h-24 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all duration-200 group px-5"
            >
              <div className="relative w-full h-full flex items-center justify-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={logo.img}
                  alt={logo.name}
                  width={130}
                  height={45}
                  loading="lazy"
                  decoding="async"
                  className="object-contain max-h-10"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
