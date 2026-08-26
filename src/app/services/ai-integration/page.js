"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Sparkles,
  ArrowRight,
  Database,
  Layers,
  Bot,
  Building2,
  Cloud,
  LineChart,
  ArrowUpRight,
  MessageSquare
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { aiServicesData } from "@/lib/aiServicesData";
import { NoiseButton } from "@/components/ui/noise-background";

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
    <div className="min-h-screen bg-[#030712] text-white pt-24 sm:pt-28 pb-24 overflow-hidden relative selection:bg-[#50a2ff] selection:text-[#030712]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[400px] bg-[#155dfc]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[400px] bg-[#50a2ff]/5 rounded-full blur-[160px] pointer-events-none" />

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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030712] border border-[#155dfc]/30 mb-6 font-bold"
          >
            <Sparkles size={14} className="text-[#50a2ff]" />
            <span className="text-[#50a2ff] text-xs font-bold uppercase tracking-[0.25em]">
              Next-Gen AI Capabilities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
          >
            Enterprise <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">AI Integration</span> &amp; <br />
            Custom Model Engineering
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-gray-400 leading-relaxed font-normal max-w-3xl mb-10"
          >
            We architect and deploy production-grade Generative AI, custom LLMs, autonomous agents, and predictive machine learning models tailored to your private data and high-throughput enterprise infrastructure.
          </motion.p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <NoiseButton
              onClick={() => router.push("/contact-us")}
              className="w-full sm:w-auto"
            >
              <span>Schedule AI Strategy Session</span>
              <ArrowRight size={17} className="text-[#50a2ff]" />
            </NoiseButton>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("services-grid");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 bg-[#030712] hover:border-[#50a2ff]/50 border border-white/[0.12] rounded-full font-semibold text-white text-base shadow-md transition-all cursor-pointer"
            >
              <span>Explore 13 Specialized Services</span>
            </button>
          </div>
        </div>

        {/* METRICS RIBBON */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24">
          <div className="p-6 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-2xl hover:border-[#50a2ff]/40 transition-all relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />
            <p className="text-3xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">14 Days</p>
            <p className="text-sm font-bold text-white mt-1">PoC Deployment</p>
            <p className="text-xs text-gray-400 mt-0.5">Rapid hypothesis validation</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-2xl hover:border-[#50a2ff]/40 transition-all relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />
            <p className="text-3xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">100%</p>
            <p className="text-sm font-bold text-white mt-1">Private VPC Sovereignty</p>
            <p className="text-xs text-gray-400 mt-0.5">Zero public model data retention</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-2xl hover:border-[#50a2ff]/40 transition-all relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />
            <p className="text-3xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">70%</p>
            <p className="text-sm font-bold text-white mt-1">Cost Reduction</p>
            <p className="text-xs text-gray-400 mt-0.5">Through vLLM &amp; smart caching</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-2xl hover:border-[#50a2ff]/40 transition-all relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />
            <p className="text-3xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">99.95%</p>
            <p className="text-sm font-bold text-white mt-1">Inference Uptime</p>
            <p className="text-xs text-gray-400 mt-0.5">High availability cluster SLA</p>
          </div>
        </div>

        {/* SERVICES CATALOG & CATEGORY FILTER */}
        <section id="services-grid" className="mb-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#50a2ff] block mb-1">
                Full Service Directory
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Specialized AI Engineering Services
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 p-2 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-2xl">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-[#155dfc] text-white shadow-md font-bold"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* 13 Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((service) => {
              const Icon = service.icon || Brain;
              return (
                <Link
                  key={service.slug}
                  href={`/services/ai-integration/${service.slug}`}
                  className="group relative rounded-2xl bg-[#030712] border border-white/[0.08] p-7 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-[#50a2ff]/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />
                  <div className="absolute -top-20 -right-20 w-44 h-44 bg-gradient-to-b from-[#155dfc]/20 via-[#50a2ff]/10 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#155dfc]/15 border border-[#155dfc]/30 flex items-center justify-center text-[#50a2ff] group-hover:scale-110 group-hover:text-white transition-all">
                        <Icon size={22} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.05] text-[#50a2ff] border border-white/[0.08]">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#50a2ff] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-bold text-[#50a2ff] relative z-10">
                    <span>View Architecture &amp; Specs</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* BOTTOM CONSULTATION CTA BANNER */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#030712] border border-white/[0.08] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
          <div className="space-y-2 text-center lg:text-left relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Need a Bespoke AI Architecture?</h3>
            <p className="text-sm text-gray-400 max-w-xl font-normal">
              Book a technical scoping call with our lead AI architects to review your data infrastructure, feasibility, and milestone budget.
            </p>
          </div>
          <div className="relative z-10">
            <NoiseButton
              onClick={() => router.push("/contact-us")}
              className="w-full sm:w-auto"
            >
              <span>Schedule Scoping Session</span>
              <ArrowRight size={17} className="text-[#50a2ff]" />
            </NoiseButton>
          </div>
        </section>

      </div>
    </div>
  );
}