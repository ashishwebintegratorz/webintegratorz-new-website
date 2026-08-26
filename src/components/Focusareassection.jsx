'use client';

import React from 'react';
import { useRouter } from "next/navigation";
import { Globe, Cpu, Brain, Smartphone, Bot, Palette, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function FocusAreasSection() {
  const router = useRouter();

  const focusAreas = [
    {
      number: "01",
      title: "Generative AI & LLM Systems",
      description: "Custom AI agents, fine-tuned large language models, retrieval-augmented generation (RAG), and intelligent enterprise automations.",
      icon: Brain,
      tag: "Deep Tech",
      tags: ["Agentic AI", "Custom LLMs", "RAG Pipelines", "OpenAI / Claude"],
      route: "/services/ai-integration",
    },
    {
      number: "02",
      title: "Full-Stack Web & SaaS Platforms",
      description: "High-throughput, distributed cloud web platforms engineered with Next.js, React, Node.js, and microservices architecture.",
      icon: Globe,
      tag: "Scalable Architecture",
      tags: ["Next.js 16", "React 19", "Microservices", "TypeScript"],
      route: "/services/web-development",
    },
    {
      number: "03",
      title: "Enterprise Software Engineering",
      description: "Mission-critical custom software, CRM/ERP solutions, and secure API backends designed for enterprise reliability and scale.",
      icon: Cpu,
      tag: "Enterprise Core",
      tags: ["Cloud-Native", "REST / GraphQL", "PostgreSQL", "Docker / K8s"],
      route: "/services/web-development",
    },
    {
      number: "04",
      title: "Cross-Platform Mobile Engineering",
      description: "Ultra-fluid native and hybrid iOS/Android applications built with Flutter and React Native for global scale.",
      icon: Smartphone,
      tag: "Mobile First",
      tags: ["Flutter", "React Native", "iOS / Android", "Offline-First"],
      route: "/services/mobile-development",
    },
    {
      number: "05",
      title: "Autonomous AI Workflows & Bots",
      description: "Seamless integration of intelligent chatbots, multi-modal workflows, and automated decision-making engines into your existing stack.",
      icon: Bot,
      tag: "Automation",
      tags: ["Multi-Agent", "Workflow AI", "CRM Bots", "Predictive ML"],
      route: "/services/ai-integration",
    },
    {
      number: "06",
      title: "Product UI/UX & Design Systems",
      description: "User-centric design systems, rapid interactive prototyping, and conversion-engineered interfaces built with precision.",
      icon: Palette,
      tag: "Design Craft",
      tags: ["Design Tokens", "Figma Systems", "Micro-Interactions", "UX Research"],
      route: "/services/ui-ux",
    }
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-gray-200 dark:border-white/[0.08] overflow-hidden">
      {/* Subtle Background Radial Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #155dfc 1px, transparent 0)",
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-[#030712] border border-blue-200 dark:border-[#155dfc]/40 mb-6 font-bold shadow-sm"
          >
            <Sparkles size={14} className="text-blue-600 dark:text-[#50a2ff]" />
            <span className="text-blue-700 dark:text-[#50a2ff] text-xs tracking-wider uppercase font-bold">
              Engineering Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.15]"
          >
            Our Core <span className="bg-gradient-to-r from-[#155dfc] to-[#2563eb] dark:from-[#50a2ff] dark:to-[#93c5fd] bg-clip-text text-transparent">Focus Areas</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-slate-700 dark:text-gray-300 max-w-2xl font-normal leading-relaxed"
          >
            From custom foundational AI systems to global-scale cloud applications, we turn ambitious technical visions into flawless digital realities.
          </motion.p>
        </div>

        {/* Aceternity UI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-gray-50/90 dark:bg-[#030712] border border-gray-200 dark:border-white/[0.08] p-6 sm:p-7 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 dark:hover:border-[#50a2ff]/40 group overflow-hidden flex flex-col justify-between"
            >
              {/* Top Shine Line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 transition-all duration-300" />

              {/* Ambient Glow */}
              <div className="absolute -top-20 -right-20 w-44 h-44 bg-gradient-to-b from-[#155dfc]/20 via-[#50a2ff]/10 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Header Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 dark:border-[#155dfc]/30 bg-blue-50 dark:bg-[#155dfc]/15 text-[#155dfc] dark:text-[#50a2ff] shadow-inner group-hover:scale-110 group-hover:bg-[#155dfc] group-hover:text-white transition-all duration-300">
                    <area.icon className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-800/60 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-sky-300">
                    {area.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-[#155dfc] dark:group-hover:text-[#50a2ff] transition-colors leading-snug">
                  {area.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-6 font-normal">
                  {area.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {area.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-gray-200/70 dark:bg-white/[0.06] border border-gray-300 dark:border-white/[0.1] text-gray-800 dark:text-gray-200 group-hover:border-blue-400/40 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="relative z-10 pt-4 border-t border-gray-200 dark:border-white/[0.08] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => router.push(area.route)}
                  className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-[#155dfc] dark:hover:text-white group-hover:text-[#155dfc] dark:group-hover:text-[#50a2ff] transition-colors cursor-pointer"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight size={14} className="text-[#155dfc] dark:text-[#50a2ff] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
