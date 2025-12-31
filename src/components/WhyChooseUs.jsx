'use client';

import React, { useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";

export default function WhyChooseUs() {
  const router = useRouter();
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const reasons = [
    {
      title: 'Global Expertise, Local Impact',
      description:
        'We deliver culturally aligned digital solutions across global markets while maintaining strong local understanding.',
      icon: '🌍',
    },
    {
      title: 'Cost-Effective Solutions',
      description:
        'Our offshore development model helps startups and SMEs reduce costs without compromising on quality.',
      icon: '💰',
    },
    {
      title: 'Tech-First Approach',
      description:
        'We specialize in modern frameworks like React, Next.js, WordPress, Shopify, and scalable architectures.',
      icon: '⚡',
    },
    {
      title: 'AI-Powered Growth',
      description:
        'We build intelligent, AI-ready platforms designed to give businesses a long-term competitive edge.',
      icon: '🤖',
    },
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Subtle brand glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-12 w-72 h-72 bg-[#25ccad]/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-24 right-12 w-96 h-96 bg-[#25ccad]/10 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block mb-4 text-[#25ccad] font-semibold text-sm tracking-wider uppercase bg-[#25ccad]/10 px-4 py-2 rounded-full border border-[#25ccad]/30">
            Trusted IT Firm In India
          </span>

          <h2 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">
            Why Choose <span className="text-[#25ccad]">Webintegratorz</span>?
          </h2>

          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            A technology partner that blends innovation, reliability, and
            cost-efficiency to help your business scale confidently.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#25ccad]/50 transition-all duration-500 opacity-0 translate-y-10"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 h-1 w-full bg-[#25ccad] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="p-8 lg:p-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#25ccad]/15 text-3xl group-hover:scale-110 transition-transform">
                    {reason.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#25ccad] transition">
                  {reason.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {reason.description}
                </p>

                <div className="mt-6 flex items-center text-[#25ccad] font-semibold opacity-0 group-hover:opacity-100 transition">
                  <span className="text-sm">Learn more</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <div className="inline-block bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 max-w-3xl">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>

            <p className="text-lg text-white/70 mb-8">
              Partner with Webintegratorz and build secure, scalable digital
              products with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contact-us")}
                className="px-8 py-4 bg-[#25ccad] text-black font-semibold rounded-xl hover:opacity-90 transition"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
