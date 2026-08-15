'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Globe, MapPin, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OurPresenceSection() {
  const router = useRouter();
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const globalHubs = [
    { country: "United States", city: "Delaware / Remote", tag: "North America Hub" },
    { country: "United Arab Emirates", city: "Dubai / GCC", tag: "Middle East Hub" },
    { country: "Europe", city: "London / Berlin", tag: "EU & UK Delivery" },
    { country: "Japan", city: "Tokyo & Remote", tag: "East Asia Partnerships" },
  ];

  const events = [
    {
      title: "Modern Full-Stack Cloud Architecture",
      location: "Tech Symposium",
      category: "Keynote & Workshop",
      image: "/vision.jpeg",
    },
    {
      title: "Next-Gen AI Engineering Meetup",
      location: "Developer Community",
      category: "Innovation Summit",
      image: "/vision.jpeg",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let rafId;
    let lastTime = 0;
    const speed = 0.08;

    const scroll = (time) => {
      if (!lastTime) lastTime = time;
      const deltaTime = Math.min(time - lastTime, 100);
      lastTime = time;

      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += speed * deltaTime;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        if (scrollContainer.scrollLeft >= maxScroll - 5) {
          scrollContainer.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(scroll);
    };

    rafId = requestAnimationFrame(scroll);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isPaused]);

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#030712] overflow-hidden border-t border-white/[0.06]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 font-bold"
          >
            <Globe size={14} className="text-[#00f5a0]" />
            <span className="text-[#00f5a0] text-xs font-bold uppercase tracking-[0.25em]">
              Global Presence &amp; Outreach
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
          >
            Delivering Globally. <br />
            <span className="text-gradient-emerald">Empowering Ecosystems Everywhere.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed"
          >
            With international clients across North America, Europe, the Middle East, and Asia, our reach extends across borders through remote agile squads and worldwide tech summits.
          </motion.p>
        </div>

        {/* Global Hubs Pills Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {globalHubs.map((hub, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/30 transition-all text-center"
            >
              <span className="text-[10px] font-bold text-[#00f5a0] uppercase tracking-wider block mb-1">
                {hub.tag}
              </span>
              <p className="text-sm font-bold text-white">{hub.country}</p>
              <p className="text-xs text-slate-400 mt-0.5">{hub.city}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Events Showcase */}
      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex gap-6 sm:gap-8 px-4 sm:px-8 pb-12 w-max">
          {[...events, ...events, ...events, ...events].map((event, index) => (
            <div
              key={index}
              className="group relative w-[300px] sm:w-[420px] h-[260px] sm:h-[320px] rounded-3xl overflow-hidden bg-[#090d16] border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-500 flex-shrink-0"
            >
              {/* Event Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 contrast-110"
                  sizes="420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
              </div>

              {/* Category Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[#00f5a0]">
                  {event.category}
                </span>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug group-hover:text-[#00f5a0] transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <MapPin size={14} className="text-[#00f5a0]" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}