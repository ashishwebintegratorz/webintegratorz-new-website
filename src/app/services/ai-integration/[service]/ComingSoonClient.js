"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles, Rocket, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ComingSoonClient() {
    const params = useParams();
    const serviceName = params.service ? params.service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "AI Service";

    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
            {/* Background Grain/Noise */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* Animated Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#25ccad]/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#25ccad]/10 rounded-full blur-[120px] animate-pulse transition-all duration-1000"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl w-full text-center z-10"
            >
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#25ccad] to-[#1a8a75] flex items-center justify-center shadow-[0_0_50px_rgba(37,204,173,0.3)]">
                            <Bot size={48} className="text-black" />
                        </div>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl"
                        >
                            <Sparkles size={20} className="text-[#25ccad]" />
                        </motion.div>
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                    {serviceName}
                </h1>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25ccad]/10 border border-[#25ccad]/20 text-[#25ccad] text-sm font-bold uppercase tracking-widest mb-8">
                    <Rocket size={14} />
                    Coming Soon
                </div>

                <p className="text-lg text-white/50 leading-relaxed mb-12 max-w-lg mx-auto">
                    We're currently engineering this cutting-edge AI solution to help transform your business operations with next-generation intelligence.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/contact-us"
                        className="w-full sm:w-auto px-8 py-4 bg-[#25ccad] hover:bg-[#1fa98d] text-black font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(37,204,173,0.2)]"
                    >
                        Get Early Access
                    </Link>
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all flex items-center justify-center gap-2"
                    >
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                </div>
            </motion.div>

            {/* Footer Text */}
            <div className="absolute bottom-12 text-white/20 text-xs font-medium tracking-[0.3em] uppercase">
                Webintegratorz AI Lab • v1.0.0-beta
            </div>
        </div>
    );
}
