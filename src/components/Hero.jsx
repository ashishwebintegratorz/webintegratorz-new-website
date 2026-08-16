"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Award, ShieldCheck, Sparkles, CheckCircle2, Star, Zap, Cpu, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection({ mobileOpen }) {
  const heroRef = useRef(null);
  const router = useRouter();

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const { clientX, clientY, currentTarget } = e;
    requestAnimationFrame(() => {
      const rect = currentTarget.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      heroRef.current.style.setProperty("--x", `${x}px`);
      heroRef.current.style.setProperty("--y", `${y}px`);
    });
  };

  const metrics = [
    { value: "100+", label: "Clients Globally", sub: "Global Enterprise & Startups" },
    { value: "99.4%", label: "Sprint Precision", sub: "On-Time SLA Delivery" },
    { value: "15+", label: "Global Markets", sub: "USA, UAE, EU, Japan" },
    { value: "4.9 ★", label: "Client Satisfaction", sub: "Verified Industry Rating" },
  ];

  const techPills = [
    "Next.js 16", "React 19", "Generative AI", "Python / PyTorch", "LLM Fine-Tuning", "AWS Cloud", "Node.js", "Flutter", "Kubernetes"
  ];

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="hero relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#030712] text-white pt-24 sm:pt-28 md:pt-32"
      style={{ display: mobileOpen ? "none" : "flex" }}
    >
      {/* Background Video with refined cyber darkness (Desktop/Tablet Optimized, 0ms mobile overhead) */}
      {!mobileOpen && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="hidden sm:block w-full h-full object-cover opacity-25 filter contrast-125"
          >
            <source src="/herovedio.webm" type="video/webm" />
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          {/* Cosmic ambient gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,245,160,0.15),transparent_70%)]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
        </div>
      )}

      {/* Cyber Grid Background Matrix */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      {/* Glow Follower Effect */}
      <div className="glow-layer absolute inset-0 pointer-events-none z-0" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col justify-center flex-grow">
        
        {/* Top Floating Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a101d] border border-white/20 backdrop-blur-xl shadow-lg hover:border-emerald-400/60 transition-colors">
            <span className="flex h-2.5 w-2.5 relative" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f5a0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f5a0]"></span>
            </span>
            <p className="text-xs sm:text-[13px] font-bold text-white tracking-wide">
              ✦ Next-Gen AI &amp; Enterprise Digital Engineering
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#05241b] border border-[#00f5a0]/50 text-[#00f5a0] text-xs sm:text-[13px] font-extrabold shadow-lg">
            <Globe2 size={15} className="text-[#00f5a0]" aria-hidden="true" />
            <span>100% Fully Remote • Solving Complex Problems Globally</span>
          </div>
        </motion.div>

        {/* Main Headline & Value Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-white"
            >
              Architecting <br className="hidden sm:inline" />
              <span className="text-[#00f5a0] font-black drop-shadow-[0_0_30px_rgba(0,245,160,0.3)]">Intelligent Software</span> &amp; <br />
              <span className="text-slate-100 font-black">Enterprise AI Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-200 max-w-2xl font-normal"
            >
              A 100% fully remote engineering organization solving complex technical problems globally. We build mission-critical web applications, custom Generative AI ecosystems, and high-performance digital products for high-growth startups and global innovators worldwide.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={() => router.push("/contact-us")}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#00f5a0] via-[#00d9f5] to-[#00f5a0] bg-[length:200%_auto] hover:bg-[position:right_center] rounded-2xl font-black text-black text-base md:text-lg flex items-center justify-center gap-3 shadow-[0_0_35px_-5px_rgba(0,245,160,0.5)] transition-all duration-500 hover:scale-[1.02] active:scale-95"
              >
                <span>Book Free Architecture Session</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("casestudies");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else router.push("/#casestudies");
                }}
                className="px-6 py-4 bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-white/40 backdrop-blur-xl rounded-2xl font-bold text-white text-base md:text-lg flex items-center justify-center gap-2 transition-all duration-300"
              >
                <span>View Proven Case Studies</span>
              </button>
            </motion.div>

            {/* Floating Tech Ticker Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="pt-4 flex flex-wrap items-center gap-2"
            >
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest mr-2 flex items-center gap-1.5">
                <Cpu size={14} className="text-[#00f5a0]" /> Core Stack:
              </span>
              {techPills.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#090d16] border border-white/20 text-slate-200 hover:text-white hover:border-emerald-400/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Hero Interactive Visual Metrics Widget */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl bg-[#090d16]/98 border border-white/20"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.12]">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#00f5a0]">Delivery Impact</p>
                  <h2 className="text-xl font-black text-white mt-0.5">Enterprise Engineering</h2>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[#00f5a0]">
                  <Zap size={20} />
                </div>
              </div>

              {/* Metric 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4 my-6">
                {metrics.map((m, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-[#091522] border border-white/10 hover:border-emerald-500/50 transition-all">
                    <p className="text-2xl sm:text-3xl font-black text-[#00f5a0]">{m.value}</p>
                    <p className="text-xs font-bold text-white mt-1">{m.label}</p>
                    <p className="text-[11px] text-slate-200 font-semibold mt-0.5">{m.sub}</p>
                  </div>
                ))}
              </div>

              {/* Client Rating Card */}
              <div className="p-4 rounded-2xl bg-[#06151f] border border-emerald-500/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#00f5a0] flex items-center justify-center font-black text-black text-xs border-2 border-[#030712]">W</div>
                    <div className="w-8 h-8 rounded-full bg-[#00d9f5] flex items-center justify-center font-black text-black text-xs border-2 border-[#030712]">AI</div>
                    <div className="w-8 h-8 rounded-full bg-[#1d4ed8] flex items-center justify-center font-black text-white text-xs border-2 border-[#030712]">IT</div>
                  </div>
                  <div>
                    <div role="img" aria-label="5 out of 5 stars rating" className="flex items-center text-amber-300 text-xs font-bold">
                      {"★★★★★"}
                    </div>
                    <p className="text-[11px] text-slate-200 font-bold mt-0.5">Top-Rated Global Agency</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-black text-[#00f5a0]">100%</span>
                  <p className="text-[11px] text-slate-200 font-medium">NDA Protected</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Certified Credentials Footer Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 pt-6 border-t border-white/10"
        >
          <p className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4">
            Recognized &amp; Verified Excellence
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            {/* AWS Certified */}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#090d16] border border-white/10 hover:border-white/30 transition-all group">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/AWS.png"
                  alt="AWS Certified"
                  fill
                  className="object-contain"
                  sizes="36px"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-white group-hover:text-[#00f5a0] transition-colors">AWS CERTIFIED</p>
                <p className="text-[11px] text-slate-300 font-medium">Cloud Architecture</p>
              </div>
            </div>

            {/* LinkedIn Top Rated */}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#090d16] border border-white/10 hover:border-white/30 transition-all group">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/linkedin-logo.svg"
                  alt="LinkedIn Top Rated"
                  fill
                  className="object-contain"
                  sizes="36px"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-white group-hover:text-[#00f5a0] transition-colors">TOP RATED AGENCY</p>
                <p className="text-[11px] text-slate-300 font-medium">Global Tech Talent</p>
              </div>
            </div>

            {/* Digital Transformation */}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#090d16] border border-white/10 hover:border-white/30 transition-all group">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/digital.png"
                  alt="Digital Certified"
                  fill
                  className="object-contain"
                  sizes="36px"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-white group-hover:text-[#00f5a0] transition-colors">AI &amp; DIGITAL EXP</p>
                <p className="text-[11px] text-slate-300 font-medium">Next-Gen Delivery</p>
              </div>
            </div>

            {/* ISO / Excellence Award */}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#090d16] border border-white/10 hover:border-white/30 transition-all group">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[#00f5a0] flex-shrink-0">
                <Award size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white group-hover:text-[#00f5a0] transition-colors">EXCELLENCE AWARD</p>
                <p className="text-[11px] text-slate-300 font-medium">Quality Certified SLA</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}