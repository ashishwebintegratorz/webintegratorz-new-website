'use client';

import React from 'react';
import { useRouter } from "next/navigation";
import { CircleDollarSign, Zap, Lock, TrendingUp, Clock, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  const router = useRouter();

  const stats = [
    { number: "100+", label: "Clients Globally", sub: "Enterprise & funded startups" },
    { number: "99.4%", label: "SLA Precision", sub: "On-time milestone delivery" },
    { number: "15+", label: "Global Regions", sub: "USA, UAE, Europe, Japan" },
    { number: "250+", label: "Projects Delivered", sub: "Web, SaaS & AI ecosystems" }
  ];

  const features = [
    {
      icon: Sparkles,
      title: "AI-First Engineering",
      description: "We don't just build traditional software; we infuse intelligence, LLM workflows, and modern agentic automation into your core architecture.",
      tag: "Next-Gen Tech"
    },
    {
      icon: Lock,
      title: "Bank-Grade Security & Compliance",
      description: "Strict adherence to OWASP top 10, enterprise encryption standards, SOC2 preparation, and airtight non-disclosure agreements.",
      tag: "Enterprise Trust"
    },
    {
      icon: Zap,
      title: "High-Velocity Agile Sprints",
      description: "Bi-weekly sprint demos, continuous CI/CD delivery pipelines, and transparent milestone tracking with 0 hidden technical debt.",
      tag: "Speed to Market"
    },
    {
      icon: CircleDollarSign,
      title: "Transparent Fixed / T&M Pricing",
      description: "Predictable resource allocation, milestone-based escrow billing, and detailed resource transparency with no hidden overheads.",
      tag: "Predictable ROI"
    },
    {
      icon: TrendingUp,
      title: "Performance & Conversion Focused",
      description: "Engineered for 95+ Core Web Vitals, ultra-low latency API backends, and conversion-optimized user funnels.",
      tag: "Business Impact"
    },
    {
      icon: Clock,
      title: "24/7 Global Overlap Support",
      description: "Dedicated account managers and engineering squads aligned with US, UK, UAE, and Asian timezones for round-the-clock responsiveness.",
      tag: "Always-On SLA"
    }
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden border-t border-white/[0.08]">
      <div className="relative max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030712] border border-[#155dfc]/30 mb-6 font-semibold shadow-inner"
          >
            <ShieldCheck size={14} className="text-[#50a2ff]" />
            <span className="text-[#50a2ff] text-xs tracking-wider uppercase font-semibold">
              Why Partner With Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.15]"
          >
            Engineered for <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">High-Stakes Reliability</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl font-normal leading-relaxed"
          >
            We combine elite engineering discipline with cutting-edge AI expertise to deliver digital assets that perform, scale, and generate long-term equity.
          </motion.p>
        </div>

        {/* Brand Dark Metric Ribbon */}
        <div className="relative rounded-2xl bg-[#030712] border border-white/[0.08] p-8 sm:p-10 mb-16 shadow-2xl overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#155dfc]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 mx-auto grid max-w-4xl grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl font-bold sm:text-4xl text-white tracking-tight">
                  {stat.number}
                </p>
                <p className="mt-1.5 text-sm text-[#50a2ff] font-semibold">{stat.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Aceternity Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-[#030712] border border-white/[0.08] p-6 sm:p-7 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#50a2ff]/40 group overflow-hidden flex flex-col justify-between"
            >
              {/* Top Shine */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />
              
              {/* Radial Accent Glow */}
              <div className="absolute -top-20 -right-20 w-44 h-44 bg-gradient-to-b from-[#155dfc]/20 via-[#50a2ff]/10 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#155dfc]/30 bg-[#155dfc]/10 text-[#50a2ff] shadow-inner group-hover:scale-110 group-hover:text-white transition-transform duration-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#50a2ff]/30 bg-[#50a2ff]/10 text-[#50a2ff]">
                    {feature.tag}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-white tracking-tight leading-snug">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-6 font-normal">
                  {feature.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs font-semibold text-gray-400">
                <CheckCircle2 size={14} className="text-[#50a2ff]" />
                <span>Guaranteed SLA Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}