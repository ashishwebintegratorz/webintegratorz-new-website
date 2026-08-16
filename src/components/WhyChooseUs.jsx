'use client';

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { CircleDollarSign, Zap, Target, Lock, TrendingUp, Clock, Sparkles, ShieldCheck, CheckCircle2, ArrowRight, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState(null);

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
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#030712] overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 font-bold"
          >
            <ShieldCheck size={14} className="text-[#00f5a0]" />
            <span className="text-[#00f5a0] text-xs tracking-[0.2em] uppercase font-bold">
              Why Partner With Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
          >
            Engineered for <span className="text-gradient-emerald">High-Stakes Reliability</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed"
          >
            We combine elite engineering discipline with cutting-edge AI expertise to deliver digital assets that perform, scale, and generate long-term equity.
          </motion.p>
        </div>

        {/* Top 4 KPI Metrics Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#090d16]/90 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/30 transition-all"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-emerald-500/15 transition-colors" />
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-gradient-emerald">
                {stat.number}
              </p>
              <p className="text-sm font-bold text-white mt-2">{stat.label}</p>
              <p className="text-xs text-slate-400 mt-0.5">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative rounded-3xl p-px overflow-hidden flex flex-col"
            >
              {/* Outer glow line */}
              <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 bg-gradient-to-b from-[#00f5a0]/30 via-white/5 to-transparent ${hoveredCard === index ? 'opacity-100' : 'opacity-20'}`} />

              <div className="relative flex-1 bg-[#090d16]/95 backdrop-blur-xl rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group-hover:bg-[#0c1220]">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00f5a0] group-hover:scale-110 group-hover:bg-[#00f5a0] group-hover:text-black transition-all duration-300">
                      <feature.icon size={22} />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#00f5a0] transition-colors leading-snug">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-[#00f5a0] transition-colors">
                  <CheckCircle2 size={14} className="text-[#00f5a0]" />
                  <span>Guaranteed SLA Standard</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}