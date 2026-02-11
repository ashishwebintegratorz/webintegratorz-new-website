'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from "next/navigation";
import { ChevronDown, Globe, Cpu, Brain, Smartphone, Bot, Palette } from "lucide-react";

export default function FocusAreasSection() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const focusAreas = [
    {
      number: "01",
      title: "Web Development",
      description: "We build fast, responsive and scalable websites tailored for businesses, delivering seamless user experiences and modern design",
      icon: Globe
    },
    {
      number: "02",
      title: "Software Development",
      description: "We develop secure, scalable and high-performance software solutions to transform business ideas into powerful digital products",
      icon: Cpu
    },
    {
      number: "03",
      title: "AI Development",
      description: "We create intelligent AI solutions that automate, optimize, and empower businesses with data-driven innovation",
      icon: Brain
    },
    {
      number: "04",
      title: "Android Development",
      description: "We build smooth, user-friendly Android apps with high performance and modern UI for growing businesses",
      icon: Smartphone
    },
    {
      number: "05",
      title: "AI Integration",
      description: "We seamlessly integrate AI into your existing systems to automate workflows, improve decisions, and boost efficiency",
      icon: Bot
    },
    {
      number: "06",
      title: "UI/UX Design",
      description: "We design intuitive, engaging and user-centric digital experiences that blend creativity with seamless functionality",
      icon: Palette
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 px-6 sm:px-10"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#25ccad] opacity-[0.03] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#25ccad] opacity-[0.03] rounded-full blur-3xl"></div>

      {/* Dot overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, #25ccad 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      ></div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-0">
        {/* Header */}
        <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25ccad]/10 border border-[#25ccad]/20 mb-8 font-bold">
            <div className="w-2 h-2 rounded-full bg-[#25ccad] animate-pulse"></div>
            <span className="text-[#25ccad] text-[10px] sm:text-xs tracking-[0.2em] uppercase font-black">
              WHAT WE DO BEST
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Our Core
            <br />
            <span className="text-[#25ccad]">Focus Areas</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Delivering exceptional results through expertise, innovation, and unwavering commitment to excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full bg-white rounded-3xl p-8 border-2 border-gray-100 transition-all duration-500 hover:border-[#25ccad] hover:shadow-[0_20px_60px_rgba(37,204,173,0.15)] hover:-translate-y-2">
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#25ccad]/10 group-hover:bg-[#25ccad] transition-all duration-300">
                      <area.icon size={28} className="text-[#25ccad] group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-5xl font-bold text-[#25ccad]/20 group-hover:text-[#25ccad]/40 transition-colors">
                      {area.number}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#25ccad] transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {area.description}
                  </p>

                  {/* Redirect button */}
                  <button
                    onClick={() => {
                      const routeMap = {
                        "Web Development": "/services/web-development",
                        "Software Development": "/services/web-development",
                        "AI Development": "/services/ai-integration",
                        "Android Development": "/services/mobile-development",
                        "AI Integration": "/services/ai-integration",
                        "UI/UX Design": "/services/ui-ux",
                      };
                      router.push(routeMap[area.title]);
                    }}
                    className="flex items-center gap-2 text-[#25ccad] font-semibold transition-all group-hover:gap-4"
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#25ccad] opacity-0 group-hover:opacity-10 rounded-tr-3xl rounded-bl-full transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
