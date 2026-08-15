'use client';

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Cpu, 
  Layers, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Database, 
  Code2, 
  Sparkles, 
  Server, 
  Smartphone,
  ArrowUpRight,
  TrendingUp
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function WebDevelopmentPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('fullstack');

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Web Development', href: '/services/web-development' }
  ];

  const categories = [
    { id: 'fullstack', label: 'MERN & Full-Stack' },
    { id: 'frontend', label: 'Modern Frontend & SSR' },
    { id: 'backend', label: 'APIs & Microservices' },
    { id: 'saas', label: 'SaaS & Enterprise Platforms' }
  ];

  const stackDetails = {
    fullstack: [
      { name: "Next.js 16 / React 19", role: "SSR & Streaming UI", tag: "Frontend Engine" },
      { name: "Node.js & Express / NestJS", role: "High-Throughput Backends", tag: "API Layer" },
      { name: "PostgreSQL & MongoDB", role: "Relational & Document DB", tag: "Data Storage" },
      { name: "Redis & AWS ElastiCache", role: "Sub-millisecond In-Memory Caching", tag: "State & Cache" },
      { name: "Tailwind CSS & Framer Motion", role: "Design Systems & 60fps Motion", tag: "UI Layer" },
      { name: "Docker & Kubernetes", role: "Zero-Downtime Microservices", tag: "DevOps" }
    ],
    frontend: [
      { name: "React 19 Server Components", role: "Zero-Bundle-Size Rendering", tag: "Performance" },
      { name: "TypeScript 5+", role: "Type-Safe Architecture", tag: "Reliability" },
      { name: "Tailwind CSS 3/4", role: "Utility-First Design Tokens", tag: "Styling" },
      { name: "Web Vitals Optimization", role: "95+ Google Lighthouse Score", tag: "Speed" }
    ],
    backend: [
      { name: "FastAPI & Node.js", role: "Asynchronous Microservices", tag: "Core API" },
      { name: "GraphQL & REST APIs", role: "Flexible Client Ingestion", tag: "Protocols" },
      { name: "Kafka & RabbitMQ", role: "Event-Driven Message Queues", tag: "Streaming" },
      { name: "OWASP & JWT/OAuth", role: "Bank-Grade Security & Auth", tag: "Security" }
    ],
    saas: [
      { name: "Multi-Tenant Isolation", role: "Row-Level & Schema Security", tag: "Multi-Tenancy" },
      { name: "Stripe Billing & Invoicing", role: "Usage-based & Tiered Subscriptions", tag: "Monetization" },
      { name: "RBAC & Team Workspaces", role: "Enterprise Permission Hierarchies", tag: "Access Control" },
      { name: "Real-Time Telemetry", role: "Datadog, Sentry & CloudWatch", tag: "Observability" }
    ]
  };

  const services = [
    {
      icon: Globe,
      title: "Custom Full-Stack Web Applications",
      description: "From scalable consumer platforms to complex internal operating systems, we build high-concurrency web apps with Next.js, Node.js, and TypeScript.",
      features: ["Next.js App Router & SSR", "Distributed Microservices", "Real-Time WebSockets Sync", "Automated CI/CD Deployment"]
    },
    {
      icon: Cpu,
      title: "SaaS Platform Engineering",
      description: "End-to-end multi-tenant SaaS architecture with automated customer tenant provisioning, Stripe billing integration, and role-based permissions.",
      features: ["Multi-Tenant DB Partitioning", "Stripe Metered Subscriptions", "Team RBAC & Single Sign-On", "Zero-Downtime Releases"]
    },
    {
      icon: Database,
      title: "High-Throughput Backend & APIs",
      description: "Microservices and REST/GraphQL APIs engineered for millions of concurrent requests, low-latency database queries, and fault-tolerant queue handling.",
      features: ["PostgreSQL & MongoDB Design", "Redis Semantic Caching", "Kafka Event Pipelines", "OWASP Security Auditing"]
    },
    {
      icon: Sparkles,
      title: "Headless E-Commerce & Storefronts",
      description: "Blazing fast headless e-commerce built on Next.js, MedusaJS, and Shopify Plus, engineered for instant checkout and maximum conversion rates.",
      features: ["Headless CMS / Storefront", "Sub-second Page Speeds", "Dynamic Cart Surge Engines", "Omnichannel Payment Gateways"]
    }
  ];

  const projects = [
    {
      title: 'Rent Buddy Platform',
      category: 'Marketplace & SaaS',
      description: 'Peer-to-peer rental ecosystem handling 100k+ active listings with real-time availability sync and escrow payments.',
      metric: '100k+ Listings',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe']
    },
    {
      title: 'Protech HPL Industrial Suite',
      category: 'Enterprise ERP',
      description: 'Mission-critical manufacturing floor control system managing warehouse inventory, batch QA, and shipment scheduling.',
      metric: '3.2x Ops Output',
      tech: ['React', 'Express', 'MongoDB', 'AWS']
    },
    {
      title: 'Fresh Go Hyperlocal Engine',
      category: 'High-Scale Commerce',
      description: 'Ultra-fast commerce portal with real-time routing, dynamic surge management, and $3.5M GMV processed seamlessly.',
      metric: '$3.5M GMV Processed',
      tech: ['Next.js', 'Redis', 'Node.js', 'Docker']
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-24 sm:pt-28 pb-24 overflow-hidden relative selection:bg-[#00f5a0] selection:text-black">
      
      {/* Ambient Lighting */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Cyber Grid */}
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
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-lg"
            >
              <Sparkles size={14} className="text-[#00f5a0]" />
              <span className="text-xs font-bold text-[#00f5a0] uppercase tracking-widest">
                Full-Stack &amp; MERN Specialists
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
            >
              Engineering Scalable, <br />
              <span className="text-gradient-emerald">High-Throughput Web Platforms</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl"
            >
              We design and construct mission-critical web applications, enterprise SaaS platforms, and distributed microservices engineered with Next.js 16, React 19, Node.js, and cloud-native backends.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                onClick={() => router.push("/contact-us")}
                className="px-8 py-4 bg-gradient-to-r from-[#00f5a0] via-[#00d9f5] to-[#00f5a0] text-black font-bold text-base rounded-2xl shadow-[0_0_30px_rgba(0,245,160,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Request Project Scope</span>
                <ArrowRight size={17} />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("services-capabilities");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] rounded-2xl font-semibold text-white text-base transition-all"
              >
                <span>View Engineering Capabilities</span>
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
                  <p className="text-xs font-bold uppercase tracking-wider text-[#00f5a0]">Delivery Metrics</p>
                  <h3 className="text-lg font-bold text-white">Full-Stack Standards</h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00f5a0]">
                  <Zap size={18} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="text-2xl font-black text-white text-gradient-emerald">100+</p>
                  <p className="text-xs font-bold text-white mt-1">Web Apps Built</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Global Deliveries</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="text-2xl font-black text-white text-gradient-emerald">95+</p>
                  <p className="text-xs font-bold text-white mt-1">Core Web Vitals</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Lighthouse Score</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="text-2xl font-black text-white text-gradient-emerald">&lt;50ms</p>
                  <p className="text-xs font-bold text-white mt-1">API Latency</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Redis Optimized</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="text-2xl font-black text-white text-gradient-emerald">99.9%</p>
                  <p className="text-xs font-bold text-white mt-1">Cloud Uptime</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">AWS &amp; Kubernetes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CORE CAPABILITIES GRID */}
        <section id="services-capabilities" className="mb-28">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 font-bold">
              <Cpu size={14} className="text-[#00f5a0]" />
              <span className="text-[#00f5a0] text-xs font-bold uppercase tracking-[0.2em]">
                Full-Stack Offerings
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Web Development <span className="text-gradient-emerald">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl p-px overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#00f5a0]/30 via-white/5 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex-1 bg-[#090d16]/95 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group-hover:bg-[#0c1220] border border-white/[0.06]">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00f5a0] group-hover:bg-[#00f5a0] group-hover:text-black transition-all">
                        <srv.icon size={22} />
                      </div>
                      <span className="text-2xl font-black text-white/10 group-hover:text-[#00f5a0]/30 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#00f5a0] transition-colors leading-snug">
                      {srv.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                      {srv.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                      {srv.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 size={14} className="text-[#00f5a0] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                    <button
                      onClick={() => router.push("/contact-us")}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#00f5a0] hover:text-white transition-colors"
                    >
                      <span>Request Technical Consultation</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INTERACTIVE TECH STACK MATRIX */}
        <section className="mb-28 p-8 sm:p-12 rounded-3xl bg-[#090d16]/95 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00f5a0] block mb-1">
                Modern Stack
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Battle-Tested Technologies
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === cat.id
                      ? "bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] text-black shadow-lg"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stackDetails[activeTab].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#00f5a0] uppercase">{item.tag}</span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">{item.name}</h4>
                <p className="text-xs text-slate-400">{item.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED CASE STUDIES */}
        <section className="mb-28">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00f5a0] block mb-1">
                Portfolio Impact
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Featured Web Engineering Deployments
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#090d16]/95 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00f5a0]">
                      {proj.category}
                    </span>
                    <span className="text-xs font-bold text-emerald-400">{proj.metric}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#00f5a0] transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tech.map((t, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-medium px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold text-[#00f5a0]">
                  <span>Explore Case Study</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-[#090d16] to-cyan-950/40 border border-emerald-500/20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to build your next web application?</h3>
            <p className="text-sm text-slate-300 max-w-xl font-normal">
              Get in touch with our lead architects to discuss requirements, architecture blueprints, and milestone sprint schedules.
            </p>
          </div>
          <button
            onClick={() => router.push("/contact-us")}
            className="px-8 py-4 bg-[#00f5a0] hover:bg-[#00d9f5] text-black font-bold text-base rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(0,245,160,0.3)] shrink-0 hover:scale-105 active:scale-95"
          >
            Start Project Discussion →
          </button>
        </section>

      </div>
    </div>
  );
}