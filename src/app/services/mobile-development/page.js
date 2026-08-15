'use client';

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import { Smartphone, Code2, Zap, Shield, Users, ArrowRight, Star, CheckCircle2, Globe, Sparkles, Rocket, ChevronRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function MobileDevelopmentpage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Native Development",
      subtitle: "iOS & Android",
      description: "Unleash maximum performance with native Swift and Kotlin development. Perfect pixel precision meets blazing speed.",
      features: ["Swift & Kotlin", "Native UI/UX", "100% Performance", "Platform APIs"],
      gradient: "from-[#27ccae] to-emerald-400"
    },
    {
      icon: <Code2 className="w-7 h-7" />,
      title: "Flutter Apps",
      subtitle: "Cross-Platform Excellence",
      description: "Build stunning, natively compiled applications from a single codebase. Beautiful, fast, and productive.",
      features: ["Single Codebase", "Hot Reload", "Material Design", "Custom Widgets"],
      gradient: "from-[#27ccae] to-cyan-400"
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "React Native",
      subtitle: "JavaScript Power",
      description: "Leverage your web expertise to create exceptional mobile experiences. Fast iteration, native feel.",
      features: ["JavaScript/TypeScript", "Live Updates", "Rich Ecosystem", "Native Modules"],
      gradient: "from-cyan-400 to-[#27ccae]"
    }
  ];

  const stats = [
    { value: "100+", label: "Apps Delivered", icon: <Rocket className="w-5 h-5" /> },
    { value: "98%", label: "Client Satisfaction", icon: <Star className="w-5 h-5" /> },
    { value: "50M+", label: "Active Users", icon: <Users className="w-5 h-5" /> },
    { value: "15+", label: "Years Experience", icon: <Shield className="w-5 h-5" /> }
  ];

  const techStack = [
    { name: "Flutter", color: "#27ccae" },
    { name: "React Native", color: "#27ccae" },
    { name: "Swift", color: "#27ccae" },
    { name: "Kotlin", color: "#27ccae" },
    { name: "Firebase", color: "#27ccae" },
    { name: "AWS", color: "#27ccae" }
  ];

  const testimonials = [
    {
      quote: "They transformed our vision into a stunning app that our users absolutely love. The attention to detail is remarkable.",
      author: "Sarah Chen",
      role: "CEO, TechStart",
      rating: 5
    },
    {
      quote: "Best mobile development team we've worked with. Professional, responsive, and delivered ahead of schedule.",
      author: "Michael Roberts",
      role: "CTO, FinanceFlow",
      rating: 5
    },
    {
      quote: "The Flutter app they built performs flawlessly across all devices. Couldn't be happier with the results.",
      author: "Emily Davis",
      role: "Product Lead, HealthSync",
      rating: 5
    }
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "Deep dive into your vision and goals" },
    { step: "02", title: "Design", desc: "Craft stunning, user-centric interfaces" },
    { step: "03", title: "Develop", desc: "Build with precision and excellence" },
    { step: "04", title: "Deploy", desc: "Launch and scale with confidence" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#27ccae]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#27ccae]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Mobile Development', href: '/services/mobile-development' }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${mounted ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#27ccae]/10 border border-[#27ccae]/30 rounded-full text-sm">
                <Sparkles className="w-4 h-4 text-[#27ccae]" />
                <span className="text-[#27ccae] font-medium">Leading Mobile App Development Company in India</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Building High-Performance,
                <span className="block mt-2 bg-gradient-to-r from-[#27ccae] via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Scalable Mobile Apps
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                We craft exceptional mobile experiences that captivate users and drive business growth. From concept to App Store, we're your trusted partner.
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

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-800">
                {stats.slice(0, 3).map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-2 bg-[#27ccae]/10 rounded-lg">
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

            {/* Hero Visual */}
            <div className={`relative ${mounted ? 'animate-slideInRight' : 'opacity-0'}`}>
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Floating Phone Mockups */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Phone 1 */}
                  <div className="absolute left-0 top-10 w-48 h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-3 shadow-2xl shadow-[#27ccae]/20 border border-[#27ccae]/20 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-[#27ccae]/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                      <Smartphone className="w-16 h-16 text-[#27ccae]" />
                    </div>
                  </div>

                  {/* Phone 2 - Center */}
                  <div className="relative z-10 w-56 h-[450px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] p-3 shadow-2xl shadow-[#27ccae]/30 border-2 border-[#27ccae]/30 hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-[#27ccae] to-emerald-400 rounded-[2rem] flex flex-col items-center justify-center gap-6 p-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">100+</div>
                        <div className="text-sm opacity-90">Apps Built</div>
                      </div>
                      <div className="w-full h-1 bg-white/30 rounded-full"></div>
                      <div className="grid grid-cols-2 gap-4 w-full">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="aspect-square bg-white/20 rounded-2xl"></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Phone 3 */}
                  <div className="absolute right-0 bottom-10 w-48 h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-3 shadow-2xl shadow-emerald-500/20 border border-emerald-500/20 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-cyan-400/20 rounded-2xl flex items-center justify-center">
                      <Code2 className="w-16 h-16 text-emerald-400" />
                    </div>
                  </div>
                </div>

                {/* Orbiting Icons */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur rounded-xl flex items-center justify-center border border-[#27ccae]/30 shadow-lg">
                    <Globe className="w-6 h-6 text-[#27ccae]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Our <span className="text-[#27ccae]">Services</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive mobile development solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-[#27ccae]/10 hover:border-[#27ccae]/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#27ccae]/20"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                    <p className="text-sm text-[#27ccae] font-medium">{service.subtitle}</p>
                  </div>

                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="pt-4 space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#27ccae]" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="mt-6 flex items-center gap-2 text-[#27ccae] font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#27ccae]/0 to-[#27ccae]/0 group-hover:from-[#27ccae]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">Powered By Cutting-Edge Technology</h3>
            <p className="text-slate-400">We leverage the best tools to build exceptional apps</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, idx) => (
              <div key={idx} className="px-8 py-4 bg-slate-800/50 border border-[#27ccae]/20 rounded-xl hover:border-[#27ccae]/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#27ccae]/20">
                <span className="font-semibold text-[#27ccae]">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Our <span className="text-[#27ccae]">Process</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-center space-y-4 group hover:scale-105 transition-transform duration-300">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#27ccae] to-emerald-400 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg shadow-[#27ccae]/30 group-hover:shadow-2xl group-hover:shadow-[#27ccae]/50 transition-all">
                      {item.step}
                    </div>
                    {idx < process.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-[#27ccae] to-transparent"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Client <span className="text-[#27ccae]">Success Stories</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-[#27ccae]/10 hover:border-[#27ccae]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#27ccae]/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#27ccae] text-[#27ccae]" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-slate-700">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
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
              Ready to Build Something
              <span className="block mt-2 bg-gradient-to-r from-[#27ccae] to-emerald-400 bg-clip-text text-transparent">
                Extraordinary?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's transform your idea into a mobile app that users will love. Get a free consultation today.
            </p>

          </div>
        </div>
      </section>


    </div>
  );
}