'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Menu, X, ChevronDown, Sparkles, ArrowRight, 
    Globe, Smartphone, Layers, Palette, BarChart3, 
    ShieldCheck, Bot, Cpu, Network, MessageSquare, 
    BrainCircuit, Terminal, Activity, Zap, CheckCircle2 
} from "lucide-react";
import { NoiseButton } from "./ui/noise-background";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [desktopServices, setDesktopServices] = useState(false);
    const [desktopAIServices, setDesktopAIServices] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileAIOpen, setMobileAIOpen] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    const coreServices = [
        { label: "Web Engineering", href: "/services/web-development", desc: "Next.js, React & Scalable Cloud Microservices", icon: Globe },
        { label: "Accessibility Remediation", href: "/services/accessibility-compliance", desc: "WCAG 2.2, ADA, EAA, 508 & GIGW Code Fixes", icon: ShieldCheck },
        { label: "Mobile Apps (iOS & Android)", href: "/services/mobile-development", desc: "Flutter, React Native & Native Swift/Kotlin", icon: Smartphone },
        { label: "Enterprise CMS & SaaS", href: "/services/cms-solution", desc: "Headless CMS, Strapi, Sanity & Custom Backends", icon: Layers },
        { label: "UI/UX & Product Design", href: "/services/ui-ux", desc: "Design Systems, Tokens & Interactive Prototypes", icon: Palette },
        { label: "Performance & Growth", href: "/services/digital-marketing", desc: "Data-Driven SEO, Funnels & Conversion Engineering", icon: BarChart3 },
    ];

    const aiCategories = [
        {
            title: "Generative AI & LLMs",
            items: [
                { label: "Generative AI Development", href: "/services/ai-integration/generative-ai-development", icon: Sparkles, badge: "Popular" },
                { label: "LLM Engineering & Tuning", href: "/services/ai-integration/llm-development", icon: BrainCircuit },
                { label: "Generative AI Integration", href: "/services/ai-integration/generative-ai-integration", icon: Zap },
                { label: "ChatGPT & Claude API", href: "/services/ai-integration/chatgpt-integration", icon: MessageSquare },
                { label: "GenAI Strategy Consulting", href: "/services/ai-integration/generative-ai-consulting", icon: Activity },
            ]
        },
        {
            title: "Autonomous Agents",
            items: [
                { label: "AI Agent Networks", href: "/services/ai-integration/agent-development", icon: Network, badge: "New" },
                { label: "Enterprise Chatbots", href: "/services/ai-integration/chatbot-development", icon: Bot },
                { label: "Enterprise AI Infrastructure", href: "/services/ai-integration/enterprise-ai", icon: Cpu },
                { label: "AI-as-a-Service (AIaaS)", href: "/services/ai-integration/ai-as-a-service", icon: Terminal },
            ]
        },
        {
            title: "Machine Learning & Data",
            items: [
                { label: "ML Model Engineering", href: "/services/ai-integration/ml-model-engineering", icon: BrainCircuit },
                { label: "Custom ML Development", href: "/services/ai-integration/ml-development", icon: Activity },
                { label: "Data Science Consulting", href: "/services/ai-integration/ml-data-science-consulting", icon: BarChart3 },
                { label: "Strategic AI Consulting", href: "/services/ai-integration/ai-consulting", icon: Sparkles },
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
        <header className="sticky top-0 z-50 border-b border-gray-200/80 dark:border-white/[0.08] bg-white/90 dark:bg-[#030712]/90 backdrop-blur-xl transition-colors duration-200">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">

                {/* BRAND LOGO */}
                <div className="flex items-center flex-shrink-0">
                    <Link href="/" aria-label="Webintegratorz Technologies Home" className="flex items-center gap-2.5 group">
                        <div className="w-8 h-8 rounded-lg bg-[#155dfc] dark:bg-white flex items-center justify-center text-white dark:text-[#030712] font-black text-sm shadow-md group-hover:scale-105 transition-transform">
                            W
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white select-none">
                            Webintegratorz<span className="text-[#155dfc] dark:text-[#50a2ff]">.</span>
                        </span>
                    </Link>
                </div>

                {/* DESKTOP NAV */}
                <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Link 
                        href="/" 
                        className={`transition-colors ${pathname === "/" ? "text-[#155dfc] dark:text-[#50a2ff] font-semibold" : "hover:text-[#155dfc] dark:hover:text-[#50a2ff]"}`}
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
                            className={`flex items-center gap-1 transition-colors cursor-pointer ${desktopServices || (pathname?.startsWith("/services") && !pathname?.includes("ai-integration")) ? "text-[#155dfc] dark:text-[#50a2ff] font-semibold" : "hover:text-[#155dfc] dark:hover:text-[#50a2ff]"}`}
                        >
                            Services
                            <ChevronDown size={14} className={`transition-transform duration-200 ${desktopServices ? "rotate-180 text-[#155dfc] dark:text-[#50a2ff]" : ""}`} />
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
                                    <div className="w-[380px] bg-white dark:bg-[#030712] border border-gray-200 dark:border-white/[0.12] shadow-2xl rounded-2xl p-4 overflow-hidden relative">
                                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
                                        <div className="space-y-1.5 relative z-10">
                                            {coreServices.map((item, i) => (
                                                <Link 
                                                    key={i} 
                                                    href={item.href} 
                                                    className="group flex items-start gap-3.5 p-3 rounded-xl bg-gray-50/80 hover:bg-blue-50/80 dark:bg-white/[0.03] dark:hover:bg-[#155dfc]/10 border border-gray-100 dark:border-white/[0.05] hover:border-[#155dfc]/30 dark:hover:border-[#50a2ff]/30 transition-all"
                                                >
                                                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-[#155dfc]/15 border border-blue-200 dark:border-[#155dfc]/30 flex items-center justify-center text-[#155dfc] dark:text-[#50a2ff] group-hover:scale-110 group-hover:bg-[#155dfc] group-hover:text-white transition-all shrink-0 mt-0.5">
                                                        <item.icon size={18} />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-[#155dfc] dark:group-hover:text-[#50a2ff] transition-colors">{item.label}</p>
                                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-snug mt-0.5 font-normal">{item.desc}</p>
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
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 ${desktopAIServices || pathname?.includes("ai-integration") ? "text-[#155dfc] dark:text-[#50a2ff] font-semibold" : "hover:text-[#155dfc] dark:hover:text-[#50a2ff]"}`}
                        >
                            <Sparkles size={14} className="text-[#155dfc] dark:text-[#50a2ff]" />
                            AI Suite
                            <ChevronDown size={14} className={`transition-transform duration-200 ${desktopAIServices ? "rotate-180 text-[#155dfc] dark:text-[#50a2ff]" : ""}`} />
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
                                    <div className="w-[840px] bg-white dark:bg-[#030712] border border-gray-200 dark:border-white/[0.12] shadow-2xl rounded-2xl p-6 overflow-hidden relative">
                                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
                                        <div className="grid grid-cols-3 gap-4 relative z-10">
                                            {aiCategories.map((category, idx) => (
                                                <div key={idx} className="p-4 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/[0.06] space-y-3">
                                                    <div className="flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-white/[0.08]">
                                                        <div className="w-2 h-2 rounded-full bg-[#155dfc] dark:bg-[#50a2ff]" />
                                                        <p className="text-xs font-bold tracking-wider text-[#155dfc] dark:text-[#50a2ff] uppercase">{category.title}</p>
                                                    </div>
                                                    <div className="space-y-1">
                                                        {category.items.map((service, sIdx) => (
                                                            <Link
                                                                key={sIdx}
                                                                href={service.href}
                                                                className="group flex items-center justify-between py-2 px-2.5 rounded-lg hover:bg-blue-50/80 dark:hover:bg-[#155dfc]/15 border border-transparent hover:border-[#155dfc]/20 dark:hover:border-[#50a2ff]/20 transition-all"
                                                            >
                                                                <div className="flex items-center gap-2.5">
                                                                    <div className="w-7 h-7 rounded-lg bg-gray-200/80 dark:bg-white/[0.06] flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:text-white group-hover:bg-[#155dfc] transition-all">
                                                                        <service.icon size={14} />
                                                                    </div>
                                                                    <span className="text-[13px] font-medium text-gray-800 dark:text-gray-200 group-hover:text-[#155dfc] dark:group-hover:text-[#50a2ff] transition-colors">
                                                                        {service.label}
                                                                    </span>
                                                                </div>
                                                                {service.badge && (
                                                                    <span className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-100 dark:bg-[#155dfc]/20 text-[#155dfc] dark:text-[#50a2ff] border border-blue-200 dark:border-[#155dfc]/30">
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
                                        <div className="mt-4 p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] flex items-center justify-between relative z-10">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-[#155dfc]/15 border border-blue-200 dark:border-[#155dfc]/30 flex items-center justify-center text-[#155dfc] dark:text-[#50a2ff]">
                                                    <Zap size={18} />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold text-gray-900 dark:text-white">Enterprise AI Proof-of-Concept in 14 Days</p>
                                                    <p className="text-[11px] text-gray-600 dark:text-gray-400">Validate AI ROI before scaling production infrastructure.</p>
                                                </div>
                                            </div>
                                            <Link 
                                                href="/contact-us"
                                                className="px-4 py-2 rounded-full bg-[#155dfc] text-white text-xs font-semibold hover:bg-[#2563eb] transition-all flex items-center gap-1.5 shadow-md shadow-blue-500/20"
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
                        className={`transition-colors ${pathname === "/about" ? "text-[#155dfc] dark:text-[#50a2ff] font-semibold" : "hover:text-[#155dfc] dark:hover:text-[#50a2ff]"}`}
                    >
                        About
                    </Link>
                    <Link 
                        href="/awards" 
                        className={`transition-colors ${pathname === "/awards" ? "text-[#155dfc] dark:text-[#50a2ff] font-semibold" : "hover:text-[#155dfc] dark:hover:text-[#50a2ff]"}`}
                    >
                        Awards
                    </Link>
                    <Link 
                        href="/news" 
                        className={`transition-colors ${pathname === "/news" ? "text-[#155dfc] dark:text-[#50a2ff] font-semibold" : "hover:text-[#155dfc] dark:hover:text-[#50a2ff]"}`}
                    >
                        Insights
                    </Link>
                    <Link 
                        href="/contact-us" 
                        className={`transition-colors ${pathname === "/contact-us" ? "text-[#155dfc] dark:text-[#50a2ff] font-semibold" : "hover:text-[#155dfc] dark:hover:text-[#50a2ff]"}`}
                    >
                        Contact
                    </Link>
                </div>

                {/* CTA & THEME TOGGLE */}
                <div className="hidden xl:flex items-center gap-3">
                    <ThemeToggle />

                    <NoiseButton
                        onClick={() => router.push("/contact-us")}
                        className="px-5 py-2 text-sm font-semibold"
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
                        className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-all cursor-pointer"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileOpen ? <X size={22} className="text-[#155dfc] dark:text-[#50a2ff]" /> : <Menu size={22} />}
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
                        className="fixed inset-0 z-[999] bg-white dark:bg-[#030712]/98 backdrop-blur-2xl flex flex-col h-screen overflow-hidden text-gray-900 dark:text-white font-inter"
                    >
                        {/* Top Bar */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-white/[0.08]">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-[#155dfc] text-white flex items-center justify-center font-black text-sm shadow-md">
                                    W
                                </div>
                                <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Webintegratorz<span className="text-[#155dfc]">.</span>
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ThemeToggle />
                                <button
                                    type="button"
                                    onClick={() => setMobileOpen(false)}
                                    className="p-2 rounded-xl bg-gray-100 dark:bg-white/[0.06] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/[0.08]"
                                    aria-label="Close menu"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Mobile Scrollable Links */}
                        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                            <div className="space-y-2">
                                <Link
                                    href="/"
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-lg font-semibold text-gray-900 dark:text-white hover:text-[#155dfc]"
                                >
                                    Home
                                </Link>

                                {/* Mobile Services Accordion */}
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                        className="w-full flex items-center justify-between py-2 text-lg font-semibold text-gray-900 dark:text-white"
                                    >
                                        <span>Services</span>
                                        <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? "rotate-180 text-[#155dfc]" : ""}`} />
                                    </button>
                                    {mobileServicesOpen && (
                                        <div className="pl-4 pt-2 pb-3 space-y-3 border-l-2 border-blue-200 dark:border-[#155dfc]/30 mt-1">
                                            {coreServices.map((item, i) => (
                                                <Link
                                                    key={i}
                                                    href={item.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#155dfc]"
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Mobile AI Accordion */}
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => setMobileAIOpen(!mobileAIOpen)}
                                        className="w-full flex items-center justify-between py-2 text-lg font-semibold text-[#155dfc] dark:text-[#50a2ff]"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Sparkles size={16} />
                                            <span>AI Suite</span>
                                        </div>
                                        <ChevronDown size={18} className={`transition-transform ${mobileAIOpen ? "rotate-180 text-[#155dfc]" : ""}`} />
                                    </button>
                                    {mobileAIOpen && (
                                        <div className="pl-4 pt-2 pb-3 space-y-4 border-l-2 border-blue-200 dark:border-[#155dfc]/30 mt-1">
                                            {aiCategories.map((cat, idx) => (
                                                <div key={idx} className="space-y-1.5">
                                                    <p className="text-xs font-bold text-[#155dfc] uppercase">{cat.title}</p>
                                                    {cat.items.map((it, iIdx) => (
                                                        <Link
                                                            key={iIdx}
                                                            href={it.href}
                                                            onClick={() => setMobileOpen(false)}
                                                            className="block text-sm text-gray-700 dark:text-gray-300 hover:text-[#155dfc]"
                                                        >
                                                            {it.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <Link
                                    href="/about"
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-lg font-semibold text-gray-900 dark:text-white hover:text-[#155dfc]"
                                >
                                    About
                                </Link>
                                <Link
                                    href="/awards"
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-lg font-semibold text-gray-900 dark:text-white hover:text-[#155dfc]"
                                >
                                    Awards
                                </Link>
                                <Link
                                    href="/news"
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-lg font-semibold text-gray-900 dark:text-white hover:text-[#155dfc]"
                                >
                                    Insights
                                </Link>
                                <Link
                                    href="/contact-us"
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-lg font-semibold text-gray-900 dark:text-white hover:text-[#155dfc]"
                                >
                                    Contact
                                </Link>
                            </div>

                            <div className="pt-6 border-t border-gray-200 dark:border-white/[0.08]">
                                <NoiseButton
                                    onClick={() => {
                                        setMobileOpen(false);
                                        router.push("/contact-us");
                                    }}
                                    className="w-full text-center justify-center font-semibold"
                                >
                                    Hire Us — Start Project
                                </NoiseButton>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}