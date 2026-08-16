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
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, steps.length]);

  return (
    <section id="process" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden content-auto">
      <div className="relative max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-4"
          >
            <Sparkles size={13} className="text-[#635BFF]" />
            <span className="text-[#635BFF] text-xs tracking-wider uppercase font-bold">
              Engineering Lifecycle
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight leading-[1.15]"
          >
            Our 6-Phase <span className="text-[#635BFF]">Engineering Workflow</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-[#475569] max-w-2xl font-normal leading-relaxed"
          >
            A disciplined, battle-tested execution framework designed to guarantee technical excellence, on-time delivery, and measurable ROI.
          </motion.p>
        </div>

        {/* Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8 p-1.5 rounded-xl bg-slate-100/90 border border-slate-200/80">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setActiveStep(idx);
                  setIsAutoPlaying(false);
                }}
                className={`relative flex flex-col items-center text-center p-3 rounded-lg transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white text-[#0A2540] shadow-sm font-bold border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <div className={`w-7 h-7 rounded-md flex items-center justify-center mb-1.5 transition-colors ${isActive ? "bg-indigo-50 text-[#635BFF]" : "bg-slate-200/70 text-slate-600"}`}>
                  <Icon size={14} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Step {step.number}
                </span>
                <span className="text-xs font-bold mt-0.5 line-clamp-1">
                  {step.title.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Interactive Showcase Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl p-8 sm:p-10 bg-white border border-slate-200 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.06)] relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-indigo-50 text-[#635BFF] border border-indigo-100 text-xs font-bold uppercase tracking-wider">
                    Phase {steps[activeStep].number} of 06
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {steps[activeStep].tagline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#0A2540] leading-tight">
                  {steps[activeStep].title}
                </h3>

                <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
                  {steps[activeStep].description}
                </p>

                {/* Key Deliverables Matrix */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold text-[#0A2540] uppercase tracking-wider">
                    Phase Deliverables:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {steps[activeStep].deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800">
                        <CheckCircle2 size={14} className="text-[#635BFF] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tooling Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
                    Core Tooling:
                  </span>
                  {steps[activeStep].tools.map((tool, tIdx) => (
                    <span key={tIdx} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Interactive Visual Card */}
              <div className="lg:col-span-5">
                <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
                  
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-200">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#635BFF]">
                        <Terminal size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0A2540] uppercase">Sprint Execution</p>
                        <p className="text-[11px] text-slate-500">Live Engineering Metrics</p>
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                      <div className="flex justify-between text-xs text-slate-700 mb-1.5 font-bold">
                        <span>Phase Velocity</span>
                        <span className="text-emerald-600 font-black">100% On-Track</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div 
                          className="h-full bg-[#635BFF] rounded-full transition-all duration-500" 
                          style={{ width: `${((activeStep + 1) / 6) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 text-center">
                      <div className="p-3 rounded-xl bg-white border border-slate-200">
                        <p className="text-xl font-black text-[#0A2540]">14 Days</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase mt-0.5">Sprint Cycle</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-200">
                        <p className="text-xl font-black text-[#0A2540]">0 Debt</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase mt-0.5">Code Standard</p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => router.push('/contact-us')}
                    className="w-full py-3.5 rounded-xl bg-[#0A2540] hover:bg-[#635BFF] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Start Phase 01 Discovery</span>
                    <ArrowRight size={13} />
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