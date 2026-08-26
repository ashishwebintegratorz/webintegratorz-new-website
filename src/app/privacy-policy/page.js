"use client";

import React, { useEffect, useState } from "react";
import { Shield, Lock, Eye, FileText, Smartphone, Globe, Mail } from "lucide-react";
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
        <div className="min-h-screen bg-[#030712] text-white pt-32 pb-24 font-inter selection:bg-[#50a2ff] selection:text-[#030712] overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#155dfc]/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#50a2ff]/5 rounded-full blur-[100px] -z-0 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />
                {/* Header Section */}
                <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#030712] text-[#50a2ff] rounded-full mb-8 text-xs font-bold tracking-widest uppercase border border-[#155dfc]/30">
                        <Lock className="w-3.5 h-3.5 text-[#50a2ff]" />
                        Security First
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-none text-white">
                        Privacy <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Policy</span>
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-400 text-sm font-medium mb-16">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#155dfc]" />
                            Last Updated: {lastUpdated}
                        </div>
                        <div className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
                        <span>Webintegratorz Technologies</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-12">
                    <div className={`max-w-none transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="text-xl text-gray-400 leading-relaxed font-normal">
                            At Webintegratorz Technologies, we take your privacy seriously. This document outlines how we collect, store, and process your personal information while you interact with our services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {sections.map((section, idx) => (
                            <div
                                key={idx}
                                className={`group p-8 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-2xl hover:border-[#50a2ff]/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            >
                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />
                                <div>
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#155dfc]/15 text-[#50a2ff] border border-[#155dfc]/30 mb-6 group-hover:scale-110 group-hover:text-white transition-transform duration-300">
                                        <section.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 tracking-tight text-white group-hover:text-[#50a2ff] transition-colors">
                                        {section.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-sm font-normal">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Callout */}
                    <div className="p-8 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
                        <div className="space-y-1 text-center md:text-left relative z-10">
                            <h4 className="text-lg font-bold text-white">Questions about our privacy policy?</h4>
                            <p className="text-sm text-gray-400 font-normal">Our legal and data compliance team is available to help.</p>
                        </div>
                        <a
                            href="mailto:info@webintegratorz.com"
                            className="relative z-10 px-6 py-3 bg-[#155dfc] hover:bg-[#50a2ff] hover:text-[#030712] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md flex items-center gap-2"
                        >
                            <Mail size={14} />
                            <span>Contact Legal Team</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
