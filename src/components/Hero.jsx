"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Award,
  Sparkles,
  Zap,
  Globe2,
  Terminal,
  ShieldCheck,
  Users,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Star
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection({ mobileOpen }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("ai"); // 'ai' | 'squads' | 'security'

  const techPills = [
    "Next.js 16", "React 19", "Generative AI", "Python / PyTorch", "LLM Fine-Tuning", "AWS Cloud", "Node.js", "Flutter", "Kubernetes"
  ];

  const squadTelemetry = {
    ai: {
      title: "Generative AI & LLM Pipelines",
      badge: "Production Ready",
      metrics: [
        { label: "Inference Latency", value: "<45ms", sub: "Sub-second SLA" },
        { label: "Vector Search", value: "99.8%", sub: "RAG Accuracy" },
        { label: "Agent Workflows", value: "50+", sub: "Production Agents" },
        { label: "Data Isolation", value: "100%", sub: "Private VPC Host" },
      ],
      detail: "Autonomous multi-agent architectures, enterprise LLM fine-tuning, and deterministic vector databases engineered for private enterprise workflows."
    },
    squads: {
      title: "Dedicated Agile Engineering Squads",
      badge: "Sprint Precision",
      metrics: [
        { label: "Sprint Precision", value: "99.4%", sub: "On-Time Delivery" },
        { label: "Senior Engineers", value: "10-50", sub: "Top Tech Talent" },
        { label: "Timezone Overlap", value: "4-8 Hrs", sub: "USA / UAE / EU / APAC" },
        { label: "IP Ownership", value: "100%", sub: "Zero Vendor Lock-In" },
      ],
      detail: "Cross-functional engineering pods with full-stack React, Next.js, Python, and mobile architects dedicated to rapid product execution."
    },
    security: {
      title: "Enterprise Architecture & Security",
      badge: "Bank-Grade Standards",
      metrics: [
        { label: "Cloud Uptime", value: "99.99%", sub: "AWS / GCP Cluster" },
        { label: "Code Auditing", value: "OWASP", sub: "Automated CI/CD" },
        { label: "Compliance", value: "SOC-2", sub: "Audit Certified" },
        { label: "Client Rating", value: "4.9 ★", sub: "100+ Global Reviews" },
      ],
      detail: "Hardened cloud-native deployments with strict encryption-at-rest, granular role-based access control, and complete non-disclosure agreements."
    }
  };

  return (
    <section
      className="relative w-full flex flex-col justify-between overflow-hidden bg-white text-slate-900 pt-28 sm:pt-32 md:pt-36 pb-16"
      style={{ display: mobileOpen ? "none" : "flex" }}
    >
      {/* Stripe-Style Subtle Gradient Ambient Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-br from-indigo-50/70 via-blue-50/40 to-transparent blur-3xl opacity-80 rounded-full" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-purple-50/60 to-transparent blur-3xl opacity-60 rounded-full" />
      </div>

      {/* Main Container */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2.5 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-slate-700 shadow-sm text-xs font-semibold">
            <span className="flex h-2 w-2 relative" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#635BFF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#635BFF]"></span>
            </span>
            <span>Enterprise AI &amp; Full-Stack Product Engineering</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50/80 border border-indigo-100 text-[#635BFF] text-xs font-bold shadow-sm">
            <Globe2 size={13} className="text-[#635BFF]" aria-hidden="true" />
            <span>100% Fully Remote • Global Delivery</span>
          </div>
        </motion.div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.08] text-[#0A2540]"
            >
              Intelligent Software &amp; <br />
              <span className="text-[#635BFF]">Enterprise AI Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed text-[#334155] max-w-2xl font-normal"
            >
              A 100% fully remote engineering organization solving complex technical problems globally. We build mission-critical web applications, custom Generative AI ecosystems, and high-performance digital products for high-growth startups and global innovators worldwide.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <button
                type="button"
                onClick={() => router.push("/contact-us")}
                className="px-7 py-4 rounded-xl bg-[#0A2540] hover:bg-[#635BFF] text-white text-base font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer touch-manipulation"
              >
                <span>Book Architecture Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("casestudies");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else router.push("/#casestudies");
                }}
                className="px-6 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-[#0A2540] text-base font-bold flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer touch-manipulation"
              >
                <span>Explore Case Studies</span>
              </button>
            </motion.div>

            {/* Core Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-1.5"
            >
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
                Core Stack:
              </span>
              {techPills.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100/80 border border-slate-200/80 text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Floating Stripe-Style Telemetry Console */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)] relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#635BFF]">
                    <Terminal size={16} />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-[#0A2540]">
                      Engineering Operations
                    </h2>
                    <p className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Real-Time Sprint Telemetry
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">
                  <Activity size={11} />
                  <span>99.4% SLA</span>
                </div>
              </div>

              {/* Tab Selector */}
              <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100/90 rounded-xl my-4">
                <button
                  type="button"
                  onClick={() => setActiveTab("ai")}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "ai"
                      ? "bg-white text-[#0A2540] shadow-sm font-black"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  AI Engine
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("squads")}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "squads"
                      ? "bg-white text-[#0A2540] shadow-sm font-black"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Squads
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("security")}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "security"
                      ? "bg-white text-[#0A2540] shadow-sm font-black"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Security
                </button>
              </div>

              {/* Dynamic Metrics Content */}
              <div className="space-y-3 min-h-[170px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-[#0A2540]">{squadTelemetry[activeTab].title}</p>
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-indigo-50 text-[#635BFF] border border-indigo-100">
                        {squadTelemetry[activeTab].badge}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {squadTelemetry[activeTab].metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70"
                        >
                          <p className="text-xl sm:text-2xl font-black text-[#0A2540]">{metric.value}</p>
                          <p className="text-xs font-bold text-slate-800 mt-0.5">{metric.label}</p>
                          <p className="text-[10px] text-slate-500">{metric.sub}</p>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                      {squadTelemetry[activeTab].detail}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer Rating */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div role="img" aria-label="5 out of 5 stars rating" className="flex items-center text-amber-400 text-xs">
                    {"★★★★★"}
                  </div>
                  <span className="text-xs font-bold text-slate-700">4.9/5 Client Rating</span>
                </div>

                <button
                  type="button"
                  onClick={() => router.push("/contact-us")}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#635BFF] hover:underline cursor-pointer"
                >
                  <span>Engage Squad</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>

            </motion.div>
          </div>

        </div>

        {/* Social Proof & Certifications Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-14 pt-8 border-t border-slate-200/80"
        >
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-5">
            Recognized &amp; Verified Industry Standards
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* AWS */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-200/60 hover:border-slate-300 transition-all">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/AWS.webp"
                  alt="AWS Certified"
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0A2540]">AWS CERTIFIED</p>
                <p className="text-[11px] text-slate-500">Cloud Architecture</p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-200/60 hover:border-slate-300 transition-all">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/linkedin-logo.svg"
                  alt="LinkedIn Top Rated"
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0A2540]">TOP RATED AGENCY</p>
                <p className="text-[11px] text-slate-500">Global Tech Talent</p>
              </div>
            </div>

            {/* Digital */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-200/60 hover:border-slate-300 transition-all">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/digital.webp"
                  alt="Digital Certified"
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0A2540]">AI &amp; DIGITAL EXP</p>
                <p className="text-[11px] text-slate-500">Next-Gen Delivery</p>
              </div>
            </div>

            {/* Excellence Award */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-200/60 hover:border-slate-300 transition-all">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#635BFF] flex-shrink-0">
                <Award size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0A2540]">EXCELLENCE AWARD</p>
                <p className="text-[11px] text-slate-500">Quality Certified SLA</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}