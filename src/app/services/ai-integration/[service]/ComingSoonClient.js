"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles, Rocket, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { NoiseButton } from "@/components/ui/noise-background";

export default function ComingSoonClient() {
    const params = useParams();
    const serviceName = params.service ? params.service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "AI Service";

    return (
        <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center px-4 relative overflow-hidden font-inter selection:bg-[#50a2ff] selection:text-[#030712]">
            {/* Animated Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#155dfc]/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#50a2ff]/10 rounded-full blur-[120px] pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl w-full text-center z-10"
            >
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#155dfc] to-[#50a2ff] flex items-center justify-center shadow-2xl">
                            <Bot size={48} className="text-white" />
                        </div>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-[#030712] border border-white/10 flex items-center justify-center shadow-2xl"
                        >
                            <Sparkles size={20} className="text-[#50a2ff]" />
                        </motion.div>
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
                    {serviceName}
                </h1>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030712] border border-[#155dfc]/30 text-[#50a2ff] text-xs font-bold uppercase tracking-widest mb-8">
                    <Rocket size={14} />
                    Coming Soon
                </div>

                <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-lg mx-auto font-normal">
                    We&apos;re currently engineering this cutting-edge AI solution to help transform your business operations with next-generation intelligence.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <NoiseButton
                        href="/contact-us"
                        className="w-full sm:w-auto text-base font-semibold"
                    >
                        <span>Get Early Access</span>
                    </NoiseButton>
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-8 py-3.5 bg-[#030712] hover:border-[#50a2ff]/50 text-white font-semibold rounded-full border border-white/10 transition-all flex items-center justify-center gap-2"
                    >
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                </div>
            </motion.div>

            {/* Footer Text */}
            <div className="absolute bottom-12 text-gray-500 text-xs font-medium tracking-[0.3em] uppercase">
                Webintegratorz AI Lab • v1.0.0-beta
            </div>
        </div>
    );
}
