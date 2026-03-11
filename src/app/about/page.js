'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Globe, Brain, Layers, Users, Sparkles, ArrowRight
} from 'lucide-react';

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        setIsVisible(true);
    }, []);

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
        <div className="contact-page-wrapper mt-12">
            <div className="decorative-circle circle-1"></div>
            <div className="decorative-circle circle-2"></div>

            <div className="contact-container">
                <header className={`contact-header ${isVisible ? 'visible' : ''}`}>
                    <div className="contact-logo">
                        <div className="text-3xl font-black tracking-tighter text-[#1a9b8e] lowercase logo-text">webintegratorz</div>
                        <div className="contact-tagline">We Innovate, Build and Excel</div>
                    </div>
                    <h1 className="text-4xl xs:text-5xl md:text-6xl font-extrabold px-4 text-white">Let&apos;s Build Something Amazing Together</h1>
                    <p className="contact-subtitle px-4 mt-4">
                        We&apos;re here to transform your vision into reality with cutting-edge web, mobile, SaaS, and AI/ML solutions.
                    </p>
                </header>

                <div className="contact-grid">
                    <div className={`contact-card ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.1s' }}>
                        <div className="contact-icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
                            </svg>
                        </div>
                        <h2 className="contact-card-title">Head Quarter</h2>
                        <div className="contact-card-content">
                            <p><strong>India</strong></p>
                            <p>LG 19, Mangal City, AB Rd<br />Scheme 54, PU4, Indore<br />Madhya Pradesh 452010</p>
                        </div>
                    </div>

                    <div className={`contact-card ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                        <div className="contact-icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor" />
                            </svg>
                        </div>
                        <h2 className="contact-card-title">Email Address</h2>
                        <div className="contact-card-content">
                            <p><strong>Sales Inquiries</strong></p>
                            <p><a href="mailto:sales@webintegratorz.com">info@webintegratorz.com</a></p>
                            <p style={{ marginTop: '16px' }}><strong>Support & Chat</strong></p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                                <a href="tel:+918989944488" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#25ccad', fontWeight: '800', textDecoration: 'none' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
                                    </svg>
                                    8989944488
                                </a>
                                <a href="https://wa.me/918989944488" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#25ccad', fontWeight: '800', textDecoration: 'none' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`contact-card ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.3s' }}>
                        <div className="contact-icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor" />
                            </svg>
                        </div>
                        <h2 className="contact-card-title">Business Talk</h2>
                        <div className="contact-card-content">
                            <p><strong>Direct Lines</strong></p>
                            <p><a href="tel:+918989944488">+91 8989944488</a></p>
                            <p><a href="tel:+919131640479">+91 9131640479</a></p>
                            <p style={{ marginTop: '12px', color: 'var(--contact-gray)', fontSize: '14px' }}>
                                Available Mon-Fri, 9:00 AM - 5:00 PM IST<br />
                                (2nd & 4th Sat Off)
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`contact-info-section ${isVisible ? 'visible' : ''} !p-6 md:!p-12`} style={{ animationDelay: '0.4s' }}>
                    <div className="contact-description !text-base md:!text-lg leading-relaxed">
                        <strong>About Webintegratorz Technologies:</strong> Your Trusted Partner for Web, Mobile, SaaS, and AI/ML Solutions. We specialize in crafting cutting-edge web and mobile applications, SaaS platforms, and AI/ML solutions. Based in India, we deliver innovation-driven services tailored to meet your business needs.
                    </div>

                    <div className="contact-info-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        <div className="contact-info-item">
                            <div className="contact-info-label">Business Hours</div>
                            <div className="contact-info-value !text-sm md:!text-base">
                                Monday - Friday<br className="sm:hidden" />
                                <span className="opacity-80">(2nd & 4th Sat Off)</span>
                                <br />09:00 AM - 5:00 PM IST
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-label">Founded</div>
                            <div className="contact-info-value">2019</div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-label">Team Size</div>
                            <div className="contact-info-value">10-50 Professionals</div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-label">Legal Name</div>
                            <div className="contact-info-value">Webintegratorz Technologies</div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-label">Office Address</div>
                            <div className="contact-info-value">70 Mahalaxmi Nagar<br />Indore 452010</div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-label">Customer Service</div>
                            <div className="contact-info-value">
                                <a href="tel:+918989944488">+91 8989944488</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TECHNICAL EXPERTISE SECTION */}
                <div className={`contact-header ${isVisible ? 'visible' : ''} mt-20`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#25ccad]/10 border border-[#25ccad]/20 mb-6">
                        <Sparkles className="w-4 h-4 text-[#25ccad]" />
                        <span className="text-[#25ccad] text-xs font-bold tracking-widest uppercase">Deep Technical Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tighter text-white">
                        Engineering the <span className="text-[#25ccad]">Future</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
                    {/* Tabs */}
                    <div className="lg:col-span-4 space-y-4">
                        {expertiseData.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveSection(item.id)}
                                className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-500 group relative overflow-hidden ${activeSection === item.id
                                    ? "bg-white border-[#25ccad] shadow-[0_20px_40px_rgba(37,204,173,0.1)]"
                                    : "bg-white/5 border-white/10 hover:border-[#25ccad]/40 hover:bg-white/10"
                                    }`}
                            >
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className={`p-3 rounded-xl transition-all duration-500 ${activeSection === item.id ? "bg-[#25ccad] text-white shadow-lg shadow-[#25ccad]/20" : "bg-white/10 text-white/40 group-hover:text-[#25ccad]"
                                        }`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-base md:text-lg font-bold transition-colors ${activeSection === item.id ? "text-slate-900" : "text-white/40 group-hover:text-white"
                                            }`}>
                                            {item.title}
                                        </h3>
                                        <p className="text-[10px] text-[#25ccad] uppercase tracking-widest mt-1 font-bold">{item.subtitle}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Content area */}
                    <div className="lg:col-span-8 bg-white border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-xl relative overflow-hidden">
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
                                    <div className="flex items-center gap-3 text-[#25ccad] text-xs font-bold tracking-widest uppercase">
                                        <Layers className="w-4 h-4" />
                                        Expertise Deep-Dive
                                    </div>
                                    <h3 className="text-2xl md:text-5xl font-bold leading-tight text-slate-900 tracking-tight">
                                        {expertiseData[activeSection].title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
                                        {expertiseData[activeSection].description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-slate-100">
                                    <div className="space-y-6">
                                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Core Deliverables</h4>
                                        <ul className="space-y-4">
                                            {expertiseData[activeSection].details.map((detail, i) => (
                                                <li key={i} className="flex items-start gap-4 group">
                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#25ccad]" />
                                                    <span className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-8 h-full flex flex-col justify-end pb-4">
                                        <div className="bg-slate-50 rounded-3xl border border-slate-100 p-6 md:p-8 space-y-6 md:space-y-8">
                                            {expertiseData[activeSection].stats.map((stat, i) => (
                                                <div key={i}>
                                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">{stat.label}</p>
                                                    <p className="text-4xl md:text-5xl font-black text-[#25ccad]">{stat.value}</p>
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
                <div id="faq" className={`contact-header ${isVisible ? 'visible' : ''} mt-20`}>
                    <h2 className="text-4xl md:text-5xl font-extrabold px-4 text-white">Frequently Asked Questions</h2>
                    <p className="contact-subtitle px-4 mt-4 !text-white/60">Common questions about our services and global delivery.</p>
                </div>

                <div className="contact-grid mt-12">
                    {[
                        { q: "Is Webintegratorz Technologies a top IT company in India?", a: "Yes. Webintegratorz is recognized as a top IT company in India due to its AI-first engineering, MERN stack expertise, enterprise-grade security standards, and proven global delivery." },
                        { q: "What IT outsourcing services do you offer?", a: "We provide end-to-end IT outsourcing including custom software development, AI/ML solutions, mobile apps, and dedicated offshore development teams." },
                        { q: "Do you provide AI development services for global enterprises?", a: "Absolutely. We specialize in Generative AI, autonomous AI agents, predictive analytics, and custom machine learning models tailored for global markets." },
                        { q: "Can I hire dedicated developers from India?", a: "Yes. We offer dedicated React developers, AI engineers, and full-stack teams with flexible engagement models and complete IP protection." },
                        { q: "Which countries do you serve?", a: "We serve clients globally, with a strong presence in UAE, USA, Europe, Japan, and India, ensuring time-zone aligned collaboration." },
                        { q: "What makes your engineering approach different?", a: "We focus on scalable architecture and AI-readiness. We build products that handle traffic spikes and growth without constant reengineering." },
                        { q: "Can startups work with Webintegratorz?", a: "Yes. We partner with early-stage startups, funded scale-ups, and enterprises, providing scalable engineering solutions based on growth stage." },
                        { q: "How do you ensure data security?", a: "We follow secure coding practices, military-grade encryption, access control, and enterprise-grade NDAs to protect your intellectual property." },
                        { q: "How can I get a project estimate?", a: "You can reach us via email or WhatsApp for a free technical consultation. Our architects will help define your requirements and provide an estimate." }
                    ].map((faq, i) => (
                        <div key={i} className={`contact-card ${isVisible ? 'visible' : ''}`} style={{ animationDelay: `${0.1 * (i + 1)}s` }}>
                            <div className="contact-icon-wrapper">
                                <span className="text-2xl font-bold text-white">?</span>
                            </div>
                            <h2 className="contact-card-title">{faq.q}</h2>
                            <div className="contact-card-content">
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}