'use client';

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import { Palette, Figma, Sparkles, ArrowRight, CheckCircle2, Users, Eye, Pencil, Layout, Smartphone, Monitor, Layers } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { NoiseButton } from '@/components/ui/noise-background';

export default function UIUXDesignPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const designServices = [
    {
      icon: <Palette className="w-7 h-7 text-[#50a2ff]" />,
      title: "UI Design",
      description: "Stunning visual interfaces that capture attention and reflect your brand identity perfectly.",
      features: ["Visual Design", "Brand Identity", "Design Systems", "Iconography"]
    },
    {
      icon: <Eye className="w-7 h-7 text-[#50a2ff]" />,
      title: "UX Research",
      description: "Data-driven insights that inform every design decision and ensure user satisfaction.",
      features: ["User Research", "Persona Creation", "Journey Mapping", "Usability Testing"]
    },
    {
      icon: <Figma className="w-7 h-7 text-[#50a2ff]" />,
      title: "Prototyping",
      description: "Interactive prototypes that bring your vision to life before a single line of code.",
      features: ["Wireframing", "Interactive Prototypes", "Micro-interactions", "Design Handoff"]
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Research",
      description: "Understanding users, market, and product objectives",
      icon: <Users className="w-6 h-6 text-[#50a2ff]" />
    },
    {
      step: "02",
      title: "Ideate",
      description: "Brainstorming solutions, architecture, and concepts",
      icon: <Sparkles className="w-6 h-6 text-[#50a2ff]" />
    },
    {
      step: "03",
      title: "Design",
      description: "Crafting beautiful, functional, accessible interfaces",
      icon: <Pencil className="w-6 h-6 text-[#50a2ff]" />
    },
    {
      step: "04",
      title: "Test",
      description: "Validating usability with real enterprise users",
      icon: <Eye className="w-6 h-6 text-[#50a2ff]" />
    }
  ];

  const capabilities = [
    { icon: <Monitor className="w-5 h-5 text-[#50a2ff]" />, text: "Web Design & SaaS" },
    { icon: <Smartphone className="w-5 h-5 text-[#50a2ff]" />, text: "Mobile App UX/UI" },
    { icon: <Layout className="w-5 h-5 text-[#50a2ff]" />, text: "Complex Dashboards" },
    { icon: <Layers className="w-5 h-5 text-[#50a2ff]" />, text: "Enterprise Design Systems" }
  ];

  const stats = [
    { value: "300+", label: "Projects Designed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Design Awards" },
    { value: "10M+", label: "Active Users" }
  ];

  const tools = [
    { name: "Figma" },
    { name: "Adobe XD" },
    { name: "Sketch" },
    { name: "Framer" },
    { name: "Principle" },
    { name: "InVision" }
  ];

  const principles = [
    {
      title: "User-Centered",
      description: "Every decision starts with the user's needs, behavior, and workflow goals."
    },
    {
      title: "Accessible & Compliant",
      description: "Inclusive design built to WCAG 2.2 Level AA guidelines for universal accessibility."
    },
    {
      title: "Consistent & Cohesive",
      description: "Harmonious experiences across web, tablet, iOS, and Android touchpoints."
    },
    {
      title: "Intuitive Navigation",
      description: "Information architecture that feels natural, reducing cognitive load and friction."
    },
    {
      title: "Scalable Token Systems",
      description: "Atomic design tokens and component libraries that scale as your product evolves."
    },
    {
      title: "Micro-Delights",
      description: "Purposeful motion and interactive feedback that elevate user engagement."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-24 sm:pt-28 pb-24 overflow-hidden relative selection:bg-[#50a2ff] selection:text-[#030712] font-inter">

      {/* Hero Section */}
      <section className="relative pt-6 pb-20 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'UI/UX Design', href: '/services/ui-ux' }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
            <div className={`space-y-8 ${mounted ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#030712] border border-[#155dfc]/30 rounded-full text-sm">
                <Sparkles className="w-4 h-4 text-[#50a2ff]" />
                <span className="text-[#50a2ff] font-bold uppercase tracking-wider text-xs">Human-Centric Digital Product Design</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                Strategic UI/UX Design
                <span className="block mt-2 bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">
                  for Digital Excellence
                </span>
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed font-normal">
                We craft beautiful, user-centered experiences that don&apos;t just look good—they solve complex business problems, streamline workflows, and drive measurable user adoption.
              </p>

              <div className="flex flex-wrap gap-4">
                <NoiseButton
                  onClick={() => router.push("/contact-us")}
                  className="w-full sm:w-auto"
                >
                  <span>Start Design Consultation</span>
                  <ArrowRight className="w-5 h-5 text-[#50a2ff]" />
                </NoiseButton>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
                {stats.map((stat, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-center">
                    <div className="text-2xl font-black bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent mb-0.5">{stat.value}</div>
                    <div className="text-xs text-gray-400 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual - Design Mockup */}
            <div className={`relative ${mounted ? 'animate-slideInRight' : 'opacity-0'}`}>
              <div className="relative">
                {/* Main Design Board */}
                <div className="bg-[#030712] rounded-3xl p-8 border border-white/[0.08] shadow-2xl space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
                  {/* Browser-like header */}
                  <div className="flex items-center gap-2 pb-4 border-b border-white/[0.08] relative z-10">
                    <div className="w-3 h-3 rounded-full bg-[#155dfc]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#50a2ff]"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="flex-1 h-5 bg-white/[0.04] rounded-md ml-4"></div>
                  </div>

                  {/* Design elements */}
                  <div className="space-y-4 relative z-10">
                    <div className="h-32 bg-[#155dfc]/10 border border-[#155dfc]/30 rounded-2xl flex items-center justify-center">
                      <Palette className="w-16 h-16 text-[#50a2ff]/40" />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-20 bg-white/[0.04] rounded-2xl border border-white/[0.08]"></div>
                      <div className="h-20 bg-white/[0.04] rounded-2xl border border-white/[0.08]"></div>
                      <div className="h-20 bg-white/[0.04] rounded-2xl border border-white/[0.08]"></div>
                    </div>

                    <div className="space-y-2">
                      <div className="h-3 bg-white/[0.08] rounded-full w-full"></div>
                      <div className="h-3 bg-white/[0.08] rounded-full w-3/4"></div>
                      <div className="h-3 bg-white/[0.08] rounded-full w-5/6"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Figma badge */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#155dfc] rounded-2xl flex items-center justify-center shadow-xl text-white">
                  <Figma className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-20 lg:py-28 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#50a2ff] block">Offerings</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
              Our Design <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto font-normal">
              End-to-end design solutions that transform ideas into intuitive, high-converting product journeys.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {designServices.map((service, idx) => (
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

      {/* Capabilities */}
      <section className="py-16 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#030712] rounded-3xl p-8 sm:p-12 border border-white/[0.08] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
            <div className="text-center mb-10 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">What We Design &amp; Prototype</h3>
              <p className="text-gray-400 text-sm font-normal">Versatile product design expertise across all modern form factors</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 relative z-10">
              {capabilities.map((capability, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white/[0.04] rounded-2xl border border-white/[0.08] hover:border-[#50a2ff]/40 shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 bg-[#155dfc]/15 rounded-xl border border-[#155dfc]/30 flex items-center justify-center">
                    {capability.icon}
                  </div>
                  <span className="font-bold text-white text-sm">{capability.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 lg:py-28 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#50a2ff] block">Methodology</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white">
              Our 4-Stage UX <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto font-normal">
              A proven, iterative design framework ensuring flawless execution from initial sketches to production handoff
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
            {designProcess.map((item, idx) => (
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

      {/* Design Principles */}
      <section className="py-20 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">
              Our Guiding Design <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Principles</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto font-normal">
              The foundational pillars that guide every layout, typography hierarchy, and motion transition we craft
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="bg-[#030712] rounded-3xl p-8 border border-white/[0.08] hover:border-[#50a2ff]/40 transition-all duration-300 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60" />
                <div className="w-2.5 h-2.5 bg-[#50a2ff] rounded-full mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-2">{principle.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-normal">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Design Tooling &amp; Prototyping Stack</h3>
            <p className="text-gray-400 text-sm font-normal">Industry-standard tools for rapid collaboration and seamless developer handoff</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, idx) => (
              <div key={idx} className="px-8 py-4 bg-[#030712] border border-white/[0.08] rounded-2xl hover:border-[#50a2ff]/40 transition-all duration-300 hover:scale-105 shadow-xl">
                <span className="font-bold text-[#50a2ff] text-sm">{tool.name}</span>
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
            <div className="w-16 h-16 bg-[#155dfc]/15 border border-[#155dfc]/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#50a2ff] relative z-10">
              <Palette className="w-8 h-8" />
            </div>

            <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-4 relative z-10">
              Let&apos;s Create Something <br />
              <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h2>
            <p className="text-base text-gray-400 mb-8 max-w-2xl mx-auto font-normal relative z-10">
              Ready to elevate your digital product experience? Let&apos;s discuss your requirements and build a prototype that will captivate your users.
            </p>
            <div className="flex flex-wrap gap-4 justify-center relative z-10">
              <NoiseButton
                onClick={() => router.push("/contact-us")}
                className="w-full sm:w-auto"
              >
                <span>Request UI/UX Consultation</span>
                <ArrowRight className="w-5 h-5 text-[#50a2ff]" />
              </NoiseButton>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}