"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Award,
  Sparkles,
  Zap,
  Cpu,
  Globe2,
  Terminal,
  ShieldCheck,
  Code2,
  Users,
  Activity,
  Layers,
  ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection({ mobileOpen }) {
  const heroRef = useRef(null);
  const router = useRouter();
  const [mountVideo, setMountVideo] = useState(false);
  const [activeTab, setActiveTab] = useState("ai"); // 'ai' | 'squads' | 'security'

  useEffect(() => {
    // Only load video in the background for desktop users after hydration (0KB mobile overhead)
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      const timer = setTimeout(() => {
        setMountVideo(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current || (typeof window !== "undefined" && window.innerWidth < 768)) return;
    const { clientX, clientY, currentTarget } = e;
    requestAnimationFrame(() => {
      if (!heroRef.current) return;
      const rect = currentTarget.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      heroRef.current.style.setProperty("--x", `${x}px`);
      heroRef.current.style.setProperty("--y", `${y}px`);
    });
  };

  const techPills = [
    "Next.js 16", "React 19", "Generative AI", "Python / PyTorch", "LLM Fine-Tuning", "AWS Cloud", "Node.js", "Flutter", "Kubernetes"
  ];

  const squadTelemetry = {
    ai: {
      title: "Generative AI & LLM Systems",
      badge: "Active Neural Pipelines",
      metrics: [
        { label: "Inference Latency", value: "<45ms", sub: "Sub-second SLA" },
        { label: "Vector Search", value: "99.8%", sub: "RAG Accuracy" },
        { label: "Agent Pipelines", value: "50+", sub: "Production Agents" },
        { label: "Data Isolation", value: "100%", sub: "Private VPC Host" },
      ],
      detail: "Autonomous multi-agent architectures, enterprise LLM fine-tuning, and deterministic vector databases engineered for private enterprise workflows."
    },
    squads: {
      title: "Dedicated Agile Engineering Squads",
      badge: "High-Velocity Sprints",
      metrics: [
        { label: "Sprint Precision", value: "99.4%", sub: "On-Time Delivery" },
        { label: "Senior Engineers", value: "10-50", sub: "Top 3% Tech Talent" },
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
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="hero relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#030712] text-white pt-24 sm:pt-28 md:pt-32"
      style={{ display: mobileOpen ? "none" : "flex" }}
    >
      {/* Background Video (Desktop client idle mount, 0KB mobile payload) */}
      {!mobileOpen && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {mountVideo && (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              aria-hidden="true"
              className="w-full h-full object-cover opacity-20 filter contrast-125"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
          )}
          {/* Cosmic ambient gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,245,160,0.15),transparent_70%)]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />
        </div>
      )}

      {/* Cyber Grid Background Matrix */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      {/* Glow Follower Effect */}
      <div className="glow-layer absolute inset-0 pointer-events-none z-0" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col justify-center flex-grow">
        
        {/* Top Floating Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a1020] border border-cyan-500/30 backdrop-blur-xl shadow-lg hover:border-cyan-400/60 transition-colors">
            <span className="flex h-2.5 w-2.5 relative" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38bdf8]"></span>
            </span>
            <p className="text-xs sm:text-[13px] font-bold text-white tracking-wide">
              ✦ Next-Gen AI &amp; Enterprise Digital Engineering
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#07132a] border border-cyan-400/40 text-cyan-300 text-xs sm:text-[13px] font-extrabold shadow-lg">
            <Globe2 size={15} className="text-cyan-400" aria-hidden="true" />
            <span>100% Fully Remote • Solving Complex Problems Globally</span>
          </div>
        </motion.div>

        {/* Main Headline & Two-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.06] text-white"
            >
              Engineering <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc] drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">Intelligent Software</span> &amp; <br />
              <span className="text-slate-100 font-black">Enterprise AI Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-200 max-w-2xl font-normal"
            >
              A 100% fully remote engineering organization solving complex technical problems globally. We build mission-critical web applications, custom Generative AI ecosystems, and high-performance digital products for high-growth startups and global innovators worldwide.
            </motion.p>

            {/* High-Converting Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={() => router.push("/contact-us")}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#6366f1] bg-[length:200%_auto] hover:bg-[position:right_center] rounded-2xl font-black text-white text-base md:text-lg flex items-center justify-center gap-3 shadow-[0_0_35px_-5px_rgba(6,182,212,0.5)] transition-all duration-500 hover:scale-[1.02] active:scale-95 cursor-pointer touch-manipulation"
              >
                <span>Book Free Architecture Session</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("casestudies");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else router.push("/#casestudies");
                }}
                className="px-6 py-4 bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-white/40 backdrop-blur-xl rounded-2xl font-bold text-white text-base md:text-lg flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer touch-manipulation"
              >
                <span>View Proven Case Studies</span>
              </button>
            </motion.div>

            {/* Core Stack Pill Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="pt-2 flex flex-wrap items-center gap-2"
            >
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest mr-2 flex items-center gap-1.5">
                <Cpu size={14} className="text-[#00f5a0]" /> Core Stack:
              </span>
              {techPills.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold px-3 py-1 rounded-lg bg-[#090d16] border border-white/20 text-slate-200 hover:text-white hover:border-emerald-400/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive Live Engineering Command Center */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="p-6 sm:p-7 rounded-3xl relative overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)] bg-[#070b14] border-2 border-white/20"
            >
              {/* Top ambient radial glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Command Center Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[#00f5a0]">
                    <Terminal size={17} />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-black text-white tracking-wide">
                      ENGINEERING COMMAND CENTER
                    </h2>
                    <p className="text-[11px] text-slate-300 font-bold flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-[#00f5a0] animate-pulse"></span>
                      Real-Time Sprint Telemetry
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#00f5a0] text-[11px] font-black">
                  <Activity size={12} />
                  <span>99.4% SLA</span>
                </div>
              </div>

              {/* Interactive Telemetry Mode Selector */}
              <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-[#030712] rounded-2xl border border-white/10 my-4 relative z-10">
                <button
                  type="button"
                  onClick={() => setActiveTab("ai")}
                  className={`py-2 px-1 rounded-xl text-xs font-black transition-all cursor-pointer touch-manipulation flex items-center justify-center gap-1.5 ${
                    activeTab === "ai"
                      ? "bg-[#00f5a0] text-black shadow-lg"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Sparkles size={12} />
                  <span>AI Engine</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("squads")}
                  className={`py-2 px-1 rounded-xl text-xs font-black transition-all cursor-pointer touch-manipulation flex items-center justify-center gap-1.5 ${
                    activeTab === "squads"
                      ? "bg-[#00f5a0] text-black shadow-lg"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Users size={12} />
                  <span>Squads</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("security")}
                  className={`py-2 px-1 rounded-xl text-xs font-black transition-all cursor-pointer touch-manipulation flex items-center justify-center gap-1.5 ${
                    activeTab === "security"
                      ? "bg-[#00f5a0] text-black shadow-lg"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <ShieldCheck size={12} />
                  <span>Security</span>
                </button>
              </div>

              {/* Dynamic Telemetry Metric Cards */}
              <div className="space-y-3 relative z-10 min-h-[160px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-extrabold text-white">{squadTelemetry[activeTab].title}</p>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-[#00f5a0]">
                        {squadTelemetry[activeTab].badge}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {squadTelemetry[activeTab].metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-[#091522] border border-white/10 hover:border-emerald-500/50 transition-colors"
                        >
                          <p className="text-xl sm:text-2xl font-black text-[#00f5a0]">{metric.value}</p>
                          <p className="text-xs font-bold text-white mt-0.5">{metric.label}</p>
                          <p className="text-[10px] text-slate-300 font-semibold">{metric.sub}</p>
                        </div>
                      ))}
                    </div>

                    <p className="text-[11px] text-slate-300 font-medium leading-relaxed bg-[#030712]/80 p-2.5 rounded-xl border border-white/10">
                      {squadTelemetry[activeTab].detail}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Trust Badge Footer Inside Command Center */}
              <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-[#00f5a0] flex items-center justify-center font-black text-black text-[11px] border-2 border-[#030712]">W</div>
                    <div className="w-7 h-7 rounded-full bg-[#00d9f5] flex items-center justify-center font-black text-black text-[11px] border-2 border-[#030712]">AI</div>
                    <div className="w-7 h-7 rounded-full bg-[#1d4ed8] flex items-center justify-center font-black text-white text-[11px] border-2 border-[#030712]">IT</div>
                  </div>
                  <div>
                    <div role="img" aria-label="5 out of 5 stars rating" className="flex items-center text-amber-300 text-xs font-bold">
                      {"★★★★★"}
                    </div>
                    <p className="text-[10px] text-slate-200 font-bold">Top-Rated Global Agency</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => router.push("/contact-us")}
                  className="inline-flex items-center gap-1 text-xs font-black text-[#00f5a0] hover:text-[#00d9f5] transition-colors cursor-pointer touch-manipulation"
                >
                  <span>Engage Squad</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>

            </motion.div>
          </div>

        </div>

        {/* Certified Credentials Footer Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 pt-6 border-t border-white/10"
        >
          <p className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4">
            Recognized &amp; Verified Excellence
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            {/* AWS Certified */}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#090d16] border border-white/10 hover:border-white/30 transition-all group">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/AWS.webp"
                  alt="AWS Certified"
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-contain"
                  sizes="36px"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-white group-hover:text-[#00f5a0] transition-colors">AWS CERTIFIED</p>
                <p className="text-[11px] text-slate-300 font-medium">Cloud Architecture</p>
              </div>
            </div>

            {/* LinkedIn Top Rated */}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#090d16] border border-white/10 hover:border-white/30 transition-all group">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/linkedin-logo.svg"
                  alt="LinkedIn Top Rated"
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-contain"
                  sizes="36px"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-white group-hover:text-[#00f5a0] transition-colors">TOP RATED AGENCY</p>
                <p className="text-[11px] text-slate-300 font-medium">Global Tech Talent</p>
              </div>
            </div>

            {/* Digital Transformation */}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#090d16] border border-white/10 hover:border-white/30 transition-all group">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/digital.webp"
                  alt="Digital Certified"
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-contain"
                  sizes="36px"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-white group-hover:text-[#00f5a0] transition-colors">AI &amp; DIGITAL EXP</p>
                <p className="text-[11px] text-slate-300 font-medium">Next-Gen Delivery</p>
              </div>
            </div>

            {/* ISO / Excellence Award */}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#090d16] border border-white/10 hover:border-white/30 transition-all group">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[#00f5a0] flex-shrink-0">
                <Award size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white group-hover:text-[#00f5a0] transition-colors">EXCELLENCE AWARD</p>
                <p className="text-[11px] text-slate-300 font-medium">Quality Certified SLA</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}