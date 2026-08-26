'use client';

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import { Layers, Zap, Shield, Globe, CheckCircle2, ArrowRight, Code, Layout, Sparkles, Database, Lock, Gauge } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { NoiseButton } from '@/components/ui/noise-background';

export default function CMSSolutionsPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cmsServices = [
    {
      icon: <Layers className="w-7 h-7 text-[#50a2ff]" />,
      title: "Custom CMS Development",
      description: "Tailored content management systems built specifically for your enterprise workflows and operational pipelines.",
      features: ["Custom Architecture", "Scalable Infrastructure", "API Integration", "Custom Admin Dashboards"]
    },
    {
      icon: <Layout className="w-7 h-7 text-[#50a2ff]" />,
      title: "Headless CMS Architecture",
      description: "Modern, API-first headless content management with maximum frontend performance and multi-channel publishing.",
      features: ["Contentful", "Strapi", "Sanity", "Prismic"]
    },
    {
      icon: <Code className="w-7 h-7 text-[#50a2ff]" />,
      title: "Enterprise WordPress & Headless",
      description: "High-performance WordPress engineering with custom Next.js frontends, bespoke plugins, and decoupled databases.",
      features: ["Decoupled Next.js", "Plugin Development", "WooCommerce APIs", "Global Multisite Networks"]
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-[#50a2ff]" />,
      title: "Lightning Fast Delivery",
      description: "Edge-cached static and dynamic routing with Sub-50ms TTFB."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#50a2ff]" />,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliant pipelines with automated vulnerability patching."
    },
    {
      icon: <Globe className="w-6 h-6 text-[#50a2ff]" />,
      title: "Multi-Language & i18n",
      description: "Global localization with synchronized translation workflows."
    },
    {
      icon: <Database className="w-6 h-6 text-[#50a2ff]" />,
      title: "Scalable Schema Design",
      description: "Structured relational models ready for millions of content nodes."
    },
    {
      icon: <Lock className="w-6 h-6 text-[#50a2ff]" />,
      title: "Granular RBAC",
      description: "Multi-tier role-based access control and editorial approval gates."
    },
    {
      icon: <Gauge className="w-6 h-6 text-[#50a2ff]" />,
      title: "Real-Time Telemetry",
      description: "Live content performance, indexing alerts, and SEO scoring."
    }
  ];

  const platforms = [
    { name: "WordPress / VIP" },
    { name: "Contentful" },
    { name: "Strapi" },
    { name: "Sanity.io" },
    { name: "Drupal Enterprise" },
    { name: "Custom GraphQL CMS" }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-24 sm:pt-28 pb-24 overflow-hidden relative selection:bg-[#50a2ff] selection:text-[#030712] font-inter">

      {/* Hero Section */}
      <section className="relative pt-6 pb-20 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'SaaS & CMS', href: '/services/cms-solution' }]} />
          <div className="max-w-4xl mx-auto text-center space-y-8 mt-6">
            <div className={`${mounted ? 'animate-fadeIn' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#030712] border border-[#155dfc]/30 rounded-full text-sm mb-6">
                <Sparkles className="w-4 h-4 text-[#50a2ff]" />
                <span className="text-[#50a2ff] font-bold uppercase tracking-wider text-xs">Enterprise SaaS &amp; CMS Engineering</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Architecting Scalable <br />
                <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">
                  Enterprise SaaS &amp; Headless CMS
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
                Take command of your digital publishing with enterprise-grade headless CMS architectures. Engineered with Next.js, GraphQL, and cloud-native backends.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <NoiseButton
                  onClick={() => router.push("/contact-us")}
                  className="w-full sm:w-auto"
                >
                  <span>Start CMS Architecture Discussion</span>
                  <ArrowRight className="w-5 h-5 text-[#50a2ff]" />
                </NoiseButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CMS Services */}
      <section className="py-20 lg:py-28 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#50a2ff] block">Offerings</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
              Our CMS <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto font-normal">
              From decoupled headless CMS pipelines to enterprise platforms, we deliver content hubs that empower your marketing and editorial squads.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cmsServices.map((service, idx) => (
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

      {/* Features Grid */}
      <section className="py-20 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#50a2ff] block">Standards</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white">
              Why Partner with Us for <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">CMS Architecture</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#030712] rounded-2xl p-7 border border-white/[0.08] hover:border-[#50a2ff]/40 transition-all duration-300 shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />
                <div className="w-12 h-12 bg-[#155dfc]/15 border border-[#155dfc]/30 rounded-2xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-normal">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">CMS Platforms We Specialize In</h3>
            <p className="text-gray-400 text-sm font-normal">Enterprise implementation and data migration across all industry-standard frameworks</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, idx) => (
              <div key={idx} className="px-8 py-4 bg-[#030712] border border-white/[0.08] rounded-2xl hover:border-[#50a2ff]/40 transition-all duration-300 hover:scale-105 shadow-xl">
                <span className="font-bold text-[#50a2ff] text-sm">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative border-t border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="bg-[#030712] rounded-3xl p-10 md:p-14 border border-white/[0.08] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-4 relative z-10">
              Ready to Upgrade Your <br />
              <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">
                Enterprise Content Engine?
              </span>
            </h2>
            <p className="text-base text-gray-400 mb-8 max-w-2xl mx-auto font-normal relative z-10">
              Let&apos;s engineer a headless CMS architecture that scales with your global publishing needs and eliminates editorial bottlenecks.
            </p>
            <div className="flex flex-wrap gap-4 justify-center relative z-10">
              <NoiseButton
                onClick={() => router.push("/contact-us")}
                className="w-full sm:w-auto"
              >
                <span>Request CMS Scoping Call</span>
                <ArrowRight className="w-5 h-5 text-[#50a2ff]" />
              </NoiseButton>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}