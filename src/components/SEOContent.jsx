"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
    Globe, Layers,
    ArrowRight,
    Brain,
    Sparkles,
    Users
} from "lucide-react";

export default function SEOContent() {
    const router = useRouter();
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
            ],
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
            ],
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
            ],
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
            ],
        }
    ];

    return (
        <section className="bg-transparent text-white pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12 overflow-hidden border-t border-white/[0.08] relative">
            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* Header Area */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-20">
                    <div className="max-w-3xl space-y-6 text-center md:text-left mx-auto md:mx-0">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030712] border border-[#155dfc]/30">
                            <Sparkles className="w-4 h-4 text-[#50a2ff]" />
                            <span className="text-[#50a2ff] text-xs font-bold tracking-widest uppercase">Deep Technical Expertise</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tighter text-white">
                            Engineering the <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Future</span> of Your Business
                        </h2>
                    </div>
                </div>

                {/* Interactive Matrix */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
                    
                    {/* Left: Interactive Navigation List */}
                    <div className="lg:col-span-4 space-y-3">
                        {expertiseData.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setActiveSection(item.id)}
                                className={`w-full text-left p-6 rounded-2xl md:rounded-3xl transition-all duration-300 relative overflow-hidden group cursor-pointer border ${activeSection === item.id
                                    ? "bg-[#030712] border-[#50a2ff]/50 shadow-2xl shadow-[#155dfc]/10"
                                    : "bg-[#030712]/60 hover:bg-[#030712] border-white/[0.08] hover:border-white/[0.15]"
                                    }`}
                            >
                                {activeSection === item.id && (
                                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#50a2ff] to-transparent" />
                                )}
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className={`p-3 rounded-xl transition-all duration-300 ${activeSection === item.id ? "bg-[#155dfc] text-white shadow-lg shadow-[#155dfc]/30" : "bg-white/[0.06] text-gray-400 group-hover:text-[#50a2ff]"
                                        }`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-base md:text-lg font-bold transition-colors ${activeSection === item.id ? "text-white" : "text-gray-400 group-hover:text-white"
                                            }`}>
                                            {item.title}
                                        </h3>
                                        <p className="text-[10px] text-[#50a2ff] uppercase tracking-widest mt-1 font-bold">{item.subtitle}</p>
                                    </div>
                                </div>
                            </button>
                        ))}

                        {/* Quick CTA Card */}
                        <div 
                            className="mt-8 md:mt-12 p-8 rounded-3xl bg-[#030712] border border-[#155dfc]/30 text-white relative overflow-hidden group hover:border-[#50a2ff]/60 hover:shadow-2xl transition-all cursor-pointer"
                            onClick={() => router.push('/contact-us')}
                        >
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-80" />
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight text-white">Need specific expertise?</h4>
                                <p className="text-sm text-gray-400 mb-6 font-normal">Our technical architects are ready to discuss your custom project requirements.</p>
                                <div className="flex items-center gap-2 text-[#50a2ff] font-bold group-hover:gap-4 transition-all">
                                    <span>Consult an Architect</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                            <Sparkles className="absolute -right-4 -bottom-4 w-24 h-24 text-[#155dfc]/10 group-hover:scale-125 transition-transform" />
                        </div>
                    </div>

                    {/* Right: Detailed Content Area */}
                    <div className="lg:col-span-8 bg-[#030712] border border-white/[0.08] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
                        
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSection}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-10 md:space-y-12 relative z-10"
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 text-[#50a2ff] text-xs font-bold tracking-widest uppercase">
                                        <Layers className="w-4 h-4" />
                                        Expertise Deep-Dive
                                    </div>
                                    <h3 className="text-2xl md:text-5xl font-bold leading-tight text-white">
                                        {expertiseData[activeSection].title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl font-normal">
                                        {expertiseData[activeSection].description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 pt-8 border-t border-white/[0.08]">
                                    <div className="space-y-6">
                                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#50a2ff]">Core Deliverables</h4>
                                        <ul className="space-y-4">
                                            {expertiseData[activeSection].details.map((detail, i) => (
                                                <li key={i} className="flex items-start gap-4 group">
                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#50a2ff]" />
                                                    <span className="text-gray-300 font-normal leading-relaxed text-sm md:text-base">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-8 h-full flex flex-col justify-end pb-4">
                                        <div className="bg-white/[0.03] rounded-3xl border border-white/[0.08] p-6 md:p-8 space-y-6 md:space-y-8">
                                            {expertiseData[activeSection].stats.map((stat, i) => (
                                                <div key={i}>
                                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">{stat.label}</p>
                                                    <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">{stat.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
