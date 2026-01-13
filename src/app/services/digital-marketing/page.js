'use client';

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import { TrendingUp, Target, Megaphone, Search, Share2, BarChart3, ArrowRight, CheckCircle2, Sparkles, Zap, Users, Globe, Mail, Instagram, MessageCircle } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function DigitalMarketingPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const marketingServices = [
    {
      icon: <Search className="w-7 h-7" />,
      title: "SEO & SEM",
      description: "Dominate search rankings and drive qualified traffic with data-driven SEO strategies and targeted paid campaigns.",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Google Ads"]
    },
    {
      icon: <Share2 className="w-7 h-7" />,
      title: "Social Media Marketing",
      description: "Build engaged communities and amplify your brand across all major social platforms.",
      features: ["Content Strategy", "Community Management", "Paid Social Ads", "Influencer Marketing"]
    },
    {
      icon: <Mail className="w-7 h-7" />,
      title: "Email Marketing",
      description: "Convert leads into customers with personalized email campaigns that deliver results.",
      features: ["Campaign Design", "Automation", "Segmentation", "A/B Testing"]
    }
  ];

  const channels = [
    { icon: <Search className="w-6 h-6" />, name: "Search Engine Marketing", color: "from-[#27ccae] to-emerald-400" },
    { icon: <Instagram className="w-6 h-6" />, name: "Social Media Ads", color: "from-emerald-400 to-teal-400" },
    { icon: <Mail className="w-6 h-6" />, name: "Email Campaigns", color: "from-teal-400 to-cyan-400" },
    { icon: <MessageCircle className="w-6 h-6" />, name: "Content Marketing", color: "from-cyan-400 to-[#27ccae]" }
  ];

  const stats = [
    { value: "500%", label: "Avg. ROI Increase", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "250+", label: "Successful Campaigns", icon: <Target className="w-5 h-5" /> },
    { value: "10M+", label: "Leads Generated", icon: <Users className="w-5 h-5" /> },
    { value: "98%", label: "Client Retention", icon: <Sparkles className="w-5 h-5" /> }
  ];

  const process = [
    {
      step: "01",
      title: "Audit & Strategy",
      description: "Analyze current performance and define goals",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Campaign Setup",
      description: "Create targeted campaigns across channels",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Launch & Optimize",
      description: "Deploy campaigns and continuously improve",
      icon: <Zap className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Report & Scale",
      description: "Measure results and scale what works",
      icon: <TrendingUp className="w-6 h-6" />
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#27ccae]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#27ccae]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Digital Marketing', href: '/services/digital-marketing' }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${mounted ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#27ccae]/10 border border-[#27ccae]/30 rounded-full text-sm">
                <Sparkles className="w-4 h-4 text-[#27ccae]" />
                <span className="text-[#27ccae] font-medium">Results-Driven Digital Marketing Agency</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Data-Driven Digital Marketing
                <span className="block mt-2 bg-gradient-to-r from-[#27ccae] via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  & SEO Growth Strategies
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Data-driven digital marketing strategies that deliver measurable results. More traffic, more leads, more revenue.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => router.push("/contact-us")}
                  className="px-8 py-4 bg-gradient-to-r from-[#27ccae] to-emerald-400 rounded-xl font-bold text-base hover:shadow-2xl hover:shadow-[#27ccae]/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>


              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-800">
                {stats.slice(0, 2).map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-2 bg-[#27ccae]/10 rounded-lg text-[#27ccae]">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#27ccae]">{stat.value}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual - Marketing Dashboard */}
            <div className={`relative ${mounted ? 'animate-slideInRight' : 'opacity-0'}`}>
              <div className="relative">
                {/* Main Dashboard */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border-2 border-[#27ccae]/20 shadow-2xl shadow-[#27ccae]/20">
                  {/* Graph Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Campaign Performance</div>
                      <div className="text-2xl font-bold text-[#27ccae]">↑ 347%</div>
                    </div>
                    <div className="px-3 py-1 bg-emerald-500/20 rounded-full text-xs font-semibold text-emerald-400">
                      Live
                    </div>
                  </div>

                  {/* Mock Graph */}
                  <div className="relative h-40 mb-6">
                    <svg className="w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#27ccae" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#27ccae" stopOpacity="0.05" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,140 L50,120 L100,90 L150,100 L200,60 L250,70 L300,30 L350,40 L400,10 L400,160 L0,160 Z"
                        fill="url(#gradient)"
                      />
                      <path
                        d="M0,140 L50,120 L100,90 L150,100 L200,60 L250,70 L300,30 L350,40 L400,10"
                        fill="none"
                        stroke="#27ccae"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-3 border border-[#27ccae]/10">
                      <div className="text-xs text-slate-400 mb-1">Clicks</div>
                      <div className="text-lg font-bold text-[#27ccae]">24.5K</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 border border-emerald-500/10">
                      <div className="text-xs text-slate-400 mb-1">Conversions</div>
                      <div className="text-lg font-bold text-emerald-400">1.2K</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 border border-cyan-500/10">
                      <div className="text-xs text-slate-400 mb-1">ROAS</div>
                      <div className="text-lg font-bold text-cyan-400">5.8x</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#27ccae] to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg shadow-[#27ccae]/30 animate-float">
                  <TrendingUp className="w-12 h-12 text-white" />
                </div>

                <div className="absolute -bottom-4 -left-4 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-[#27ccae]/30 shadow-xl">
                  <div className="text-sm text-slate-400">ROI</div>
                  <div className="text-lg font-bold text-[#27ccae]">500%+</div>
                </div>

                {/* Decorative blur */}
                <div className="absolute -z-10 -top-10 -right-10 w-80 h-80 bg-[#27ccae]/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Our Marketing <span className="text-[#27ccae]">Services</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions that drive growth across all channels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {marketingServices.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-[#27ccae]/10 hover:border-[#27ccae]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#27ccae]/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#27ccae] to-emerald-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#27ccae]" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#27ccae]/0 to-[#27ccae]/0 group-hover:from-[#27ccae]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Channels */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">Multi-Channel Marketing</h3>
            <p className="text-slate-400">Reach your audience wherever they are</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl p-6 border border-[#27ccae]/10 hover:border-[#27ccae]/30 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 bg-gradient-to-br ${channel.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {channel.icon}
                </div>
                <h4 className="font-semibold text-slate-200">{channel.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Types */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Marketing <span className="text-[#27ccae]">Approaches</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Tailored strategies based on your business goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {marketingTypes.map((type, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-[#27ccae]/10 hover:border-[#27ccae]/30 transition-all duration-300">
                <div className="w-2 h-2 bg-[#27ccae] rounded-full mb-6"></div>
                <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                <p className="text-slate-400 mb-6">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.metrics.map((metric, i) => (
                    <span key={i} className="px-3 py-1 bg-[#27ccae]/10 border border-[#27ccae]/20 rounded-full text-xs font-semibold text-[#27ccae]">
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
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Our Marketing <span className="text-[#27ccae]">Process</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A systematic approach to drive consistent growth
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-center space-y-4 group hover:scale-105 transition-transform duration-300">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#27ccae] to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg shadow-[#27ccae]/30 group-hover:shadow-2xl group-hover:shadow-[#27ccae]/50 transition-all">
                      {item.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 border-2 border-[#27ccae] rounded-full flex items-center justify-center text-xs font-bold">
                      {item.step}
                    </div>
                    {idx < process.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-[#27ccae] to-transparent"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Platforms */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Why Choose Our
                <span className="block text-[#27ccae]">Marketing Agency</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                We don't just run campaigns—we build growth engines that scale with your business.
              </p>

              <div className="space-y-4 pt-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#27ccae]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#27ccae]" />
                    </div>
                    <p className="text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-[#27ccae]/20">
                <h3 className="text-xl font-bold mb-6">Platforms We Advertise On</h3>
                <div className="grid grid-cols-2 gap-4">
                  {platforms.map((platform, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-[#27ccae]/10 hover:border-[#27ccae]/30 transition-all duration-300">
                      <span className="text-2xl">{platform.icon}</span>
                      <span className="font-semibold text-slate-200 text-sm">{platform.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#27ccae]/10 to-emerald-500/10 rounded-2xl p-8 border border-[#27ccae]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#27ccae] to-emerald-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Megaphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Free Marketing Audit</h4>
                    <p className="text-sm text-slate-300">Get a comprehensive analysis of your current marketing performance and opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





    </div>
  );
}