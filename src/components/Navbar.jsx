"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Bot, MessageSquare, Cloud, LineChart, Sparkles, Building2, Brain, Layers, Cpu, Database, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar({ mobileOpen, setMobileOpen }) {
    const router = useRouter();
    const pathname = usePathname();
    const [desktopServices, setDesktopServices] = useState(false);
    const [desktopAIServices, setDesktopAIServices] = useState(false);
    const [mobileServices, setMobileServices] = useState(false);
    const [mobileAIServices, setMobileAIServices] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const coreServices = [
        { label: "Web Development", href: "/services/web-development", icon: Cpu, desc: "Modern full-stack web platforms & apps" },
        { label: "Accessibility Remediation", href: "/services/accessibility-compliance", icon: ShieldCheck, desc: "WCAG 2.2, ADA, EAA, 508 & GIGW Code Fixes" },
        { label: "Mobile Apps", href: "/services/mobile-development", icon: MessageSquare, desc: "Native iOS/Android & Flutter engineering" },
        { label: "SaaS & Cloud Platforms", href: "/services/cms-solution", icon: Database, desc: "Scalable enterprise cloud systems" },
        { label: "UI/UX & Product Design", href: "/services/ui-ux", icon: Sparkles, desc: "High-converting digital experiences" },
        { label: "Digital Growth & SEO", href: "/services/digital-marketing", icon: LineChart, desc: "Data-driven performance & search ranking" },
    ];

    const aiCategories = [
        {
            title: "Generative AI & LLMs",
            items: [
                { label: "Gen AI Development", href: "/services/ai-integration/generative-ai-development", icon: Brain, badge: "Popular" },
                { label: "LLM Fine-Tuning & Custom Models", href: "/services/ai-integration/llm-development", icon: Layers },
                { label: "Gen AI Integration", href: "/services/ai-integration/generative-ai-integration", icon: Cpu },
                { label: "ChatGPT & Claude Integration", href: "/services/ai-integration/chatgpt-integration", icon: Sparkles },
                { label: "Gen AI Strategy & Consulting", href: "/services/ai-integration/generative-ai-consulting", icon: LineChart },
            ]
        },
        {
            title: "Autonomous Agents & Solutions",
            items: [
                { label: "AI Agent Development", href: "/services/ai-integration/agent-development", icon: Bot, badge: "New" },
                { label: "Enterprise AI Chatbots", href: "/services/ai-integration/chatbot-development", icon: MessageSquare },
                { label: "Enterprise AI Workflows", href: "/services/ai-integration/enterprise-ai", icon: Building2 },
                { label: "AI-as-a-Service (AIaaS)", href: "/services/ai-integration/ai-as-a-service", icon: Cloud },
            ]
        },
        {
            title: "ML & Data Intelligence",
            items: [
                { label: "ML Model Engineering", href: "/services/ai-integration/ml-model-engineering", icon: Cpu },
                { label: "Custom ML Development", href: "/services/ai-integration/ml-development", icon: Database },
                { label: "Data Science Consulting", href: "/services/ai-integration/ml-data-science-consulting", icon: LineChart },
                { label: "Applied AI Consulting", href: "/services/ai-integration/ai-consulting", icon: Brain },
            ]
        }
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    }, [mobileOpen]);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-3 bg-[#030712]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]" : "py-5 bg-transparent"}`}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex items-center justify-between transition-all duration-300 ${!scrolled ? "bg-white/[0.03] backdrop-blur-md px-6 py-2.5 rounded-2xl border border-white/[0.06]" : ""}`}>

                    {/* BRAND LOGO */}
                    <div className="flex items-center flex-shrink-0">
                        <Link href="/" aria-label="Webintegratorz Technologies Home" className="flex items-center gap-3 group">
                            <div className="relative w-44 sm:w-52 h-10 transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src="/weblogo.webp"
                                    alt="Webintegratorz Technologies Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#00f5a0] animate-pulse" />
                                <span className="text-[10px] font-bold text-[#00f5a0] tracking-wider uppercase">AI-First</span>
                            </div>
                        </Link>
                    </div>

                    {/* DESKTOP NAV */}
                    <nav aria-label="Primary Navigation" className="hidden xl:flex items-center gap-1 text-[13px] font-semibold tracking-wide">
                        <Link 
                            href="/" 
                            className={`px-4 py-2 rounded-xl transition-all duration-200 ${pathname === "/" ? "text-[#00f5a0] bg-white/[0.06]" : "text-slate-200 hover:text-white hover:bg-white/[0.04]"}`}
                        >
                            HOME
                        </Link>

                        {/* SERVICES MEGA DROPDOWN */}
                        <div
                            className="relative"
                            onMouseEnter={() => setDesktopServices(true)}
                            onMouseLeave={() => setDesktopServices(false)}
                        >
                            <button 
                                type="button"
                                aria-expanded={desktopServices}
                                aria-haspopup="true"
                                aria-controls="desktop-services-dropdown"
                                onClick={() => setDesktopServices(!desktopServices)}
                                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all duration-200 ${desktopServices || pathname?.startsWith("/services") && !pathname?.includes("ai-integration") ? "text-[#00f5a0] bg-white/[0.06]" : "text-slate-200 hover:text-white hover:bg-white/[0.04]"}`}
                            >
                                SERVICES
                                <ChevronDown size={14} className={`transition-transform duration-300 ${desktopServices ? "rotate-180 text-[#00f5a0]" : ""}`} />
                            </button>

                            <AnimatePresence>
                                {desktopServices && (
                                    <motion.div
                                        id="desktop-services-dropdown"
                                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute top-full left-0 pt-3 z-50"
                                    >
                                        <div className="w-[360px] bg-[#090d16]/95 backdrop-blur-2xl border border-white/[0.12] shadow-[0_30px_90px_rgba(0,0,0,0.8)] rounded-2xl p-4 overflow-hidden">
                                            <div className="space-y-1.5">
                                                {coreServices.map((item, i) => (
                                                    <Link 
                                                        key={i} 
                                                        href={item.href} 
                                                        className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.06] transition-all border border-transparent hover:border-white/[0.05]"
                                                    >
                                                        <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00f5a0] group-hover:bg-[#00f5a0] group-hover:text-black transition-all shrink-0 mt-0.5">
                                                            <item.icon size={17} />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-semibold text-white group-hover:text-[#00f5a0] transition-colors">{item.label}</p>
                                                            <p className="text-xs text-slate-300 leading-snug mt-0.5">{item.desc}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* AI INTEGRATION MEGA DROPDOWN */}
                        <div
                            className="relative"
                            onMouseEnter={() => setDesktopAIServices(true)}
                            onMouseLeave={() => setDesktopAIServices(false)}
                        >
                            <button 
                                type="button"
                                aria-expanded={desktopAIServices}
                                aria-haspopup="true"
                                aria-controls="desktop-ai-dropdown"
                                onClick={() => setDesktopAIServices(!desktopAIServices)}
                                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all duration-200 ${desktopAIServices || pathname?.includes("ai-integration") ? "text-[#00f5a0] bg-white/[0.06]" : "text-slate-200 hover:text-white hover:bg-white/[0.04]"}`}
                            >
                                <Sparkles size={14} className="text-[#00f5a0]" />
                                AI SUITE
                                <ChevronDown size={14} className={`transition-transform duration-300 ${desktopAIServices ? "rotate-180 text-[#00f5a0]" : ""}`} />
                            </button>

                            <AnimatePresence>
                                {desktopAIServices && (
                                    <motion.div
                                        id="desktop-ai-dropdown"
                                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute top-full -left-20 pt-3 z-50"
                                    >
                                        <div className="w-[820px] bg-[#090d16]/98 backdrop-blur-2xl border border-white/[0.12] shadow-[0_30px_90px_rgba(0,0,0,0.8)] rounded-3xl p-6 overflow-hidden">
                                            <div className="grid grid-cols-3 gap-6">
                                                {aiCategories.map((category, idx) => (
                                                    <div key={idx} className="space-y-3">
                                                        <div className="flex items-center gap-2 pb-2 border-b border-white/[0.08]">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[#00f5a0]" />
                                                            <p className="text-[11px] font-bold tracking-wider text-slate-300 uppercase">{category.title}</p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            {category.items.map((service, sIdx) => (
                                                                <Link
                                                                    key={sIdx}
                                                                    href={service.href}
                                                                    className="group flex items-center justify-between py-2 px-2.5 rounded-xl hover:bg-white/[0.06] transition-all"
                                                                >
                                                                    <div className="flex items-center gap-2.5">
                                                                        <div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center text-slate-400 group-hover:text-[#00f5a0] group-hover:bg-emerald-500/10 transition-all">
                                                                            <service.icon size={14} />
                                                                        </div>
                                                                        <span className="text-[13px] font-medium text-slate-300 group-hover:text-white transition-colors">
                                                                            {service.label}
                                                                        </span>
                                                                    </div>
                                                                    {service.badge && (
                                                                        <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-[#00f5a0] border border-emerald-500/30">
                                                                            {service.badge}
                                                                        </span>
                                                                    )}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* AI Banner Footer */}
                                            <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-cyan-950/40 border border-emerald-500/20 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <Zap size={18} className="text-[#00f5a0]" />
                                                    <div>
                                                        <p className="text-xs font-semibold text-white">Enterprise AI Proof-of-Concept in 14 Days</p>
                                                        <p className="text-[11px] text-slate-400">Validate AI ROI before scaling production infrastructure.</p>
                                                    </div>
                                                </div>
                                                <Link 
                                                    href="/contact-us"
                                                    className="px-4 py-1.5 rounded-xl bg-[#00f5a0] text-black text-xs font-bold hover:bg-[#00d9f5] transition-all flex items-center gap-1.5"
                                                >
                                                    Launch PoC <ArrowRight size={12} />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link 
                            href="/about" 
                            className={`px-4 py-2 rounded-xl transition-all duration-200 ${pathname === "/about" ? "text-[#00f5a0] bg-white/[0.06]" : "text-slate-200 hover:text-white hover:bg-white/[0.04]"}`}
                        >
                            ABOUT
                        </Link>
                        <Link 
                            href="/awards" 
                            className={`px-4 py-2 rounded-xl transition-all duration-200 ${pathname === "/awards" ? "text-[#00f5a0] bg-white/[0.06]" : "text-slate-200 hover:text-white hover:bg-white/[0.04]"}`}
                        >
                            AWARDS
                        </Link>
                        <Link 
                            href="/news" 
                            className={`px-4 py-2 rounded-xl transition-all duration-200 ${pathname === "/news" ? "text-[#00f5a0] bg-white/[0.06]" : "text-slate-200 hover:text-white hover:bg-white/[0.04]"}`}
                        >
                            INSIGHTS
                        </Link>
                        <Link 
                            href="/contact-us" 
                            className={`px-4 py-2 rounded-xl transition-all duration-200 ${pathname === "/contact-us" ? "text-[#00f5a0] bg-white/[0.06]" : "text-slate-200 hover:text-white hover:bg-white/[0.04]"}`}
                        >
                            CONTACT
                        </Link>
                    </nav>

                    {/* CTA BUTTON */}
                    <div className="hidden xl:flex items-center gap-4">
                        <button
                            type="button"
                            onClick={() => router.push("/contact-us")}
                            className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-[#00f5a0] via-[#00d9f5] to-[#6366f1] rounded-xl transition-all duration-500 group-hover:opacity-100 group-hover:scale-105" />
                            <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#030712] text-sm font-bold text-white transition-all duration-300 group-hover:bg-opacity-90">
                                <span>Get Free Quote</span>
                                <ArrowRight size={15} className="text-[#00f5a0] group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>

                    {/* MOBILE HAMBURGER TOGGLE */}
                    <div className="xl:hidden flex items-center">
                        <button
                            type="button"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2.5 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white hover:bg-white/[0.1] transition-all"
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        >
                            {mobileOpen ? <X size={22} className="text-[#00f5a0]" /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE FULLSCREEN MENU */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[999] bg-[#030712]/98 backdrop-blur-2xl flex flex-col h-screen overflow-hidden text-white"
                    >
                        {/* Top Bar */}
                        <div className="px-6 py-5 flex items-center justify-between border-b border-white/[0.08]">
                            <Link href="/" onClick={() => setMobileOpen(false)} className="relative w-44 h-10">
                                <Image
                                    src="/weblogo.webp"
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileOpen(false)}
                                className="w-10 h-10 flex items-center justify-center bg-white/[0.06] rounded-xl border border-white/[0.1]"
                                aria-label="Close menu"
                            >
                                <X size={20} className="text-[#00f5a0]" />
                            </button>
                        </div>

                        {/* Navigation Links List */}
                        <div className="flex-1 px-6 py-8 overflow-y-auto space-y-6">
                            <div>
                                <Link 
                                    href="/" 
                                    onClick={() => setMobileOpen(false)} 
                                    className="text-2xl font-bold text-white hover:text-[#00f5a0] transition block"
                                >
                                    Home
                                </Link>
                            </div>

                            {/* Mobile Services Accordion */}
                            <div>
                                <button
                                    onClick={() => setMobileServices(!mobileServices)}
                                    className="flex items-center justify-between w-full text-2xl font-bold text-white"
                                >
                                    Services
                                    <ChevronDown size={22} className={`transition-transform duration-300 text-[#00f5a0] ${mobileServices ? "rotate-180" : ""}`} />
                                </button>
                                <AnimatePresence>
                                    {mobileServices && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="mt-3 pl-4 space-y-2.5 border-l-2 border-emerald-500/30 overflow-hidden"
                                        >
                                            {coreServices.map((item, i) => (
                                                <Link 
                                                    key={i} 
                                                    href={item.href} 
                                                    onClick={() => setMobileOpen(false)} 
                                                    className="block text-base text-slate-300 hover:text-[#00f5a0] py-1.5"
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Mobile AI Integration Accordion */}
                            <div>
                                <button
                                    onClick={() => setMobileAIServices(!mobileAIServices)}
                                    className="flex items-center justify-between w-full text-2xl font-bold text-[#00f5a0]"
                                >
                                    <span className="flex items-center gap-2">
                                        <Sparkles size={20} /> AI Integration
                                    </span>
                                    <ChevronDown size={22} className={`transition-transform duration-300 text-[#00f5a0] ${mobileAIServices ? "rotate-180" : ""}`} />
                                </button>
                                <AnimatePresence>
                                    {mobileAIServices && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="mt-3 pl-4 space-y-4 border-l-2 border-emerald-500/30 overflow-hidden"
                                        >
                                            {aiCategories.map((cat, idx) => (
                                                <div key={idx} className="space-y-2">
                                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{cat.title}</p>
                                                    <div className="space-y-1.5 pl-2">
                                                        {cat.items.map((srv, sIdx) => (
                                                            <Link
                                                                key={sIdx}
                                                                href={srv.href}
                                                                onClick={() => setMobileOpen(false)}
                                                                className="block text-sm text-slate-300 hover:text-[#00f5a0] py-1"
                                                            >
                                                                {srv.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div>
                                <Link 
                                    href="/about" 
                                    onClick={() => setMobileOpen(false)} 
                                    className="text-2xl font-bold text-white hover:text-[#00f5a0] transition block"
                                >
                                    About Us
                                </Link>
                            </div>

                            <div>
                                <Link 
                                    href="/awards" 
                                    onClick={() => setMobileOpen(false)} 
                                    className="text-2xl font-bold text-white hover:text-[#00f5a0] transition block"
                                >
                                    Awards &amp; Recognition
                                </Link>
                            </div>

                            <div>
                                <Link 
                                    href="/news" 
                                    onClick={() => setMobileOpen(false)} 
                                    className="text-2xl font-bold text-white hover:text-[#00f5a0] transition block"
                                >
                                    News &amp; Insights
                                </Link>
                            </div>

                            <div>
                                <Link 
                                    href="/contact-us" 
                                    onClick={() => setMobileOpen(false)} 
                                    className="text-2xl font-bold text-white hover:text-[#00f5a0] transition block"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="p-6 border-t border-white/[0.08] bg-[#090d16]">
                            <button
                                type="button"
                                onClick={() => {
                                    setMobileOpen(false);
                                    router.push("/contact-us");
                                }}
                                className="w-full py-4 bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] rounded-xl text-black font-bold text-base shadow-[0_10px_30px_rgba(0,245,160,0.3)] active:scale-98 transition-all"
                            >
                                Schedule Free Consultation
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}