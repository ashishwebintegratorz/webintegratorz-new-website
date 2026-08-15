'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Sparkles, ArrowRight, ChevronRight, Zap, Trophy, ShieldCheck, Globe2, Building2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function NewsUpdates() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Insights & News', href: '/news' }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const featuredNews = {
    badge: 'Strategic Collaboration',
    title: 'Global Collaboration with Datatonic',
    subtitle: 'Elevating Data-Driven & AI Engineering Excellence',
    description: 'We partner with global technological leaders to build and scale high-concurrency cloud data pipelines and bespoke Generative AI ecosystems. Combining elite software engineering squads with modern ML intelligence to deliver tangible enterprise outcomes.',
    highlights: [
      'Production-grade Generative AI platforms & enterprise RAG pipelines',
      'High-throughput distributed backend architectures & microservices',
      '100% remote elite engineering squads serving clients across USA, UAE, EU & Japan',
      'Bank-grade data security, air-gapped models & SOC2/GDPR ready compliance'
    ],
    date: 'December 2024',
    category: 'Partnership',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: '100+', label: 'Clients Globally' },
      { value: '99.4%', label: 'Sprint Precision' },
      { value: '4.9 ★', label: 'Client Satisfaction' }
    ]
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-white pt-24 sm:pt-28 pb-24 overflow-hidden selection:bg-[#00f5a0] selection:text-black">
      
      {/* Ambient Lighting */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Cyber Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 shadow-lg">
            <Sparkles size={14} className="text-[#00f5a0]" />
            <span className="text-[#00f5a0] text-xs font-bold uppercase tracking-[0.25em]">
              Company Announcements
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Insights, News &amp; <br />
            <span className="text-gradient-emerald">Strategic Milestones</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Stay updated with our latest industry partnerships, breakthrough AI engineering releases, and enterprise transformation stories.
          </p>
        </div>

        {/* FEATURED STORY CARD */}
        <div className="group relative rounded-3xl p-px overflow-hidden shadow-2xl mb-16">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00f5a0]/40 via-cyan-500/30 to-[#00f5a0]/40 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative bg-[#090d16]/95 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/[0.08] overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00f5a0] text-xs font-bold uppercase tracking-wider">
                    {featuredNews.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{featuredNews.date}</span>
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">
                    {featuredNews.title}
                  </h2>
                  <p className="text-lg font-medium text-emerald-400">
                    {featuredNews.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {featuredNews.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 pt-2">
                  {featuredNews.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <ChevronRight className="w-4 h-4 text-[#00f5a0] flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Ribbon */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4">
                  {featuredNews.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-3 sm:p-4 bg-white/[0.03] rounded-2xl border border-white/[0.06]"
                    >
                      <div className="text-xl sm:text-2xl font-black text-white text-gradient-emerald mb-0.5">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => router.push("/contact-us")}
                    className="px-6 py-3.5 bg-[#00f5a0] hover:bg-[#00d9f5] text-black font-bold text-sm rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,245,160,0.3)] inline-flex items-center gap-2 hover:scale-105"
                  >
                    <span>Discuss Partnership</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/[0.08]">
                <Image
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Global Technology Alliances</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">Accelerating enterprise AI adoption through cross-border delivery pipelines.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM CTA BANNER */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-[#090d16] to-cyan-950/40 border border-emerald-500/20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Have a Project or Media Inquiry?</h3>
            <p className="text-sm text-slate-300 max-w-xl font-normal">
              Connect with our communications and technology leadership team to explore strategic initiatives and partnerships.
            </p>
          </div>
          <button
            onClick={() => router.push("/contact-us")}
            className="px-8 py-4 bg-[#00f5a0] hover:bg-[#00d9f5] text-black font-bold text-base rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(0,245,160,0.3)] shrink-0 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>Get in Touch</span>
            <ArrowRight size={17} />
          </button>
        </section>

      </div>
    </div>
  );
}