"use client";
import React from "react";
import { Cookie, Shield, Info, Lock } from "lucide-react";
import Link from "next/link";

export default function CookiePolicy() {
    const sections = [
        {
            title: "What are cookies?",
            icon: Cookie,
            content: "Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site."
        },
        {
            title: "How we use cookies",
            icon: Info,
            content: "We use cookies for various reasons including: Essential cookies to make our site work, analytical cookies to understand how visitors use our site, and functional cookies to remember your preferences."
        },
        {
            title: "Data Protection",
            icon: Shield,
            content: "Your data privacy is our priority. Cookies help us provide you with a smoother, faster, and more personalized experience at Webintegratorz."
        },
        {
            title: "Managing Cookies",
            icon: Lock,
            content: "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed."
        }
    ];

    return (
        <main className="min-h-screen bg-[#030712] text-white pt-32 pb-20 px-6 font-inter selection:bg-[#50a2ff] selection:text-[#030712] relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#155dfc]/15 border border-[#155dfc]/30 flex items-center justify-center">
                        <Cookie className="text-[#50a2ff] w-6 h-6" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Cookie Policy</h1>
                </div>

                <p className="text-gray-400 text-lg mb-12 leading-relaxed font-normal">
                    Last updated: January 2026. This Cookie Policy explains how Webintegratorz uses cookies and similar technologies to recognize you when you visit our website.
                </p>

                <div className="grid gap-6">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-[#030712] border border-white/[0.08] shadow-2xl hover:border-[#50a2ff]/40 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />
                            <div className="flex items-center gap-4 mb-4">
                                <section.icon className="w-6 h-6 text-[#50a2ff]" />
                                <h2 className="text-xl font-bold text-white group-hover:text-[#50a2ff] transition-colors">
                                    {section.title}
                                </h2>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base font-normal">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-8 rounded-3xl bg-[#030712] border border-white/[0.08] text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
                    <h3 className="text-xl font-bold text-white mb-2">Have questions about our cookie usage?</h3>
                    <p className="text-gray-400 mb-6 font-normal">Our team is here to help you understand how your data is handled.</p>
                    <Link
                        href="/contact-us"
                        className="inline-block px-8 py-3.5 bg-[#155dfc] hover:bg-[#50a2ff] hover:text-[#030712] text-white font-bold rounded-xl shadow-md transition-all cursor-pointer text-xs uppercase tracking-wider"
                    >
                        Contact Support
                    </Link>
                </div>
            </div>
        </main>
    );
}
