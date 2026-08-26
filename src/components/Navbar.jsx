"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Bot, MessageSquare, Cloud, LineChart, Sparkles, Building2, Brain, Layers, Cpu, Database, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { NoiseButton } from "./ui/noise-background";

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
        <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#030712]/90 backdrop-blur-xl transition-colors duration-200">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">

                {/* BRAND LOGO */}
                <div className="flex items-center flex-shrink-0">
                    <Link href="/" aria-label="Webintegratorz Technologies Home" className="flex items-center gap-2.5 group">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#030712] font-black text-sm shadow-md group-hover:scale-105 transition-transform">
                            W
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white select-none">
                            Webintegratorz<span className="text-[#50a2ff]">.</span>
                        </span>
                    </Link>
                </div>

                {/* DESKTOP NAV */}
                <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-gray-300">
                    <Link 
                        href="/" 
                        className={`transition-colors ${pathname === "/" ? "text-[#50a2ff] font-semibold" : "hover:text-[#50a2ff] text-gray-300"}`}
                    >
                        Home
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
                            className={`flex items-center gap-1 transition-colors cursor-pointer ${desktopServices || (pathname?.startsWith("/services") && !pathname?.includes("ai-integration")) ? "text-[#50a2ff] font-semibold" : "hover:text-[#50a2ff] text-gray-300"}`}
                        >
                            Services
                            <ChevronDown size={14} className={`transition-transform duration-200 ${desktopServices ? "rotate-180 text-[#50a2ff]" : ""}`} />
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
                                    <div className="w-[380px] bg-[#030712] border border-white/[0.12] shadow-2xl rounded-2xl p-4 overflow-hidden relative">
                                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
                                        <div className="space-y-1.5 relative z-10">
                                            {coreServices.map((item, i) => (
                                                <Link 
                                                    key={i} 
                                                    href={item.href} 
                                                    className="group flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.03] hover:bg-[#155dfc]/10 border border-white/[0.05] hover:border-[#50a2ff]/30 transition-all"
                                                >
                                                    <div className="w-10 h-10 rounded-xl bg-[#155dfc]/15 border border-[#155dfc]/30 flex items-center justify-center text-[#50a2ff] group-hover:scale-110 group-hover:text-white transition-all shrink-0 mt-0.5">
                                                        <item.icon size={18} />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-white group-hover:text-[#50a2ff] transition-colors">{item.label}</p>
                                                        <p className="text-xs text-gray-400 leading-snug mt-0.5 font-normal">{item.desc}</p>
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
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 ${desktopAIServices || pathname?.includes("ai-integration") ? "text-[#50a2ff] font-semibold" : "hover:text-[#50a2ff] text-gray-300"}`}
                        >
                            <Sparkles size={14} className="text-[#50a2ff]" />
                            AI Suite
                            <ChevronDown size={14} className={`transition-transform duration-200 ${desktopAIServices ? "rotate-180 text-[#50a2ff]" : ""}`} />
                        </button>

                        <AnimatePresence>
                            {desktopAIServices && (
                                <motion.div
                                    id="desktop-ai-dropdown"
                                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-full -left-28 xl:-left-20 pt-3 z-50"
                                >
                                    <div className="w-[840px] bg-[#030712] border border-white/[0.12] shadow-2xl rounded-2xl p-6 overflow-hidden relative">
                                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
                                        <div className="grid grid-cols-3 gap-4 relative z-10">
                                            {aiCategories.map((category, idx) => (
                                                <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-3">
                                                    <div className="flex items-center gap-2 pb-2 border-b border-white/[0.08]">
                                                        <div className="w-2 h-2 rounded-full bg-[#50a2ff]" />
                                                        <p className="text-xs font-bold tracking-wider text-[#50a2ff] uppercase">{category.title}</p>
                                                    </div>
                                                    <div className="space-y-1">
                                                        {category.items.map((service, sIdx) => (
                                                            <Link
                                                                key={sIdx}
                                                                href={service.href}
                                                                className="group flex items-center justify-between py-2 px-2.5 rounded-lg hover:bg-[#155dfc]/15 border border-transparent hover:border-[#50a2ff]/20 transition-all"
                                                            >
                                                                <div className="flex items-center gap-2.5">
                                                                    <div className="w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center text-gray-300 group-hover:text-white group-hover:bg-[#155dfc] transition-all">
                                                                        <service.icon size={14} />
                                                                    </div>
                                                                    <span className="text-[13px] font-medium text-gray-200 group-hover:text-[#50a2ff] transition-colors">
                                                                        {service.label}
                                                                    </span>
                                                                </div>
                                                                {service.badge && (
                                                                    <span className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#155dfc]/20 text-[#50a2ff] border border-[#155dfc]/30">
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
                                        <div className="mt-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between relative z-10">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-[#155dfc]/15 border border-[#155dfc]/30 flex items-center justify-center text-[#50a2ff]">
                                                    <Zap size={18} />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold text-white">Enterprise AI Proof-of-Concept in 14 Days</p>
                                                    <p className="text-[11px] text-gray-400">Validate AI ROI before scaling production infrastructure.</p>
                                                </div>
                                            </div>
                                            <Link 
                                                href="/contact-us"
                                                className="px-4 py-2 rounded-full bg-[#155dfc] text-white text-xs font-semibold hover:bg-[#50a2ff] hover:text-[#030712] transition-all flex items-center gap-1.5 shadow-md"
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
                        className={`transition-colors ${pathname === "/about" ? "text-[#50a2ff] font-semibold" : "hover:text-[#50a2ff] text-gray-300"}`}
                    >
                        About
                    </Link>
                    <Link 
                        href="/awards" 
                        className={`transition-colors ${pathname === "/awards" ? "text-[#50a2ff] font-semibold" : "hover:text-[#50a2ff] text-gray-300"}`}
                    >
                        Awards
                    </Link>
                    <Link 
                        href="/news" 
                        className={`transition-colors ${pathname === "/news" ? "text-[#50a2ff] font-semibold" : "hover:text-[#50a2ff] text-gray-300"}`}
                    >
                        Insights
                    </Link>
                    <Link 
                        href="/contact-us" 
                        className={`transition-colors ${pathname === "/contact-us" ? "text-[#50a2ff] font-semibold" : "hover:text-[#50a2ff] text-gray-300"}`}
                    >
                        Contact
                    </Link>
                </div>

                {/* CTA & THEME TOGGLE */}
                <div className="hidden xl:flex items-center gap-3">
                    <ThemeToggle />

                    <NoiseButton
                        onClick={() => router.push("/contact-us")}
                        className="px-5 py-2 text-sm font-medium"
                    >
                        <span>Hire Us</span>
                    </NoiseButton>
                </div>

                {/* MOBILE CONTROLS */}
                <div className="xl:hidden flex items-center gap-2">
                    <ThemeToggle />

                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="p-2 rounded-lg text-gray-300 hover:bg-white/[0.05] transition-all cursor-pointer"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileOpen ? <X size={22} className="text-[#50a2ff]" /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* MOBILE FULLSCREEN MENU */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[999] bg-[#030712]/98 backdrop-blur-2xl flex flex-col h-screen overflow-hidden text-white font-inter"
                    >
                        {/* Top Bar */}
                        <div className="px-6 py-5 flex items-center justify-between border-b border-white/[0.08]">
                            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#030712] font-black text-sm shadow-md">
                                    W
                                </div>
                                <span className="text-xl font-bold tracking-tight text-white select-none">
                                    Webintegratorz<span className="text-[#50a2ff]">.</span>
                                </span>
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileOpen(false)}
                                className="w-10 h-10 flex items-center justify-center bg-white/[0.05] rounded-lg border border-white/[0.08] cursor-pointer text-gray-300 hover:text-white"
                                aria-label="Close menu"
                            >
                                <X size={20} className="text-[#50a2ff]" />
                            </button>
                        </div>

                        {/* Navigation Links List */}
                        <div className="flex-1 px-6 py-8 overflow-y-auto space-y-6">
                            <div>
                                <Link 
                                    href="/" 
                                    onClick={() => setMobileOpen(false)} 
                                    className="text-2xl font-bold text-white hover:text-[#50a2ff] transition block"
                                >
                                    Home
                                </Link>
                            </div>

                            {/* Mobile Services Accordion */}
                            <div>
                                <button
                                    type="button"
                                    onClick={() => setMobileServices(!mobileServices)}
                                    className="flex items-center justify-between w-full text-2xl font-bold text-white cursor-pointer"
                                >
                                    Services
                                    <ChevronDown size={22} className={`transition-transform duration-300 text-[#50a2ff] ${mobileServices ? "rotate-180" : ""}`} />
                                </button>
                                <AnimatePresence>
                                    {mobileServices && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="mt-3 pl-4 space-y-2.5 border-l-2 border-[#155dfc]/40 overflow-hidden"
                                        >
                                            {coreServices.map((item, i) => (
                                                <Link 
                                                    key={i} 
                                                    href={item.href} 
                                                    onClick={() => setMobileOpen(false)} 
                                                    className="block text-base text-gray-300 hover:text-[#50a2ff] py-1.5 font-medium"
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
                                    type="button"
                                    onClick={() => setMobileAIServices(!mobileAIServices)}
                                    className="flex items-center justify-between w-full text-2xl font-bold text-[#50a2ff] cursor-pointer"
                                >
                                    <span className="flex items-center gap-2">
                                        <Sparkles size={20} /> AI Integration
                                    </span>
                                    <ChevronDown size={22} className={`transition-transform duration-300 text-[#50a2ff] ${mobileAIServices ? "rotate-180" : ""}`} />
                                </button>
                                <AnimatePresence>
                                    {mobileAIServices && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="mt-3 pl-4 space-y-4 border-l-2 border-[#155dfc]/40 overflow-hidden"
                                        >
                                            {aiCategories.map((cat, idx) => (
                                                <div key={idx} className="space-y-2">
                                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{cat.title}</p>
                                                    <div className="space-y-1.5 pl-2">
                                                        {cat.items.map((srv, sIdx) => (
                                                             <Link
                                                                key={sIdx}
                                                                href={srv.href}
                                                                onClick={() => setMobileOpen(false)}
                                                                className="block text-sm text-gray-300 hover:text-[#50a2ff] py-1 font-medium"
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
                                    className="text-2xl font-bold text-white hover:text-[#50a2ff] transition block"
                                >
                                    About Us
                                </Link>
                            </div>

                            <div>
                                <Link 
                                    href="/awards" 
                                    onClick={() => setMobileOpen(false)} 
                                    className="text-2xl font-bold text-white hover:text-[#50a2ff] transition block"
                                >
                                    Awards &amp; Recognition
                                </Link>
                            </div>

                            <div>
                                <Link 
                                    href="/news" 
                                    onClick={() => setMobileOpen(false)} 
                                    className="text-2xl font-bold text-white hover:text-[#50a2ff] transition block"
                                >
                                    News &amp; Insights
                                </Link>
                            </div>

                            <div>
                                <Link 
                                    href="/contact-us" 
                                    onClick={() => setMobileOpen(false)} 
                                    className="text-2xl font-bold text-white hover:text-[#50a2ff] transition block"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="p-6 border-t border-white/[0.08] bg-[#030712]">
                            <NoiseButton
                                onClick={() => {
                                    setMobileOpen(false);
                                    router.push("/contact-us");
                                }}
                                className="w-full text-base font-semibold"
                            >
                                <span>Schedule Free Consultation</span>
                            </NoiseButton>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}