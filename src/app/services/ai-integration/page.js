"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
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
  Terminal,
  Bot,
  Building2,
  Cloud,
  LineChart,
  Lock,
  ArrowUpRight,
  TrendingUp,
  MessageSquare
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { aiServicesData } from "@/lib/aiServicesData";

export default function AIIntegrationHubPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("all");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "AI Integration Suite", href: "/services/ai-integration" }
  ];

  const categories = [
    { id: "all", label: "All 13 AI Services" },
    { id: "genai", label: "Generative AI & LLMs" },
    { id: "agents", label: "Autonomous Agents & Bots" },
    { id: "ml", label: "ML & Data Intelligence" }
  ];

  const servicesList = [
    // GenAI
    { ...aiServicesData["generative-ai-development"], cat: "genai", icon: Brain },
    { ...aiServicesData["llm-development"], cat: "genai", icon: Layers },
    { ...aiServicesData["generative-ai-integration"], cat: "genai", icon: Cpu },
    { ...aiServicesData["chatgpt-integration"], cat: "genai", icon: Sparkles },
    { ...aiServicesData["generative-ai-consulting"], cat: "genai", icon: LineChart },
    // Agents & Solutions
    { ...aiServicesData["agent-development"], cat: "agents", icon: Bot },
    { ...aiServicesData["chatbot-development"], cat: "agents", icon: MessageSquare },
    { ...aiServicesData["enterprise-ai"], cat: "agents", icon: Building2 },
    { ...aiServicesData["ai-as-a-service"], cat: "agents", icon: Cloud },
    // ML & Data
    { ...aiServicesData["ml-model-engineering"], cat: "ml", icon: Cpu },
    { ...aiServicesData["ml-development"], cat: "ml", icon: Database },
    { ...aiServicesData["ml-data-science-consulting"], cat: "ml", icon: LineChart },
    { ...aiServicesData["ai-consulting"], cat: "ml", icon: Brain }
  ];

  const filtered = activeCategory === "all"
    ? servicesList
    : servicesList.filter(s => s.cat === activeCategory);

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-24 sm:pt-28 pb-24 overflow-hidden relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Cyber Grid */}
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
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 font-bold"
          >
            <Sparkles size={14} className="text-[#00f5a0]" />
            <span className="text-[#00f5a0] text-xs font-bold uppercase tracking-[0.25em]">
              Next-Gen AI Capabilities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6"
          >
            Enterprise <span className="text-gradient-emerald">AI Integration</span> &amp; <br />
            Custom Model Engineering
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl mb-10"
          >
            We architect and deploy production-grade Generative AI, custom LLMs, autonomous agents, and predictive machine learning models tailored to your private data and high-throughput enterprise infrastructure.
          </motion.p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => router.push("/contact-us")}
              className="px-8 py-4 bg-gradient-to-r from-[#00f5a0] via-[#00d9f5] to-[#00f5a0] text-black font-bold text-base rounded-2xl shadow-[0_0_30px_rgba(0,245,160,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <span>Schedule AI Strategy Session</span>
              <ArrowRight size={17} />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("services-grid");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] rounded-2xl font-semibold text-white text-base transition-all"
            >
              <span>Explore 13 Specialized Services</span>
            </button>
          </div>
        </div>

        {/* 4 Core Pillars Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          <div className="p-6 rounded-3xl bg-[#090d16]/90 border border-white/[0.08] backdrop-blur-xl">
            <p className="text-3xl font-black text-white text-gradient-emerald">14 Days</p>
            <p className="text-sm font-bold text-white mt-1">PoC Deployment</p>
            <p className="text-xs text-slate-400 mt-0.5">Rapid hypothesis validation</p>
          </div>
          <div className="p-6 rounded-3xl bg-[#090d16]/90 border border-white/[0.08] backdrop-blur-xl">
            <p className="text-3xl font-black text-white text-gradient-emerald">100%</p>
            <p className="text-sm font-bold text-white mt-1">Private VPC Sovereignty</p>
            <p className="text-xs text-slate-400 mt-0.5">Zero public model data retention</p>
          </div>
          <div className="p-6 rounded-3xl bg-[#090d16]/90 border border-white/[0.08] backdrop-blur-xl">
            <p className="text-3xl font-black text-white text-gradient-emerald">70%</p>
            <p className="text-sm font-bold text-white mt-1">Cost Reduction</p>
            <p className="text-xs text-slate-400 mt-0.5">Through vLLM &amp; smart caching</p>
          </div>
          <div className="p-6 rounded-3xl bg-[#090d16]/90 border border-white/[0.08] backdrop-blur-xl">
            <p className="text-3xl font-black text-white text-gradient-emerald">99.95%</p>
            <p className="text-sm font-bold text-white mt-1">Inference Uptime</p>
            <p className="text-xs text-slate-400 mt-0.5">High availability cluster SLA</p>
          </div>
        </div>

        {/* SERVICES CATALOG & CATEGORY FILTER */}
        <section id="services-grid" className="mb-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00f5a0] block mb-1">
                Full Service Directory
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Specialized AI Engineering Services
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat.id
                      ? "bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] text-black shadow-lg"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* 13 Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((service, index) => {
              const Icon = service.icon || Brain;
              return (
                <Link
                  key={service.slug}
                  href={`/services/ai-integration/${service.slug}`}
                  className="group relative rounded-3xl p-px overflow-hidden flex flex-col transition-all duration-500"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#00f5a0]/30 via-white/5 to-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex-1 bg-[#090d16]/95 backdrop-blur-xl rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group-hover:bg-[#0c1220] border border-white/[0.06]">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00f5a0] group-hover:bg-[#00f5a0] group-hover:text-black transition-all">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#00f5a0] transition-colors leading-snug">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold text-[#00f5a0]">
                      <span>View Architecture &amp; Specs</span>
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* BOTTOM CONSULTATION CTA BANNER */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-[#090d16] to-cyan-950/40 border border-emerald-500/20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Need a Bespoke AI Architecture?</h3>
            <p className="text-sm text-slate-300 max-w-xl font-normal">
              Book a technical scoping call with our lead AI architects to review your data infrastructure, feasibility, and milestone budget.
            </p>
          </div>
          <button
            onClick={() => router.push("/contact-us")}
            className="px-8 py-4 bg-[#00f5a0] hover:bg-[#00d9f5] text-black font-bold text-base rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(0,245,160,0.3)] shrink-0 hover:scale-105 active:scale-95"
          >
            Start Free Consultation →
          </button>
        </section>

      </div>
    </div>
  );
}