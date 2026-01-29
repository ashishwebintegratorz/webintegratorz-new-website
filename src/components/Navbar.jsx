"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Bot, MessageSquare, Cloud, LineChart, Sparkles, Building2, Brain, Layers, Cpu, Database, ChevronRight, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const [desktopServices, setDesktopServices] = useState(false);
    const [desktopAIServices, setDesktopAIServices] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServices, setMobileServices] = useState(false);
    const [mobileAIServices, setMobileAIServices] = useState(false);
    const [activeMobileAICategory, setActiveMobileAICategory] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    const coreServices = [
        { label: "Web Development", href: "/services/web-development", icon: Cpu, desc: "Custom web solutions" },
        { label: "Mobile Apps", href: "/services/mobile-development", icon: MessageSquare, desc: "Native & hybrid apps" },
        { label: "SaaS Solutions", href: "/services/cms-solution", icon: Database, desc: "Scalable cloud platforms" },
        { label: "UI/UX Design", href: "/services/ui-ux", icon: Sparkles, desc: "Intuitive user experiences" },
        { label: "Digital Marketing", href: "/services/digital-marketing", icon: LineChart, desc: "Strategic growth & SEO" },
    ];

    const aiCategories = [
        {
            title: "Generative AI & LLMs",
            items: [
                { label: "Gen AI Development", href: "/services/ai-integration/generative-ai-development", icon: Brain },
                { label: "LLM Development", href: "/services/ai-integration/llm-development", icon: Layers },
                { label: "Gen AI Integration", href: "/services/ai-integration/generative-ai-integration", icon: Cpu },
                { label: "ChatGPT Integration", href: "/services/ai-integration/chatgpt-integration", icon: Sparkles },
                { label: "Gen AI Consulting", href: "/services/ai-integration/generative-ai-consulting", icon: LineChart },
            ]
        },
        {
            title: "AI Solutions",
            items: [
                { label: "AI Agent Development", href: "/services/ai-integration/agent-development", icon: Bot },
                { label: "AI Chatbot Development", href: "/services/ai-integration/chatbot-development", icon: MessageSquare },
                { label: "Enterprise AI", href: "/services/ai-integration/enterprise-ai", icon: Building2 },
                { label: "AI-as-a-Service", href: "/services/ai-integration/ai-as-a-service", icon: Cloud },
            ]
        },
        {
            title: "ML & Data Science",
            items: [
                { label: "ML Model Engineering", href: "/services/ai-integration/ml-model-engineering", icon: Cpu },
                { label: "ML Development", href: "/services/ai-integration/ml-development", icon: Database },
                { label: "Data Science Consulting", href: "/services/ai-integration/ml-data-science-consulting", icon: LineChart },
                { label: "AI Consulting", href: "/services/ai-integration/ai-consulting", icon: Brain },
            ]
        }
    ];

    const allAIServices = aiCategories.flatMap(cat => cat.items);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    }, [mobileOpen]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-black/80 backdrop-blur-md text-white border-b border-white/10">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">

                {/* LOGO - Left Side */}
                <div className="flex items-center flex-shrink-0 -ml-4 xl:-ml-6">
                    <Link href="/" className="leading-tight">
                        <img src="/weblogo.webp" alt="Company Logo" className="w-auto h-12 xl:h-16 object-contain" />
                    </Link>
                </div>

                {/* DESKTOP NAV - Center/Right aligned */}
                <div className="hidden xl:flex items-center gap-8">
                    <nav className="flex items-center gap-8 text-sm font-medium">
                        <Link href="/" className="hover:text-[#25ccad] transition">HOME</Link>

                        {/* SERVICES DROPDOWN */}
                        <div
                            className="relative"
                            onMouseEnter={() => setDesktopServices(true)}
                            onMouseLeave={() => setDesktopServices(false)}
                        >
                            <div className="flex items-center gap-1 cursor-pointer hover:text-[#25ccad] transition">
                                SERVICES <ChevronDown size={14} />
                            </div>

                            <AnimatePresence>
                                {desktopServices && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 12, scale: 0.98 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute top-full -left-10 pt-4 z-50"
                                    >
                                        <div className="w-[300px] bg-[#050505]/95 backdrop-blur-2xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.7)] overflow-hidden rounded-2xl p-4">
                                            <div className="w-full space-y-1">
                                                {coreServices.map((item, i) => (
                                                    <Link key={i} href={item.href} className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all">
                                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#25ccad] group-hover:text-black transition-all">
                                                            <item.icon size={18} />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{item.label}</p>
                                                            <p className="text-[10px] text-white/30 group-hover:text-white/50 leading-tight">{item.desc}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* AI INTEGRATION DROPDOWN */}
                        <div
                            className="relative"
                            onMouseEnter={() => setDesktopAIServices(true)}
                            onMouseLeave={() => setDesktopAIServices(false)}
                        >
                            <div className="flex items-center gap-1 cursor-pointer hover:text-[#25ccad] transition">
                                AI INTEGRATION <ChevronDown size={14} />
                            </div>

                            <AnimatePresence>
                                {desktopAIServices && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 12, scale: 0.98 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute top-full -left-[350px] xl:-left-64 pt-4 z-50"
                                    >
                                        <div className="w-[760px] xl:w-[800px] bg-[#050505]/95 backdrop-blur-2xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.7)] overflow-hidden rounded-3xl p-6 xl:p-8">
                                            <div className="grid grid-cols-3 gap-6 xl:gap-8">
                                                {aiCategories.map((category, idx) => (
                                                    <div key={idx} className="space-y-4">
                                                        <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#25ccad] uppercase opacity-80">{category.title}</h4>
                                                        <div className="space-y-1">
                                                            {category.items.map((service, sIdx) => (
                                                                <Link
                                                                    key={sIdx}
                                                                    href={service.href}
                                                                    className="group flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-white/5 transition-all -ml-3"
                                                                >
                                                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#25ccad]/10 transition-all">
                                                                        <service.icon size={14} className="text-[#25ccad] group-hover:text-white transition-colors" />
                                                                    </div>
                                                                    <span className="text-[13px] font-medium text-white/50 group-hover:text-white transition-colors">
                                                                        {service.label}
                                                                    </span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/about" className="hover:text-[#25ccad] transition">ABOUT</Link>
                        <Link href="/news" className="hover:text-[#25ccad] transition">NEWS</Link>
                        <Link href="/contact-us" className="hover:text-[#25ccad] transition">CONTACT US</Link>
                    </nav>

                    {/* GET STARTED BUTTON */}
                    <button
                        type="button"
                        onClick={() => router.push("/contact-us")}
                        className="px-6 py-3 bg-[#25ccad] hover:bg-[#1fa98d] rounded-lg text-black font-medium transition whitespace-nowrap"
                    >
                        Get Started
                    </button>
                </div>

                {/* MOBILE HAMBURGER */}
                <div className="xl:hidden flex items-center">
                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="p-2 rounded-lg hover:bg-white/10 transition"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* MOBILE FULLSCREEN MENU */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex flex-col h-screen overflow-hidden"
                    >
                        {/* Top Bar with Logo and Close */}
                        <div className="px-6 py-6 flex items-center justify-between border-b border-white/10">
                            <Link href="/" onClick={() => setMobileOpen(false)}>
                                <img src="/weblogo.webp" alt="Logo" className="h-12 w-auto object-contain" />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileOpen(false)}
                                className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full border border-white/10 active:scale-90 transition-transform"
                            >
                                <X size={24} className="text-[#25ccad]" />
                            </button>
                        </div>

                        {/* Navigation Links Area */}
                        <div className="flex-1 px-8 py-12 overflow-y-auto">
                            <motion.nav
                                initial="hidden"
                                animate="show"
                                variants={{
                                    show: { transition: { staggerChildren: 0.1 } }
                                }}
                                className="space-y-8"
                            >
                                <motion.div variants={{ hidden: { x: 20, opacity: 0 }, show: { x: 0, opacity: 1 } }}>
                                    <Link href="/" onClick={() => setMobileOpen(false)} className="text-3xl md:text-5xl font-bold text-white active:text-[#25ccad] transition block">
                                        Home
                                    </Link>
                                </motion.div>

                                <motion.div variants={{ hidden: { x: 20, opacity: 0 }, show: { x: 0, opacity: 1 } }}>
                                    <button
                                        onClick={() => setMobileServices(!mobileServices)}
                                        className="flex items-center justify-between w-full text-3xl md:text-5xl font-bold text-white group"
                                    >
                                        Services
                                        <ChevronDown size={28} className={`transition-transform duration-500 text-[#25ccad] ${mobileServices ? "rotate-180" : ""}`} />
                                    </button>
                                    <AnimatePresence>
                                        {mobileServices && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="ml-4 mt-6 space-y-5 border-l-2 border-[#25ccad]/30 pl-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:space-y-0"
                                            >
                                                {coreServices.map((item, i) => (
                                                    <Link key={i} href={item.href} onClick={() => setMobileOpen(false)} className="block text-xl md:text-2xl font-medium text-white/60 active:text-[#25ccad]">
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                {/* Mobile AI Integration Top Level */}
                                <motion.div variants={{ hidden: { x: 20, opacity: 0 }, show: { x: 0, opacity: 1 } }}>
                                    <button
                                        onClick={() => setMobileAIServices(!mobileAIServices)}
                                        className="flex items-center justify-between w-full text-3xl md:text-5xl font-bold text-white group"
                                    >
                                        AI Integration
                                        <ChevronDown size={28} className={`transition-transform duration-500 text-[#25ccad] ${mobileAIServices ? "rotate-180" : ""}`} />
                                    </button>
                                    <AnimatePresence>
                                        {mobileAIServices && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="ml-4 mt-6 space-y-8 border-l-2 border-[#25ccad]/30 pl-6"
                                            >
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                                    {aiCategories.map((category, cIdx) => (
                                                        <div key={cIdx} className="space-y-4">
                                                            <div>
                                                                <p className="text-xs font-bold text-[#25ccad] uppercase tracking-widest opacity-60 mb-2">{category.title}</p>
                                                            </div>
                                                            <div className="space-y-3">
                                                                {category.items.map((service, idx) => (
                                                                    <Link
                                                                        key={idx}
                                                                        href={service.href}
                                                                        onClick={() => setMobileOpen(false)}
                                                                        className="flex items-center gap-3 py-1 text-lg font-medium text-white/50 active:text-[#25ccad] transition-colors"
                                                                    >
                                                                        {service.label}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                <motion.div variants={{ hidden: { x: 20, opacity: 0 }, show: { x: 0, opacity: 1 } }}>
                                    <Link href="/about" onClick={() => setMobileOpen(false)} className="text-3xl md:text-5xl font-bold text-white active:text-[#25ccad] transition block">
                                        About
                                    </Link>
                                </motion.div>

                                <motion.div variants={{ hidden: { x: 20, opacity: 0 }, show: { x: 0, opacity: 1 } }}>
                                    <Link href="/news" onClick={() => setMobileOpen(false)} className="text-3xl md:text-5xl font-bold text-white active:text-[#25ccad] transition block">
                                        News
                                    </Link>
                                </motion.div>

                                <motion.div variants={{ hidden: { x: 20, opacity: 0 }, show: { x: 0, opacity: 1 } }}>
                                    <Link href="/contact-us" onClick={() => setMobileOpen(false)} className="text-3xl md:text-5xl font-bold text-[#25ccad] block">
                                        Contact Us
                                    </Link>
                                </motion.div>
                            </motion.nav>
                        </div>

                        {/* Bottom Contact/Action Area */}
                        <div className="p-8 border-t border-white/10 bg-white/5 backdrop-blur-md">
                            <button
                                type="button"
                                onClick={() => {
                                    setMobileOpen(false);
                                    router.push("/contact-us");
                                }}
                                className="w-full py-5 bg-[#25ccad] rounded-xl text-black font-bold text-lg shadow-[0_10px_30px_rgba(37,204,173,0.3)] active:scale-95 transition-all"
                            >
                                Get Started Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

function ServiceItem({ href, label, active, delay = 0 }) {
    return (
        <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay }}
            className="border-b border-white/10"
        >
            <Link
                href={href}
                className={`block px-5 py-3 text-sm font-medium ${active ? "text-[#25ccad]" : "text-white"
                    } hover:bg-[#25ccad]/20 hover:text-[#25ccad] transition`}
            >
                {label}
            </Link>
        </motion.li>
    );
}

function MobileItem({ href, label, close }) {
    return (
        <Link href={href} onClick={() => close(false)} className="block hover:text-[#25ccad] transition">
            {label}
        </Link>
    );
}