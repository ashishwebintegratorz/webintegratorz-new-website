'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Globe, Brain, Layers, Users, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Mail, Phone, MessageSquare
} from 'lucide-react';
import WiLogo from '@/components/WiLogo';

export default function AboutPage() {
    const [activeSection, setActiveSection] = useState(0);

    const expertiseData = [
        {
            id: 0,
            icon: <Globe className="w-6 h-6" />,
            title: "Global IT Outsourcing & Scale",
            subtitle: "Strategic Offshore Advantage",
            description: "Access elite engineering talent from India to power your global operations. We specialize in time-zone aligned delivery for enterprises in USA, UAE, Europe, and Japan.",
            details: [
                "Dedicated offshore development centers in India",
                "Strategic presence in Dubai & United States",
                "Time-zone aligned collaboration (GMT, EST, PST, JST)",
                "Full IP protection and enterprise-grade NDAs",
                "Cost-effective scaling without hiring overhead"
            ],
            stats: [
                { label: "Markets Served", value: "Global" },
                { label: "Team Size", value: "Expert Only" }
            ]
        },
        {
            id: 1,
            icon: <Brain className="w-6 h-6" />,
            title: "AI & LLM Integration",
            subtitle: "Building the Intelligent Enterprise",
            description: "Go beyond simple chatbots. We build autonomous AI agents, custom LLM implementations, and predictive engines that integrate directly into your business workflows.",
            details: [
                "Custom LLM training and RAG implementations",
                "Autonomous AI agents for workflow automation",
                "Generative AI for content and asset creation",
                "Predictive analytics for business intelligence",
                "Custom GPT models for internal enterprise use"
            ],
            stats: [
                { label: "AI Models", value: "Custom" },
                { label: "Integration", value: "Seamless" }
            ]
        },
        {
            id: 2,
            icon: <Layers className="w-6 h-6" />,
            title: "Full-Stack Product Engineering",
            subtitle: "MERN Stack & Beyond",
            description: "We don't just write code; we engineer scalable products. From high-traffic SaaS platforms to mission-critical internal systems using the modern web stack.",
            details: [
                "High-performance MERN (MongoDB, Express, React, Node)",
                "Next.js for SEO-optimized server-side rendering",
                "Headless CMS & Microservices architecture",
                "Cloud-native deployment (AWS, Azure, Google Cloud)",
                "Robust API development and system integration"
            ],
            stats: [
                { label: "Performance", value: "99+ Score" },
                { label: "Architecture", value: "Scalable" }
            ]
        },
        {
            id: 3,
            icon: <Users className="w-6 h-6" />,
            title: "Dedicated Hiring Models",
            subtitle: "Your Team, Extended",
            description: "Scale your engineering capacity overnight with our hire-dedicated-developers model. Proven experts who integrate as an extension of your in-house team.",
            details: [
                "Hire dedicated React & Next.js developers",
                "Expert AI/ML engineers on demand",
                "Full-stack MERN teams for long-term projects",
                "Managed delivery with dedicated Scrum Masters",
                "Flexible monthly or project-based engagement"
            ],
            stats: [
                { label: "Onboarding", value: "Fast" },
                { label: "Expertise", value: "Senior" }
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-[#030712] text-white pt-28 pb-20 selection:bg-cyan-500/30 relative overflow-hidden font-sans">
            
            {/* Ambient Background Accents */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <header className="text-center max-w-4xl mx-auto space-y-6 pt-6 pb-12">
                    <div className="flex justify-center mb-6">
                        <WiLogo size="lg" />
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a1020] border border-cyan-500/30 text-cyan-300 text-xs font-extrabold uppercase tracking-widest">
                        <Sparkles size={14} className="text-cyan-400" />
                        <span>Innovate • Build • Excel</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                        Engineering High-Impact <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc]">
                            Digital &amp; AI Solutions
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
                        We transform ambitious vision into scalable reality with cutting-edge web, mobile, enterprise SaaS, and bespoke AI/ML architectures for global innovators.
                    </p>
                </header>

                {/* Direct Contact & Collaboration Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto my-8">
                    
                    {/* Email Card */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-[#070b14] border border-white/10 hover:border-cyan-500/40 transition-all shadow-xl">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5">
                            <Mail size={22} />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2">Direct Inquiries</h2>
                        <p className="text-sm text-slate-300 mb-4">Reach our executive solutions architects for scoping and enterprise RFPs.</p>
                        <div className="space-y-2">
                            <a href="mailto:info@webintegratorz.com" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold text-base transition-colors">
                                info@webintegratorz.com
                            </a>
                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <a href="https://wa.me/918989944488" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-cyan-300 font-bold text-sm hover:bg-[#00f2fe]/20 transition-all">
                                    <MessageSquare size={16} />
                                    WhatsApp Support
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Phone & Direct Lines */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-[#070b14] border border-white/10 hover:border-indigo-500/40 transition-all shadow-xl">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5">
                            <Phone size={22} />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2">Business &amp; Phone Lines</h2>
                        <p className="text-sm text-slate-300 mb-4">Direct teleconference lines for immediate consultation.</p>
                        <div className="space-y-1.5">
                            <p>
                                <a href="tel:+918989944488" className="text-slate-100 hover:text-cyan-400 font-bold text-base transition-colors">
                                    +91 8989944488
                                </a>
                            </p>
                            <p>
                                <a href="tel:+919131640479" className="text-slate-100 hover:text-cyan-400 font-bold text-base transition-colors">
                                    +91 9131640479
                                </a>
                            </p>
                            <p className="text-xs text-slate-400 pt-2">
                                Mon-Fri, 9:00 AM - 5:00 PM IST (Global Overlap Available)
                            </p>
                        </div>
                    </div>

                </div>

                {/* Company Overview Strip */}
                <div className="my-12 p-8 sm:p-10 rounded-3xl bg-[#070b14] border border-white/10 shadow-2xl">
                    <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
                        <strong className="text-white">About Webintegratorz Technologies:</strong> A premier global AI and full-stack software development firm. We partner with high-growth startups and enterprises across the USA, UAE, Europe, and Asia-Pacific to deliver custom Generative AI ecosystems, scalable cloud architectures, and mission-critical digital software.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Organization</p>
                            <p className="text-base font-bold text-white mt-1">Webintegratorz</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Engineering Talent</p>
                            <p className="text-base font-bold text-cyan-400 mt-1">Senior Engineers</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Delivery Model</p>
                            <p className="text-base font-bold text-white mt-1">100% Fully Remote</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Security Standard</p>
                            <p className="text-base font-bold text-indigo-400 mt-1">Enterprise NDA &amp; SOC-2</p>
                        </div>
                    </div>
                </div>

                {/* TECHNICAL EXPERTISE SECTION */}
                <div className="mt-20 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Deep Technical Capabilities</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black text-white">
                        Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Future</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-start">
                    {/* Tabs */}
                    <div className="lg:col-span-4 space-y-3">
                        {expertiseData.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setActiveSection(item.id)}
                                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 group cursor-pointer touch-manipulation ${
                                    activeSection === item.id
                                        ? "bg-[#0c1527] border-cyan-400 shadow-[0_10px_30px_rgba(6,182,212,0.15)]"
                                        : "bg-[#070b14] border-white/10 hover:border-cyan-400/40 hover:bg-white/5"
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl transition-all ${
                                        activeSection === item.id 
                                            ? "bg-cyan-500 text-black font-bold shadow-lg" 
                                            : "bg-white/10 text-slate-400 group-hover:text-cyan-400"
                                    }`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-base font-bold transition-colors ${
                                            activeSection === item.id ? "text-white" : "text-slate-300 group-hover:text-white"
                                        }`}>
                                            {item.title}
                                        </h3>
                                        <p className="text-[10px] text-cyan-400 uppercase tracking-widest mt-0.5 font-bold">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Content area */}
                    <div className="lg:col-span-8 bg-[#070b14] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSection}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                                className="space-y-8"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-extrabold tracking-widest uppercase">
                                        <Layers className="w-4 h-4" />
                                        <span>Expertise Deep-Dive</span>
                                    </div>
                                    <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                                        {expertiseData[activeSection].title}
                                    </h3>
                                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                                        {expertiseData[activeSection].description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Core Deliverables</h4>
                                        <ul className="space-y-3">
                                            {expertiseData[activeSection].details.map((detail, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                                                    <span className="text-slate-300 text-sm sm:text-base leading-relaxed">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-col justify-end">
                                        <div className="bg-[#030712] rounded-2xl border border-white/10 p-6 space-y-6">
                                            {expertiseData[activeSection].stats.map((stat, i) => (
                                                <div key={i}>
                                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">{stat.label}</p>
                                                    <p className="text-3xl sm:text-4xl font-black text-cyan-400">{stat.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* FAQ SECTION */}
                <div id="faq" className="mt-24 text-center space-y-4">
                    <h2 className="text-3xl sm:text-5xl font-black text-white">Frequently Asked Questions</h2>
                    <p className="text-slate-300 max-w-xl mx-auto">Common questions about our engineering services and global remote delivery.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {[
                        { q: "Is Webintegratorz Technologies a top IT company in India?", a: "Yes. Webintegratorz is recognized as a premier software engineering firm delivering AI solutions, scalable cloud architectures, and dedicated development teams worldwide." },
                        { q: "What IT outsourcing services do you offer?", a: "We provide full-lifecycle product development, custom generative AI integrations, mobile app engineering, and dedicated offshore developer squads." },
                        { q: "Do you provide AI development services for global enterprises?", a: "Absolutely. We specialize in autonomous AI agents, enterprise LLM fine-tuning, RAG vector pipelines, and custom machine learning models." },
                        { q: "Can I hire dedicated developers from India?", a: "Yes. We provide senior React, Next.js, Python, and mobile engineers with flexible monthly or sprint-based engagement models and complete IP ownership." },
                        { q: "Which countries do you serve?", a: "We serve clients globally, with dedicated time-zone aligned overlap for the USA, UAE, UK, Europe, Japan, and India." },
                        { q: "How do you ensure enterprise data security?", a: "We enforce strict NDAs, OWASP security benchmarks, encrypted private VPC cloud setups, and role-based access control." }
                    ].map((faq, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-[#070b14] border border-white/10 hover:border-cyan-500/40 transition-all shadow-lg flex flex-col justify-between">
                            <div>
                                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-sm font-black mb-4">
                                    ?
                                </div>
                                <h3 className="text-base font-bold text-white mb-2">{faq.q}</h3>
                                <p className="text-sm text-slate-300 leading-relaxed">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final Call to Action Strip */}
                <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-slate-950 border border-cyan-500/30 text-center space-y-6">
                    <h2 className="text-2xl sm:text-4xl font-black text-white">Ready to scale your next digital product?</h2>
                    <p className="text-slate-300 max-w-xl mx-auto text-base">
                        Book a free technical consultation with our lead solutions architects to review your roadmap and engineering requirements.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            href="/contact-us"
                            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-black text-base hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                        >
                            <span>Schedule Architecture Call</span>
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}