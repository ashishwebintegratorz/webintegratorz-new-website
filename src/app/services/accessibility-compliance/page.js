'use client';

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Globe2, 
  Code2, 
  Zap, 
  ChevronDown, 
  Wrench
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { NoiseButton } from '@/components/ui/noise-background';

export default function AccessibilityCompliancePage() {
  const router = useRouter();
  const [activeStandard, setActiveStandard] = useState('wcag');
  const [openFaq, setOpenFaq] = useState(0);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Accessibility Remediation & Compliance', href: '/services/accessibility-compliance' }
  ];

  const standards = [
    {
      id: 'wcag',
      name: 'WCAG 2.1 & 2.2',
      fullname: 'Web Content Accessibility Guidelines Code Remediation (Level A, AA, AAA)',
      jurisdiction: 'Global / W3C WAI Technical Standards',
      tag: 'Code-Level Remediation',
      summary: 'Direct hands-on source code remediation resolving all non-compliant violations across perceivable, operable, understandable, and robust criteria.',
      keyPoints: [
        'Hands-on Source Code Fixing for WCAG 2.1 & 2.2 (Level AA & AAA)',
        'Full Screen Reader Compatibility Code Fixes (NVDA, JAWS, VoiceOver)',
        'Color Contrast Algorithm Fixes & Dynamic Focus Indicator Engineering',
        'WCAG 2.2 Target Size (24x24px+) & Dragging Movement Refactoring',
        'Zero Keyboard Trap Code Refactoring & Semantic DOM Restructuring'
      ]
    },
    {
      id: 'ada',
      name: 'ADA Title III',
      fullname: 'Americans with Disabilities Act Full-Site Remediation',
      jurisdiction: 'United States Legal Compliance',
      tag: 'Lawsuit Immunity Remediation',
      summary: 'Engineering-level code remediation to eliminate digital accessibility barriers and shield your organization from US ADA Title III lawsuits and demand letters.',
      keyPoints: [
        'End-to-End ADA Title III Codebase Remediation',
        'Lawsuit Vulnerability Elimination & Checkout Funnel Fixes',
        'Certified Statement of Accessibility & Legal Letter of Conformance',
        'Accessible Modal Dialogs, Video Subtitles & Form Labeling Fixes',
        'Continuous Regression CI/CD Guardrails & Ongoing Protection'
      ]
    },
    {
      id: 'eaa',
      name: 'EAA / EN 301 549',
      fullname: 'European Accessibility Act (EAA) Codebase Compliance Remediation',
      jurisdiction: 'European Union Mandate (Effective June 2025)',
      tag: 'EU Mandatory Fixes',
      summary: 'Full code refactoring ensuring your SaaS products, e-commerce stores, apps, and digital services meet mandatory EU accessibility standards before statutory deadlines.',
      keyPoints: [
        'EN 301 549 Code-Level Harmonized Technical Remediation',
        'E-Commerce Checkout, Banking & SaaS Application Fixing',
        'Accessible Electronic Document Generation (PDF/UA Remediation)',
        'EU Single Market Cross-Border Compliance Engineering',
        'Statutory Penalty & Regulatory Restriction Prevention'
      ]
    },
    {
      id: 'sec508',
      name: 'Section 508 & VPAT',
      fullname: 'US Rehabilitation Act Section 508 Code Remediation & VPAT Authoring',
      jurisdiction: 'US Federal & Public Sector Procurement',
      tag: 'Procurement Ready Fixes',
      summary: 'Remediating digital products to achieve complete Section 508 compliance and authoring official VPAT 2.5 (ACR) documents required to win US government and university contracts.',
      keyPoints: [
        'Direct Source Code Remediation for Section 508 Criteria',
        'Official VPAT 2.5 (Voluntary Product Accessibility Template) Authoring',
        'Accessibility Conformance Report (ACR) Generation & Attestation',
        'Federal Procurement & Public Sector RFP Bid Clearance',
        'Accessible Desktop, Cloud SaaS, and Mobile Product Engineering'
      ]
    },
    {
      id: 'aoda',
      name: 'AODA Compliance',
      fullname: 'Accessibility for Ontarians with Disabilities Act Remediation',
      jurisdiction: 'Canada (Ontario & Federal IASR)',
      tag: 'Canadian Remediation',
      summary: 'Hands-on web and mobile application remediation ensuring complete compliance with AODA Integrated Accessibility Standards Regulation (IASR).',
      keyPoints: [
        'AODA Web & Mobile Source Code Remediation',
        'Mandatory Government Compliance Document Generation',
        'Accessible Customer Portals & Self-Service Workflows',
        'Canadian Human Rights & Provincial Standard Alignment',
        'Annual Compliance Filing & Technical Verification Support'
      ]
    },
    {
      id: 'gigw',
      name: 'GIGW 3.0',
      fullname: 'Guidelines for Indian Government Websites (GIGW 3.0) Code Remediation',
      jurisdiction: 'India (Government & PSU Portals)',
      tag: 'STQC Certification Fixes',
      summary: 'Complete technical refactoring and certified code compliance meeting National Informatics Centre (NIC) and STQC certification requirements for public portals.',
      keyPoints: [
        'GIGW 3.0 Mandatory Code Compliance Engineering',
        'STQC Certification Pre-Audit Remediation',
        'Multilingual Indian Language Accessibility Optimization',
        'Public Sector Portal & Mobile Application Refactoring',
        'Government Procurement Compliance Verification'
      ]
    },
    {
      id: 'bis',
      name: 'BIS IS 17802',
      fullname: 'Bureau of Indian Standards (BIS IS 17802:2021) Code Remediation',
      jurisdiction: 'India (National ICT Standard)',
      tag: 'Indian National Standard',
      summary: 'Remediating digital interfaces and mobile apps to strictly conform with Indian Standard IS 17802 Parts 1 & 2 for accessible ICT systems.',
      keyPoints: [
        'BIS IS 17802 Part 1 & Part 2 Code Conformance',
        'Enterprise Indian Enterprise & Fintech Accessibility',
        'Digital Public Goods (DPG) Accessibility Alignment',
        'Certified Technical Conformance Statement Generation',
        'Continuous Accessibility Regression CI/CD Implementation'
      ]
    }
  ];

  const remediationServices = [
    {
      icon: Code2,
      title: 'Semantic HTML & ARIA Refactoring',
      desc: 'Fixing incorrect ARIA attributes, missing landmarks, unstructured headings, dynamic live regions, and broken form field associations directly in your codebase.'
    },
    {
      icon: ShieldCheck,
      title: 'Screen Reader DOM Compatibility',
      desc: 'Ensuring seamless navigation and audio rendering for NVDA, JAWS, VoiceOver (iOS/macOS), and TalkBack (Android) across complex interactive components.'
    },
    {
      icon: Zap,
      title: 'Keyboard Navigation & Trap Removal',
      desc: 'Engineering complete keyboard accessibility with dynamic focus trapping for modal dialogs, visible focus indicators, skip navigation links, and logical tab sequences.'
    },
    {
      icon: Globe2,
      title: 'Color Contrast & Visual Engine Fixes',
      desc: 'Refactoring CSS color tokens and UI themes to guarantee WCAG 2.2 AA (4.5:1 text, 3:1 UI components) and AAA (7:1) contrast ratios across light and dark modes.'
    },
    {
      icon: Wrench,
      title: 'VPAT 2.5 & ACR Conformance Authoring',
      desc: 'Producing rigorous, legally compliant Voluntary Product Accessibility Templates (VPAT 2.5) across Section 508, WCAG, and EN 301 549 editions for procurement teams.'
    },
    {
      icon: Sparkles,
      title: 'CI/CD Automated Regression Guardrails',
      desc: 'Integrating automated Axe-core, Pa11y, and Cypress accessibility test suites into your GitHub Actions / GitLab CI pipelines to prevent future accessibility regressions.'
    }
  ];

  const faqs = [
    {
      q: 'Do you only audit, or do you fix the code yourself?',
      a: 'We are hands-on engineers. We work directly inside your codebase (React, Next.js, Angular, Vue, iOS, Android, WordPress, Shopify) via Git Pull Requests. We write the actual code fixes, test them with assistive technology, and deliver clean, verified pull requests.'
    },
    {
      q: 'Why not just use an accessibility widget or overlay?',
      a: 'Overlays and AI plugins do NOT make a website legally compliant. In fact, over 25% of all digital accessibility lawsuits in the US explicitly cite companies using overlays. Overlays cannot fix deep DOM structure, keyboard traps, form label associations, or screen reader interactions. Only native source code remediation provides true compliance and permanent legal protection.'
    },
    {
      q: 'What deliverables do we receive upon project completion?',
      a: 'You receive: (1) Verified GitHub/GitLab Pull Requests with all code fixes, (2) Signed Executive Letter of Conformance, (3) Official VPAT 2.5 / ACR Conformance Report, (4) Assistive Tech Verification Matrix (NVDA/JAWS/VoiceOver), and (5) Automated CI/CD testing integration.'
    },
    {
      q: 'What is the turnaround time for full codebase remediation?',
      a: 'Standard enterprise websites and web apps typically take 2 to 4 weeks for complete discovery, code remediation, assistive technology testing, and VPAT generation. For large-scale SaaS platforms, we deploy dedicated sprint squads to remediate continuously.'
    }
  ];

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 sm:mb-28">
          <div className="lg:col-span-8 space-y-6">
            
            {/* Standards Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030712] border border-[#155dfc]/30 mb-2 font-bold"
            >
              <Wrench size={14} className="text-[#50a2ff]" />
              <span className="text-xs font-bold text-[#50a2ff] uppercase tracking-widest">
                Hands-On Code Remediation &amp; Compliance Engineering
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Digital Accessibility <br />
              <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Remediation &amp; Source Code Engineering</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl font-semibold text-gray-300 leading-snug"
            >
              We don&apos;t just audit—we directly fix and refactor your codebase for WCAG 2.2, ADA Title III, EAA (EN 301 549), Section 508, AODA, GIGW 3.0 &amp; BIS IS 17802.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl font-normal"
            >
              Our certified frontend and full-stack accessibility engineers work directly inside your codebase (React, Next.js, Vue, iOS, Android) to resolve non-compliant code, repair screen reader DOM structures, eliminate keyboard traps, and guarantee 100% legal compliance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <NoiseButton
                onClick={() => router.push("/contact-us")}
                className="w-full sm:w-auto"
              >
                <span>Start Code Remediation</span>
                <ArrowRight size={17} className="text-[#50a2ff]" />
              </NoiseButton>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("standards-matrix");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3.5 bg-[#030712] hover:border-[#50a2ff]/50 border border-white/[0.12] rounded-full font-semibold text-white text-base shadow-md transition-all cursor-pointer"
              >
                <span>Explore 7 Remediation Standards</span>
              </button>
            </motion.div>
          </div>

          {/* Right Metrics Card */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#030712] border border-white/[0.08] p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl space-y-6"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] relative z-10">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#50a2ff]">Remediation SLA</p>
                  <h3 className="text-lg font-bold text-white">Guaranteed Code Fixes</h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#155dfc]/15 border border-[#155dfc]/30 flex items-center justify-center text-[#50a2ff]">
                  <Code2 size={18} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3.5 relative z-10">
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                  <p className="text-2xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">100%</p>
                  <p className="text-xs font-bold text-white mt-1">Code Fix Guarantee</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Zero leftover barriers</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                  <p className="text-2xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">0 Overlays</p>
                  <p className="text-xs font-bold text-white mt-1">Native Code Only</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Permanent resolution</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                  <p className="text-2xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">VPAT 2.5</p>
                  <p className="text-xs font-bold text-white mt-1">Certified Reports</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Section 508 ready</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                  <p className="text-2xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Signed</p>
                  <p className="text-xs font-bold text-white mt-1">Letter of Conformance</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">For legal &amp; procurement</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-3 relative z-10">
                <ShieldCheck size={24} className="text-[#50a2ff] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Full IP &amp; Code Quality Guarantee</p>
                  <p className="text-[11px] text-gray-400">Clean, maintainable, production-ready code with PR reviews.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 7 REGULATORY STANDARDS REMEDIATION MATRIX */}
        <section id="standards-matrix" className="mb-28">
          <div className="flex flex-col items-center text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030712] border border-[#155dfc]/30 mb-4 font-bold">
              <Globe2 size={14} className="text-[#50a2ff]" />
              <span className="text-[#50a2ff] text-xs font-bold uppercase tracking-[0.2em]">
                Standards &amp; Frameworks We Remediate
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Direct Code Remediation for <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">All 7 Major Standards</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mt-3 max-w-2xl font-normal">
              Select a standard below to inspect our code remediation scope, technical deliverables, and certified attestation.
            </p>

            {/* Standard Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 p-2 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-2xl">
              {standards.map((std) => (
                <button
                  key={std.id}
                  type="button"
                  onClick={() => setActiveStandard(std.id)}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeStandard === std.id
                      ? "bg-[#155dfc] text-white shadow-md font-bold"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {std.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Standard Details Card */}
          {(() => {
            const current = standards.find(s => s.id === activeStandard) || standards[0];
            return (
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-8 sm:p-12 rounded-3xl bg-[#030712] border border-white/[0.08] shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#155dfc]/15 border border-[#155dfc]/30 text-[#50a2ff] text-xs font-bold uppercase tracking-widest">
                        {current.tag}
                      </span>
                      <span className="text-xs text-gray-400 font-semibold">{current.jurisdiction}</span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                      {current.fullname}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal">
                      {current.summary}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      <p className="text-xs font-bold text-[#50a2ff] uppercase tracking-widest">Engineering Remediation Scope:</p>
                      {current.keyPoints.map((pt, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300 font-medium">
                          <CheckCircle2 size={16} className="text-[#50a2ff] shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] shadow-xl space-y-6">
                      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#155dfc]/15 border border-[#155dfc]/30 flex items-center justify-center text-[#50a2ff]">
                            <Wrench size={20} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white uppercase">{current.name} Remediation</p>
                            <p className="text-[11px] text-gray-400">Direct Code PRs &amp; Certification</p>
                          </div>
                        </div>
                        <ShieldCheck size={20} className="text-[#50a2ff]" />
                      </div>

                      <ul className="space-y-3 text-xs text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-[#50a2ff] font-bold">1.</span>
                          <span>Source Code PRs &amp; Semantic HTML/ARIA Refactoring</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#50a2ff] font-bold">2.</span>
                          <span>Complete Assistive Tech Validation (NVDA/JAWS/VoiceOver)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#50a2ff] font-bold">3.</span>
                          <span>Official Signed Letter of Conformance &amp; VPAT/ACR Document</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#50a2ff] font-bold">4.</span>
                          <span>Automated CI/CD Accessibility Regression Pipeline</span>
                        </li>
                      </ul>

                      <button
                        type="button"
                        onClick={() => router.push("/contact-us")}
                        className="w-full py-3.5 px-4 bg-[#155dfc] hover:bg-[#50a2ff] hover:text-[#030712] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <span>Remediate For {current.name} Compliance</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </section>

        {/* 6 REMEDIATION CAPABILITIES */}
        <section className="mb-28">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030712] border border-[#155dfc]/30 mb-4 font-bold">
              <Zap size={14} className="text-[#50a2ff]" />
              <span className="text-[#50a2ff] text-xs font-bold uppercase tracking-[0.2em]">
                Code Remediation Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Full-Stack <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Accessibility Engineering</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {remediationServices.map((srv, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-[#030712] border border-white/[0.08] p-7 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-[#50a2ff]/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />
                <div className="absolute -top-20 -right-20 w-44 h-44 bg-gradient-to-b from-[#155dfc]/20 via-[#50a2ff]/10 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#155dfc]/15 border border-[#155dfc]/30 flex items-center justify-center text-[#50a2ff] group-hover:scale-110 group-hover:text-white transition-all">
                      <srv.icon size={22} />
                    </div>
                    <span className="text-2xl font-black text-white/20 group-hover:text-[#50a2ff]/50 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#50a2ff] transition-colors leading-snug">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed font-normal">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center gap-2 text-xs font-semibold text-gray-400 group-hover:text-[#50a2ff] transition-colors relative z-10">
                  <CheckCircle2 size={14} className="text-[#50a2ff]" />
                  <span>Hands-On Source Code Fixes</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4-PHASE REMEDIATION LIFECYCLE */}
        <section className="mb-28 p-8 sm:p-12 rounded-3xl bg-[#030712] border border-white/[0.08] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
          <div className="max-w-4xl mb-12 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#50a2ff] block mb-2">
              Engineering Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our 4-Phase Code Remediation Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mt-2 font-normal">
              How our accessibility engineering squad systematically eliminates all non-compliant barriers and delivers certified software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <div className="p-6 rounded-2xl bg-[#030712] border border-white/[0.08] hover:border-[#50a2ff]/40 shadow-xl transition-all">
              <span className="text-xs font-bold text-[#50a2ff] uppercase tracking-wider block mb-2">Phase 01</span>
              <h4 className="text-base font-bold text-white mb-2">Violation Discovery</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-normal">
                Automated scanning and 100% manual screen reader testing to catalog all code violations and DOM issues.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#030712] border border-white/[0.08] hover:border-[#50a2ff]/40 shadow-xl transition-all">
              <span className="text-xs font-bold text-[#50a2ff] uppercase tracking-wider block mb-2">Phase 02</span>
              <h4 className="text-base font-bold text-white mb-2">Sprint Architecture</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-normal">
                Formulating a prioritized code fix roadmap with component-by-component PR assignments and VPAT baseline.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#030712] border border-white/[0.08] hover:border-[#50a2ff]/40 shadow-xl transition-all">
              <span className="text-xs font-bold text-[#50a2ff] uppercase tracking-wider block mb-2">Phase 03</span>
              <h4 className="text-base font-bold text-white mb-2">Hands-On Code Fixes</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-normal">
                Direct source code PRs: ARIA attributes, semantic HTML restructuring, keyboard traps, and contrast enhancements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#030712] border border-white/[0.08] hover:border-[#50a2ff]/40 shadow-xl transition-all">
              <span className="text-xs font-bold text-[#50a2ff] uppercase tracking-wider block mb-2">Phase 04</span>
              <h4 className="text-base font-bold text-white mb-2">Certification &amp; CI/CD</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-normal">
                Delivering signed Letter of Conformance, final VPAT report, and setting up automated regression CI tests.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="mb-28 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
              Frequently Asked <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Remediation Questions</span>
            </h2>
            <p className="text-sm text-gray-400">Everything you need to know about code remediation, timelines, and certified attestation.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#030712] border border-white/[0.08] shadow-xl overflow-hidden group"
                >
                  <div className="p-5 sm:p-6 relative">
                    {isOpen && (
                      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent" />
                    )}
                    <button
                      type="button"
                      id={`a11y-faq-btn-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`a11y-faq-panel-${index}`}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex justify-between items-center text-left gap-4 group focus:outline-none cursor-pointer"
                    >
                      <span className={`text-base font-bold transition-colors ${isOpen ? "text-[#50a2ff]" : "text-white group-hover:text-[#50a2ff]"}`}>
                        {faq.q}
                      </span>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "bg-[#155dfc]/20 text-[#50a2ff] rotate-180 border border-[#155dfc]/40" : "bg-white/[0.05] text-gray-400 border border-white/[0.08]"}`}>
                        <ChevronDown size={18} />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          id={`a11y-faq-panel-${index}`}
                          role="region"
                          aria-labelledby={`a11y-faq-btn-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-gray-400 leading-relaxed pt-4 mt-3 border-t border-white/[0.08] font-normal">
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

        {/* BOTTOM CTA BANNER */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#030712] border border-white/[0.08] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
          <div className="space-y-2 text-center lg:text-left relative z-10">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">Achieve 100% Code-Level Compliance</h3>
            <p className="text-sm text-gray-400 max-w-xl font-normal">
              Book a consultation with our certified accessibility engineers to review your codebase and receive a milestone remediation proposal.
            </p>
          </div>
          <div className="relative z-10">
            <NoiseButton
              onClick={() => router.push("/contact-us")}
              className="w-full sm:w-auto"
            >
              <span>Request Remediation Scope</span>
              <ArrowRight size={17} className="text-[#50a2ff]" />
            </NoiseButton>
          </div>
        </section>

      </div>
    </div>
  );
}
