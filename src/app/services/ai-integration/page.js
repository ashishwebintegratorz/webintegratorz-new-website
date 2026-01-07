'use client';

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Sparkles, Zap, ArrowRight, CheckCircle2, Code, Database, MessageSquare, Image, LineChart, Bot, Workflow, Lock, Globe, TrendingUp } from 'lucide-react';

export default function AIIntegrationPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const aiServices = [
    {
      icon: <Brain className="w-7 h-7" />,
      title: "Custom AI Models",
      description: "Tailored machine learning solutions built specifically for your business needs and data.",
      features: ["Model Training", "Fine-tuning", "Deployment", "Monitoring"]
    },
    {
      icon: <MessageSquare className="w-7 h-7" />,
      title: "AI Chatbots & Assistants",
      description: "Intelligent conversational AI that understands context and delivers human-like interactions.",
      features: ["NLP Integration", "Multi-language", "24/7 Support", "Custom Training"]
    },
    {
      icon: <LineChart className="w-7 h-7" />,
      title: "Predictive Analytics",
      description: "Harness AI to forecast trends, optimize operations, and make data-driven decisions.",
      features: ["Forecasting", "Pattern Recognition", "Anomaly Detection", "Real-time Insights"]
    }
  ];

  const aiCapabilities = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Natural Language Processing",
      description: "Understand and generate human language",
      color: "from-[#27ccae] to-emerald-400"
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Computer Vision",
      description: "Extract insights from images and videos",
      color: "from-emerald-400 to-teal-400"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      description: "Self-improving algorithms and models",
      color: "from-teal-400 to-cyan-400"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive AI",
      description: "Forecast trends and outcomes",
      color: "from-cyan-400 to-[#27ccae]"
    }
  ];

  const useCases = [
    {
      industry: "E-Commerce",
      applications: ["Product Recommendations", "Inventory Optimization", "Dynamic Pricing", "Customer Service Bots"]
    },
    {
      industry: "Healthcare",
      applications: ["Diagnostic Assistance", "Patient Monitoring", "Drug Discovery", "Medical Imaging"]
    },
    {
      industry: "Finance",
      applications: ["Fraud Detection", "Risk Assessment", "Trading Algorithms", "Customer Insights"]
    },
    {
      industry: "Manufacturing",
      applications: ["Quality Control", "Predictive Maintenance", "Supply Chain", "Process Optimization"]
    }
  ];

  const integrationProcess = [
    {
      step: "01",
      title: "Discovery",
      description: "Analyze your needs and data",
      icon: <Database className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Development",
      description: "Build and train AI models",
      icon: <Code className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Integration",
      description: "Seamlessly integrate with your systems",
      icon: <Workflow className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous improvement and monitoring",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const technologies = [
    { name: "OpenAI", icon: "🤖" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "PyTorch", icon: "🔥" },
    { name: "Hugging Face", icon: "🤗" },
    { name: "Google AI", icon: "🔍" },
    { name: "Azure AI", icon: "☁️" }
  ];

  const benefits = [
    "Automate repetitive tasks and save time",
    "Gain insights from complex data patterns",
    "Enhance customer experience with personalization",
    "Reduce operational costs significantly",
    "Scale operations without proportional cost increase",
    "Make faster, data-driven decisions"
  ];

  const stats = [
    { value: "90%", label: "Cost Reduction", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "10x", label: "Processing Speed", icon: <Zap className="w-5 h-5" /> },
    { value: "99.9%", label: "Accuracy Rate", icon: <CheckCircle2 className="w-5 h-5" /> },
    { value: "24/7", label: "Availability", icon: <Globe className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#27ccae]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#27ccae]/5 rounded-full blur-3xl"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#27ccae 1px, transparent 1px), linear-gradient(90deg, #27ccae 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${mounted ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#27ccae]/10 border border-[#27ccae]/30 rounded-full text-sm backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#27ccae]" />
                <span className="text-[#27ccae] font-medium">Next-Generation AI Solutions</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Empower Your Business
                <span className="block mt-2 bg-gradient-to-r from-[#27ccae] via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  With AI Intelligence
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                Transform your operations with cutting-edge AI solutions. Automate workflows, gain predictive insights, and unlock unprecedented efficiency.
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

            {/* Hero Visual - AI Brain Animation */}
            <div className={`relative ${mounted ? 'animate-slideInRight' : 'opacity-0'}`}>
              <div className="relative">
                {/* Central AI Brain */}
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-12 border-2 border-[#27ccae]/20 shadow-2xl shadow-[#27ccae]/30 backdrop-blur-xl">
                  {/* Animated Brain Icon */}
                  <div className="relative mx-auto w-64 h-64">
                    {/* Pulsing Core */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-[#27ccae] to-emerald-400 rounded-full animate-pulse flex items-center justify-center">
                        <Brain className="w-16 h-16 text-white" />
                      </div>
                    </div>

                    {/* Orbiting Nodes */}
                    {[0, 1, 2, 3, 4, 5].map((i) => {
                      const angle = (i * 60) * (Math.PI / 180);
                      const radius = 100;
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;
                      
                      return (
                        <div
                          key={i}
                          className="absolute w-8 h-8 bg-[#27ccae]/20 border-2 border-[#27ccae] rounded-full animate-float"
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                            animationDelay: `${i * 0.2}s`
                          }}
                        >
                          <div className="w-2 h-2 bg-[#27ccae] rounded-full m-auto mt-2.5"></div>
                        </div>
                      );
                    })}

                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-30" style={{pointerEvents: 'none'}}>
                      <circle cx="50%" cy="50%" r="100" fill="none" stroke="#27ccae" strokeWidth="1" strokeDasharray="5,5" className="animate-spin-slow" />
                      <circle cx="50%" cy="50%" r="70" fill="none" stroke="#27ccae" strokeWidth="1" strokeDasharray="3,3" className="animate-spin-reverse" />
                    </svg>
                  </div>

                  {/* Feature Tags */}
                  <div className="absolute -top-4 left-8 px-4 py-2 bg-gradient-to-r from-[#27ccae] to-emerald-400 rounded-full text-xs font-bold shadow-lg">
                    Machine Learning
                  </div>
                  <div className="absolute top-1/4 -right-4 px-4 py-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full text-xs font-bold shadow-lg">
                    NLP
                  </div>
                  <div className="absolute bottom-1/4 -left-4 px-4 py-2 bg-gradient-to-r from-cyan-400 to-[#27ccae] rounded-full text-xs font-bold shadow-lg">
                    Neural Networks
                  </div>
                </div>

                {/* Floating Info Cards */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 border border-[#27ccae]/30 shadow-xl max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#27ccae]/10 rounded-lg flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-[#27ccae]" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">AI Processing</div>
                      <div className="text-lg font-bold text-[#27ccae]">Real-time</div>
                    </div>
                  </div>
                </div>

                {/* Decorative blur */}
                <div className="absolute -z-10 -top-20 -right-20 w-96 h-96 bg-[#27ccae]/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              AI <span className="text-[#27ccae]">Solutions</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Enterprise-grade AI services that transform how you work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aiServices.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-[#27ccae]/10 hover:border-[#27ccae]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#27ccae]/20 backdrop-blur-sm"
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

      {/* AI Capabilities */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">AI Capabilities</h3>
            <p className="text-slate-400">Comprehensive AI technologies at your fingertips</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {aiCapabilities.map((capability, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl p-6 border border-[#27ccae]/10 hover:border-[#27ccae]/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${capability.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {capability.icon}
                </div>
                <h4 className="font-bold mb-2">{capability.title}</h4>
                <p className="text-slate-400 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Industry <span className="text-[#27ccae]">Applications</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              AI solutions tailored for every industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-[#27ccae]/10 hover:border-[#27ccae]/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#27ccae] to-emerald-400 rounded-lg flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{useCase.industry}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {useCase.applications.map((app, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm bg-slate-800/50 rounded-lg p-3 border border-[#27ccae]/10">
                      <div className="w-1.5 h-1.5 bg-[#27ccae] rounded-full"></div>
                      <span className="text-slate-300">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Integration <span className="text-[#27ccae]">Process</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Seamless AI implementation in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {integrationProcess.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-center space-y-4 group hover:scale-105 transition-transform duration-300">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#27ccae] to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg shadow-[#27ccae]/30 group-hover:shadow-2xl group-hover:shadow-[#27ccae]/50 transition-all">
                      {item.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 border-2 border-[#27ccae] rounded-full flex items-center justify-center text-xs font-bold">
                      {item.step}
                    </div>
                    {idx < integrationProcess.length - 1 && (
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

      {/* Technologies & Benefits */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Why Choose Our
                <span className="block text-[#27ccae]">AI Solutions</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Enterprise-grade AI that's secure, scalable, and delivers measurable ROI from day one.
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
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-[#27ccae]/20 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-[#27ccae]" />
                  AI Technologies We Use
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-[#27ccae]/10 hover:border-[#27ccae]/30 transition-all duration-300">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-semibold text-slate-200 text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#27ccae]/10 to-emerald-500/10 rounded-2xl p-8 border border-[#27ccae]/20 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#27ccae] to-emerald-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Enterprise-Grade Security</h4>
                    <p className="text-sm text-slate-300">Your data is protected with military-grade encryption and compliance with GDPR, HIPAA, and SOC 2.</p>
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