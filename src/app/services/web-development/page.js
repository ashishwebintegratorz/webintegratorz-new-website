'use client';

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
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
import { NoiseButton } from '@/components/ui/noise-background';

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
    <div className="min-h-screen bg-[#030712] text-white pt-24 sm:pt-28 pb-24 overflow-hidden relative selection:bg-[#50a2ff] selection:text-[#030712]">
      
      {/* Ambient Lighting */}
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
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030712] border border-[#155dfc]/30 mb-2 font-bold"
            >
              <Sparkles size={14} className="text-[#50a2ff]" />
              <span className="text-xs font-bold text-[#50a2ff] uppercase tracking-widest">
                Full-Stack &amp; MERN Specialists
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Engineering Scalable, <br />
              <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">High-Throughput Web Platforms</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-xl text-gray-400 leading-relaxed font-normal max-w-2xl"
            >
              We design and construct mission-critical web applications, enterprise SaaS platforms, and distributed microservices engineered with Next.js 16, React 19, Node.js, and cloud-native backends.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <NoiseButton
                onClick={() => router.push("/contact-us")}
                className="w-full sm:w-auto"
              >
                <span>Request Project Scope</span>
                <ArrowRight size={17} className="text-[#50a2ff]" />
              </NoiseButton>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("services-capabilities");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3.5 bg-[#030712] hover:border-[#50a2ff]/50 border border-white/[0.12] rounded-full font-semibold text-white text-base shadow-md transition-all cursor-pointer"
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
              className="bg-[#030712] border border-white/[0.08] p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl space-y-6"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] relative z-10">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#50a2ff]">Delivery Metrics</p>
                  <h3 className="text-lg font-bold text-white">Full-Stack Standards</h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#155dfc]/15 border border-[#155dfc]/30 flex items-center justify-center text-[#50a2ff]">
                  <Zap size={18} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3.5 relative z-10">
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                  <p className="text-2xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">100+</p>
                  <p className="text-xs font-bold text-white mt-1">Web Apps Built</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Global Deliveries</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                  <p className="text-2xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">95+</p>
                  <p className="text-xs font-bold text-white mt-1">Core Web Vitals</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Lighthouse Score</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                  <p className="text-2xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">&lt;50ms</p>
                  <p className="text-xs font-bold text-white mt-1">API Latency</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Redis Optimized</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                  <p className="text-2xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">99.9%</p>
                  <p className="text-xs font-bold text-white mt-1">Cloud Uptime</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">AWS &amp; Kubernetes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CORE CAPABILITIES GRID */}
        <section id="services-capabilities" className="mb-28">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030712] border border-[#155dfc]/30 mb-4 font-bold">
              <Cpu size={14} className="text-[#50a2ff]" />
              <span className="text-[#50a2ff] text-xs font-bold uppercase tracking-[0.2em]">
                Full-Stack Offerings
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Web Development <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-[#030712] border border-white/[0.08] p-8 flex flex-col justify-between shadow-2xl hover:border-[#50a2ff]/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
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

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#50a2ff] transition-colors leading-snug">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed font-normal mb-6">
                    {srv.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                        <CheckCircle2 size={14} className="text-[#50a2ff] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between relative z-10">
                  <button
                    type="button"
                    onClick={() => router.push("/contact-us")}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#50a2ff] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Request Technical Consultation</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INTERACTIVE TECH STACK MATRIX */}
        <section className="mb-28 p-8 sm:p-12 rounded-3xl bg-[#030712] border border-white/[0.08] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 relative z-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#50a2ff] block mb-1">
                Modern Stack
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Battle-Tested Technologies
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 p-2 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-xl">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === cat.id
                      ? "bg-[#155dfc] text-white shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {stackDetails[activeTab].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#030712] border border-white/[0.08] hover:border-[#50a2ff]/40 shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#50a2ff] uppercase">{item.tag}</span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">{item.name}</h4>
                <p className="text-xs text-gray-400">{item.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED CASE STUDIES */}
        <section className="mb-28">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#50a2ff] block mb-1">
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
                className="p-7 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-2xl relative overflow-hidden group hover:border-[#50a2ff]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#155dfc]/15 border border-[#155dfc]/30 text-[#50a2ff]">
                      {proj.category}
                    </span>
                    <span className="text-xs font-bold text-[#50a2ff]">{proj.metric}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#50a2ff] transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal mb-6">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tech.map((t, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-medium px-2 py-0.5 rounded-lg bg-white/[0.04] text-gray-300 border border-white/[0.08]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-bold text-[#50a2ff]">
                  <span>Explore Case Study</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#030712] border border-white/[0.08] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
          <div className="space-y-2 text-center lg:text-left relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to build your next web application?</h3>
            <p className="text-sm text-gray-400 max-w-xl font-normal">
              Get in touch with our lead architects to discuss requirements, architecture blueprints, and milestone sprint schedules.
            </p>
          </div>
          <div className="relative z-10">
            <NoiseButton
              onClick={() => router.push("/contact-us")}
              className="w-full sm:w-auto"
            >
              <span>Start Project Discussion</span>
              <ArrowRight size={17} className="text-[#50a2ff]" />
            </NoiseButton>
          </div>
        </section>

      </div>
    </div>
  );
}