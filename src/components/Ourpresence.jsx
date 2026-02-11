'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OurPresenceSection() {
  const scrollRef = useRef(null);
  const [loopRun, setLoopRun] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let rafId;
    let lastTime = 0;
    const speed = 0.12; // pixels per millisecond (faster move)

    const scroll = (time) => {
      if (!lastTime) lastTime = time;
      const deltaTime = Math.min(time - lastTime, 100); // Cap delta to avoid jumps
      lastTime = time;

      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += speed * deltaTime;

        // Reset to beginning when reaching the end
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        if (scrollContainer.scrollLeft >= maxScroll - 5) {
          scrollContainer.scrollLeft = 0;
          setLoopRun(prev => prev + 1); // Increment to trigger re-animation
        }
      }
      rafId = requestAnimationFrame(scroll);
    };

    rafId = requestAnimationFrame(scroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isPaused]);

  const events = [
    {
      title: "AI Seminar",
      location: "MIT Mandsaur",
      image: "/aisemi.jpeg",
    },
    {
      title: "Tech Workshop",
      location: "Softvision College",
      image: "/vision.jpeg",
    },
    {
      title: "Innovation Meet",
      location: "Bhopal Campus",
      image: "/vision.jpeg",
    },
    {
      title: "AI Seminar",
      location: "MIT Mandsaur",
      image: "/aisemi.jpeg",
    },
    {
      title: "Tech Workshop",
      location: "Softvision College",
      image: "/vision.jpeg",
    },
    {
      title: "Innovation Meet",
      location: "Bhopal Campus",
      image: "/vision.jpeg",
    }
  ];

  return (
    <section
      className="presence-section"
      style={{ backgroundColor: "#E9FAF6" }}
    >
      {/* Header */}
      <div className="text-center pt-8 pb-16 px-6">
        {/* Professional Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="text-xs md:text-sm font-black text-[#25ccad] uppercase tracking-[0.4em]">
            — Our Presence —
          </span>
        </motion.div>

        {/* Modern Title with Deep Underline */}
        <div className="relative inline-block mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight"
          >
            Glimpses From Our Latest<br />
            Expo Presence
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1.5 bg-[#25ccad] mx-auto mt-6 rounded-full"
          />
        </div>
      </div>

      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        className="scroll-container overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'auto' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="cards-wrapper flex gap-8 md:gap-12 px-8 md:px-24 pb-24 w-max">
          {events.map((event, index) => (
            <motion.div
              key={`${loopRun}-${index}`}
              initial={{ opacity: 0, x: 80, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group relative w-[320px] md:w-[480px] h-[240px] md:h-[360px] rounded-[2.5rem] overflow-hidden transition-all duration-700"
            >
              {/* Parallax Image Component */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 320px, 480px"
                />
                {/* Curator Gradient Overlay: Solid base for shining white text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10"></div>
              </div>

              {/* Floating Date Category Tag */}
              <div className="absolute top-6 left-6 z-20">
                <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">
                    Live Event
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
                <motion.h3
                  className="text-2xl md:text-4xl font-black text-[#ffffff] mb-4 leading-tight tracking-tight [text-shadow:0_4px_20px_rgba(0,0,0,0.9)]"
                >
                  {event.title}
                </motion.h3>

                {/* Glassmorphic Location Badge */}
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#25ccad]/10 backdrop-blur-xl border border-[#25ccad]/30 rounded-2xl group-hover:bg-[#25ccad]/25 transition-all duration-500">
                  <svg className="w-5 h-5 text-[#25ccad] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm md:text-base font-bold text-[#ffffff] tracking-wide">
                    {event.location}
                  </span>
                </div>
              </div>

              {/* Premium Hover Light Sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}