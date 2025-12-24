'use client';

import React, { useEffect, useRef } from "react";

const FeaturedSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle brand glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#25ccad]/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#25ccad]/10 rounded-full blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 fade-in opacity-0">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25ccad]/10 text-[#25ccad] rounded-full mb-8 text-sm font-medium tracking-wide border border-[#25ccad]/30">
            <span className="w-1.5 h-1.5 bg-[#25ccad] rounded-full animate-pulse" />
            AWARDS & RECOGNITION
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-black mb-6 tracking-tight">
            Featured
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Recognized for excellence and innovation in digital solutions
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">

          {/* Badge 1 */}
          <div className="fade-in opacity-0 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#25ccad]/20 rounded-full blur-2xl scale-110" />

              <div className="relative w-52 h-52 bg-white border border-[#25ccad]/40 rounded-full flex flex-col items-center justify-center shadow-xl">
                <div className="text-6xl font-black text-[#25ccad] mb-2">
                  2024
                </div>
                <div className="text-xs font-bold text-gray-500 tracking-widest">
                  CERTIFIED
                </div>

                <div className="absolute bottom-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#25ccad]">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="fade-in opacity-0 flex justify-center items-center">
            <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-xl hover:border-[#25ccad]/40 transition">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-[#25ccad] rounded-2xl flex items-center justify-center">
                  <span className="text-4xl font-black text-black">C</span>
                </div>

                <div>
                  <div className="text-sm font-bold text-gray-500 mb-1">
                    REVIEW US ON
                  </div>
                  <div className="text-2xl font-black text-black">
                    CLUTCH
                  </div>

                  <div className="flex gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#25ccad]">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="fade-in opacity-0 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#25ccad]/20 rounded-full blur-2xl scale-110" />

              <div className="relative w-52 h-60 bg-white border border-[#25ccad]/40 rounded-t-3xl rounded-b-[50%] shadow-2xl flex flex-col items-center justify-center text-black">
                <div className="text-5xl font-black mb-3 text-[#25ccad]">
                  2024
                </div>

                <div className="text-2xl font-black tracking-wider mb-1">
                  EXCELLENCE
                </div>

                <div className="text-sm font-semibold tracking-widest opacity-70 mb-1">
                  AWARD
                </div>

                <div className="text-xs opacity-60">
                  Certified Professional
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-20 fade-in opacity-0">
          <p className="text-lg font-medium text-gray-600 max-w-2xl mx-auto">
            Trusted by leading businesses worldwide for delivering exceptional digital solutions
          </p>

          <div className="flex justify-center gap-12 mt-10">
            {[
              { label: "Projects", value: "500+" },
              { label: "Satisfaction", value: "98%" },
              { label: "Years", value: "15+" },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-3xl font-black text-black">
                  {item.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
