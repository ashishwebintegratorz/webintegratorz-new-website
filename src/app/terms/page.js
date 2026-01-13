"use client";

import React, { useEffect, useState } from "react";
import { FileText, Gavel, Scale, AlertCircle, Clock, Globe, Laptop, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const TermsAndConditions = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const lastUpdated = "January 12, 2026";

    const sections = [
        {
            icon: Laptop,
            title: "1. Services Provided",
            content: "Webintegratorz Technologies provides professional IT services including web development, mobile application development, SaaS solutions, and AI/ML integration. The specific scope of work for each project will be outlined in a separate Statement of Work (SOW)."
        },
        {
            icon: Scale,
            title: "2. Intellectual Property",
            content: "Upon full payment, the ownership of the final source code and assets specifically developed for the client will be transferred. However, Webintegratorz retains rights to its pre-existing proprietary tools, frameworks, and methodologies used during development."
        },
        {
            icon: Clock,
            title: "3. Project Timelines",
            content: "While we strive to meet all agreed-upon deadlines, timelines are estimates. Delays in client feedback, content delivery, or technical requirements may impact final delivery dates. We are not liable for delays caused by third-party services or unforeseen technical hurdles."
        },
        {
            icon: AlertCircle,
            title: "4. Payment Terms",
            content: "Project payments are typically structured in milestones. An initial deposit is required to commence work. Subsequent payments are due upon completion of defined project stages. Late payments may result in the suspension of development services."
        },
        {
            icon: Gavel,
            title: "5. Limitation of Liability",
            content: "Webintegratorz Technologies shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services, including but not limited to loss of profits, data, or business interruption."
        },
        {
            icon: Globe,
            title: "6. Governing Law",
            content: "These terms are governed by the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in Indore, Madhya Pradesh."
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 font-inter overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#25ccad] opacity-[0.05] rounded-full blur-[120px] -z-0" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#25ccad] opacity-[0.03] rounded-full blur-[100px] -z-0" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <Breadcrumbs items={[{ label: 'Terms & Conditions', href: '/terms' }]} />
                {/* Header Section */}
                <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#25ccad]/10 text-[#25ccad] rounded-full mb-8 text-xs font-black tracking-widest uppercase border border-[#25ccad]/20">
                        <FileText className="w-3.5 h-3.5" />
                        Legal Agreement
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
                        Terms & <span className="text-[#25ccad]">Conditions</span>
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-white/50 text-sm font-medium mb-16">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#25ccad]" />
                            Effective Date: {lastUpdated}
                        </div>
                        <div className="hidden md:block w-1 h-1 bg-white/10 rounded-full" />
                        <span>Standard Service Agreement</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-12">
                    <div className={`prose prose-invert max-w-none transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="text-xl text-white/70 leading-relaxed font-medium">
                            By engaging with Webintegratorz Technologies for IT services, you agree to the following terms and conditions. Please read them carefully to understand our commitment to your project and our professional standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {sections.map((section, idx) => (
                            <div
                                key={idx}
                                className={`group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#25ccad]/30 transition-all duration-500 hover:bg-[#25ccad]/5 transition-all duration-1000 delay-${300 + (idx * 100)} transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#25ccad]/10 text-[#25ccad] group-hover:scale-110 transition-transform duration-500">
                                        <section.icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-[#25ccad] transition-colors">
                                            {section.title}
                                        </h3>
                                        <p className="text-white/60 leading-relaxed text-lg font-medium">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Engagement Section */}
                    <div className={`mt-24 p-10 md:p-16 rounded-[3rem] bg-gradient-to-tr from-[#25ccad]/20 to-transparent border border-[#25ccad]/20 relative overflow-hidden transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Need a Custom SOW?</h2>
                                <p className="text-white/70 text-lg max-w-md font-medium">
                                    We provide detailed Statement of Work documents tailored to the specific needs of your enterprise project.
                                </p>
                            </div>

                            <a
                                href="/contact-us"
                                className="group flex items-center gap-4 px-10 py-5 bg-[#25ccad] text-black font-black text-lg rounded-[1.5rem] hover:shadow-[0_20px_40px_rgba(37,204,173,0.3)] transition-all duration-500 hover:-translate-y-1"
                            >
                                Contact Sales
                                <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </a>
                        </div>

                        <div className="absolute top-0 left-0 w-64 h-64 bg-[#25ccad]/20 rounded-full blur-3xl -z-0 opacity-50" />
                    </div>

                    {/* Legal Footer */}
                    <div className={`pt-16 pb-8 text-center text-white/30 text-sm font-medium transition-all duration-1000 delay-800 transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <p>© {new Date().getFullYear()} Webintegratorz Technologies. Professional IT Services Agreement.</p>
                        <p className="mt-2">Indore, India | Global Software Engineering Standards</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
