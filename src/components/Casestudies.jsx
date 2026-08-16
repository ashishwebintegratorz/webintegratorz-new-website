'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, ArrowUpRight, MapPin, Sparkles, TrendingUp, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Casestudies = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1180) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  const CasestudiesData = [
    {
      id: 1,
      title: "Rent Buddy",
      subtitle: "Rental Marketplace Platform",
      description: "Scaled peer-to-peer real-time property & equipment rental ecosystem with automated tenant vetting.",
      metric: "100k+ Active Listings",
      location: "India",
      tag: "Web & SaaS",
      image: "/images/rentbuddy1.png"
    },
    {
      id: 2,
      title: "New Era Shipping",
      subtitle: "AI Logistics & Freight System",
      description: "AI-powered automated route dispatch and real-time cargo container tracking across GCC ports.",
      metric: "+42% Dispatch Velocity",
      location: "UAE",
      tag: "AI & Logistics",
      image: "/images/newera.jpeg"
    },
    {
      id: 3,
      title: "Fresh Go",
      subtitle: "Hyperlocal Quick-Commerce App",
      description: "Ultra-fast mobile commerce app with instant delivery routing, dynamic cart surge, and inventory sync.",
      metric: "$3.5M GMV Handled",
      location: "India",
      tag: "Mobile App",
      image: "/images/fresh.png"
    },
    {
      id: 4,
      title: "Protech HPL",
      subtitle: "Industrial ERP & Manufacturing",
      description: "End-to-end industrial floor control, automated raw material scheduling, and predictive QA analytics.",
      metric: "3.2x Ops Throughput",
      location: "India",
      tag: "Custom Software",
      image: "/images/protech.webp"
    },
    {
      id: 5,
      title: "Gober Superapp",
      subtitle: "All-in-One Multi-Service Superapp",
      description: "Unified urban superapp powering ride-hailing, food delivery, and digital peer-to-peer wallet payments.",
      metric: "500k+ App Installs",
      location: "Bolivia",
      tag: "Superapp",
      image: "/icone7.png"
    },
    {
      id: 6,
      title: "Healthcare Cloud Portal",
      subtitle: "HIPAA Compliant Clinical EHR",
      description: "Secure telemedicine platform with encrypted video consultations and real-time biometric tracking.",
      metric: "99.99% Cloud Uptime",
      location: "Canada",
      tag: "HealthTech",
      image: "/icone1.png"
    },
    {
      id: 7,
      title: "Global Health Research",
      subtitle: "Hospital Analytics Platform",
      description: "High-throughput clinical trial data ingestion and machine learning biomarker identification engine.",
      metric: "Petabyte Data Scale",
      location: "Germany",
      tag: "Big Data & ML",
      image: "/icone3.png"
    },
    {
      id: 8,
      title: "EduQuest AI",
      subtitle: "Adaptive Learning Engine",
      description: "Personalized AI curriculum generator adapting to individual student pace using fine-tuned LLMs.",
      metric: "88% Retention Rate",
      location: "India",
      tag: "Gen AI",
      image: "/icone4.webp"
    },
    {
      id: 9,
      title: "Urban Fleet",
      subtitle: "Intelligent Fleet Routing",
      description: "Dynamic telematics dashboard reducing fleet idle time through real-time traffic prediction models.",
      metric: "28% Fuel Efficiency",
      location: "United Kingdom",
      tag: "IoT & Cloud",
      image: "/icone6.webp"
    }
  ];

  const maxIndex = Math.max(0, CasestudiesData.length - slidesToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="casestudies" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#030712] overflow-hidden border-t border-white/[0.06] content-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 font-bold"
            >
              <Sparkles size={14} className="text-[#00f5a0]" />
              <span className="text-[#00f5a0] text-xs tracking-[0.2em] uppercase font-bold">
                Proven Track Record
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
            >
              What It&apos;s Like To Build With <br />
              <span className="text-gradient-emerald">Webintegratorz</span>
            </motion.h2>
          </div>

          {/* Slider Control Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.1] hover:border-emerald-500/40 text-white flex items-center justify-center transition-all duration-200 active:scale-95"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-2xl bg-[#00f5a0] text-black hover:bg-[#00d9f5] flex items-center justify-center transition-all duration-200 shadow-[0_0_20px_rgba(0,245,160,0.3)] active:scale-95"
              aria-label="Next Slide"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`
            }}
          >
            {CasestudiesData.map((study) => (
              <div
                key={study.id}
                style={{ flex: `0 0 calc(${100 / slidesToShow}% - ${(slidesToShow - 1) * 24 / slidesToShow}px)` }}
                className="group relative rounded-3xl p-px overflow-hidden flex flex-col min-w-0"
              >
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/15 via-white/5 to-transparent group-hover:from-[#00f5a0]/40 transition-all duration-500" />

                {/* Card Interior */}
                <div className="relative flex-1 bg-[#090d16] rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 group-hover:bg-[#0c1220] border border-white/10">
                  
                  {/* Image Container */}
                  <div className="relative w-full h-52 sm:h-56 bg-black/40 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-black/40" />

                    {/* Tag badge on image */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="text-[11px] font-black px-3 py-1 rounded-full bg-[#030712] border border-white/30 text-white">
                        {study.tag}
                      </span>
                    </div>

                    {/* Metric highlight badge */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#061e16] border border-emerald-500/60 text-[#00f5a0] text-xs font-black shadow-lg">
                      <TrendingUp size={13} />
                      <span>{study.metric}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-black text-[#00f5a0] uppercase tracking-wider">
                          {study.subtitle}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-slate-200 font-bold">
                          <MapPin size={13} className="text-[#00f5a0]" />
                          <span>{study.location}</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-[#00f5a0] transition-colors leading-snug">
                        {study.title}
                      </h3>

                      <p className="text-sm text-slate-200 leading-relaxed font-normal">
                        {study.description}
                      </p>
                    </div>

                    {/* Card Footer Link */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <button
                        onClick={() => router.push('/contact-us')}
                        className="inline-flex items-center gap-2 text-xs font-bold text-slate-100 hover:text-[#00f5a0] transition-colors py-1"
                      >
                        <span>Request Architecture Brief</span>
                        <ArrowUpRight size={15} className="text-[#00f5a0]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Pagination Indicators (Accessible 32px Touch Targets) */}
        <div className="flex justify-center items-center gap-1.5 mt-10" role="tablist" aria-label="Case studies pagination">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className="w-8 h-8 flex items-center justify-center rounded-full focus:outline-none"
              aria-label={`Go to case study slide ${idx + 1}`}
              aria-selected={idx === currentIndex}
              role="tab"
            >
              <span
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-[#00f5a0]' : 'w-2.5 bg-white/40 hover:bg-white/80'
                }`}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Casestudies;