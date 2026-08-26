'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Sparkles, ArrowRight, ChevronRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { NoiseButton } from '@/components/ui/noise-background';

export default function NewsUpdates() {
  const router = useRouter();

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Insights & News', href: '/news' }
  ];

  const featuredNews = {
    badge: 'Strategic Collaboration',
    title: 'Global Collaboration with Datatoniq Systems LLP',
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
    <div className="relative min-h-screen bg-[#030712] text-white pt-24 sm:pt-28 pb-24 overflow-hidden selection:bg-[#50a2ff] selection:text-[#030712]">
      
      {/* Ambient Lighting */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[400px] bg-[#155dfc]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[400px] bg-[#50a2ff]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030712] border border-[#155dfc]/30 mb-4 font-bold">
            <Sparkles size={14} className="text-[#50a2ff]" />
            <span className="text-[#50a2ff] text-xs font-bold uppercase tracking-[0.25em]">
              Company Announcements
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Insights, News &amp; <br />
            <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Strategic Milestones</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 font-normal leading-relaxed">
            Stay updated with our latest industry partnerships, breakthrough AI engineering releases, and enterprise transformation stories.
          </p>
        </div>

        {/* FEATURED STORY CARD */}
        <div className="group relative rounded-3xl p-px overflow-hidden shadow-2xl mb-16">
          <div className="relative bg-[#030712] rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/[0.08] overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
              
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-[#155dfc]/15 border border-[#155dfc]/30 text-[#50a2ff] text-xs font-bold uppercase tracking-wider">
                    {featuredNews.badge}
                  </span>
                  <span className="text-xs text-gray-400 font-semibold">{featuredNews.date}</span>
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">
                    {featuredNews.title}
                  </h2>
                  <p className="text-lg font-medium text-[#50a2ff]">
                    {featuredNews.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal">
                  {featuredNews.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 pt-2">
                  {featuredNews.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 font-medium">
                      <ChevronRight className="w-4 h-4 text-[#50a2ff] flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Ribbon */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4">
                  {featuredNews.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-3 sm:p-4 bg-white/[0.04] rounded-2xl border border-white/[0.08]"
                    >
                      <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent mb-0.5">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => router.push("/contact-us")}
                    className="px-6 py-3.5 bg-[#155dfc] hover:bg-[#50a2ff] hover:text-[#030712] text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-md inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Discuss Partnership</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/[0.08] shadow-md">
                <Image
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#030712]/90 backdrop-blur-md border border-white/[0.12] shadow-md">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Global Technology Alliances</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Accelerating enterprise AI adoption through cross-border delivery pipelines.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM CTA BANNER */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#030712] border border-white/[0.08] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
          <div className="space-y-2 text-center lg:text-left relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Have a Project or Media Inquiry?</h3>
            <p className="text-sm text-gray-400 max-w-xl font-normal">
              Connect with our communications and technology leadership team to explore strategic initiatives and partnerships.
            </p>
          </div>
          <div className="relative z-10">
            <NoiseButton
              onClick={() => router.push("/contact-us")}
              className="w-full sm:w-auto"
            >
              <span>Get in Touch</span>
              <ArrowRight size={17} className="text-[#50a2ff]" />
            </NoiseButton>
          </div>
        </section>

      </div>
    </div>
  );
}