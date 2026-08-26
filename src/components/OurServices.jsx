'use client';

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { 
  Globe, 
  Smartphone, 
  Brain, 
  Cloud, 
  Bot, 
  Layers, 
  Palette, 
  BarChart3, 
  Settings, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Zap,
  ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function OurServices() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'ai', label: 'Generative AI & LLMs' },
    { id: 'web', label: 'Web & SaaS Engineering' },
    { id: 'mobile', label: 'Mobile Apps' },
  ];

  const services = [
    {
      id: 1,
      category: 'web',
      icon: ShieldCheck,
      title: 'Digital Accessibility Code Remediation',
      description: 'Hands-on source code remediation and certified compliance engineering for WCAG 2.2, ADA Title III, EAA (EN 301 549), Section 508 VPAT, AODA, GIGW 3.0, and BIS IS 17802.',
      deliverables: ['WCAG 2.2 AA / AAA Code Fixes', 'Keyboard, Screen Reader & ARIA Audit', 'VPAT / ACR Compliance Certification', 'Continuous CI/CD Accessibility Regression Tests'],
      route: '/services/accessibility-compliance',
    },
    {
      id: 2,
      category: 'web',
      icon: Globe,
      title: 'Full-Stack Web Development',
      description: 'Architecting high-performance, scalable web platforms using Next.js 16, React 19, Node.js, and TypeScript. Optimized for extreme speed, search visibility, and maximum conversion rates.',
      deliverables: ['Next.js 16 App Router & SSR Architecture', 'Enterprise Headless CMS (Strapi / Sanity)', 'Sub-Second Core Web Vitals Optimization', 'Scalable Microservices & REST/GraphQL APIs'],
      route: '/services/web-development',
    },
    {
      id: 3,
      category: 'web',
      icon: Cloud,
      title: 'Custom SaaS & Cloud Architecture',
      description: 'End-to-end multi-tenant SaaS engineering designed for high availability, enterprise security, automated tenant isolation, and seamless third-party billing integrations.',
      deliverables: ['Multi-Tenant SaaS Backends', 'AWS & Cloud Deployment', 'Subscription & Stripe Integration', 'Enterprise RBAC & Auth'],
      route: '/services/cms-solution',
    },
    {
      id: 4,
      category: 'ai',
      icon: Brain,
      title: 'Generative AI & LLM Engineering',
      description: 'Empower your enterprise with custom large language models, proprietary domain fine-tuning, retrieval-augmented generation (RAG), and private vector databases.',
      deliverables: ['Custom LLM Fine-Tuning', 'Enterprise RAG Pipelines', 'OpenAI / Anthropic Integrations', 'Vector Search (Pinecone/pgvector)'],
      route: '/services/ai-integration',
    },
    {
      id: 5,
      category: 'ai',
      icon: Bot,
      title: 'Autonomous AI Agents & Workflows',
      description: 'Deploy multi-agent autonomous systems that execute complex operational workflows, customer interaction pipelines, and predictive decision-making without manual intervention.',
      deliverables: ['Autonomous Agent Systems', '24/7 Intelligent Support Bots', 'LangChain / CrewAI Integration', 'Workflow Process Automation'],
      route: '/services/ai-integration',
    },
    {
      id: 6,
      category: 'mobile',
      icon: Smartphone,
      title: 'Cross-Platform Mobile Apps',
      description: 'Ultra-fluid iOS and Android applications developed with Flutter and React Native. Engineered for native 60fps performance, offline persistence, and seamless hardware integration.',
      deliverables: ['iOS & Android App Store Releases', 'Flutter & React Native Codebases', 'Offline-First Local Sync', 'Native Hardware & Biometrics'],
      route: '/services/mobile-development',
    },
    {
      id: 7,
      category: 'web',
      icon: Palette,
      title: 'UI/UX Design Systems & Product Strategy',
      description: 'Conversion-engineered digital design systems, user journey mapping, and interactive prototypes tailored to maximize retention and minimize friction across every screen.',
      deliverables: ['Atomic Design Token Systems', 'Figma Clickable Interactive Prototypes', 'Conversion Rate UX Audits', 'Multi-Device Adaptive Layouts'],
      route: '/services/ui-ux',
    },
    {
      id: 8,
      category: 'web',
      icon: BarChart3,
      title: 'Data Analytics & Technical Growth SEO',
      description: 'Technical search optimization, performance telemetry, server-side tracking, and conversion funnel analytics to scale organic visibility and user acquisition.',
      deliverables: ['Technical SEO & Schema Markup', 'Core Web Vitals Performance Audit', 'Mixpanel / GA4 Funnel Tracking', 'Automated Marketing Pipelines'],
      route: '/services/digital-marketing',
    },
    {
      id: 9,
      category: 'web',
      icon: Settings,
      title: 'Dedicated Offshore Squads & DevOps',
      description: 'Hire agile squads of full-stack engineers, QA leads, and cloud architects working directly in your timezone with transparent sprint governance and zero management overhead.',
      deliverables: ['Dedicated Timezone-Aligned Squads', 'Automated CI/CD & Terraform', 'Zero-Downtime Releases', '100% IP Transfer & NDAs'],
      route: '/contact-us',
    },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#030712] overflow-hidden border-t border-gray-200 dark:border-white/[0.08]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#155dfc]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#50a2ff]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-[#030712] border border-blue-200 dark:border-[#155dfc]/40 mb-6 font-bold shadow-sm"
          >
            <Zap size={14} className="text-blue-600 dark:text-[#50a2ff]" />
            <span className="text-blue-800 dark:text-sky-300 text-xs tracking-[0.2em] uppercase font-bold">
              Comprehensive Service Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.15]"
          >
            Transform Your Vision with <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#155dfc] to-[#2563eb] dark:from-[#50a2ff] dark:to-[#93c5fd] bg-clip-text text-transparent">Specialized Digital Engineering</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-base sm:text-lg text-slate-800 dark:text-gray-200 max-w-2xl font-normal leading-relaxed"
          >
            Deploy elite multidisciplinary engineering squads to accelerate your roadmap, optimize infrastructure, and outpace the competition.
          </motion.p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10 p-2 rounded-2xl bg-gray-100 dark:bg-[#030712] border border-gray-200 dark:border-white/[0.08] shadow-lg">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-6 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#155dfc] text-white shadow-md'
                    : 'text-slate-900 dark:text-slate-100 hover:text-[#155dfc] dark:hover:text-white hover:bg-white dark:hover:bg-white/[0.05]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Aceternity Services Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between bg-gray-50/90 dark:bg-[#030712] border border-gray-200 dark:border-white/[0.08] shadow-xl hover:border-blue-500/40 dark:hover:border-[#50a2ff]/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* Aceternity Top Shine Line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                {/* Subtle Ambient Glow */}
                <div className="absolute -top-20 -right-20 w-44 h-44 bg-gradient-to-b from-[#155dfc]/20 via-[#50a2ff]/10 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl border border-blue-200 dark:border-[#155dfc]/30 bg-blue-50 dark:bg-[#155dfc]/15 text-[#155dfc] dark:text-[#50a2ff] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#155dfc] group-hover:text-white transition-all duration-300">
                      <service.icon size={24} />
                    </div>
                    <span className="text-xs font-black px-3 py-1 rounded-full border border-blue-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.04] text-blue-700 dark:text-sky-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-snug tracking-tight group-hover:text-[#155dfc] dark:group-hover:text-[#50a2ff] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-700 dark:text-gray-200 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-xs font-bold text-blue-800 dark:text-sky-300 uppercase tracking-wider">Key Capabilities:</p>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-900 dark:text-slate-100 font-medium">
                        <CheckCircle2 size={14} className="text-[#155dfc] dark:text-[#50a2ff] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA Button */}
                <div className="pt-5 border-t border-gray-200 dark:border-white/[0.08] flex items-center justify-between relative z-10">
                  <button
                    type="button"
                    onClick={() => router.push(service.route)}
                    className="w-full py-3.5 px-4 min-h-[48px] rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 bg-[#155dfc] hover:bg-[#2563eb] text-white shadow-md transition-all group-hover:scale-[1.02] active:scale-98 cursor-pointer"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global Consult Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-gray-50 dark:bg-[#030712] border border-gray-200 dark:border-white/[0.08] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
          <div className="space-y-2 text-center md:text-left relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Need a Custom Dedicated Squad?</h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 max-w-xl font-normal">
              Hire vetted React, Node.js, AI/ML, and Mobile engineers with rapid onboarding and flexible engagement models.
            </p>
          </div>
          <button
            type="button"
            onClick={() => router.push('/contact-us')}
            className="relative z-10 px-8 py-4 min-h-[48px] bg-[#155dfc] hover:bg-[#2563eb] text-white font-bold text-base rounded-2xl shrink-0 transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          >
            Hire Dedicated Engineers →
          </button>
        </motion.div>

      </div>
    </section>
  );
}