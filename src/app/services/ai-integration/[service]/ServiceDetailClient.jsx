"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Cpu,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  Database,
  Layers,
  ShieldCheck,
  Globe2,
  ChevronDown,
  Terminal,
  HelpCircle,
  Building2,
  LineChart,
  Bot,
  Rocket,
  Lock,
  ArrowUpRight
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { aiServicesData } from "@/lib/aiServicesData";

export default function ServiceDetailClient({ serviceSlug }) {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(0);

  // Fallback to generative-ai-development if slug not matched
  const data = aiServicesData[serviceSlug] || aiServicesData["generative-ai-development"];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "AI Integration", href: "/services/ai-integration" },
    { label: data.title, href: `/services/ai-integration/${data.slug}` }
  ];

  // Related services list
  const otherServices = Object.values(aiServicesData)
    .filter((s) => s.slug !== data.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-24 sm:pt-28 pb-20 overflow-hidden relative selection:bg-[#00f5a0] selection:text-black">
      
      {/* Background ambient mesh lighting */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Cyber Grid Matrix */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 sm:mb-28">
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Service Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-lg"
            >
              <Sparkles size={14} className="text-[#00f5a0]" />
              <span className="text-xs font-bold text-[#00f5a0] uppercase tracking-widest">
                {data.badge}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
            >
              {data.title.split(" ")[0]} <span className="text-gradient-emerald">{data.title.split(" ").slice(1).join(" ")}</span>
            </motion.h1>

            {/* Sub-headline & Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl font-medium text-slate-200 leading-snug"
            >
              {data.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              {data.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                onClick={() => router.push("/contact-us")}
                className="px-8 py-4 bg-gradient-to-r from-[#00f5a0] via-[#00d9f5] to-[#00f5a0] bg-[length:200%_auto] hover:bg-[position:right_center] rounded-2xl font-bold text-black text-base flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(0,245,160,0.4)] transition-all duration-500 hover:scale-105 active:scale-95"
              >
                <span>Launch 14-Day PoC</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("architecture-capabilities");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] rounded-2xl font-semibold text-white text-base flex items-center justify-center gap-2 transition-all duration-300"
              >
                <span>Explore Technical Specs</span>
              </button>
            </motion.div>
          </div>

          {/* Right Hero KPI Widget */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#00f5a0]">Delivery Benchmarks</p>
                  <h3 className="text-lg font-bold text-white mt-0.5">Engineered SLA Standard</h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00f5a0]">
                  <Zap size={18} />
                </div>
              </div>

              {/* 2x2 Stats Matrix */}
              <div className="grid grid-cols-2 gap-3.5 my-6">
                {data.stats.map((stat, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/30 transition-all">
                    <p className="text-2xl font-black text-white text-gradient-emerald">{stat.value}</p>
                    <p className="text-xs font-bold text-white mt-1">{stat.label}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{stat.sub}</p>
                  </div>
                ))}
              </div>

              {/* Security & Private Model Guarantee */}
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 flex items-center gap-3">
                <ShieldCheck size={24} className="text-[#00f5a0] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Private VPC / Air-Gapped Ready</p>
                  <p className="text-[11px] text-slate-300">100% Zero-Data-Retention &amp; IP Protection.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* OVERVIEW & EXECUTIVE VALUE SECTION */}
        <section className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#090d16]/90 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden">
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00f5a0] block mb-2">
              Architecture Overview
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
              Enterprise-Grade AI Tailored to Your Specific Workflows
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {data.overview}
            </p>
          </div>
        </section>

        {/* KEY CAPABILITIES GRID */}
        <section id="architecture-capabilities" className="mb-28">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 font-bold">
              <Cpu size={14} className="text-[#00f5a0]" />
              <span className="text-[#00f5a0] text-xs font-bold uppercase tracking-[0.2em]">
                Core Technical Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              What We Build &amp; <span className="text-gradient-emerald">Deliver</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data.keyCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl p-px overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#00f5a0]/30 via-white/5 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex-1 bg-[#090d16]/95 backdrop-blur-xl rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group-hover:bg-[#0c1220]">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00f5a0] group-hover:bg-[#00f5a0] group-hover:text-black transition-all">
                        <Sparkles size={20} />
                      </div>
                      <span className="text-2xl font-black text-white/10 group-hover:text-[#00f5a0]/30 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00f5a0] transition-colors leading-snug">
                      {cap.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-[#00f5a0] transition-colors">
                    <CheckCircle2 size={14} className="text-[#00f5a0]" />
                    <span>Production Hardened</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ENTERPRISE TECH STACK & TOOLING */}
        <section className="mb-28 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#090d16] via-[#0b1222] to-[#090d16] border border-white/[0.08] relative overflow-hidden">
          <div className="max-w-4xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00f5a0] block mb-2">
              Engineering Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Specialized Tooling &amp; AI Stack
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 font-normal">
              We leverage leading state-of-the-art frameworks, foundation models, and vector stores to ensure ultra-low latency, strict reproducibility, and infinite cloud scalability.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {data.techStack.map((tech, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all"
              >
                <p className="text-sm font-bold text-white">{tech.name}</p>
                <p className="text-xs text-[#00f5a0] mt-1 font-semibold">{tech.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INDUSTRY USE CASES & DEPLOYMENTS */}
        <section className="mb-28">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 font-bold">
              <Building2 size={14} className="text-[#00f5a0]" />
              <span className="text-[#00f5a0] text-xs font-bold uppercase tracking-[0.2em]">
                Industry Deployments
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Real-World <span className="text-gradient-emerald">Industry Applications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {data.useCases.map((uc, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#090d16]/95 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/40 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00f5a0]">
                    {uc.industry}
                  </span>
                  <ArrowUpRight size={18} className="text-slate-400 group-hover:text-[#00f5a0] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-base text-slate-200 leading-relaxed font-medium">
                  {uc.application}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 14-DAY POC ACCELERATOR CALLOUT */}
        <section className="mb-28 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-[#090d16] to-cyan-950/40 border border-emerald-500/20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00f5a0] text-xs font-bold uppercase tracking-widest">
              <Zap size={13} /> 14-Day Enterprise PoC
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Prove ROI &amp; Feasibility in 14 Days
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal">
              Validate your AI hypothesis on private benchmark datasets before committing significant capital to full-scale infrastructure.
            </p>
          </div>

          <button
            onClick={() => router.push("/contact-us")}
            className="px-8 py-4 bg-[#00f5a0] hover:bg-[#00d9f5] text-black font-bold text-base rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(0,245,160,0.4)] shrink-0 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>Request Architecture Proposal</span>
            <ArrowRight size={17} />
          </button>
        </section>

        {/* SERVICE FAQ ACCORDION */}
        <section className="mb-28 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
              Frequently Asked <span className="text-gradient-emerald">Questions</span>
            </h2>
            <p className="text-sm text-slate-400">Everything you need to know regarding implementation, timeline, and privacy.</p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl p-px transition-all duration-300 ${
                    isOpen ? "bg-gradient-to-r from-emerald-500/40 to-cyan-500/30" : "bg-white/[0.06] hover:bg-white/[0.12]"
                  }`}
                >
                  <div className="rounded-2xl bg-[#090d16]/95 backdrop-blur-xl p-5 sm:p-6">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex justify-between items-center text-left gap-4 group"
                    >
                      <span className={`text-base font-bold transition-colors ${isOpen ? "text-[#00f5a0]" : "text-white group-hover:text-slate-200"}`}>
                        {faq.q}
                      </span>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "bg-emerald-500/20 text-[#00f5a0] rotate-180" : "bg-white/[0.04] text-slate-400"}`}>
                        <ChevronDown size={18} />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-slate-300 leading-relaxed pt-4 mt-3 border-t border-white/[0.06] font-normal">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* RELATED SPECIALIZED AI SERVICES */}
        <section className="border-t border-white/[0.08] pt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Explore Complementary AI Capabilities</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Cross-disciplinary solutions to elevate your digital ecosystem.</p>
            </div>
            <Link
              href="/services/ai-integration"
              className="text-xs font-bold text-[#00f5a0] hover:underline flex items-center gap-1"
            >
              View All AI Services <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((srv) => (
              <Link
                key={srv.slug}
                href={`/services/ai-integration/${srv.slug}`}
                className="p-6 rounded-2xl bg-[#090d16]/90 border border-white/[0.06] hover:border-emerald-500/30 transition-all group block"
              >
                <span className="text-[10px] font-bold text-[#00f5a0] uppercase tracking-wider block mb-2">{srv.badge}</span>
                <h4 className="text-base font-bold text-white group-hover:text-[#00f5a0] transition-colors mb-2">{srv.title}</h4>
                <p className="text-xs text-slate-400 line-clamp-2">{srv.description}</p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
