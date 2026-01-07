'use client';

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import { Palette, Figma, Sparkles, ArrowRight, CheckCircle2, Zap, Users, Eye, Pencil, Layout, Smartphone, Monitor, Layers } from 'lucide-react';

export default function UIUXDesignPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const designServices = [
    {
      icon: <Palette className="w-7 h-7" />,
      title: "UI Design",
      description: "Stunning visual interfaces that capture attention and reflect your brand identity perfectly.",
      features: ["Visual Design", "Brand Identity", "Design Systems", "Iconography"]
    },
    {
      icon: <Eye className="w-7 h-7" />,
      title: "UX Research",
      description: "Data-driven insights that inform every design decision and ensure user satisfaction.",
      features: ["User Research", "Persona Creation", "Journey Mapping", "Usability Testing"]
    },
    {
      icon: <Figma className="w-7 h-7" />,
      title: "Prototyping",
      description: "Interactive prototypes that bring your vision to life before a single line of code.",
      features: ["Wireframing", "Interactive Prototypes", "Micro-interactions", "Design Handoff"]
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Research",
      description: "Understanding users, market, and objectives",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Ideate",
      description: "Brainstorming solutions and concepts",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Design",
      description: "Creating beautiful, functional interfaces",
      icon: <Pencil className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Test",
      description: "Validating with real users",
      icon: <Eye className="w-6 h-6" />
    }
  ];

  const capabilities = [
    { icon: <Monitor className="w-5 h-5" />, text: "Web Design" },
    { icon: <Smartphone className="w-5 h-5" />, text: "Mobile App Design" },
    { icon: <Layout className="w-5 h-5" />, text: "Dashboard & SaaS UI" },
    { icon: <Layers className="w-5 h-5" />, text: "Design Systems" }
  ];

  const stats = [
    { value: "300+", label: "Projects Designed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Design Awards" },
    { value: "10M+", label: "Happy Users" }
  ];

  const tools = [
    { name: "Figma", color: "#27ccae" },
    { name: "Adobe XD", color: "#27ccae" },
    { name: "Sketch", color: "#27ccae" },
    { name: "Framer", color: "#27ccae" },
    { name: "Principle", color: "#27ccae" },
    { name: "InVision", color: "#27ccae" }
  ];

  const principles = [
    {
      title: "User-Centered",
      description: "Every decision starts with the user's needs and goals"
    },
    {
      title: "Accessible",
      description: "Inclusive design that works for everyone"
    },
    {
      title: "Consistent",
      description: "Cohesive experiences across all touchpoints"
    },
    {
      title: "Intuitive",
      description: "Interfaces that feel natural and effortless"
    },
    {
      title: "Scalable",
      description: "Design systems that grow with your product"
    },
    {
      title: "Delightful",
      description: "Memorable experiences that users love"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#27ccae]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#27ccae]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${mounted ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#27ccae]/10 border border-[#27ccae]/30 rounded-full text-sm">
                <Sparkles className="w-4 h-4 text-[#27ccae]" />
                <span className="text-[#27ccae] font-medium">Award-Winning Design Studio</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Design That
                <span className="block mt-2 bg-gradient-to-r from-[#27ccae] via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Drives Results
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                We craft beautiful, user-centered experiences that don't just look good—they solve real problems and drive measurable business outcomes.
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
                  <div key={i}>
                    <div className="text-3xl font-bold text-[#27ccae] mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual - Design Mockup */}
            <div className={`relative ${mounted ? 'animate-slideInRight' : 'opacity-0'}`}>
              <div className="relative">
                {/* Main Design Board */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border-2 border-[#27ccae]/20 shadow-2xl shadow-[#27ccae]/20">
                  {/* Browser-like header */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    <div className="flex-1 h-6 bg-slate-800/50 rounded ml-4"></div>
                  </div>

                  {/* Design elements */}
                  <div className="space-y-4">
                    <div className="h-32 bg-gradient-to-r from-[#27ccae] to-emerald-400 rounded-2xl flex items-center justify-center">
                      <Palette className="w-16 h-16 text-white opacity-50" />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-20 bg-slate-800 rounded-xl border border-[#27ccae]/20"></div>
                      <div className="h-20 bg-slate-800 rounded-xl border border-[#27ccae]/20"></div>
                      <div className="h-20 bg-slate-800 rounded-xl border border-[#27ccae]/20"></div>
                    </div>

                    <div className="space-y-2">
                      <div className="h-3 bg-slate-700/50 rounded w-full"></div>
                      <div className="h-3 bg-slate-700/50 rounded w-3/4"></div>
                      <div className="h-3 bg-slate-700/50 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#27ccae] to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg shadow-[#27ccae]/30 animate-float">
                  <Figma className="w-12 h-12 text-white" />
                </div>

                <div className="absolute -bottom-4 -left-4 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-[#27ccae]/30 shadow-xl">
                  <div className="text-sm text-slate-400">Design System</div>
                  <div className="text-lg font-bold text-[#27ccae]">Ready</div>
                </div>

                {/* Decorative blur */}
                <div className="absolute -z-10 -top-10 -right-10 w-80 h-80 bg-[#27ccae]/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Our Design <span className="text-[#27ccae]">Services</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              End-to-end design solutions that transform ideas into exceptional user experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {designServices.map((service, idx) => (
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

      {/* Capabilities */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-3xl p-12 border border-[#27ccae]/10">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold mb-2">What We Design</h3>
              <p className="text-slate-400">Versatile expertise across all digital platforms</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {capabilities.map((capability, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-[#27ccae]/10 hover:border-[#27ccae]/30 transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 bg-[#27ccae]/10 rounded-lg flex items-center justify-center text-[#27ccae]">
                    {capability.icon}
                  </div>
                  <span className="font-semibold text-slate-200">{capability.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Our Design <span className="text-[#27ccae]">Process</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {designProcess.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-center space-y-4 group hover:scale-105 transition-transform duration-300">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#27ccae] to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg shadow-[#27ccae]/30 group-hover:shadow-2xl group-hover:shadow-[#27ccae]/50 transition-all">
                      {item.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 border-2 border-[#27ccae] rounded-full flex items-center justify-center text-xs font-bold">
                      {item.step}
                    </div>
                    {idx < designProcess.length - 1 && (
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

      {/* Design Principles */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Design <span className="text-[#27ccae]">Principles</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              The foundation of every interface we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl p-6 border border-[#27ccae]/10 hover:border-[#27ccae]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-2 h-2 bg-[#27ccae] rounded-full mb-4"></div>
                <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                <p className="text-slate-400 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">Design Tools We Master</h3>
            <p className="text-slate-400">Industry-leading software for world-class results</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, idx) => (
              <div key={idx} className="px-8 py-4 bg-slate-800/50 border border-[#27ccae]/20 rounded-xl hover:border-[#27ccae]/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#27ccae]/20">
                <span className="font-semibold text-[#27ccae]">{tool.name}</span>
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
            <div className="w-16 h-16 bg-gradient-to-br from-[#27ccae] to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Palette className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Create Something
              <span className="block mt-2 bg-gradient-to-r from-[#27ccae] to-emerald-400 bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Ready to elevate your digital experience? Let's discuss your project and bring your vision to life.
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
      </section>

      
    </div>
  );
}