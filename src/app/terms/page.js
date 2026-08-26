"use client";

import React, { useEffect, useState } from "react";
import { FileText, Gavel, Scale, AlertCircle, Clock, Globe, Laptop } from "lucide-react";
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
        <div className="min-h-screen bg-[#030712] text-white pt-32 pb-24 font-inter selection:bg-[#50a2ff] selection:text-[#030712] overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#155dfc]/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#50a2ff]/5 rounded-full blur-[100px] -z-0 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <Breadcrumbs items={[{ label: 'Terms & Conditions', href: '/terms' }]} />
                {/* Header Section */}
                <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#030712] text-[#50a2ff] rounded-full mb-8 text-xs font-bold tracking-widest uppercase border border-[#155dfc]/30">
                        <FileText className="w-3.5 h-3.5 text-[#50a2ff]" />
                        Legal Agreement
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-none text-white">
                        Terms & <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Conditions</span>
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-400 text-sm font-medium mb-16">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#155dfc]" />
                            Effective Date: {lastUpdated}
                        </div>
                        <div className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
                        <span>Standard Service Agreement</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-12">
                    <div className={`max-w-none transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="text-xl text-gray-400 leading-relaxed font-normal">
                            By engaging with Webintegratorz Technologies for IT services, you agree to the following terms and conditions. Please read them carefully to understand our commitment to your project and our professional standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {sections.map((section, idx) => (
                            <div
                                key={idx}
                                className={`group p-8 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-2xl hover:border-[#50a2ff]/40 transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row gap-8 items-start ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            >
                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />
                                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#155dfc]/15 text-[#50a2ff] border border-[#155dfc]/30 group-hover:scale-110 group-hover:text-white transition-transform duration-300">
                                    <section.icon className="w-7 h-7" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#50a2ff] transition-colors">
                                        {section.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-base font-normal">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
