'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  Trophy, 
  Sparkles, 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Building2, 
  Globe2, 
  Zap, 
  FileText,
  BadgeCheck,
  GraduationCap,
  MapPin
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function AwardsPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Awards & Recognition', href: '/awards' }
  ];

  const categories = [
    { id: 'all', label: 'All Honors & Awards' },
    { id: 'ai', label: 'AI & Engineering' },
    { id: 'delivery', label: 'Client Excellence & Reviews' },
    { id: 'academic', label: 'Keynotes & Symposiums' },
    { id: 'compliance', label: 'Security & Certifications' }
  ];

  const awards = [
    {
      id: 1,
      category: 'ai',
      year: '2025 – 2026',
      title: 'Top AI & Custom Software Engineering Studio',
      issuer: 'Global Tech Excellence',
      rank: 'Top 1% Globally',
      description: 'Recognized for pioneering production-grade Generative AI, custom LLM fine-tuning, and high-concurrency cloud software architectures.',
      tags: ['Generative AI', 'Custom LLMs', 'MERN Architecture']
    },
    {
      id: 2,
      category: 'delivery',
      year: '2025',
      title: 'Top Rated Software Development Company',
      issuer: 'Clutch & Verified Client Reviews',
      rank: '4.9 ★ Verified Rating',
      description: 'Honored with a 4.9/5.0 client satisfaction rating for 99.4% on-time sprint precision, rapid delivery, and transparent agile execution.',
      tags: ['Client Reviews', 'SLA Precision', '100% Remote Delivery']
    },
    {
      id: 3,
      category: 'ai',
      year: '2025',
      title: 'Leading Machine Learning & AI Agent Innovator',
      issuer: 'Enterprise AI Directory',
      rank: 'Industry Leader',
      description: 'Awarded for autonomous agent workflow systems, private RAG pipelines, and enterprise-grade vector search integrations.',
      tags: ['AI Agents', 'LangGraph', 'Enterprise RAG']
    },
    {
      id: 4,
      category: 'academic',
      year: '2024 – 2025',
      title: 'Cloud Architecture Keynote Excellence',
      issuer: 'Softvision College Tech Symposium',
      rank: 'Guest of Honor',
      description: 'Invited as keynote speakers to deliver technical masterclasses on Modern Full-Stack Cloud Architecture, distributed microservices, and AI-first engineering.',
      tags: ['Keynote Speaker', 'Tech Symposium', 'Academic Excellence']
    },
    {
      id: 5,
      category: 'delivery',
      year: '2024 – 2025',
      title: 'Fastest-Growing Remote Engineering Firm',
      issuer: 'Global Digital Outsourcing Index',
      rank: 'Global Delivery Excellence',
      description: 'Delivering mission-critical digital products for clients across North America, the UAE, the European Union, Japan, and Southeast Asia.',
      tags: ['USA', 'UAE', 'Europe', 'Japan']
    },
    {
      id: 6,
      category: 'compliance',
      year: '2024 – 2025',
      title: 'Enterprise Security & Code Sovereignty Assurance',
      issuer: 'Global DevSecOps Review',
      rank: '100% IP Ownership',
      description: 'Certified for rigorous OWASP security hardening, private VPC deployments, air-gapped model hosting, and zero public data retention.',
      tags: ['OWASP Top 10', 'Private VPC', 'IP Protection']
    }
  ];

  const certifications = [
    { name: 'UDYAM Registered Enterprise', badge: 'UDYAM-MP-23-0104875', org: 'Govt. of India MSME' },
    { name: 'AWS Cloud Architecture Partner', badge: 'Certified Solutions', org: 'Amazon Web Services' },
    { name: 'SOC 2 & ISO 27001 Security Ready', badge: 'Enterprise Compliant', org: 'Information Security' },
    { name: 'W3C WAI Accessibility Specialist', badge: 'WCAG 2.2 Conformance', org: 'Universal Accessibility' },
  ];

  const filteredAwards = activeCategory === 'all'
    ? awards
    : awards.filter(a => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-24 sm:pt-28 pb-24 overflow-hidden relative selection:bg-[#00f5a0] selection:text-black">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Cyber Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* HERO SECTION */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 shadow-lg"
          >
            <Trophy size={14} className="text-[#00f5a0]" />
            <span className="text-[#00f5a0] text-xs font-bold uppercase tracking-[0.25em]">
              Global Honors &amp; Industry Distinction
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6"
          >
            Recognized for <span className="text-gradient-emerald">Technical Excellence</span> &amp; <br />
            Breakthrough AI Innovation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl mb-8"
          >
            Our dedication to engineering perfection, AI-first innovation, and 100% client satisfaction has earned us accolades across global enterprise markets, review platforms, and technology institutes.
          </motion.p>
        </div>

        {/* METRICS & VERIFIED STATS RIBBON */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          <div className="p-6 rounded-3xl bg-[#090d16]/90 border border-white/[0.08] backdrop-blur-xl">
            <p className="text-3xl font-black text-white text-gradient-emerald">100+</p>
            <p className="text-sm font-bold text-white mt-1">Clients Globally</p>
            <p className="text-xs text-slate-400 mt-0.5">USA, UAE, EU, Japan</p>
          </div>
          <div className="p-6 rounded-3xl bg-[#090d16]/90 border border-white/[0.08] backdrop-blur-xl">
            <p className="text-3xl font-black text-white text-gradient-emerald">4.9 ★</p>
            <p className="text-sm font-bold text-white mt-1">Client Satisfaction</p>
            <p className="text-xs text-slate-400 mt-0.5">Verified review score</p>
          </div>
          <div className="p-6 rounded-3xl bg-[#090d16]/90 border border-white/[0.08] backdrop-blur-xl">
            <p className="text-3xl font-black text-white text-gradient-emerald">99.4%</p>
            <p className="text-sm font-bold text-white mt-1">SLA Sprint Precision</p>
            <p className="text-xs text-slate-400 mt-0.5">On-time milestone delivery</p>
          </div>
          <div className="p-6 rounded-3xl bg-[#090d16]/90 border border-white/[0.08] backdrop-blur-xl">
            <p className="text-3xl font-black text-white text-gradient-emerald">100%</p>
            <p className="text-sm font-bold text-white mt-1">Remote Agility</p>
            <p className="text-xs text-slate-400 mt-0.5">Solving problems worldwide</p>
          </div>
        </div>

        {/* FEATURED KEYNOTE HONORS SPOTLIGHT (SOFTVISION COLLEGE) */}
        <section className="mb-24">
          <div className="group relative rounded-3xl p-px overflow-hidden shadow-2xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00f5a0]/40 via-cyan-500/30 to-[#00f5a0]/40 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-[#090d16]/95 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/[0.08] overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Photo */}
                <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/[0.08] shadow-2xl">
                  <Image
                    src="/vision.jpeg"
                    alt="Softvision College Tech Symposium Keynote"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[#00f5a0]">
                      Keynote &amp; Symposium
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs font-semibold text-white">
                    <MapPin size={14} className="text-[#00f5a0] shrink-0" />
                    <span>Softvision College of Science &amp; Technology</span>
                  </div>
                </div>

                {/* Right Details */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00f5a0]">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#00f5a0] uppercase tracking-wider">Academic &amp; Technology Leadership</p>
                      <p className="text-xs text-slate-400">Institutional Recognition</p>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                    Keynote Address on Modern Cloud Architecture &amp; Enterprise Software
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    Invited as distinguished keynote speakers and industry mentors at the Softvision College Technical Symposium. Our leadership presented real-world architectural blueprints for scalable MERN microservices, cloud orchestration, and AI-assisted software delivery to aspiring computer scientists and engineers.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <p className="text-xs font-bold text-white">Keynote Speaker</p>
                      <p className="text-[10px] text-slate-400">Technical Symposium</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <p className="text-xs font-bold text-white">Industry Mentor</p>
                      <p className="text-[10px] text-slate-400">Engineering Labs</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] col-span-2 sm:col-span-1">
                      <p className="text-xs font-bold text-[#00f5a0]">Cloud Systems</p>
                      <p className="text-[10px] text-slate-400">MERN &amp; Distributed</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* AWARDS CATALOG & FILTER */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00f5a0] block mb-1">
                Honors Showcase
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Accolades &amp; Industry Rankings
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat.id
                      ? "bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] text-black shadow-lg shadow-emerald-500/20"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredAwards.map((award, index) => (
              <div
                key={award.id}
                className="group relative rounded-3xl p-px overflow-hidden flex flex-col transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#00f5a0]/30 via-white/5 to-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex-1 bg-[#090d16]/95 backdrop-blur-xl rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group-hover:bg-[#0c1220] border border-white/[0.06]">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00f5a0] group-hover:bg-[#00f5a0] group-hover:text-black transition-all">
                        <Trophy size={22} />
                      </div>
                      <span className="text-[11px] font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        {award.rank}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      {award.issuer} • {award.year}
                    </p>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00f5a0] transition-colors leading-snug">
                      {award.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                      {award.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {award.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OFFICIAL CERTIFICATIONS & CREDENTIALS */}
        <section className="mb-28 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#090d16] via-[#0b1222] to-[#090d16] border border-white/[0.08] relative overflow-hidden">
          <div className="max-w-4xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00f5a0] block mb-2">
              Verified Accreditation
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Official Registrations &amp; Standards Conformance
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 font-normal">
              Our engineering practices are audited, certified, and compliant with international technical and legal requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all flex flex-col justify-between"
              >
                <div>
                  <BadgeCheck size={20} className="text-[#00f5a0] mb-3" />
                  <h4 className="text-sm font-bold text-white mb-1">{cert.name}</h4>
                  <p className="text-xs text-slate-400">{cert.org}</p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono font-semibold text-emerald-400">{cert.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-[#090d16] to-cyan-950/40 border border-emerald-500/20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Partner with an Award-Winning Team</h3>
            <p className="text-sm text-slate-300 max-w-xl font-normal">
              Experience the difference of working with an elite, AI-first remote engineering studio dedicated to your product success.
            </p>
          </div>
          <button
            onClick={() => router.push("/contact-us")}
            className="px-8 py-4 bg-[#00f5a0] hover:bg-[#00d9f5] text-black font-bold text-base rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(0,245,160,0.3)] shrink-0 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>Start Project Discussion</span>
            <ArrowRight size={17} />
          </button>
        </section>

      </div>
    </div>
  );
}
