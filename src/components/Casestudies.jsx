'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, ArrowUpRight, MapPin, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

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
      image: "/images/rentbuddy1.webp"
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
      image: "/images/fresh.webp"
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
      image: "/icone1.webp"
    },
    {
      id: 7,
      title: "Global Health Research",
      subtitle: "Hospital Analytics Platform",
      description: "High-throughput clinical trial data ingestion and machine learning biomarker identification engine.",
      metric: "Petabyte Data Scale",
      location: "Germany",
      tag: "Big Data & ML",
      image: "/icone3.webp"
    },
    {
      id: 8,
      title: "Fintech Settlement Hub",
      subtitle: "Real-Time Payment Gateway",
      description: "Sub-second ledger transactions with automated fraud detection and multi-currency banking rails.",
      metric: "1M+ Daily Trx",
      location: "USA",
      tag: "Fintech & Web3",
      image: "/icone4.webp"
    },
    {
      id: 9,
      title: "Smart Logistics Network",
      subtitle: "Fleet Management IoT Hub",
      description: "Predictive engine maintenance, real-time driver telemetry, and fuel consumption optimization dashboard.",
      metric: "-28% Fuel Costs",
      location: "UAE",
      tag: "IoT & AI",
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
    <section id="casestudies" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] overflow-hidden border-y border-slate-200/80 content-auto">
      <div className="relative max-w-[1440px] mx-auto">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-4"
            >
              <Sparkles size={13} className="text-[#635BFF]" />
              <span className="text-[#635BFF] text-xs font-bold tracking-wider uppercase">
                Proven Track Record
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight leading-[1.15]"
            >
              Proven Enterprise <span className="text-[#635BFF]">Case Studies</span>
            </motion.h2>
          </div>

          {/* Slider Control Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={prevSlide}
              className="w-11 h-11 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-11 h-11 rounded-xl bg-[#0A2540] text-white hover:bg-[#635BFF] flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight size={20} />
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
                className="group relative rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden min-w-0"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      loading="lazy"
                      decoding="async"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Tag badge on image */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md border border-slate-200 text-[#0A2540] shadow-sm">
                        {study.tag}
                      </span>
                    </div>

                    {/* Metric highlight badge */}
                    <div className="absolute bottom-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0A2540]/90 backdrop-blur-md text-white text-xs font-bold shadow">
                      <TrendingUp size={12} className="text-[#00D4FF]" />
                      <span>{study.metric}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#635BFF] uppercase tracking-wider">
                        {study.subtitle}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                        <MapPin size={12} className="text-slate-400" />
                        <span>{study.location}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#0A2540] mb-2 group-hover:text-[#635BFF] transition-colors leading-snug">
                      {study.title}
                    </h3>

                    <p className="text-sm text-[#475569] leading-relaxed font-normal">
                      {study.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => router.push('/contact-us')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A2540] hover:text-[#635BFF] transition-colors py-1 cursor-pointer"
                  >
                    <span>Request Architecture Brief</span>
                    <ArrowUpRight size={14} className="text-[#635BFF]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Pagination Indicators */}
        <div className="flex justify-center items-center gap-1.5 mt-10" role="tablist" aria-label="Case studies pagination">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className="w-7 h-7 flex items-center justify-center rounded-full focus:outline-none cursor-pointer"
              aria-label={`Go to case study slide ${idx + 1}`}
              aria-selected={idx === currentIndex}
              role="tab"
            >
              <span
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-7 bg-[#0A2540]' : 'w-2 bg-slate-300 hover:bg-slate-400'
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