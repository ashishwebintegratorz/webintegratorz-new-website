'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  Globe,
  Brain,
  Layers,
  Users,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  Target,
  Compass,
  Rocket,
  CheckCircle2,
  ChevronDown,
  Building2,
  Check,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { NoiseButton } from '@/components/ui/noise-background';

export default function AboutPage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' }
  ];

  const stats = [
    { value: '100+', label: 'Global Clients', sub: 'USA, UAE, Europe, Japan' },
    { value: '99.4%', label: 'SLA Sprint Precision', sub: 'On-time milestone delivery' },
    { value: '50+', label: 'Elite Engineers', sub: 'Senior developers & architects' },
    { value: '4.9 ★', label: 'Client Satisfaction', sub: 'Verified across Clutch & Google' }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Foundation in Indore',
      description: 'Launched with a dedicated team of full-stack engineers specializing in high-performance web systems.'
    },
    {
      year: '2021',
      title: 'Global Outreach Expansion',
      description: 'Established dedicated offshore development channels for enterprise clients across the USA, UK, and UAE.'
    },
    {
      year: '2023',
      title: 'AI & Enterprise Specialization',
      description: 'Pioneered custom LLM fine-tuning, RAG data pipelines, and intelligent agent workflows for SaaS platforms.'
    },
    {
      year: '2025-2026',
      title: 'Industry Leadership & Compliance',
      description: 'Recognized for technical excellence, WCAG 2.2 accessibility remediation, and mission-critical cloud deployments.'
    }
  ];

  const coreValues = [
    {
      icon: Target,
      title: 'Architectural Rigor',
      description: 'We prioritize maintainable, clean code and modular architectures built for long-term scalability and zero tech debt.'
    },
    {
      icon: ShieldCheck,
      title: '100% IP & Data Security',
      description: 'Strict enterprise NDAs, private VPC model isolation, and zero third-party telemetry guarantee full intellectual property protection.'
    },
    {
      icon: Zap,
      title: 'Agile Velocity',
      description: 'Rapid sprint cycles, daily asynchronous updates, and continuous integration pipelines keep deliverables moving fast.'
    },
    {
      icon: Brain,
      title: 'AI-First Innovation',
      description: 'We integrate cutting-edge machine intelligence and autonomous workflows directly into product ecosystems.'
    },
    {
      icon: Compass,
      title: 'Radical Transparency',
      description: 'Direct code access via GitHub/GitLab, live staging environments, and weekly demos ensure zero surprises.'
    },
    {
      icon: Rocket,
      title: 'Partner Mindset',
      description: 'We act as an integrated extension of your leadership team, aligning engineering milestones directly with business ROI.'
    }
  ];

  const expertiseData = [
    {
      id: 0,
      icon: <Globe className="w-6 h-6" />,
      title: 'Global IT Outsourcing & Scale',
      subtitle: 'Strategic Offshore Advantage',
      description: 'Access elite engineering talent from India to power your global digital operations. We specialize in time-zone aligned delivery for forward-thinking enterprises in the USA, UAE, Europe, and Japan.',
      details: [
        'Dedicated offshore development centers in India',
        'Strategic presence and coordination across global timezones',
        'Time-zone aligned collaboration (EST, PST, GMT, GST, JST)',
        'Full IP protection and enterprise-grade NDAs',
        'Cost-effective scaling without hiring overhead'
      ],
      stats: [
        { label: 'Markets Served', value: 'Global' },
        { label: 'Engineering Talent', value: 'Senior Only' }
      ]
    },
    {
      id: 1,
      icon: <Brain className="w-6 h-6" />,
      title: 'AI & LLM Integration',
      subtitle: 'Building the Intelligent Enterprise',
      description: 'Go beyond basic chatbots. We architect autonomous AI agents, private custom LLM implementations, vector search databases, and predictive engines that integrate directly into your proprietary business workflows.',
      details: [
        'Custom LLM fine-tuning and enterprise RAG architectures',
        'Autonomous AI agents for complex multi-step workflow automation',
        'Generative AI for dynamic content, synthesis, and asset creation',
        'Predictive analytics and anomaly detection for business intelligence',
        'Air-gapped private model deployment for complete confidentiality'
      ],
      stats: [
        { label: 'AI Architecture', value: 'Custom & RAG' },
        { label: 'Data Retention', value: '0% Public' }
      ]
    },
    {
      id: 2,
      icon: <Layers className="w-6 h-6" />,
      title: 'Full-Stack Product Engineering',
      subtitle: 'Next.js, React & Modern Cloud',
      description: "We don't just write scripts; we engineer production-grade platforms. From high-traffic SaaS products to mission-critical internal systems engineered for 99.9% uptime and sub-second load times.",
      details: [
        'High-performance Next.js 16 App Router & React 19 interfaces',
        'Distributed Node.js, Express, Python & Go microservices',
        'Database architecture with MongoDB, PostgreSQL, and Redis caching',
        'Cloud-native containerization with Docker, Kubernetes, and AWS',
        'Comprehensive WCAG 2.2 accessibility & SEO performance optimization'
      ],
      stats: [
        { label: 'Lighthouse Score', value: '95+ Target' },
        { label: 'Cloud Uptime', value: '99.9%' }
      ]
    },
    {
      id: 3,
      icon: <Users className="w-6 h-6" />,
      title: 'Dedicated Engineering Squads',
      subtitle: 'Seamless Team Augmentation',
      description: 'Scale your engineering capacity seamlessly with our dedicated developer model. Vetted senior engineers who integrate directly with your Jira, Slack, and sprint workflows as an extension of your in-house team.',
      details: [
        'Hire dedicated React, Next.js, and Full-Stack developers',
        'Senior AI/ML and Computer Vision engineers on demand',
        'Complete cross-functional squads with dedicated Scrum Masters',
        'Direct repository access, code reviews, and transparent sprint reporting',
        'Flexible monthly engagements tailored to project roadmap'
      ],
      stats: [
        { label: 'Deployment Speed', value: '48-72h' },
        { label: 'Engagement', value: 'Flexible' }
      ]
    }
  ];

  const faqs = [
    {
      q: 'What is Webintegratorz Technologies?',
      a: 'Webintegratorz Technologies is an elite software engineering studio and digital transformation partner based in India. We engineer custom enterprise software, AI/LLM integrations, Next.js web platforms, mobile applications, and provide dedicated offshore development squads to global organizations.'
    },
    {
      q: 'Where are your teams and clients located?',
      a: 'Our central engineering campus is located in Indore, India, with dedicated regional coordination for our clients across the United States, UAE, Europe, Japan, and Australia. We operate with time-zone alignment to ensure real-time collaboration.'
    },
    {
      q: 'How do you guarantee quality and code security?',
      a: 'We implement strict automated CI/CD testing pipelines, peer code reviews, SonarQube static analysis, and secure containerization. All client engagements are protected by comprehensive bilateral NDAs, ensuring complete IP ownership is transferred to the client.'
    },
    {
      q: 'What engagement models do you offer?',
      a: 'We provide two primary models: (1) Milestone-based fixed-scope projects with defined deliverables and timelines, and (2) Dedicated Engineering Squads where clients hire full-time senior developers on a flexible monthly retainer.'
    },
    {
      q: 'How quickly can we kick off a new project or hire a squad?',
      a: 'For dedicated engineering squads, we can onboard and integrate vetted developers into your repository within 48 to 72 hours. For custom project builds, we provide full technical scoping, architecture proposals, and sprint estimates within 2 to 3 business days.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-24 sm:pt-28 pb-24 overflow-hidden relative selection:bg-[#50a2ff] selection:text-[#030712]">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[450px] bg-[#155dfc]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[450px] bg-[#50a2ff]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030712] border border-[#155dfc]/30 mb-6 font-bold"
          >
            <Sparkles size={14} className="text-[#50a2ff]" />
            <span className="text-[#50a2ff] text-xs font-bold uppercase tracking-[0.25em]">
              Engineering Excellence &amp; Innovation Since 2019
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-8"
          >
            Pioneering the Next Era of <br />
            <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Intelligent Software &amp; AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-gray-400 leading-relaxed font-normal max-w-3xl mx-auto mb-10"
          >
            Webintegratorz Technologies is an elite software engineering studio and global IT partner.
            We construct mission-critical web platforms, custom Generative AI solutions, and dedicated
            offshore development centers for global enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <NoiseButton
              onClick={() => router.push('/contact-us')}
              className="w-full sm:w-auto text-base font-semibold"
            >
              <span>Partner With Us</span>
              <ArrowRight size={17} className="text-[#50a2ff]" />
            </NoiseButton>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('about-expertise');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-[#030712] hover:border-[#50a2ff]/50 border border-white/[0.12] rounded-full font-semibold text-white text-base shadow-md transition-all cursor-pointer"
            >
              <span>Explore Technical Capabilities</span>
            </button>
          </motion.div>
        </section>

        {/* METRICS & VERIFIED STATS RIBBON */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-28">
          {stats.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-2xl hover:border-[#50a2ff]/40 transition-all text-center sm:text-left relative overflow-hidden group"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />
              <p className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent mb-1">
                {st.value}
              </p>
              <p className="text-sm font-bold text-white">{st.label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{st.sub}</p>
            </motion.div>
          ))}
        </section>

        {/* MISSION & VISION SHOWCASE */}
        <section className="mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 p-8 sm:p-12 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-2xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#155dfc]/20 border border-[#155dfc]/30 flex items-center justify-center text-[#50a2ff]">
                  <Target size={24} />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Our Mission
                </h2>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-normal">
                  To empower global innovators, high-growth startups, and established enterprises with
                  robust, secure, and AI-accelerated digital products that solve complex operational problems
                  and scale effortlessly.
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-white/[0.08] grid grid-cols-2 gap-4 text-xs font-semibold text-gray-300 relative z-10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#50a2ff] shrink-0" />
                  <span>Zero Tech Debt</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#50a2ff] shrink-0" />
                  <span>Full IP Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#50a2ff] shrink-0" />
                  <span>Sub-Second Latency</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#50a2ff] shrink-0" />
                  <span>Predictable Sprint Cycles</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-12 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-2xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#50a2ff] to-transparent opacity-70" />
              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#50a2ff]/20 border border-[#50a2ff]/30 flex items-center justify-center text-[#50a2ff]">
                  <Compass size={24} />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Our Vision
                </h2>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-normal">
                  To be recognized as the world&apos;s leading agile software engineering studio—where
                  technical perfection, artificial intelligence, and human-centric engineering converge
                  to create transformative global digital infrastructure.
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-white/[0.08] flex items-center justify-between text-xs text-gray-400 font-semibold relative z-10">
                <span>Indore, India Campus</span>
                <span className="text-[#50a2ff] font-bold">Serving 15+ Countries Globally</span>
              </div>
            </div>
          </div>
        </section>

        {/* OUR JOURNEY & MILESTONES */}
        <section className="mb-28">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030712] border border-[#155dfc]/30 mb-4 font-bold">
              <TrendingUp size={14} className="text-[#50a2ff]" />
              <span className="text-[#50a2ff] text-xs font-bold uppercase tracking-[0.2em]">
                Evolution of Webintegratorz
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Our Journey of <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Continuous Innovation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-2xl hover:border-[#50a2ff]/40 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />
                <div>
                  <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-xl bg-[#155dfc]/15 border border-[#155dfc]/30 text-[#50a2ff] font-black text-sm mb-6">
                    {m.year}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#50a2ff] transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                    {m.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/[0.08] flex items-center gap-1 text-[11px] font-bold text-[#50a2ff]">
                  <Check size={14} /> Milestone Achieved
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DEEP TECHNICAL EXPERTISE INTERACTIVE SECTION */}
        <section id="about-expertise" className="mb-28">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030712] border border-[#155dfc]/30 mb-4 font-bold">
              <Cpu size={14} className="text-[#50a2ff]" />
              <span className="text-[#50a2ff] text-xs font-bold uppercase tracking-[0.2em]">
                Deep Technical Rigor
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Engineering Capabilities &amp; <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Delivery Verticals</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tabs Left */}
            <div className="lg:col-span-4 space-y-3">
              {expertiseData.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-[#030712] border-[#50a2ff]/50 shadow-2xl'
                      : 'bg-[#030712]/60 border-white/[0.08] hover:bg-[#030712] hover:border-white/[0.15]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl transition-colors ${
                        activeSection === item.id
                          ? 'bg-[#155dfc] text-white'
                          : 'bg-white/[0.06] text-gray-400'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-base font-bold transition-colors ${
                          activeSection === item.id ? 'text-white' : 'text-gray-300'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#50a2ff] uppercase tracking-wider mt-0.5 font-bold">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Content Display Right */}
            <div className="lg:col-span-8 bg-[#030712] border border-white/[0.08] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 relative z-10"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[#50a2ff] text-xs font-bold tracking-widest uppercase">
                      <Layers size={14} />
                      Specialized Vertical Breakdown
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                      {expertiseData[activeSection].title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-normal">
                      {expertiseData[activeSection].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/[0.08]">
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[#50a2ff]">
                        Core Deliverables
                      </h4>
                      <ul className="space-y-3">
                        {expertiseData[activeSection].details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#50a2ff] shrink-0" />
                            <span className="text-gray-300 text-sm font-medium leading-relaxed">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col justify-end">
                      <div className="bg-white/[0.03] rounded-2xl border border-white/[0.08] p-6 space-y-6">
                        {expertiseData[activeSection].stats.map((stat, i) => (
                          <div key={i}>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">
                              {stat.label}
                            </p>
                            <p className="text-3xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">{stat.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CORE VALUES (6 MINIMAL CARDS) */}
        <section className="mb-28">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030712] border border-[#155dfc]/30 mb-4 font-bold">
              <Award size={14} className="text-[#50a2ff]" />
              <span className="text-[#50a2ff] text-xs font-bold uppercase tracking-[0.2em]">
                How We Operate
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Our Core <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Guiding Principles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-2xl hover:border-[#50a2ff]/40 transition-all group flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#155dfc]/20 border border-[#155dfc]/30 flex items-center justify-center text-[#50a2ff] group-hover:bg-[#155dfc] group-hover:text-white transition-colors mb-6">
                    <val.icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#50a2ff] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/[0.08] text-xs font-bold text-[#50a2ff] flex items-center gap-1.5">
                  <CheckCircle2 size={14} /> Verified Standard
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GLOBAL PRESENCE & HUBS */}
        <section className="mb-28 p-8 sm:p-12 rounded-3xl bg-[#030712] border border-white/[0.08] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
          <div className="max-w-3xl mb-10 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#50a2ff] block mb-2">
              Global Operations
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Worldwide Delivery &amp; Operational Coordination
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mt-2 font-normal">
              Headquartered in India with seamless project management coordination across global enterprise hubs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            <div className="p-5 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-xl hover:border-[#50a2ff]/40 transition-all">
              <Building2 size={20} className="text-[#50a2ff] mb-3" />
              <h4 className="text-base font-bold text-white">Indore, India</h4>
              <p className="text-xs text-gray-400 mt-0.5">Primary Engineering Campus</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-xl hover:border-[#50a2ff]/40 transition-all">
              <Building2 size={20} className="text-[#50a2ff] mb-3" />
              <h4 className="text-base font-bold text-white">Dubai, UAE</h4>
              <p className="text-xs text-gray-400 mt-0.5">Middle East Client Hub</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-xl hover:border-[#50a2ff]/40 transition-all">
              <Building2 size={20} className="text-[#50a2ff] mb-3" />
              <h4 className="text-base font-bold text-white">United States</h4>
              <p className="text-xs text-gray-400 mt-0.5">EST &amp; PST Aligned Delivery</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-xl hover:border-[#50a2ff]/40 transition-all">
              <Building2 size={20} className="text-[#50a2ff] mb-3" />
              <h4 className="text-base font-bold text-white">Europe &amp; Japan</h4>
              <p className="text-xs text-gray-400 mt-0.5">Enterprise SaaS Accounts</p>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="mb-28 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
              Frequently Asked <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-sm text-gray-400">
              Key details about our company structure, onboarding process, and service models.
            </p>
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
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex justify-between items-center text-left gap-4 group cursor-pointer"
                    >
                      <span
                        className={`text-base font-bold transition-colors ${
                          isOpen ? 'text-[#50a2ff]' : 'text-white group-hover:text-[#50a2ff]'
                        }`}
                      >
                        {faq.q}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? 'bg-[#155dfc]/20 text-[#50a2ff] rotate-180 border border-[#155dfc]/40'
                            : 'bg-white/[0.05] text-gray-400 border border-white/[0.08]'
                        }`}
                      >
                        <ChevronDown size={18} />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
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
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Build with Webintegratorz?
            </h3>
            <p className="text-sm text-gray-400 max-w-xl font-normal">
              Book a direct technical discovery call with our lead architects to discuss requirements,
              milestones, and squad allocation.
            </p>
          </div>
          <div className="relative z-10">
            <NoiseButton
              onClick={() => router.push('/contact-us')}
              className="w-full sm:w-auto"
            >
              <span>Schedule Discovery Session</span>
              <ArrowRight size={17} className="text-[#50a2ff]" />
            </NoiseButton>
          </div>
        </section>
      </div>
    </div>
  );
}