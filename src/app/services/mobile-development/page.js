'use client';

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import { Smartphone, Code2, Zap, Shield, Users, ArrowRight, Star, CheckCircle2, Sparkles, Rocket } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { NoiseButton } from '@/components/ui/noise-background';

export default function MobileDevelopmentpage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: <Smartphone className="w-7 h-7 text-[#50a2ff]" />,
      title: "Native iOS & Android",
      subtitle: "Swift & Kotlin Excellence",
      description: "Unleash maximum hardware performance with native Swift and Kotlin development. 60fps rendering and seamless OS integration.",
      features: ["Swift & SwiftData", "Kotlin & Jetpack Compose", "Biometrics & Metal", "Background Task Orchestration"]
    },
    {
      icon: <Code2 className="w-7 h-7 text-[#50a2ff]" />,
      title: "Flutter Engineering",
      subtitle: "Cross-Platform Precision",
      description: "Build high-performance, natively compiled applications for iOS and Android from a single shared Dart codebase.",
      features: ["Single Codebase", "Skia & Impeller Engine", "Custom Animation Drivers", "Native Platform Channels"]
    },
    {
      icon: <Zap className="w-7 h-7 text-[#50a2ff]" />,
      title: "React Native & Expo",
      subtitle: "TypeScript Speed",
      description: "Leverage modern React architecture with the new TurboModules architecture for snappy, native-feeling enterprise apps.",
      features: ["TypeScript & React 19", "OTA Live Updates", "Offline-First Sync", "Custom C++ TurboModules"]
    }
  ];

  const stats = [
    { value: "100+", label: "Apps Delivered", icon: <Rocket className="w-5 h-5 text-[#50a2ff]" /> },
    { value: "4.9 ★", label: "Store Rating Avg", icon: <Star className="w-5 h-5 text-[#50a2ff]" /> },
    { value: "50M+", label: "Active Installs", icon: <Users className="w-5 h-5 text-[#50a2ff]" /> },
    { value: "99.9%", label: "Crash-Free Rate", icon: <Shield className="w-5 h-5 text-[#50a2ff]" /> }
  ];

  const techStack = [
    { name: "Flutter" },
    { name: "React Native" },
    { name: "Swift / iOS" },
    { name: "Kotlin / Android" },
    { name: "Firebase" },
    { name: "AWS Amplify" }
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "Architecture mapping, API specs, and technical feasibility" },
    { step: "02", title: "UI/UX Prototype", desc: "Interactive mobile designs in Figma with strict tap-target compliance" },
    { step: "03", title: "Milestone Sprints", desc: "Testflight & Internal Track builds delivered every 2 weeks" },
    { step: "04", title: "Store Launch", desc: "App Store & Google Play submission, review approvals, and analytics setup" }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-24 sm:pt-28 pb-24 overflow-hidden relative selection:bg-[#50a2ff] selection:text-[#030712] font-inter">

      {/* Hero Section */}
      <section className="relative pt-6 pb-20 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Mobile Development', href: '/services/mobile-development' }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
            <div className={`space-y-8 ${mounted ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#030712] border border-[#155dfc]/30 rounded-full text-sm">
                <Sparkles className="w-4 h-4 text-[#50a2ff]" />
                <span className="text-[#50a2ff] font-bold uppercase tracking-wider text-xs">Full-Lifecycle Mobile App Engineering</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                Building High-Performance, <br />
                <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">
                  Scalable Mobile Apps
                </span>
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed font-normal">
                We design and engineer enterprise mobile experiences across iOS and Android that captivate users, maintain 99.9% crash-free stability, and scale smoothly to millions of active sessions.
              </p>

              <div className="flex flex-wrap gap-4">
                <NoiseButton
                  onClick={() => router.push("/contact-us")}
                  className="w-full sm:w-auto"
                >
                  <span>Request App Scoping</span>
                  <ArrowRight className="w-5 h-5 text-[#50a2ff]" />
                </NoiseButton>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
                {stats.map((stat, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-center">
                    <div className="text-2xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent mb-0.5">{stat.value}</div>
                    <div className="text-xs text-gray-400 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual */}
            <div className={`relative ${mounted ? 'animate-slideInRight' : 'opacity-0'}`}>
              <div className="bg-[#030712] rounded-3xl p-8 sm:p-10 border border-white/[0.08] shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] relative z-10">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#50a2ff]">Mobile Standards</span>
                    <h3 className="text-xl font-bold text-white mt-0.5">Enterprise App Benchmarks</h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-[#155dfc]/15 border border-[#155dfc]/30 flex items-center justify-center text-[#50a2ff]">
                    <Smartphone size={20} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                    <p className="text-2xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">60 fps</p>
                    <p className="text-xs font-bold text-white mt-1">Render Precision</p>
                    <p className="text-[10px] text-gray-400">Fluid animations</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                    <p className="text-2xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">&lt;1.5s</p>
                    <p className="text-xs font-bold text-white mt-1">Cold App Launch</p>
                    <p className="text-[10px] text-gray-400">Fast startup</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                    <p className="text-2xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">100%</p>
                    <p className="text-xs font-bold text-white mt-1">Offline-First</p>
                    <p className="text-[10px] text-gray-400">Local SQLite / Realm</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                    <p className="text-2xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">99.9%</p>
                    <p className="text-xs font-bold text-white mt-1">Crash-Free SLA</p>
                    <p className="text-[10px] text-gray-400">Production telemetry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#50a2ff] block">Offerings</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
              Mobile App <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Engineering</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto font-normal">
              Native and cross-platform architectures tailored to your performance requirements and time-to-market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
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

                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#50a2ff] transition-colors">{service.title}</h3>
                  <p className="text-xs font-bold text-[#50a2ff] uppercase tracking-wider mb-4">{service.subtitle}</p>
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

      {/* Tech Stack */}
      <section className="py-16 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Modern Mobile Tooling</h3>
            <p className="text-gray-400 text-sm font-normal">Engineered with battle-tested native frameworks and continuous integration pipelines</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, idx) => (
              <div key={idx} className="px-8 py-4 bg-[#030712] border border-white/[0.08] rounded-2xl hover:border-[#50a2ff]/40 transition-all duration-300 hover:scale-105 shadow-xl">
                <span className="font-bold text-[#50a2ff] text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 lg:py-28 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#50a2ff] block">Methodology</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white">
              Our 4-Stage App Delivery <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Cycle</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto font-normal">
              From requirement workshops to App Store launch and post-release telemetry
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-center space-y-4 group bg-[#030712] p-6 rounded-2xl border border-white/[0.08] hover:border-[#50a2ff]/40 transition-all duration-300 shadow-2xl">
                  <div className="w-14 h-14 mx-auto bg-[#155dfc]/15 border border-[#155dfc]/30 rounded-2xl flex items-center justify-center text-[#50a2ff] font-black text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-normal">{item.desc}</p>
                </div>
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
              Ready to Launch Your <br />
              <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">
                Next Flagship Mobile App?
              </span>
            </h2>
            <p className="text-base text-gray-400 mb-8 max-w-2xl mx-auto font-normal relative z-10">
              Let&apos;s engineer an app that users love and that scales seamlessly with your business milestones.
            </p>
            <div className="flex flex-wrap gap-4 justify-center relative z-10">
              <NoiseButton
                onClick={() => router.push("/contact-us")}
                className="w-full sm:w-auto"
              >
                <span>Request App Estimate</span>
                <ArrowRight className="w-5 h-5 text-[#50a2ff]" />
              </NoiseButton>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}