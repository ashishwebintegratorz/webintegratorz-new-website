'use client';

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import { TrendingUp, Target, Megaphone, Search, Share2, BarChart3, ArrowRight, CheckCircle2, Sparkles, Zap, Users, Mail, Instagram, MessageCircle } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { NoiseButton } from '@/components/ui/noise-background';

export default function DigitalMarketingPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const marketingServices = [
    {
      icon: <Search className="w-7 h-7 text-[#50a2ff]" />,
      title: "SEO & SEM",
      description: "Dominate search rankings and drive qualified traffic with data-driven SEO strategies and targeted paid campaigns.",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Google Ads"]
    },
    {
      icon: <Share2 className="w-7 h-7 text-[#50a2ff]" />,
      title: "Social Media Marketing",
      description: "Build engaged communities and amplify your brand across all major social platforms.",
      features: ["Content Strategy", "Community Management", "Paid Social Ads", "Influencer Marketing"]
    },
    {
      icon: <Mail className="w-7 h-7 text-[#50a2ff]" />,
      title: "Email Marketing",
      description: "Convert leads into customers with personalized email campaigns that deliver results.",
      features: ["Campaign Design", "Automation", "Segmentation", "A/B Testing"]
    }
  ];

  const channels = [
    { icon: <Search className="w-6 h-6 text-[#50a2ff]" />, name: "Search Engine Marketing" },
    { icon: <Instagram className="w-6 h-6 text-[#50a2ff]" />, name: "Social Media Ads" },
    { icon: <Mail className="w-6 h-6 text-[#50a2ff]" />, name: "Email Campaigns" },
    { icon: <MessageCircle className="w-6 h-6 text-[#50a2ff]" />, name: "Content Marketing" }
  ];

  const stats = [
    { value: "500%", label: "Avg. ROI Increase", icon: <TrendingUp className="w-5 h-5 text-[#50a2ff]" /> },
    { value: "250+", label: "Successful Campaigns", icon: <Target className="w-5 h-5 text-[#50a2ff]" /> },
    { value: "10M+", label: "Leads Generated", icon: <Users className="w-5 h-5 text-[#50a2ff]" /> },
    { value: "98%", label: "Client Retention", icon: <Sparkles className="w-5 h-5 text-[#50a2ff]" /> }
  ];

  const process = [
    {
      step: "01",
      title: "Audit & Strategy",
      description: "Analyze current performance and define goals",
      icon: <BarChart3 className="w-6 h-6 text-[#50a2ff]" />
    },
    {
      step: "02",
      title: "Campaign Setup",
      description: "Create targeted campaigns across channels",
      icon: <Target className="w-6 h-6 text-[#50a2ff]" />
    },
    {
      step: "03",
      title: "Launch & Optimize",
      description: "Deploy campaigns and continuously improve",
      icon: <Zap className="w-6 h-6 text-[#50a2ff]" />
    },
    {
      step: "04",
      title: "Report & Scale",
      description: "Measure results and scale what works",
      icon: <TrendingUp className="w-6 h-6 text-[#50a2ff]" />
    }
  ];

  const benefits = [
    "Increased brand visibility and awareness",
    "Higher quality leads and conversions",
    "Better ROI on marketing spend",
    "Data-driven decision making",
    "Scalable growth strategies",
    "Competitive market advantage"
  ];

  const platforms = [
    { name: "Google Ads", icon: "🔍" },
    { name: "Facebook", icon: "📘" },
    { name: "Instagram", icon: "📸" },
    { name: "LinkedIn", icon: "💼" },
    { name: "TikTok", icon: "🎵" },
    { name: "YouTube", icon: "📺" }
  ];

  const marketingTypes = [
    {
      title: "Performance Marketing",
      description: "Pay only for measurable results and conversions",
      metrics: ["CPA", "ROAS", "Conversion Rate"]
    },
    {
      title: "Brand Marketing",
      description: "Build awareness and establish market presence",
      metrics: ["Impressions", "Reach", "Brand Lift"]
    },
    {
      title: "Growth Marketing",
      description: "Rapid experimentation across the funnel",
      metrics: ["Growth Rate", "Retention", "LTV"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-24 sm:pt-28 pb-24 overflow-hidden relative selection:bg-[#50a2ff] selection:text-[#030712] font-inter">

      {/* Hero Section */}
      <section className="relative pt-6 pb-20 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Digital Marketing', href: '/services/digital-marketing' }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
            <div className={`space-y-8 ${mounted ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#030712] border border-[#155dfc]/30 rounded-full text-sm">
                <Sparkles className="w-4 h-4 text-[#50a2ff]" />
                <span className="text-[#50a2ff] font-bold uppercase tracking-wider text-xs">Results-Driven Digital Marketing Agency</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                Data-Driven Digital Marketing
                <span className="block mt-2 bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">
                  &amp; SEO Growth Strategies
                </span>
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed font-normal">
                Data-driven digital marketing strategies that deliver measurable results. More traffic, more qualified enterprise leads, and accelerated pipeline revenue.
              </p>

              <div className="flex flex-wrap gap-4">
                <NoiseButton
                  onClick={() => router.push("/contact-us")}
                  className="w-full sm:w-auto"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 text-[#50a2ff]" />
                </NoiseButton>
              </div>

              {/* Stats Ribbon */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/[0.08]">
                {stats.slice(0, 2).map((stat, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                    <div className="p-2.5 bg-[#155dfc]/15 rounded-xl border border-[#155dfc]/30 text-[#50a2ff]">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">{stat.value}</div>
                      <div className="text-xs text-gray-400 font-semibold">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual - Marketing Dashboard */}
            <div className={`relative ${mounted ? 'animate-slideInRight' : 'opacity-0'}`}>
              <div className="relative">
                {/* Main Dashboard Card */}
                <div className="bg-[#030712] rounded-3xl p-8 border border-white/[0.08] shadow-2xl space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
                  {/* Graph Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] relative z-10">
                    <div>
                      <div className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-1">Campaign Performance</div>
                      <div className="text-3xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">↑ 347%</div>
                    </div>
                    <div className="px-3 py-1 bg-[#155dfc]/15 border border-[#155dfc]/30 rounded-full text-xs font-bold text-[#50a2ff]">
                      Live Telemetry
                    </div>
                  </div>

                  {/* Mock Graph */}
                  <div className="relative h-40 relative z-10">
                    <svg className="w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gradient-dm" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#155dfc" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#50a2ff" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,140 L50,120 L100,90 L150,100 L200,60 L250,70 L300,30 L350,40 L400,10 L400,160 L0,160 Z"
                        fill="url(#gradient-dm)"
                      />
                      <path
                        d="M0,140 L50,120 L100,90 L150,100 L200,60 L250,70 L300,30 L350,40 L400,10"
                        fill="none"
                        stroke="#50a2ff"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 relative z-10">
                    <div className="bg-white/[0.04] rounded-2xl p-3.5 border border-white/[0.08] text-center">
                      <div className="text-[10px] text-gray-400 uppercase font-bold mb-0.5">Clicks</div>
                      <div className="text-lg font-black text-[#50a2ff]">24.5K</div>
                    </div>
                    <div className="bg-white/[0.04] rounded-2xl p-3.5 border border-white/[0.08] text-center">
                      <div className="text-[10px] text-gray-400 uppercase font-bold mb-0.5">Conversions</div>
                      <div className="text-lg font-black text-white">1.2K</div>
                    </div>
                    <div className="bg-white/[0.04] rounded-2xl p-3.5 border border-white/[0.08] text-center">
                      <div className="text-[10px] text-gray-400 uppercase font-bold mb-0.5">ROAS</div>
                      <div className="text-lg font-black text-[#50a2ff]">5.8x</div>
                    </div>
                  </div>
                </div>

                {/* Floating Element */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#155dfc] rounded-2xl flex items-center justify-center shadow-xl text-white">
                  <TrendingUp className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="py-20 lg:py-28 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#50a2ff] block">Offerings</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
              Our Marketing <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto font-normal">
              Comprehensive digital marketing solutions that drive sustainable, repeatable growth across all digital channels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {marketingServices.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-[#030712] rounded-2xl p-8 border border-white/[0.08] hover:border-[#50a2ff]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />
                <div className="absolute -top-20 -right-20 w-44 h-44 bg-gradient-to-b from-[#155dfc]/20 via-[#50a2ff]/10 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#155dfc]/15 border border-[#155dfc]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#50a2ff] transition-colors">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-white/[0.08] relative z-10">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#50a2ff] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Channels */}
      <section className="py-16 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Multi-Channel Marketing</h3>
            <p className="text-gray-400 text-sm font-normal">Reach your audience with precision across every touchpoint</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel, idx) => (
              <div key={idx} className="group bg-[#030712] rounded-2xl p-6 border border-white/[0.08] hover:border-[#50a2ff]/40 transition-all duration-300 hover:-translate-y-1 shadow-xl">
                <div className="w-12 h-12 bg-[#155dfc]/15 border border-[#155dfc]/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {channel.icon}
                </div>
                <h4 className="font-bold text-white text-base">{channel.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Types */}
      <section className="py-20 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">
              Strategic Marketing <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Frameworks</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto font-normal">
              Tailored growth blueprints designed around your unique unit economics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {marketingTypes.map((type, idx) => (
              <div key={idx} className="bg-[#030712] rounded-3xl p-8 border border-white/[0.08] hover:border-[#50a2ff]/40 transition-all duration-300 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60" />
                <div className="w-2.5 h-2.5 bg-[#50a2ff] rounded-full mb-6"></div>
                <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed font-normal">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.metrics.map((metric, i) => (
                    <span key={i} className="px-3 py-1 bg-[#155dfc]/15 border border-[#155dfc]/30 rounded-full text-xs font-bold text-[#50a2ff]">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#50a2ff] block">Methodology</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white">
              Our 4-Stage Marketing <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Cycle</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto font-normal">
              A systematic, hypothesis-driven sprint model to drive continuous pipeline growth
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-center space-y-4 group bg-[#030712] p-6 rounded-2xl border border-white/[0.08] hover:border-[#50a2ff]/40 transition-all duration-300 shadow-2xl">
                  <div className="relative inline-block">
                    <div className="w-16 h-16 mx-auto bg-[#155dfc]/15 border border-[#155dfc]/30 rounded-2xl flex items-center justify-center text-[#50a2ff] shadow-xl group-hover:scale-105 transition-all">
                      {item.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#155dfc] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-xs">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-normal">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Audit Callout */}
      <section className="py-20 lg:py-28 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white">
                Why Partner With Our <br />
                <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Marketing Team</span>
              </h2>
              <p className="text-base text-gray-400 leading-relaxed font-normal">
                We build integrated revenue engines designed to scale with your engineering and commercial milestones.
              </p>

              <div className="space-y-3.5 pt-2">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#155dfc]/15 border border-[#155dfc]/30 flex items-center justify-center flex-shrink-0 text-[#50a2ff]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-gray-300 text-sm font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#030712] rounded-3xl p-8 border border-white/[0.08] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
                <h3 className="text-xl font-bold text-white mb-6">Platforms We Manage &amp; Optimize</h3>
                <div className="grid grid-cols-2 gap-3.5">
                  {platforms.map((platform, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3.5 bg-white/[0.04] rounded-2xl border border-white/[0.08]">
                      <span className="text-xl">{platform.icon}</span>
                      <span className="font-bold text-white text-sm">{platform.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Consultation Banner */}
              <div className="bg-[#030712] rounded-3xl p-8 border border-white/[0.08] shadow-2xl flex items-start gap-4 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
                <div className="w-12 h-12 bg-[#155dfc]/20 border border-[#155dfc]/30 rounded-2xl flex items-center justify-center flex-shrink-0 text-[#50a2ff]">
                  <Megaphone className="w-6 h-6" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-bold text-white text-lg mb-1">Request a Growth Marketing Audit</h4>
                  <p className="text-xs text-gray-400 mb-4 font-normal">Get a comprehensive analysis of your current funnel, attribution, and growth opportunities.</p>
                  <button
                    type="button"
                    onClick={() => router.push("/contact-us")}
                    className="px-6 py-2.5 bg-[#155dfc] hover:bg-[#50a2ff] hover:text-[#030712] text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Schedule Audit Call →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}