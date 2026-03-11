"use client";

import React, { useEffect, useState } from "react";
import { Shield, Lock, Eye, FileText, Smartphone, Globe, Mail, ChevronRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const PrivacyPolicy = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const lastUpdated = "January 12, 2026";

    const sections = [
        {
            icon: Eye,
            title: "Information We Collect",
            content: "We collect information you provide directly to us when you request a consultation, sign up for our newsletter, or contact us through our website. This may include your name, email address, phone number, and any details about your project or business needs."
        },
        {
            icon: Globe,
            title: "How We Use Your Data",
            content: "Your data is used specifically to provide, maintain, and improve our IT services. This includes responding to your inquiries, processing transactions, sending administrative information, and keeping you updated about our latest technological innovations and news."
        },
        {
            icon: Lock,
            title: "Data Protection & Security",
            content: "We implement industry-standard security measures to maintain the safety of your personal information. We use advanced encryption protocols for data transmission and store all sensitive information on secure, restricted-access servers."
        },
        {
            icon: Smartphone,
            title: "Cookies & Tracking",
            content: "Webintegratorz uses cookies and similar tracking technologies to analyze trends, administer the website, and track users' movements around the site. You can control the use of cookies at the individual browser level."
        },
        {
            icon: FileText,
            title: "Third-Party Disclosure",
            content: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties unless we provide you with advance notice. This does not include trusted partners who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential."
        },
        {
            icon: Shield,
            title: "Your Privacy Rights",
            content: "Depending on your location, you may have rights under the GDPR, CCPA, or other local privacy laws. These include the right to access, correct, or delete your personal data that we maintain. Contact us directly to exercise these rights."
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 font-inter overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#25ccad] opacity-[0.05] rounded-full blur-[120px] -z-0" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#25ccad] opacity-[0.03] rounded-full blur-[100px] -z-0" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />
                {/* Header Section */}
                <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#25ccad]/10 text-[#25ccad] rounded-full mb-8 text-xs font-black tracking-widest uppercase border border-[#25ccad]/20">
                        <Lock className="w-3.5 h-3.5" />
                        Security First
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
                        Privacy <span className="text-[#25ccad]">Policy</span>
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-white/50 text-sm font-medium mb-16">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#25ccad]" />
                            Last Updated: {lastUpdated}
                        </div>
                        <div className="hidden md:block w-1 h-1 bg-white/10 rounded-full" />
                        <span>Webintegratorz Technologies</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-12">
                    <div className={`prose prose-invert max-w-none transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="text-xl text-white/70 leading-relaxed font-medium">
                            At Webintegratorz Technologies, we take your privacy seriously. This document outlines how we collect, store, and process your personal information while you interact with our services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {sections.map((section, idx) => (
                            <div
                                key={idx}
                                className={`group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#25ccad]/30 transition-all duration-500 hover:bg-[#25ccad]/5 transition-all duration-1000 delay-${300 + (idx * 100)} transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            >
                                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#25ccad]/10 text-[#25ccad] mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <section.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-[#25ccad] transition-colors">
                                    {section.title}
                                </h3>
                                <p className="text-white/60 leading-relaxed text-base font-medium">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Contact Section Box */}
                    <div className={`mt-24 p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-[#25ccad]/20 to-transparent border border-[#25ccad]/20 relative overflow-hidden transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Questions about Privacy?</h2>
                                <p className="text-white/70 text-lg max-w-md font-medium">
                                    Our Data Protection Officer is available to answer any questions or concerns you may have.
                                </p>
                            </div>

                            <a
                                href="mailto:info@webintegratorz.com"
                                className="group flex items-center gap-4 px-10 py-5 bg-[#25ccad] text-black font-black text-lg rounded-[1.5rem] hover:shadow-[0_20px_40px_rgba(37,204,173,0.3)] transition-all duration-500 hover:-translate-y-1"
                            >
                                Connect with us
                                <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </div>
                            </a>
                        </div>

                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#25ccad]/20 rounded-full blur-3xl -z-0 opacity-50" />
                    </div>

                    {/* Legal Footer */}
                    <div className={`pt-16 pb-8 text-center text-white/30 text-sm font-medium transition-all duration-1000 delay-800 transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <p>© {new Date().getFullYear()} Webintegratorz Technologies. All legal rights reserved.</p>
                        <p className="mt-2">Indore, India | Global Information Security Standards</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
