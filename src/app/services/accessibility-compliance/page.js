'use client';

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  Globe2, 
  Code2, 
  Scale, 
  Layers, 
  Zap, 
  Award, 
  HelpCircle, 
  ChevronDown, 
  Terminal, 
  Lock,
  ArrowUpRight,
  Cpu,
  Wrench
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

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
      summary: 'Complete technical code remediation for Indian government portals, PSUs, and public digital systems to pass mandatory STQC certification testing.',
      keyPoints: [
        'GIGW 3.0 Source Code Refactoring & Optimization',
        'STQC (Standardisation Testing & Quality Certification) Clearance Fixes',
        'Bilingual & Multi-Language Accessibility DOM Structure Fixes',
        'Indian Digital Personal Data Protection (DPDP) Alignment',
        'Government Open Data & Security Benchmark Compliance'
      ]
    },
    {
      id: 'is17802',
      name: 'BIS IS 17802',
      fullname: 'Bureau of Indian Standards IS 17802 (Part 1 & 2) Technical Remediation',
      jurisdiction: 'Bureau of Indian Standards (BIS) / India',
      tag: 'National ICT Standard',
      summary: 'Engineered code remediation for software, mobile apps, and ICT digital systems in accordance with official BIS IS 17802 national accessibility standards.',
      keyPoints: [
        'IS 17802 (Part 1): Universal Design Code Structuring',
        'IS 17802 (Part 2): ICT Technical Accessibility Remediation',
        'Enterprise Web Portals, Cloud Apps & Kiosk Interface Fixes',
        'Harmonized with Global ISO/IEC & W3C Specifications',
        'Official BIS Conformance Reporting for Indian Enterprise'
      ]
    }
  ];

  const remediationServices = [
    {
      icon: Code2,
      title: "Direct Source Code Remediation",
      desc: "Our engineers work directly in your React, Next.js, Vue, Angular, or native mobile repositories to fix semantic HTML, ARIA landmarks, keyboard focus, and color contrast violations."
    },
    {
      icon: Wrench,
      title: "UI Component & Design Token Refactoring",
      desc: "Upgrading complex design systems, interactive dropdowns, modal dialogs, date pickers, and dynamic forms with accessible WAI-ARIA design patterns."
    },
    {
      icon: FileText,
      title: "VPAT 2.5 & ACR Authoring",
      desc: "Generating accurate, officially certified Voluntary Product Accessibility Templates (VPATs) and Accessibility Conformance Reports (ACRs) based on verified code remediation."
    },
    {
      icon: Scale,
      title: "ADA Lawsuit Risk Neutralization",
      desc: "Immediate emergency triage for ADA demand letters, high-priority checkout funnel remediation, and formal third-party Letter of Conformance for legal counsel."
    },
    {
      icon: ShieldCheck,
      title: "GIGW 3.0 & STQC Remediation",
      desc: "End-to-end technical remediation and verification for Indian government portals and public sector enterprises to secure official STQC certification clearance."
    },
    {
      icon: Award,
      title: "Automated CI/CD Accessibility Guardrails",
      desc: "Integrating automated axe-core & pa11y regression testing into your GitHub Actions / GitLab pipelines to permanently prevent new accessibility bugs from reaching production."
    }
  ];

  const faqs = [
    {
      q: "What does digital accessibility remediation involve?",
      a: "Remediation is the hands-on engineering work of fixing source code, updating HTML markup, adding proper ARIA attributes, fixing keyboard navigation, correcting color contrast, and refactoring dynamic UI components so that your software achieves 100% compliance with accessibility standards."
    },
    {
      q: "Why is code remediation better than using an accessibility overlay widget?",
      a: "Accessibility overlays (plugins/widgets) do not fix underlying source code, fail screen reader tests, and are frequently rejected by courts in ADA lawsuits. Direct source code remediation provides permanent, genuine accessibility and 100% legal compliance."
    },
    {
      q: "How do you remediate for the European Accessibility Act (EAA)?",
      a: "We refactor your web and mobile applications to meet EN 301 549 (WCAG 2.1 Level AA), optimize e-commerce checkout flows, provide accessible document generation (PDF/UA), and issue a formal Conformance Attestation before the EU statutory enforcement deadline."
    },
    {
      q: "Can you provide a signed Letter of Conformance after remediation?",
      a: "Yes. Following hands-on code remediation and validation with screen readers and automated test suites, our certified CPACC/WAS accessibility engineers issue a formal third-party Statement of Accessibility and Letter of Conformance."
    },
    {
      q: "How fast can you remediate critical ADA or WCAG violations?",
      a: "For emergency lawsuit defense or pending enterprise RFPs, our rapid-response remediation squad can fix critical blocking violations (navigation traps, checkout flows, form accessibility) within 7 to 10 business days."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-24 sm:pt-28 pb-24 overflow-hidden relative selection:bg-[#00f5a0] selection:text-black">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

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
            
            {/* Standards Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-lg"
            >
              <Wrench size={14} className="text-[#00f5a0]" />
              <span className="text-xs font-bold text-[#00f5a0] uppercase tracking-widest">
                Hands-On Code Remediation &amp; Compliance Engineering
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
            >
              Digital Accessibility <br />
              <span className="text-gradient-emerald">Remediation &amp; Source Code Engineering</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl font-medium text-slate-200 leading-snug"
            >
              We don&apos;t just audit—we directly fix and refactor your codebase for WCAG 2.2, ADA Title III, EAA (EN 301 549), Section 508, AODA, GIGW 3.0 &amp; BIS IS 17802.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal"
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
              <button
                onClick={() => router.push("/contact-us")}
                className="px-8 py-4 bg-gradient-to-r from-[#00f5a0] via-[#00d9f5] to-[#00f5a0] text-black font-bold text-base rounded-2xl shadow-[0_0_30px_rgba(0,245,160,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Start Code Remediation</span>
                <ArrowRight size={17} />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("standards-matrix");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] rounded-2xl font-semibold text-white text-base transition-all"
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
              className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#00f5a0]">Remediation SLA</p>
                  <h3 className="text-lg font-bold text-white">Guaranteed Code Fixes</h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00f5a0]">
                  <Code2 size={18} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="text-2xl font-black text-white text-gradient-emerald">100%</p>
                  <p className="text-xs font-bold text-white mt-1">Code Fix Guarantee</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Zero leftover barriers</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="text-2xl font-black text-white text-gradient-emerald">0 Overlays</p>
                  <p className="text-xs font-bold text-white mt-1">Native Code Only</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Permanent resolution</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="text-2xl font-black text-white text-gradient-emerald">VPAT 2.5</p>
                  <p className="text-xs font-bold text-white mt-1">Certified Reports</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Section 508 ready</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="text-2xl font-black text-white text-gradient-emerald">Signed</p>
                  <p className="text-xs font-bold text-white mt-1">Letter of Conformance</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">For legal &amp; procurement</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 flex items-center gap-3">
                <ShieldCheck size={24} className="text-[#00f5a0] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Full IP &amp; Code Quality Guarantee</p>
                  <p className="text-[11px] text-slate-300">Clean, maintainable, production-ready code with PR reviews.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 7 REGULATORY STANDARDS REMEDIATION MATRIX */}
        <section id="standards-matrix" className="mb-28">
          <div className="flex flex-col items-center text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 font-bold">
              <Globe2 size={14} className="text-[#00f5a0]" />
              <span className="text-[#00f5a0] text-xs font-bold uppercase tracking-[0.2em]">
                Standards &amp; Frameworks We Remediate
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Direct Code Remediation for <span className="text-gradient-emerald">All 7 Major Standards</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl font-normal">
              Select a standard below to inspect our code remediation scope, technical deliverables, and certified attestation.
            </p>

            {/* Standard Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              {standards.map((std) => (
                <button
                  key={std.id}
                  onClick={() => setActiveStandard(std.id)}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeStandard === std.id
                      ? "bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] text-black shadow-lg shadow-emerald-500/20"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
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
                className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#090d16] via-[#0b1222] to-[#090d16] border border-white/[0.12] shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00f5a0] text-xs font-bold uppercase tracking-widest">
                        {current.tag}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{current.jurisdiction}</span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                      {current.fullname}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      {current.summary}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Engineering Remediation Scope:</p>
                      {current.keyPoints.map((pt, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                          <CheckCircle2 size={16} className="text-[#00f5a0] shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="p-6 sm:p-8 rounded-3xl bg-[#030712]/90 border border-white/[0.08] backdrop-blur-xl space-y-6">
                      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00f5a0]">
                            <Wrench size={20} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white uppercase">{current.name} Remediation</p>
                            <p className="text-[11px] text-slate-400">Direct Code PRs &amp; Certification</p>
                          </div>
                        </div>
                        <ShieldCheck size={20} className="text-[#00f5a0]" />
                      </div>

                      <ul className="space-y-3 text-xs text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-[#00f5a0] font-bold">1.</span>
                          <span>Source Code PRs &amp; Semantic HTML/ARIA Refactoring</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00f5a0] font-bold">2.</span>
                          <span>Complete Assistive Tech Validation (NVDA/JAWS/VoiceOver)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00f5a0] font-bold">3.</span>
                          <span>Official Signed Letter of Conformance &amp; VPAT/ACR Document</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00f5a0] font-bold">4.</span>
                          <span>Automated CI/CD Accessibility Regression Pipeline</span>
                        </li>
                      </ul>

                      <button
                        onClick={() => router.push("/contact-us")}
                        className="w-full py-4 rounded-xl bg-[#00f5a0] hover:bg-[#00d9f5] text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(0,245,160,0.3)] flex items-center justify-center gap-2"
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 font-bold">
              <Zap size={14} className="text-[#00f5a0]" />
              <span className="text-[#00f5a0] text-xs font-bold uppercase tracking-[0.2em]">
                Code Remediation Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Full-Stack <span className="text-gradient-emerald">Accessibility Engineering</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {remediationServices.map((srv, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl p-px overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#00f5a0]/30 via-white/5 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex-1 bg-[#090d16]/95 backdrop-blur-xl rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group-hover:bg-[#0c1220] border border-white/[0.06]">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00f5a0] group-hover:bg-[#00f5a0] group-hover:text-black transition-all">
                        <srv.icon size={22} />
                      </div>
                      <span className="text-2xl font-black text-white/10 group-hover:text-[#00f5a0]/30 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00f5a0] transition-colors leading-snug">
                      {srv.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-[#00f5a0] transition-colors">
                    <CheckCircle2 size={14} className="text-[#00f5a0]" />
                    <span>Hands-On Source Code Fixes</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4-PHASE REMEDIATION LIFECYCLE */}
        <section className="mb-28 p-8 sm:p-12 rounded-3xl bg-[#090d16]/90 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden">
          <div className="max-w-4xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00f5a0] block mb-2">
              Engineering Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our 4-Phase Code Remediation Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 font-normal">
              How our accessibility engineering squad systematically eliminates all non-compliant barriers and delivers certified software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-xs font-bold text-[#00f5a0] uppercase tracking-wider block mb-2">Phase 01</span>
              <h4 className="text-base font-bold text-white mb-2">Violation Discovery</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Automated scanning and 100% manual screen reader testing to catalog all code violations and DOM issues.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-xs font-bold text-[#00f5a0] uppercase tracking-wider block mb-2">Phase 02</span>
              <h4 className="text-base font-bold text-white mb-2">Sprint Architecture</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Formulating a prioritized code fix roadmap with component-by-component PR assignments and VPAT baseline.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-xs font-bold text-[#00f5a0] uppercase tracking-wider block mb-2">Phase 03</span>
              <h4 className="text-base font-bold text-white mb-2">Hands-On Code Fixes</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct source code PRs: ARIA attributes, semantic HTML restructuring, keyboard traps, and contrast enhancements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-xs font-bold text-[#00f5a0] uppercase tracking-wider block mb-2">Phase 04</span>
              <h4 className="text-base font-bold text-white mb-2">Certification &amp; CI/CD</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Delivering signed Letter of Conformance, final VPAT report, and setting up automated regression CI tests.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="mb-28 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
              Frequently Asked <span className="text-gradient-emerald">Remediation Questions</span>
            </h2>
            <p className="text-sm text-slate-400">Everything you need to know about code remediation, timelines, and certified attestation.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
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
                      type="button"
                      id={`a11y-faq-btn-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`a11y-faq-panel-${index}`}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex justify-between items-center text-left gap-4 group focus:outline-none"
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
                          id={`a11y-faq-panel-${index}`}
                          role="region"
                          aria-labelledby={`a11y-faq-btn-${index}`}
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

        {/* BOTTOM CTA BANNER */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-[#090d16] to-cyan-950/40 border border-emerald-500/20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">Achieve 100% Code-Level Compliance</h3>
            <p className="text-sm text-slate-300 max-w-xl font-normal">
              Book a consultation with our certified accessibility engineers to review your codebase and receive a milestone remediation proposal.
            </p>
          </div>
          <button
            onClick={() => router.push("/contact-us")}
            className="px-8 py-4 bg-[#00f5a0] hover:bg-[#00d9f5] text-black font-bold text-base rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(0,245,160,0.4)] shrink-0 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>Request Remediation Scope</span>
            <ArrowRight size={17} />
          </button>
        </section>

      </div>
    </div>
  );
}
