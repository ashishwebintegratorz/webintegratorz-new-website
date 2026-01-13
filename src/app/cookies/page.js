"use client";
import React from "react";
import { Cookie, Shield, Info, Lock } from "lucide-react";

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
            iconColor: "#25ccad",
            content: "Your data privacy is our priority. Cookies help us provide you with a smoother, faster, and more personalized experience at Webintegratorz."
        },
        {
            title: "Managing Cookies",
            icon: Lock,
            content: "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed."
        }
    ];

    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#25ccad]/10 flex items-center justify-center">
                        <Cookie className="text-[#25ccad] w-6 h-6" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
                </div>

                <p className="text-white/60 text-lg mb-12 leading-relaxed">
                    Last updated: January 2024. This Cookie Policy explains how Webintegratorz uses cookies and similar technologies to recognize you when you visit our website.
                </p>

                <div className="grid gap-8">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#25ccad]/30 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <section.icon className="w-6 h-6 text-[#25ccad]" />
                                <h2 className="text-xl font-bold text-white group-hover:text-[#25ccad] transition-colors">
                                    {section.title}
                                </h2>
                            </div>
                            <p className="text-white/70 leading-relaxed text-sm md:text-base">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-8 rounded-3xl bg-[#25ccad]/5 border border-[#25ccad]/20 text-center">
                    <h3 className="text-xl font-bold mb-4">Have questions about our cookie usage?</h3>
                    <p className="text-white/70 mb-6">Our team is here to help you understand how your data is handled.</p>
                    <a
                        href="/contact-us"
                        className="inline-block px-8 py-3 bg-[#25ccad] text-black font-bold rounded-xl hover:scale-105 transition-transform"
                    >
                        Contact Support
                    </a>
                </div>
            </div>
        </main>
    );
}
