'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from "next/navigation";
import { Globe, Cpu, Brain, Smartphone, Bot, Palette, ArrowRight, Sparkles, Code2, Layers, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function FocusAreasSection() {
  const router = useRouter();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const focusAreas = [
    {
      number: "01",
      title: "Generative AI & LLM Systems",
      description: "Custom AI agents, fine-tuned large language models, retrieval-augmented generation (RAG), and intelligent enterprise automations.",
      icon: Brain,
      tag: "Deep Tech",
      tags: ["Agentic AI", "Custom LLMs", "RAG Pipelines", "OpenAI / Claude"],
      route: "/services/ai-integration",
      highlight: true
    },
    {
      number: "02",
      title: "Full-Stack Web & SaaS Platforms",
      description: "High-throughput, distributed cloud web platforms engineered with Next.js, React, Node.js, and microservices architecture.",
      icon: Globe,
      tag: "Scalable Architecture",
      tags: ["Next.js 16", "React 19", "Microservices", "TypeScript"],
      route: "/services/web-development",
      highlight: false
    },
    {
      number: "03",
      title: "Enterprise Software Engineering",
      description: "Mission-critical custom software, CRM/ERP solutions, and secure API backends designed for enterprise reliability and scale.",
      icon: Cpu,
      tag: "Enterprise Core",
      tags: ["Cloud-Native", "REST / GraphQL", "PostgreSQL", "Docker / K8s"],
      route: "/services/web-development",
      highlight: false
    },
    {
      number: "04",
      title: "Cross-Platform Mobile Engineering",
      description: "Ultra-fluid native and hybrid iOS/Android applications built with Flutter and React Native for global scale.",
      icon: Smartphone,
      tag: "Mobile First",
      tags: ["Flutter", "React Native", "iOS / Android", "Offline-First"],
      route: "/services/mobile-development",
      highlight: false
    },
    {
      number: "05",
      title: "Autonomous AI Workflows & Bots",
      description: "Seamless integration of intelligent chatbots, multi-modal workflows, and automated decision-making engines into your existing stack.",
      icon: Bot,
      tag: "Automation",
      tags: ["Multi-Agent", "Workflow AI", "CRM Bots", "Predictive ML"],
      route: "/services/ai-integration",
      highlight: false
    },
    {
      number: "06",
      title: "Product UI/UX & Design Systems",
      description: "User-centric design systems, rapid interactive prototyping, and conversion-engineered interfaces built with precision.",
      icon: Palette,
      tag: "Design Craft",
      tags: ["Design Tokens", "Figma Systems", "Micro-Interactions", "UX Research"],
      route: "/services/ui-ux",
      highlight: false
    }
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#030712] overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="relative max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 font-bold"
          >
            <Sparkles size={14} className="text-[#00f5a0]" />
            <span className="text-[#00f5a0] text-xs tracking-[0.2em] uppercase font-bold">
              Engineering Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
          >
            Our Core <span className="text-gradient-emerald">Focus Areas</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed"
          >
            From custom foundational AI systems to global-scale cloud applications, we turn ambitious technical visions into flawless digital realities.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-3xl p-px overflow-hidden transition-all duration-500"
            >
              {/* Outer Glowing Border on Hover */}
              <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${area.highlight ? 'bg-gradient-to-b from-[#00f5a0]/40 via-white/5 to-transparent opacity-80 group-hover:opacity-100' : 'bg-gradient-to-b from-white/10 to-transparent opacity-40 group-hover:opacity-100 group-hover:from-emerald-400/40'}`} />

              {/* Card Container */}
              <div className="relative h-full bg-[#090d16]/90 backdrop-blur-xl rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group-hover:bg-[#0c1220]">
                
                {/* Top Bar: Icon + Number */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00f5a0] group-hover:scale-110 group-hover:bg-[#00f5a0] group-hover:text-black transition-all duration-300 shadow-lg">
                      <area.icon size={26} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400 group-hover:text-slate-200">
                        {area.tag}
                      </span>
                      <span className="text-3xl font-black text-white/10 group-hover:text-[#00f5a0]/30 transition-colors">
                        {area.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#00f5a0] transition-colors leading-snug">
                    {area.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {area.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {area.tags.map((t, idx) => (
                      <span key={idx} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-400 group-hover:border-emerald-500/20 group-hover:text-slate-300 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={() => router.push(area.route)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#00f5a0] hover:text-[#00d9f5] group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight size={14} />
                  </button>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
