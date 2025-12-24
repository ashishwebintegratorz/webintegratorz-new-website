"use client";

import React, { useEffect, useRef, useState } from "react";

const WorkflowCycle = () => {
  const svgRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const workflowSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Understanding your vision and requirements",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      angle: -90
    },
    {
      number: "02",
      title: "Information Architecture",
      description: "Structuring content and user flows",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
      angle: -30
    },
    {
      number: "03",
      title: "Design",
      description: "Creating beautiful user experiences",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19l7-7 3 3-7 7-3-3z"/>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
          <path d="M2 2l7.586 7.586"/>
          <circle cx="11" cy="11" r="2"/>
        </svg>
      ),
      angle: 30
    },
    {
      number: "04",
      title: "Development",
      description: "Building with cutting-edge technology",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      angle: 90
    },
    {
      number: "05",
      title: "Testing & QA",
      description: "Ensuring flawless performance",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 11 12 14 22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
      ),
      angle: 150
    },
    {
      number: "06",
      title: "Launch & Support",
      description: "Deployment and ongoing maintenance",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      angle: 210
    }
  ];

  const techStack = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  ];

  const getStepPosition = (angle, radius = 240) => {
    const radian = (angle * Math.PI) / 180;
    const x = 300 + radius * Math.cos(radian);
    const y = 300 + radius * Math.sin(radian);
    return { x, y };
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-white py-32 overflow-hidden">
      {/* Subtle Grid Background */}

     

      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1e293b 1px, transparent 1px),
              linear-gradient(to bottom, #1e293b 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Gradient Orbs - Subtle */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-full mb-8 text-sm font-medium tracking-wide">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            HOW WE WORK
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Our Development{" "}
            <span className="text-emerald-600">Process</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A systematic approach that ensures quality, efficiency, and exceptional results at every stage
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          
          {/* Left: Circular Workflow Diagram */}
          <div className="relative">
            <div className="relative w-full max-w-[600px] mx-auto aspect-square">
              
              {/* SVG Container */}
              <svg 
                ref={svgRef}
                viewBox="0 0 600 600" 
                className="w-full h-full"
              >
                <defs>
                  {/* Gradients */}
                  <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2"/>
                  </linearGradient>

                  <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981"/>
                    <stop offset="100%" stopColor="#059669"/>
                  </linearGradient>

                  {/* Glow Filter */}
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Base Circle */}
                <circle
                  cx="300"
                  cy="300"
                  r="240"
                  fill="none"
                  stroke="url(#circleGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 8"
                  opacity="0.5"
                />

                {/* Active Progress Circle */}
                <circle
                  cx="300"
                  cy="300"
                  r="240"
                  fill="none"
                  stroke="url(#activeGradient)"
                  strokeWidth="3"
                  strokeDasharray={`${(activeStep + 1) * 251} ${6 * 251}`}
                  strokeLinecap="round"
                  transform="rotate(-90 300 300)"
                  className="transition-all duration-1000 ease-in-out"
                  filter="url(#glow)"
                />

                {/* Connection Lines */}
                {workflowSteps.map((step, index) => {
                  const nextIndex = (index + 1) % workflowSteps.length;
                  const pos1 = getStepPosition(step.angle, 240);
                  const pos2 = getStepPosition(workflowSteps[nextIndex].angle, 240);
                  
                  return (
                    <line
                      key={`line-${index}`}
                      x1={pos1.x}
                      y1={pos1.y}
                      x2={pos2.x}
                      y2={pos2.y}
                      stroke="#e2e8f0"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                  );
                })}

                {/* Flowing Particles */}
                {[...Array(12)].map((_, i) => {
                  const currentStep = workflowSteps[activeStep];
                  const nextStep = workflowSteps[(activeStep + 1) % 6];
                  const pos1 = getStepPosition(currentStep.angle, 240);
                  const pos2 = getStepPosition(nextStep.angle, 240);
                  
                  return (
                    <circle
                      key={`particle-${i}`}
                      r="3"
                      fill="#10b981"
                      opacity="0.6"
                      filter="url(#glow)"
                    >
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        begin={`${i * 0.15}s`}
                        path={`M ${pos1.x} ${pos1.y} L ${pos2.x} ${pos2.y}`}
                      />
                      <animate
                        attributeName="opacity"
                        values="0;0.8;0"
                        dur="2s"
                        repeatCount="indefinite"
                        begin={`${i * 0.15}s`}
                      />
                    </circle>
                  );
                })}
              </svg>

              {/* Center Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-2xl scale-150" />
                  <div className="relative w-40 h-40 bg-white rounded-full shadow-2xl border border-slate-100 flex flex-col items-center justify-center">
                    <div className="text-center">
                      <div className="font-black text-lg text-slate-900 mb-0.5">Webintegratorz</div>
                      <div className="text-xs font-semibold text-emerald-600 tracking-wide">WEB DEV CYCLE</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step Nodes */}
              {workflowSteps.map((step, index) => {
                const pos = getStepPosition(step.angle, 240);
                const isActive = index === activeStep;
                
                return (
                  <div
                    key={index}
                    className="absolute cursor-pointer group"
                    style={{
                      left: `${pos.x}px`,
                      top: `${pos.y}px`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                      isActive 
                        ? 'bg-emerald-500/30 scale-[2.5] blur-xl' 
                        : 'bg-slate-300/20 scale-[1.8] blur-lg opacity-0 group-hover:opacity-100'
                    }`} />
                    
                    {/* Step Circle */}
                    <div className={`relative w-24 h-24 rounded-full flex flex-col items-center justify-center transition-all duration-500 border-4 ${
                      isActive
                        ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 border-white shadow-2xl scale-110'
                        : 'bg-white border-slate-200 shadow-lg group-hover:border-emerald-200 group-hover:shadow-xl group-hover:scale-105'
                    }`}>
                      <div className={`w-10 h-10 mb-1 transition-colors ${
                        isActive ? 'text-white' : 'text-slate-600 group-hover:text-emerald-600'
                      }`}>
                        {step.icon}
                      </div>
                      <span className={`text-xs font-bold transition-colors ${
                        isActive ? 'text-white' : 'text-slate-900'
                      }`}>
                        {step.number}
                      </span>
                    </div>

                    {/* Info Card */}
                    <div className={`absolute ${
                      index <= 2 ? 'top-full mt-4' : 'bottom-full mb-4'
                    } left-1/2 -translate-x-1/2 w-64 transition-all duration-300 ${
                      isActive 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 pointer-events-none translate-y-2'
                    }`}>
                      <div className="bg-white rounded-2xl shadow-2xl p-5 border border-slate-100">
                        <div className="text-sm font-bold text-slate-900 mb-1">{step.title}</div>
                        <div className="text-xs text-slate-600 leading-relaxed">{step.description}</div>
                      </div>
                      <div className={`absolute ${
                        index <= 2 ? '-top-2' : '-bottom-2'
                      } left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-100 rotate-45 ${
                        index <= 2 ? '' : 'border-r border-b border-l-0 border-t-0'
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress Indicator */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-8">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-slate-100">
                <div className="flex gap-1.5">
                  {workflowSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        index === activeStep
                          ? 'w-8 bg-emerald-500'
                          : index < activeStep
                          ? 'w-1.5 bg-emerald-300'
                          : 'w-1.5 bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-600 ml-2">
                  Step {activeStep + 1}/6
                </span>
              </div>
            </div>
          </div>

          {/* Right: Tech Stack */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Powered by Modern Technology
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We leverage cutting-edge tools and frameworks to build scalable, high-performance applications that drive business growth.
              </p>
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square bg-white rounded-2xl flex items-center justify-center shadow-md border border-slate-100 transition-all duration-300 hover:shadow-xl hover:scale-110 hover:border-emerald-200 cursor-pointer">
                    <img 
                      src={tech.logo}
                      alt={tech.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <div className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shadow-xl">
                      {tech.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-black text-slate-900 mb-2">500+</div>
                <div className="text-sm font-medium text-slate-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-slate-900 mb-2">98%</div>
                <div className="text-sm font-medium text-slate-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-slate-900 mb-2">15+</div>
                <div className="text-sm font-medium text-slate-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative">
          <div className="bg-slate-900 rounded-3xl p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-blue-600/10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <h3 className="text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's transform your vision into reality with our proven development process
              </p>
              
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Get Free Consultation
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowCycle;