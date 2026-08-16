"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
    ChevronDown, Menu, X, Bot, MessageSquare, Cloud, LineChart, 
    Sparkles, Building2, Brain, Layers, Cpu, Database, ArrowRight, 
    ShieldCheck, Zap, Globe, Award, CheckCircle2, ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WiLogo from "./WiLogo";

export default function Navbar({ mobileOpen, setMobileOpen }) {
    const router = useRouter();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [desktopServices, setDesktopServices] = useState(false);
    const [desktopAIServices, setDesktopAIServices] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileAIOpen, setMobileAIOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setDesktopServices(false);
        setDesktopAIServices(false);
    }, [pathname, setMobileOpen]);

    const coreServices = [
        { label: "Web Development", href: "/services/web-development", icon: Globe, desc: "High-performance full-stack web applications" },
        { label: "Mobile App Development", href: "/services/mobile-development", icon: Cpu, desc: "Native & cross-platform iOS & Android apps" },
        { label: "UI / UX Design", href: "/services/ui-ux", icon: Layers, desc: "Intuitive, high-converting product experiences" },
        { label: "CMS Solutions", href: "/services/cms-solution", icon: Database, desc: "Headless & enterprise content systems" },
        { label: "Digital Marketing", href: "/services/digital-marketing", icon: LineChart, desc: "Data-driven SEO & performance marketing" },
        { label: "Accessibility Compliance", href: "/services/accessibility-compliance", icon: ShieldCheck, desc: "WCAG 2.2 AAA & ADA enterprise audits" },
    ];

    const aiCategories = [
        {
            title: "Generative AI",
            items: [
                { label: "Gen AI Development", href: "/services/ai-integration/generative-ai-development", icon: Sparkles },
                { label: "LLM Fine-Tuning", href: "/services/ai-integration/llm-development", icon: Brain, badge: "Popular" },
                { label: "Gen AI Integration", href: "/services/ai-integration/generative-ai-integration", icon: Bot },
                { label: "Gen AI Consulting", href: "/services/ai-integration/generative-ai-consulting", icon: MessageSquare }
            ]
        },
        {
            title: "Agents & RAG",
            items: [
                { label: "AI Agent Development", href: "/services/ai-integration/ai-agent-development", icon: Bot, badge: "Hot" },
                { label: "RAG Pipeline Systems", href: "/services/ai-integration/rag-development", icon: Database },
                { label: "Enterprise AI Solutions", href: "/services/ai-integration/enterprise-ai-solutions", icon: Building2 },
                { label: "Custom Model Dev", href: "/services/ai-integration/custom-ai-models", icon: Cpu }
            ]
        },
        {
            title: "Automation",
            items: [
                { label: "AI App Development", href: "/services/ai-integration/ai-app-development", icon: Sparkles },
                { label: "Workflow Automation", href: "/services/ai-integration/ai-workflow-automation", icon: Zap },
                { label: "AI Integration Services", href: "/services/ai-integration", icon: Layers },
                { label: "Predictive Analytics", href: "/services/ai-integration/predictive-analytics", icon: LineChart }
            ]
        }
    ];

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    }, [mobileOpen]);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-3 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_2px_15px_-3px_rgba(15,23,42,0.06)]" : "py-4 bg-white/80 backdrop-blur-md border-b border-slate-100"}`}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* BRAND LOGO */}
                    <div className="flex items-center flex-shrink-0">
                        <Link href="/" aria-label="Webintegratorz Technologies Home" className="flex items-center gap-3 group">
                            <WiLogo size="md" variant="light" />
                        </Link>
                    </div>

                    {/* DESKTOP NAV - STRIPE MINIMALIST */}
                    <nav aria-label="Primary Navigation" className="hidden xl:flex items-center gap-1 text-[13px] font-semibold tracking-wide">
                        <Link 
                            href="/" 
                            className={`px-3.5 py-2 rounded-xl transition-all duration-200 ${pathname === "/" ? "text-[#635BFF] bg-indigo-50/70 font-bold" : "text-slate-600 hover:text-[#0A2540] hover:bg-slate-100/70"}`}
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
                                className={`flex items-center gap-1 px-3.5 py-2 rounded-xl transition-all duration-200 cursor-pointer ${desktopServices || (pathname?.startsWith("/services") && !pathname?.includes("ai-integration")) ? "text-[#635BFF] bg-indigo-50/70 font-bold" : "text-slate-600 hover:text-[#0A2540] hover:bg-slate-100/70"}`}
                            >
                                Services
                                <ChevronDown size={14} className={`transition-transform duration-200 ${desktopServices ? "rotate-180 text-[#635BFF]" : ""}`} />
                            </button>

                            <AnimatePresence>
                                {desktopServices && (
                                    <motion.div
                                        id="desktop-services-dropdown"
                                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                        transition={{ duration: 0.15, ease: "easeOut" }}
                                        className="absolute top-full left-0 pt-2 z-50"
                                    >
                                        <div className="w-[380px] bg-white border border-slate-200 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.12)] rounded-2xl p-4 overflow-hidden">
                                            <div className="space-y-1">
                                                {coreServices.map((item, i) => (
                                                    <Link 
                                                        key={i} 
                                                        href={item.href} 
                                                        className="group flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all"
                                                    >
                                                        <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#635BFF] group-hover:bg-[#635BFF] group-hover:text-white transition-all shrink-0 mt-0.5">
                                                            <item.icon size={17} />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-bold text-slate-900 group-hover:text-[#635BFF] transition-colors">{item.label}</p>
                                                            <p className="text-xs text-slate-500 leading-snug mt-0.5">{item.desc}</p>
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
                                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all duration-200 cursor-pointer ${desktopAIServices || pathname?.includes("ai-integration") ? "text-[#635BFF] bg-indigo-50/70 font-bold" : "text-slate-600 hover:text-[#0A2540] hover:bg-slate-100/70"}`}
                            >
                                <Sparkles size={13} className="text-[#635BFF]" />
                                AI Suite
                                <ChevronDown size={14} className={`transition-transform duration-200 ${desktopAIServices ? "rotate-180 text-[#635BFF]" : ""}`} />
                            </button>

                            <AnimatePresence>
                                {desktopAIServices && (
                                    <motion.div
                                        id="desktop-ai-dropdown"
                                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                        transition={{ duration: 0.15, ease: "easeOut" }}
                                        className="absolute top-full -left-28 xl:-left-16 pt-2 z-50"
                                    >
                                        <div className="w-[800px] bg-white border border-slate-200 shadow-[0_25px_70px_-15px_rgba(15,23,42,0.14)] rounded-2xl p-5 overflow-hidden">
                                            <div className="grid grid-cols-3 gap-4">
                                                {aiCategories.map((category, idx) => (
                                                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-2.5">
                                                        <div className="flex items-center gap-2 pb-2 border-b border-slate-200/80">
                                                            <div className="w-2 h-2 rounded-full bg-[#635BFF]" />
                                                            <p className="text-xs font-bold tracking-wider text-[#0A2540] uppercase">{category.title}</p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            {category.items.map((service, sIdx) => (
                                                                <Link
                                                                    key={sIdx}
                                                                    href={service.href}
                                                                    className="group flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-white border border-transparent hover:border-slate-200/80 transition-all"
                                                                >
                                                                    <div className="flex items-center gap-2">
                                                                        <div className="w-6 h-6 rounded-md bg-indigo-50 flex items-center justify-center text-[#635BFF] group-hover:bg-[#635BFF] group-hover:text-white transition-all">
                                                                            <service.icon size={13} />
                                                                        </div>
                                                                        <span className="text-[12.5px] font-semibold text-slate-700 group-hover:text-[#0A2540] transition-colors">
                                                                            {service.label}
                                                                        </span>
                                                                    </div>
                                                                    {service.badge && (
                                                                        <span className="text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded bg-indigo-100 text-[#635BFF]">
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
                                            <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-slate-900 to-[#0A2540] text-white flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#00D4FF]">
                                                        <Zap size={16} />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold text-white">Enterprise AI Proof-of-Concept in 14 Days</p>
                                                        <p className="text-[11px] text-slate-300">Validate AI ROI before scaling production infrastructure.</p>
                                                    </div>
                                                </div>
                                                <Link 
                                                    href="/contact-us"
                                                    className="px-3.5 py-1.5 rounded-lg bg-[#635BFF] text-white text-xs font-bold hover:bg-[#5349e0] transition-all flex items-center gap-1.5 shadow-sm"
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
                            className={`px-3.5 py-2 rounded-xl transition-all duration-200 ${pathname === "/about" ? "text-[#635BFF] bg-indigo-50/70 font-bold" : "text-slate-600 hover:text-[#0A2540] hover:bg-slate-100/70"}`}
                        >
                            About
                        </Link>
                        <Link 
                            href="/awards" 
                            className={`px-3.5 py-2 rounded-xl transition-all duration-200 ${pathname === "/awards" ? "text-[#635BFF] bg-indigo-50/70 font-bold" : "text-slate-600 hover:text-[#0A2540] hover:bg-slate-100/70"}`}
                        >
                            Awards
                        </Link>
                        <Link 
                            href="/news" 
                            className={`px-3.5 py-2 rounded-xl transition-all duration-200 ${pathname === "/news" ? "text-[#635BFF] bg-indigo-50/70 font-bold" : "text-slate-600 hover:text-[#0A2540] hover:bg-slate-100/70"}`}
                        >
                            Insights
                        </Link>
                        <Link 
                            href="/contact-us" 
                            className={`px-3.5 py-2 rounded-xl transition-all duration-200 ${pathname === "/contact-us" ? "text-[#635BFF] bg-indigo-50/70 font-bold" : "text-slate-600 hover:text-[#0A2540] hover:bg-slate-100/70"}`}
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* CTA BUTTON - STRIPE STYLE HIGH CONTRAST */}
                    <div className="hidden xl:flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => router.push("/contact-us")}
                            className="px-5 py-2.5 rounded-xl bg-[#0A2540] text-white hover:bg-[#635BFF] text-sm font-bold shadow-sm transition-all duration-200 hover:shadow-md active:scale-95 flex items-center gap-2 cursor-pointer touch-manipulation"
                        >
                            <span>Book a Call</span>
                            <ArrowRight size={14} />
                        </button>
                    </div>

                    {/* MOBILE HAMBURGER TOGGLE */}
                    <div className="xl:hidden flex items-center">
                        <button
                            type="button"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-black hover:bg-slate-200 transition-all"
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        >
                            {mobileOpen ? <X size={20} className="text-slate-900" /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE FULLSCREEN MENU */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[999] bg-white flex flex-col h-screen overflow-hidden text-slate-900"
                    >
                        {/* Top Bar */}
                        <div className="px-6 py-4 flex items-center justify-between border-b border-slate-200">
                            <Link href="/" onClick={() => setMobileOpen(false)} aria-label="Home">
                                <WiLogo size="sm" variant="light" />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileOpen(false)}
                                className="w-9 h-9 flex items-center justify-center bg-slate-100 rounded-xl border border-slate-200"
                                aria-label="Close menu"
                            >
                                <X size={18} className="text-slate-700" />
                            </button>
                        </div>

                        {/* Navigation Links List */}
                        <div className="flex-1 px-6 py-6 overflow-y-auto space-y-4">
                            <Link
                                href="/"
                                onClick={() => setMobileOpen(false)}
                                className={`block text-lg font-bold py-2 ${pathname === "/" ? "text-[#635BFF]" : "text-slate-800"}`}
                            >
                                Home
                            </Link>

                            {/* Mobile Services Accordion */}
                            <div>
                                <button
                                    type="button"
                                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                    className="flex items-center justify-between w-full text-lg font-bold py-2 text-slate-800"
                                >
                                    <span>Services</span>
                                    <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? "rotate-180 text-[#635BFF]" : ""}`} />
                                </button>
                                {mobileServicesOpen && (
                                    <div className="pl-4 py-2 space-y-2 border-l-2 border-slate-200 mt-1">
                                        {coreServices.map((service, idx) => (
                                            <Link
                                                key={idx}
                                                href={service.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="block text-sm font-semibold text-slate-600 hover:text-[#635BFF] py-1.5"
                                            >
                                                {service.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Mobile AI Suite Accordion */}
                            <div>
                                <button
                                    type="button"
                                    onClick={() => setMobileAIOpen(!mobileAIOpen)}
                                    className="flex items-center justify-between w-full text-lg font-bold py-2 text-slate-800"
                                >
                                    <span className="flex items-center gap-2">
                                        <Sparkles size={16} className="text-[#635BFF]" />
                                        AI Suite
                                    </span>
                                    <ChevronDown size={18} className={`transition-transform ${mobileAIOpen ? "rotate-180 text-[#635BFF]" : ""}`} />
                                </button>
                                {mobileAIOpen && (
                                    <div className="pl-4 py-2 space-y-3 border-l-2 border-indigo-200 mt-1">
                                        {aiCategories.map((cat, idx) => (
                                            <div key={idx} className="space-y-1.5">
                                                <p className="text-xs font-bold uppercase tracking-wider text-[#0A2540]">{cat.title}</p>
                                                {cat.items.map((item, iIdx) => (
                                                    <Link
                                                        key={iIdx}
                                                        href={item.href}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="block text-sm font-semibold text-slate-600 hover:text-[#635BFF] py-1"
                                                    >
                                                        {item.label}
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
                                className={`block text-lg font-bold py-2 ${pathname === "/about" ? "text-[#635BFF]" : "text-slate-800"}`}
                            >
                                About
                            </Link>
                            <Link
                                href="/awards"
                                onClick={() => setMobileOpen(false)}
                                className={`block text-lg font-bold py-2 ${pathname === "/awards" ? "text-[#635BFF]" : "text-slate-800"}`}
                            >
                                Awards
                            </Link>
                            <Link
                                href="/news"
                                onClick={() => setMobileOpen(false)}
                                className={`block text-lg font-bold py-2 ${pathname === "/news" ? "text-[#635BFF]" : "text-slate-800"}`}
                            >
                                Insights
                            </Link>
                            <Link
                                href="/contact-us"
                                onClick={() => setMobileOpen(false)}
                                className={`block text-lg font-bold py-2 ${pathname === "/contact-us" ? "text-[#635BFF]" : "text-slate-800"}`}
                            >
                                Contact
                            </Link>

                            <div className="pt-6 border-t border-slate-200">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setMobileOpen(false);
                                        router.push("/contact-us");
                                    }}
                                    className="w-full py-3.5 rounded-xl bg-[#0A2540] text-white font-bold text-base shadow-sm flex items-center justify-center gap-2"
                                >
                                    <span>Book a Discovery Call</span>
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}