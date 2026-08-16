'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Cpu, ShoppingCart, Smartphone, Brain, LineChart, Bot, Settings, Palette, ShieldCheck, ArrowRight, CheckCircle2, Sparkles, Layers, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ServicesPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'compliance', label: 'Accessibility Remediation' },
    { id: 'ai', label: 'AI & Data Intelligence' },
    { id: 'web', label: 'Web & SaaS' },
    { id: 'mobile', label: 'Mobile & Apps' },
    { id: 'growth', label: 'Design & Growth' },
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
    <section id="services" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#030712] overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 font-bold"
          >
            <Zap size={14} className="text-[#00f5a0]" />
            <span className="text-[#00f5a0] text-xs tracking-[0.2em] uppercase font-bold">
              Comprehensive Service Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
          >
            Transform Your Vision with <br className="hidden sm:inline" />
            <span className="text-gradient-emerald">Specialized Digital Engineering</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed"
          >
            Deploy elite multidisciplinary engineering squads to accelerate your roadmap, optimize infrastructure, and outpace the competition.
          </motion.p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#00f5a0] via-[#00d9f5] to-[#6366f1] text-black shadow-lg font-bold shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Services Grid */}
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
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative rounded-3xl p-px overflow-hidden flex flex-col"
              >
                {/* Glow Border Effect */}
                <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 bg-gradient-to-r from-[#00f5a0] via-[#00d9f5] to-[#6366f1] ${hoveredCard === service.id ? 'opacity-100' : 'opacity-20'}`} />

                {/* Card Interior (100% Solid & High Contrast) */}
                <div className="relative flex-1 bg-[#090d16] rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group-hover:bg-[#0c1220] border border-white/10">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[#00f5a0] group-hover:scale-110 group-hover:bg-[#00f5a0] group-hover:text-black transition-all duration-300">
                        <service.icon size={24} />
                      </div>
                      <span className="text-xs font-black px-3 py-1 rounded-full bg-white/10 text-white border border-white/20">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#00f5a0] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-200 leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    {/* Key Deliverables Bullet Points */}
                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-black text-[#00f5a0] uppercase tracking-wider">Key Capabilities:</p>
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-100 font-medium">
                          <CheckCircle2 size={14} className="text-[#00f5a0] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => router.push(service.route)}
                      className="inline-flex items-center gap-2 text-xs font-black text-[#00f5a0] hover:text-white transition-colors group-hover:translate-x-1 duration-200 py-1"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
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
          className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-[#090d16] to-cyan-950/40 border border-emerald-500/20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Need a Custom Dedicated Squad?</h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal">
              Hire vetted React, Node.js, AI/ML, and Mobile engineers with rapid onboarding and flexible engagement models.
            </p>
          </div>
          <button
            onClick={() => router.push('/contact-us')}
            className="px-8 py-4 bg-[#00f5a0] hover:bg-[#00d9f5] text-black font-bold text-base rounded-2xl shrink-0 transition-all duration-300 shadow-[0_0_30px_rgba(0,245,160,0.3)] hover:scale-105 active:scale-95"
          >
            Hire Dedicated Engineers →
          </button>
        </motion.div>

      </div>
    </section>
  );
}