'use client';

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import { Layers, Zap, Shield, Globe, CheckCircle2, ArrowRight, Code, Layout, Sparkles, Database, Lock, Gauge } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function CMSSolutionsPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cmsServices = [
    {
      icon: <Layers className="w-7 h-7" />,
      title: "Custom CMS Development",
      description: "Tailored content management systems built specifically for your business needs and workflow.",
      features: ["Custom Architecture", "Scalable Infrastructure", "API Integration", "Admin Dashboard"]
    },
    {
      icon: <Layout className="w-7 h-7" />,
      title: "Headless CMS",
      description: "Modern, API-first content management with maximum flexibility and performance.",
      features: ["Contentful", "Strapi", "Sanity", "Prismic"]
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: "WordPress Solutions",
      description: "Enterprise-grade WordPress development with custom themes and advanced functionality.",
      features: ["Custom Themes", "Plugin Development", "WooCommerce", "Multisite"]
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized for speed and performance"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Language",
      description: "Global reach with i18n support"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Scalable Database",
      description: "Handle millions of content pieces"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Role-Based Access",
      description: "Granular permission controls"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Real-Time Analytics",
      description: "Track content performance live"
    }
  ];

  const platforms = [
    { name: "WordPress", icon: "🔷" },
    { name: "Contentful", icon: "📦" },
    { name: "Strapi", icon: "🚀" },
    { name: "Sanity", icon: "✨" },
    { name: "Drupal", icon: "💧" },
    { name: "Custom CMS", icon: "⚡" }
  ];

  const benefits = [
    "Easy content updates without technical knowledge",
    "SEO-optimized content management",
    "Multi-channel content distribution",
    "Version control and content scheduling",
    "Collaborative editing workflows",
    "Media library management"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#27ccae]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'SaaS & CMS', href: '/services/cms-solution' }]} />
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className={`${mounted ? 'animate-fadeIn' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#27ccae]/10 border border-[#27ccae]/30 rounded-full text-sm mb-8">
                <Sparkles className="w-4 h-4 text-[#27ccae]" />
                <span className="text-[#27ccae] font-medium">Enterprise SaaS & CMS Experts</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Architecting Scalable
                <span className="block mt-2 bg-gradient-to-r from-[#27ccae] via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Enterprise SaaS & CMS
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
                Take control of your content with enterprise-grade CMS solutions. Fast, secure, and built to grow with your business.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => router.push("/contact-us")}
                  className="px-8 py-4 bg-gradient-to-r from-[#27ccae] to-emerald-400 rounded-xl font-bold text-base hover:shadow-2xl hover:shadow-[#27ccae]/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CMS Services */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Our CMS <span className="text-[#27ccae]">Solutions</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From custom builds to enterprise platforms, we deliver CMS solutions that empower your team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cmsServices.map((service, idx) => (
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

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Our <span className="text-[#27ccae]">CMS Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl p-6 border border-[#27ccae]/10 hover:border-[#27ccae]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#27ccae]/10 rounded-lg flex items-center justify-center mb-4 text-[#27ccae]">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">Platforms We Master</h3>
            <p className="text-slate-400">Expert implementation across all major CMS platforms</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform, idx) => (
              <div key={idx} className="px-8 py-4 bg-slate-800/50 border border-[#27ccae]/20 rounded-xl hover:border-[#27ccae]/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#27ccae]/20 flex items-center gap-3">
                <span className="text-2xl">{platform.icon}</span>
                <span className="font-semibold text-slate-200">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>






      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#27ccae]/20 to-emerald-500/20 blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-12 border border-[#27ccae]/30 shadow-2xl shadow-[#27ccae]/20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform
              <span className="block mt-2 bg-gradient-to-r from-[#27ccae] to-emerald-400 bg-clip-text text-transparent">
                Your Content Management?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's build a CMS solution that scales with your ambitions. Get started with a free consultation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => router.push("/contact-us")}
                className="px-8 py-4 bg-gradient-to-r from-[#27ccae] to-emerald-400 rounded-xl font-bold text-base hover:shadow-2xl hover:shadow-[#27ccae]/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>


            </div>
          </div>
        </div>
      </section>


    </div>
  );
}