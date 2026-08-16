"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Compass, 
  Layers, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Cpu, 
  Terminal 
} from "lucide-react";

export default function WorkflowCycle() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps = [
    {
      number: "01",
      icon: Compass,
      title: "Discovery & Architecture Blueprint",
      tagline: "De-risking technical decisions before writing code",
      description: "We analyze your business objectives, data pipelines, technical constraints, and AI readiness to architect a scalable, future-proof product roadmap.",
      deliverables: ["Technical Architecture Specification", "AI Feasibility & ROI Analysis", "Database Schema & API Contracts", "Milestone Sprint Plan"],
      tools: ["System Design", "AWS Well-Architected", "Data Flow Matrix"]
    },
    {
      number: "02",
      icon: Layers,
      title: "UI/UX Craft & Interactive Prototyping",
      tagline: "Conversion-engineered interfaces tailored for adoption",
      description: "Our designers craft frictionless user journeys, design token systems, and high-fidelity clickable Figma prototypes tested against real user behavior.",
      deliverables: ["Full Design System & Token Library", "Clickable High-Fidelity Prototype", "Accessibility & WCAG 2.1 Audit", "User Journey Flow Maps"],
      tools: ["Figma", "Design Tokens", "Micro-Interactions"]
    },
    {
      number: "03",
      icon: Code2,
      title: "Full-Stack Agile Sprint Engineering",
      tagline: "Clean, test-driven code delivered in rapid bi-weekly sprints",
      description: "Elite engineering squads build your solution with Next.js, React, Node.js, and custom AI/LLM models, deploying incremental demo builds every 2 weeks.",
      deliverables: ["Modular Microservices Codebase", "AI / LLM Model Integration", "Bi-Weekly Live Demo Releases", "Comprehensive API Documentation"],
      tools: ["Next.js 16", "React 19", "Python / PyTorch", "TypeScript"]
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "Rigorous QA & Security Hardening",
      tagline: "Zero critical bugs. Bank-grade resilience.",
      description: "Automated unit, integration, and load testing coupled with rigorous OWASP vulnerability audits ensure maximum stability and data protection.",
      deliverables: ["Automated E2E Test Suite", "OWASP Security & Pentest Report", "Core Web Vitals 95+ Audit", "Cross-Device Verification"],
      tools: ["Jest / Playwright", "SonarQube", "OWASP ZAP"]
    },
    {
      number: "05",
      icon: Rocket,
      title: "Zero-Downtime Cloud Deployment",
      tagline: "Enterprise infrastructure configured for infinite scale",
      description: "We orchestrate automated CI/CD pipelines, containerized deployments on AWS/GCP, and configure real-time CDN caching for instantaneous global load times.",
      deliverables: ["Automated CI/CD Workflows", "AWS / Docker Infrastructure", "Multi-Region CDN Routing", "Disaster Recovery Playbook"],
      tools: ["AWS Cloud", "Docker", "Kubernetes", "GitHub Actions"]
    },
    {
      number: "06",
      icon: TrendingUp,
      title: "24/7 SLA Telemetry & Continuous Evolution",
      tagline: "Proactive maintenance, feature iteration & model retraining",
      description: "Post-launch, our engineers monitor server telemetry, retrain AI models on new data, and iterate features to ensure ongoing market dominance.",
      deliverables: ["24/7 Uptime & Error Telemetry", "Periodic AI Model Fine-Tuning", "Continuous Security Patches", "Quarterly Roadmap Sprints"],
      tools: ["Datadog", "CloudWatch", "Prometheus"]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, steps.length]);

  return (
    <section id="process" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#030712] overflow-hidden border-t border-white/[0.06] content-auto">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

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
              Engineering Lifecycle
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
          >
            From Concept to Scale: <br />
            <span className="text-gradient-emerald">Our 6-Phase Engineering Workflow</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed"
          >
            A disciplined, battle-tested execution framework designed to guarantee technical excellence, on-time delivery, and measurable ROI.
          </motion.p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-10 p-2 rounded-2xl bg-[#090d16] border border-white/10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveStep(idx);
                  setIsAutoPlaying(false);
                }}
                className={`relative flex flex-col items-center text-center p-3 sm:p-4 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-[#0d1424] text-[#00f5a0] border border-emerald-500/60 shadow-[0_10px_30px_rgba(0,245,160,0.15)]"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 transition-transform duration-300 ${isActive ? "bg-emerald-500/20 text-[#00f5a0] scale-110" : "bg-white/10 text-white"}`}>
                  <Icon size={16} />
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-200">
                  Step {step.number}
                </span>
                <span className="text-xs font-bold mt-0.5 line-clamp-1 text-white">
                  {step.title.split(" ")[0]}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-2 w-6 h-1 bg-[#00f5a0] rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Interactive Showcase Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl p-8 sm:p-12 bg-[#090d16] border border-white/15 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-[#05241b] border border-emerald-500/50 text-[#00f5a0] text-xs font-black tracking-widest uppercase">
                    Phase {steps[activeStep].number} of 06
                  </span>
                  <span className="text-xs text-slate-200 font-semibold">
                    {steps[activeStep].tagline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  {steps[activeStep].title}
                </h3>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  {steps[activeStep].description}
                </p>

                {/* Key Deliverables Matrix */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-black text-[#00f5a0] uppercase tracking-widest">
                    Phase Deliverables:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {steps[activeStep].deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#030712] border border-white/10 text-xs font-semibold text-white">
                        <CheckCircle2 size={15} className="text-[#00f5a0] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tooling Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-4">
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wider mr-2">
                    Core Tooling:
                  </span>
                  {steps[activeStep].tools.map((tool, tIdx) => (
                    <span key={tIdx} className="text-xs px-3 py-1 rounded-lg bg-[#05241b] border border-emerald-500/40 text-[#00f5a0] font-bold">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Interactive Visual Card */}
              <div className="lg:col-span-5">
                <div className="p-6 sm:p-8 rounded-3xl bg-[#030712] border border-white/15 relative overflow-hidden space-y-6">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[#00f5a0]">
                        <Terminal size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white uppercase">Sprint Telemetry</p>
                        <p className="text-[11px] text-slate-200 font-medium">Live Engineering Metrics</p>
                      </div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00f5a0] animate-ping" />
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-[#090d16] border border-white/10">
                      <div className="flex justify-between text-xs text-slate-200 mb-1.5 font-bold">
                        <span>Phase Velocity</span>
                        <span className="text-[#00f5a0] font-black">100% On-Track</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#00f5a0] via-[#00d9f5] to-[#6366f1] rounded-full transition-all duration-500" 
                          style={{ width: `${((activeStep + 1) / 6) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="p-3.5 rounded-2xl bg-[#090d16] border border-white/10">
                        <p className="text-xl font-black text-[#00f5a0]">14 Days</p>
                        <p className="text-[10px] text-slate-200 font-bold uppercase mt-0.5">Sprint Cycle</p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-[#090d16] border border-white/10">
                        <p className="text-xl font-black text-[#00f5a0]">0 Debt</p>
                        <p className="text-[10px] text-slate-200 font-bold uppercase mt-0.5">Code Standard</p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => router.push('/contact-us')}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00f5a0] via-[#00d9f5] to-[#6366f1] bg-[length:200%_auto] hover:bg-[position:right_center] text-black font-black text-xs uppercase tracking-wider transition-all duration-500 shadow-[0_0_25px_rgba(0,245,160,0.4)] flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 cursor-pointer touch-manipulation"
                  >
                    <span>Start Phase 01 Discovery</span>
                    <ArrowRight size={14} />
                  </button>

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}