'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, TrendingUp, ArrowRight, Calendar, Users, Zap, Award, Globe, ChevronRight } from 'lucide-react';

export default function NewsUpdates() {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const featuredNews = {
    badge: 'Major Partnership',
    title: 'Collab with Datatonic',
    subtitle: 'Elevating Data-Driven Excellence',
    description: 'We partner with global leaders to deliver AI-first, cloud-native data products. Our expertise in scalable engineering, analytics, and intelligent automation ensures real business impact across industries.',
    highlights: [
      '• AI-powered platforms with real-world impact',
      '• Data analytics, automation, and scalable SaaS systems',
      '• Secure, high-performance engineering teams from India',
      '• 10+ years of experience delivering digital excellence'
    ],
    date: 'December 2024',
    category: 'Partnership',
    image: '/api/placeholder/800/500',
    stats: [
      { value: '100+', label: 'Projects' },
      { value: '50+', label: 'Clients' },
      { value: '10+', label: 'Years' }
    ]
  };

  const updates = [
    {
      id: 1,
      type: 'Product Launch',
      title: 'Next-Gen MERN Stack Solutions',
      description: 'Introducing our enterprise-grade MERN stack architecture for scalable web applications.',
      date: 'Dec 15, 2024',
      icon: Zap,
      color: 'from-cyan-500 to-teal-500'
    },
    {
      id: 2,
      type: 'Achievement',
      title: 'ISO 27001 Certified',
      description: 'Achieved international security certification for our development processes.',
      date: 'Nov 30, 2024',
      icon: Award,
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 3,
      type: 'Expansion',
      title: 'Global Team Growth',
      description: 'Expanded our team to 100+ developers across multiple technologies.',
      date: 'Nov 20, 2024',
      icon: Users,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 4,
      type: 'Technology',
      title: 'AI Integration Services',
      description: 'Launched comprehensive AI/ML integration services for enterprise clients.',
      date: 'Nov 10, 2024',
      icon: Globe,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#27ccae 1px, transparent 1px), linear-gradient(90deg, #27ccae 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#27ccae] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
        
        {/* Mouse Follower Glow */}
        <div 
          className="absolute w-[600px] h-[600px] pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
            background: 'radial-gradient(circle, rgba(39, 204, 174, 0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(39, 204, 174, 0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-20 animate-slideUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#27ccae]/10 border border-[#27ccae]/30 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#27ccae]" />
            <span className="text-sm font-semibold text-[#27ccae] tracking-wider">LATEST UPDATES</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
            <span className="bg-gradient-to-r from-white via-[#27ccae] to-cyan-400 bg-clip-text text-transparent">
              What's New
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with our latest innovations, partnerships, and achievements in the world of technology
          </p>
        </div>

        {/* Featured News - Datatonic Collaboration */}
        <div 
          className="relative mb-20 group animate-slideUp"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#27ccae] to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
          
          <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-900/50 to-gray-900/90 backdrop-blur-xl border border-[#27ccae]/30 rounded-3xl overflow-hidden">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 shimmer pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#27ccae]/20 border border-[#27ccae] rounded-full">
                    <TrendingUp className="w-4 h-4 text-[#27ccae]" />
                    <span className="text-sm font-bold text-[#27ccae] uppercase tracking-wider">
                      {featuredNews.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {featuredNews.date}
                  </div>
                </div>

                <div>
                  <h2 className="text-5xl lg:text-6xl font-black mb-3 leading-none">
                    Collab with <span className="text-[#27ccae]">Datatonic</span>
                  </h2>
                  <p className="text-xl text-gray-400 font-medium">
                    {featuredNews.subtitle}
                  </p>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  {featuredNews.description}
                </p>

                {/* Collaboration Highlights */}
                <div className="space-y-3 pt-4 border-t border-gray-800">
                  <h3 className="text-sm font-bold text-[#27ccae] uppercase tracking-wider mb-4">
                    Collaboration Highlights
                  </h3>
                  {featuredNews.highlights.map((highlight, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <ChevronRight className="w-5 h-5 text-[#27ccae] flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  {featuredNews.stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="text-center p-4 bg-black/40 rounded-xl border border-gray-800/50"
                    >
                      <div className="text-3xl font-black text-[#27ccae] mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
              
              </div>

              {/* Right Visual */}
              <div className="relative lg:flex items-center justify-center hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#27ccae]/20 via-transparent to-cyan-500/20 rounded-2xl" />
                
                {/* Decorative Elements */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 border-2 border-[#27ccae]/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-80 h-80 border border-[#27ccae]/20 rounded-full" style={{ animation: 'float 6s ease-in-out infinite' }} />
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#27ccae] to-cyan-500 rounded-3xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      <Sparkles className="w-16 h-16 text-white" />
                    </div>
                    <div className="text-6xl font-black text-white/10 leading-none">
                      NEW<br/>ERA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Updates Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-4xl md:text-5xl font-black">
              Recent <span className="text-[#27ccae]">Updates</span>
            </h2>
            <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 group">
              <span className="text-sm font-semibold">View All</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {updates.map((update, index) => {
              const Icon = update.icon;
              return (
                <div
                  key={update.id}
                  className="group relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800/50 hover:border-[#27ccae]/50 rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer animate-slideUp"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  onMouseEnter={() => setActiveCard(update.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${update.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 bg-gradient-to-br ${update.color} rounded-xl`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <Calendar className="w-3 h-3" />
                        {update.date}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-[#27ccae] uppercase tracking-wider mb-2">
                        {update.type}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-[#27ccae] transition-colors">
                        {update.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {update.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-[#27ccae] font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${activeCard === update.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#27ccae] via-cyan-500 to-[#27ccae] opacity-50 blur-sm" 
                         style={{ 
                           backgroundSize: '200% 100%',
                           animation: activeCard === update.id ? 'shimmer 2s linear infinite' : 'none'
                         }} 
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

       

      </div>
    </div>
  );
}