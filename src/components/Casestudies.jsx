'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { NoiseButton } from './ui/noise-background';

export default function Casestudies() {
  const clientLogosRow1 = [
    { name: "Rentbuddy", img: "/rentbuddy.webp", category: "Furniture Rental Systems ERP" },
    { name: "Trade Care", img: "/tradecare.webp", category: "SEBI Research & Financial Tech" },
    { name: "Solid Rental Car", img: "/solidrental.webp", category: "Miami Car Rental Platform" },
    { name: "MK Information System", img: "/mkinformation.webp", category: "Enterprise IT & Cloud Systems" },
    { name: "Datatoniq Systems", img: "/datatoniqlogo.png", category: "Enterprise AI & Cloud Tech" },
    { name: "New Era", img: "/images/newera2.webp", category: "E-Commerce & Freight UAE" },
    { name: "Protech HPL", img: "/images/protech.webp", category: "Architectural Laminates ERP" },
  ];

  const clientLogosRow2 = [
    { name: "Stock Market Research", img: "/stockmarketresearch.webp", category: "Market Advisory & Analytics" },
    { name: "AKS Research", img: "/aksresearch.webp", category: "SEBI Stock Research Analyst" },
    { name: "Equycom Research", img: "/equycom.webp", category: "FinTech & Equity Advisory" },
    { name: "FreshNow", img: "/images/fresh.webp", category: "Quick Commerce Platform" },
    { name: "Crown Medical Center", img: "/icone1.webp", category: "Healthcare & Hospital UAE" },
    { name: "Lotte Aimée", img: "/lotteaimee.webp", category: "Movement & Studio Platform" },
    { name: "AWS Cloud Partner", img: "/AWS.webp", category: "Cloud Infrastructure Partner" },
  ];

  // Quadruple for smooth infinite marquee loops
  const marquee1 = [...clientLogosRow1, ...clientLogosRow1, ...clientLogosRow1, ...clientLogosRow1];
  const marquee2 = [...clientLogosRow2, ...clientLogosRow2, ...clientLogosRow2, ...clientLogosRow2];

  const metrics = [
    { value: "100+", label: "Global Deployments", sub: "Production systems live" },
    { value: "99.9%", label: "Platform SLA Uptime", sub: "Enterprise infrastructure" },
    { value: "15+", label: "Countries Served", sub: "USA, UAE, Japan, EU, India" },
    { value: "4.9/5", label: "Client Satisfaction", sub: "Verified customer rating" },
  ];

  return (
    <section id="casestudies" className="relative w-full py-24 sm:py-32 bg-[#030712] overflow-hidden border-t border-white/[0.08] selection:bg-[#50a2ff] selection:text-[#030712]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-[#155dfc]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-[#50a2ff]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030712] border border-[#155dfc]/30 mb-6 font-bold"
          >
            <Sparkles size={14} className="text-[#50a2ff]" />
            <span className="text-[#50a2ff] text-xs tracking-[0.2em] uppercase font-bold">
              Trusted by Industry Leaders
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6"
          >
            What It&apos;s Like To Build With <br />
            <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Webintegratorz</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl font-normal leading-relaxed"
          >
            Empowering visionary enterprises, hyper-growth startups, and global brands with production-grade engineering, reliable SLAs, and AI-accelerated delivery.
          </motion.p>
        </div>

      </div>

      {/* DUAL MARQUEE SECTION WITH 100% PURE WHITE CLIENT LOGOS */}
      <div className="relative space-y-6 overflow-hidden">
        
        {/* Gradient edge masks for smooth fade in/out */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#030712] via-[#030712]/90 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Leftward Marquee */}
        <div className="relative flex items-center">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 34,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap gap-6 sm:gap-8"
          >
            {marquee1.map((client, i) => (
              <div
                key={`row1-${i}`}
                className="flex items-center gap-4 min-w-[250px] sm:min-w-[300px] h-24 sm:h-28 rounded-2xl bg-[#030712] border border-white/[0.08] hover:border-[#50a2ff]/40 shadow-xl transition-all duration-300 group px-6 relative overflow-hidden shrink-0"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />

                {/* 100% Pure White Logo Filter */}
                <div className="relative w-28 sm:w-32 h-12 flex items-center justify-center">
                  <Image
                    src={client.img}
                    alt={client.name}
                    width={140}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="object-contain max-h-10 sm:max-h-12 brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>

                <div className="hidden sm:block text-left border-l border-white/[0.08] pl-3.5">
                  <p className="text-xs font-bold text-white tracking-wide">{client.name}</p>
                  <p className="text-[10px] text-[#50a2ff] font-medium tracking-wide">{client.category}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Rightward Reverse Marquee */}
        <div className="relative flex items-center">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 36,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap gap-6 sm:gap-8"
          >
            {marquee2.map((client, i) => (
              <div
                key={`row2-${i}`}
                className="flex items-center gap-4 min-w-[250px] sm:min-w-[300px] h-24 sm:h-28 rounded-2xl bg-[#030712] border border-white/[0.08] hover:border-[#50a2ff]/40 shadow-xl transition-all duration-300 group px-6 relative overflow-hidden shrink-0"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />

                {/* 100% Pure White Logo Filter */}
                <div className="relative w-28 sm:w-32 h-12 flex items-center justify-center">
                  <Image
                    src={client.img}
                    alt={client.name}
                    width={140}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="object-contain max-h-10 sm:max-h-12 brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>

                <div className="hidden sm:block text-left border-l border-white/[0.08] pl-3.5">
                  <p className="text-xs font-bold text-white tracking-wide">{client.name}</p>
                  <p className="text-[10px] text-[#50a2ff] font-medium tracking-wide">{client.category}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* METRICS & PROMISE RIBBON */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#030712] border border-white/[0.08] relative overflow-hidden group hover:border-[#155dfc]/40 transition-all duration-300"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {item.value}
              </p>
              <p className="mt-2 text-sm sm:text-base font-bold text-gray-200">
                {item.label}
              </p>
              <p className="mt-1 text-xs text-gray-400 font-medium">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-12 sm:mt-16 p-8 sm:p-12 rounded-3xl bg-[#030712] border border-white/[0.08] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to build mission-critical digital products?
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              Join leading global enterprises delivering next-gen software with Webintegratorz.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <NoiseButton
              onClick={() => {}}
              className="w-full sm:w-auto text-base font-semibold"
            >
              <Link href="/contact-us" className="flex items-center gap-2">
                <span>Schedule Architecture Call</span>
                <ArrowRight size={16} className="text-[#50a2ff]" />
              </Link>
            </NoiseButton>
          </div>
        </div>
      </div>
    </section>
  );
}