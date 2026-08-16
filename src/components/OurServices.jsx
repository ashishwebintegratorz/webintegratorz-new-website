'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Cpu, ShoppingCart, Smartphone, Brain, LineChart, Bot, Palette, ShieldCheck, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ServicesPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'compliance', label: 'Accessibility & Compliance' },
    { id: 'ai', label: 'AI & Data Intelligence' },
    { id: 'web', label: 'Web & Cloud SaaS' },
    { id: 'mobile', label: 'Mobile Engineering' },
    { id: 'growth', label: 'Design & Systems' },
  ];

  const services = [
    {
      id: 1,
      category: 'compliance',
      icon: ShieldCheck,
      title: 'Digital Accessibility Code Remediation',
      description: 'Hands-on source code remediation and certified compliance engineering for WCAG 2.2, ADA Title III, EAA (EN 301 549), Section 508 VPAT, AODA, GIGW 3.0, and BIS IS 17802.',
      deliverables: ['WCAG 2.2 AA/AAA Source Code Fixes', 'ADA Title III & EAA Code Refactoring', 'Section 508 VPAT & ACR Attestation', 'GIGW 3.0 & BIS IS 17802 Remediation'],
      route: '/services/accessibility-compliance'
    },
    {
      id: 2,
      category: 'web',
      icon: Globe,
      title: 'Full-Stack Web Development',
      description: 'Architecting high-performance, scalable web platforms using Next.js 16, React 19, Node.js, and TypeScript. Optimized for extreme speed, search visibility, and maximum conversion rates.',
      deliverables: ['Custom Next.js / React Apps', 'Microservices & API Gateways', 'Headless CMS Architecture', 'SEO & Core Web Vitals Optimization'],
      route: '/services/web-development'
    },
    {
      id: 3,
      category: 'web',
      icon: Cpu,
      title: 'Custom SaaS & Cloud Architecture',
      description: 'End-to-end multi-tenant SaaS engineering designed for high availability, enterprise security, automated tenant isolation, and seamless third-party billing integrations.',
      deliverables: ['Multi-Tenant SaaS Backends', 'AWS & Cloud Deployment', 'Subscription & Stripe Integration', 'Enterprise RBAC & Auth'],
      route: '/services/cms-solution'
    },
    {
      id: 4,
      category: 'ai',
      icon: Brain,
      title: 'Generative AI & LLM Engineering',
      description: 'Empower your enterprise with custom large language models, proprietary domain fine-tuning, retrieval-augmented generation (RAG), and private vector databases.',
      deliverables: ['Custom LLM Fine-Tuning', 'Enterprise RAG Pipelines', 'OpenAI / Anthropic Integrations', 'Vector Search (Pinecone/pgvector)'],
      route: '/services/ai-integration/generative-ai-development'
    },
    {
      id: 5,
      category: 'ai',
      icon: Bot,
      title: 'Autonomous AI Agents & Workflows',
      description: 'Deploy multi-agent autonomous systems that execute complex operational workflows, customer interaction pipelines, and predictive decision-making without manual intervention.',
      deliverables: ['Autonomous Agent Systems', '24/7 Intelligent Support Bots', 'LangChain / CrewAI Integration', 'Workflow Process Automation'],
      route: '/services/ai-integration/agent-development'
    },
    {
      id: 6,
      category: 'mobile',
      icon: Smartphone,
      title: 'Cross-Platform Mobile Apps',
      description: 'Native-feel, high-fidelity iOS and Android applications engineered using Flutter and React Native. Smooth 60fps animations, offline data syncing, and unified codebase efficiency.',
      deliverables: ['Flutter & React Native Apps', 'Native iOS & Android Builds', 'Offline-First Sync Engine', 'App Store & Play Store Deployment'],
      route: '/services/mobile-development'
    },
    {
      id: 7,
      category: 'growth',
      icon: Palette,
      title: 'UI/UX & Product Design Systems',
      description: 'Human-centric UI/UX design that elevates brand authority and user engagement. From user journey mapping to comprehensive design systems and interactive Figma prototypes.',
      deliverables: ['Design Systems & Component Kits', 'Interactive Prototypes', 'Conversion Rate Optimization (CRO)', 'Accessibility & Usability Audits'],
      route: '/services/ui-ux'
    },
    {
      id: 8,
      category: 'growth',
      icon: LineChart,
      title: 'SEO & Performance Marketing',
      description: 'Data-driven technical SEO, search engine dominance, and high-impact digital marketing strategies that attract qualified enterprise leads and scale revenue.',
      deliverables: ['Technical & Programmatic SEO', 'Search Visibility Strategies', 'Content Performance Engines', 'Full-Funnel Analytics & Tracking'],
      route: '/services/digital-marketing'
    },
    {
      id: 9,
      category: 'web',
      icon: ShoppingCart,
      title: 'Enterprise E-Commerce Systems',
      description: 'High-converting custom e-commerce and headless storefronts built for scale. Real-time inventory synchronization, instant checkout, and global payment compliance.',
      deliverables: ['Headless Shopify / MedusaJS', 'Custom Payment Gateways', 'Omnichannel Inventory Sync', 'Cart Abandonment Engines'],
      route: '/services/web-development'
    },
    {
      id: 10,
      category: 'web',
      icon: ShieldCheck,
      title: 'Enterprise Cyber Security & Compliance',
      description: 'Rigorous application security audits, penetration testing, compliance architecture, and bank-grade data encryption to keep your digital assets impenetrable.',
      deliverables: ['Vulnerability & Pentest Audits', 'OWASP Security Hardening', 'End-to-End Data Encryption', 'Compliance Prep (SOC2 / GDPR)'],
      route: '/services/web-development'
    },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden content-auto">
      <div className="relative max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-4"
          >
            <Zap size={13} className="text-[#635BFF]" />
            <span className="text-[#635BFF] text-xs font-bold tracking-wider uppercase">
              Service Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight leading-[1.15]"
          >
            Specialized Digital &amp; <span className="text-[#635BFF]">AI Engineering</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-[#475569] max-w-2xl font-normal leading-relaxed"
          >
            Deploy elite multidisciplinary engineering squads to accelerate your roadmap, optimize infrastructure, and outpace the competition.
          </motion.p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-8 p-1.5 rounded-xl bg-slate-100/90 border border-slate-200/80">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-[#0A2540] shadow-sm font-black'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Services Grid - Stripe Clean Cards */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl bg-white border border-slate-200 hover:border-slate-300 p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_15px_35px_-5px_rgba(15,23,42,0.08)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#635BFF] group-hover:bg-[#635BFF] group-hover:text-white transition-all duration-300">
                      <service.icon size={22} />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0A2540] mb-2.5 group-hover:text-[#635BFF] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold text-[#0A2540] uppercase tracking-wider">Key Capabilities:</p>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 size={13} className="text-[#635BFF] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => router.push(service.route)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#635BFF] hover:underline transition-colors py-1 cursor-pointer"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global Consult Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#0A2540]">Need a Dedicated Engineering Squad?</h3>
            <p className="text-sm sm:text-base text-[#475569] max-w-xl font-normal">
              Hire vetted React, Node.js, AI/ML, and Mobile engineers with rapid onboarding and flexible engagement models.
            </p>
          </div>
          <button
            type="button"
            onClick={() => router.push('/contact-us')}
            className="px-7 py-3.5 bg-[#0A2540] hover:bg-[#635BFF] text-white font-bold text-sm rounded-xl shrink-0 transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
          >
            Hire Dedicated Engineers →
          </button>
        </motion.div>

      </div>
    </section>
  );
}