"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useInView, AnimatePresence } from "framer-motion";

const WorkflowCycle = () => {
  const router = useRouter();
  const svgRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 4000); // Increased duration for smoother experience

    return () => clearInterval(interval);
  }, [isInView]);

  const workflowSteps = useMemo(() => [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Understanding your vision and requirements",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
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
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
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
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
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
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
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
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
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
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      angle: 210
    }
  ], []);

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

  const stepsCount = workflowSteps.length;
  const safeActiveStep = activeStep % stepsCount;
  const safeNextStep = (activeStep + 1) % stepsCount;

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-8 md:pt-16 pb-8 md:pb-16"
      style={{ backgroundColor: "#E9FAF6" }}
    >
      {/* Subtle Grid Background - Pointer Events None */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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

      {/* Gradient Orbs - Pointer Events None */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#25ccad]/10 border border-[#25ccad]/20 mb-8 font-bold"
          >
            <div className="w-2 h-2 rounded-full bg-[#25ccad] animate-pulse" />
            <span className="text-[#25ccad] text-xs tracking-[0.2em] uppercase font-bold">
              HOW WE WORK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight px-4 text-black"
          >
            Our Development{" "}
            <span style={{ color: "#25ccad" }}>Process</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4"
          >
            A systematic approach that ensures quality, efficiency, and exceptional results at every stage
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-8 md:mb-16">

          {/* Left: Workflow Diagram */}
          <div className="relative">

            {/* DESKTOP VIEW - Circular Diagram */}
            <div className="hidden lg:block relative w-full max-w-[600px] mx-auto aspect-square will-change-transform">

              {/* SVG Container */}
              <svg
                ref={svgRef}
                viewBox="0 0 600 600"
                className="w-full h-full pointer-events-none"
              >
                <defs>
                  <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#25ccad" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                  </linearGradient>

                  <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#25ccad" />
                    <stop offset="100%" stopColor="#25ccad" />
                  </linearGradient>

                  <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
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
                <motion.circle
                  cx="300"
                  cy="300"
                  r="240"
                  fill="none"
                  stroke="url(#activeGradient)"
                  strokeWidth="3"
                  initial={{ strokeDasharray: "0 1508" }}
                  animate={{
                    strokeDasharray: `${(activeStep + 1) * 251.3} 1508`
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  strokeLinecap="round"
                  transform="rotate(-90 300 300)"
                  filter="url(#softGlow)"
                />

                {/* Flowing Particles */}
                {isInView && Array.from({ length: 6 }).map((_, i) => {
                  const currentStep = workflowSteps[safeActiveStep];
                  const nextStep = workflowSteps[safeNextStep];
                  if (!currentStep || !nextStep) return null;

                  const pos1 = getStepPosition(currentStep.angle, 240);
                  const pos2 = getStepPosition(nextStep.angle, 240);

                  return (
                    <circle
                      key={`particle-${activeStep}-${i}`}
                      r="2.5"
                      fill="#25ccad"
                      opacity="0.7"
                    >
                      <animateMotion
                        dur="1.5s"
                        repeatCount="indefinite"
                        begin={`${i * 0.25}s`}
                        path={`M ${pos1.x} ${pos1.y} L ${pos2.x} ${pos2.y}`}
                      />
                      <animate
                        attributeName="opacity"
                        values="0;1;0"
                        dur="1.5s"
                        repeatCount="indefinite"
                        begin={`${i * 0.25}s`}
                      />
                    </circle>
                  );
                })}
              </svg>

              {/* Center Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-2xl scale-150" />
                  <div className="relative w-44 h-44 bg-white rounded-full shadow-2xl border border-slate-100 flex flex-col items-center justify-center">
                    <div className="text-center">
                      <div className="font-black text-xl text-slate-900 mb-0.5 tracking-tight">Webintegratorz</div>
                      <div className="text-[10px] font-bold text-emerald-600 tracking-widest uppercase">Methodology</div>
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
                    className="absolute z-20"
                    style={{
                      left: `${pos.x}px`,
                      top: `${pos.y}px`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* Step Circle */}
                    <button
                      onClick={() => setActiveStep(index)}
                      aria-label={`Go to step ${step.number}: ${step.title}`}
                      className={`relative w-20 h-20 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-500 border-4 outline-none focus-visible:ring-2 focus-visible:ring-[#25ccad] focus-visible:ring-offset-2 will-change-transform ${isActive
                        ? 'bg-gradient-to-br from-[#25ccad] to-emerald-600 border-white shadow-[0_20px_40px_rgba(37,204,173,0.3)] scale-110'
                        : 'bg-white border-slate-100 shadow-lg hover:border-emerald-200 hover:scale-105'
                        }`}
                    >
                      <div className={`w-8 h-8 mb-1 transition-colors ${isActive ? 'text-white' : 'text-slate-500'}`}>
                        {step.icon}
                      </div>
                      <span className={`text-[10px] font-black transition-colors ${isActive ? 'text-white' : 'text-slate-900'}`}>
                        {step.number}
                      </span>
                    </button>

                    {/* Info Card - Improved Pointer Events */}
                    <div className={`absolute ${index <= 2 ? 'top-full mt-6' : 'bottom-full mb-6'} left-1/2 -translate-x-1/2 w-72 transition-all duration-500 ${isActive
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 translate-y-4 pointer-events-none'
                      }`}>
                      <div className="bg-white rounded-[2rem] shadow-2xl p-6 border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#25ccad]" />
                        <div className="text-sm font-black text-slate-900 mb-2 uppercase tracking-tight">{step.title}</div>
                        <div className="text-xs text-slate-600 leading-relaxed font-medium">{step.description}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* MOBILE VIEW - Vertical Timeline */}
            <div className="lg:hidden space-y-6 px-4">
              {workflowSteps.map((step, index) => {
                const isActive = index === activeStep;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`relative bg-white rounded-3xl shadow-xl border-2 transition-all duration-500 ${isActive
                      ? 'border-[#25ccad] transform scale-[1.02]'
                      : 'border-slate-100'
                      }`}
                  >
                    <div className="p-6 flex gap-5">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${isActive
                        ? 'bg-[#25ccad] text-white shadow-lg shadow-emerald-200'
                        : 'bg-slate-50 text-slate-400'
                        }`}>
                        <div className="w-8 h-8">{step.icon}</div>
                      </div>
                      <div className="flex-1">
                        <div className={`text-[10px] font-black mb-1 tracking-widest uppercase ${isActive ? 'text-[#25ccad]' : 'text-slate-400'}`}>
                          Step {step.number}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed font-medium">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Tech Stack */}
          <div className="space-y-10 px-4 lg:px-0">
            <div>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
                Powered by <span className="text-slate-900">Modern Technology</span>
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                We don't just write code; we build high-performance ecosystems using industry-leading technologies that guarantee scalability and security.
              </p>
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-4 gap-4 md:gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05, zIndex: 50 }}
                  className="group relative"
                >
                  <div className="aspect-square bg-white rounded-2xl flex items-center justify-center shadow-md border border-slate-100 transition-all duration-300 hover:shadow-xl hover:border-emerald-200 p-4 cursor-pointer">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30">
                    <div className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shadow-xl">
                      {tech.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-200/50">
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-black text-slate-900 mb-1 tracking-tighter">500+</div>
                <div className="text-[14px] font-bold text-slate-500 uppercase tracking-wide">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-black text-[#25ccad] mb-1 tracking-tighter">200+</div>
                <div className="text-[14px] font-bold text-slate-500 uppercase tracking-wide">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-black text-slate-900 mb-1 tracking-tighter">50+</div>
                <div className="text-[14px] font-bold text-slate-500 uppercase tracking-wide">Expert Talent</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 px-4 lg:px-0"
        >
          <div className="bg-slate-950 rounded-[3.5rem] p-10 md:p-20 text-center relative overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#25ccad]/10 to-transparent opacity-50" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 text-left max-w-5xl mx-auto">
              {/* Left Side: Founder Info */}
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#25ccad]/20 p-1 relative flex-shrink-0">
                  <div className="absolute inset-0 rounded-full border border-[#25ccad] animate-ping opacity-20" />
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden transition-all duration-700 relative">
                    <Image
                      src="/ceo.jpeg"
                      alt="Ashish Meena"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-black text-white tracking-tight">Ashish Meena</p>
                  <p className="text-[#25ccad] font-black text-xs uppercase tracking-[0.2em] mt-1">CEO & Founder, Webintegratorz</p>
                  <div className="h-[2px] w-20 bg-white/10 my-4" />
                  <p className="text-slate-400 text-sm font-medium leading-relaxed tracking-wide">Direct Expert Strategy for Scaling Your Business Worldwide.</p>
                </div>
              </div>

              {/* Right Side: CTA Button */}
              <div className="text-center md:text-right">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">Ready to <span className="text-[#25ccad]">Innovate?</span></h3>
                <a
                  href="https://wa.me/918989944488?text=Hello%20Ashish,%20I'd%20like%20to%20get%20a%20free%20consultation%20for%20my%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-12 py-6 bg-[#25ccad] hover:bg-white text-black font-black text-lg rounded-3xl transition-all duration-500 shadow-[0_20px_40px_rgba(37,204,173,0.3)] hover:scale-105"
                >
                  Consult an Expert
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowCycle;