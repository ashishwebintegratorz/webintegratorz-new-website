'use client';

import { useState } from 'react';

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Web Development',
      description:
        'High-performance, scalable websites built using modern frameworks and best engineering practices.',
    },
    {
      id: 2,
      icon: '⚙️',
      title: 'Custom Software & Product Development',
      description:
        'End-to-end custom software solutions designed specifically for your business needs.',
    },
    {
      id: 3,
      icon: '🛒',
      title: 'E-commerce Development',
      description:
        'Optimized e-commerce platforms that help you sell more with speed, security, and scalability.',
    },
    {
      id: 4,
      icon: '📱',
      title: 'Mobile App & SaaS Solutions',
      description:
        'Native apps, PWAs, and SaaS platforms built for performance and long-term growth.',
    },
    {
      id: 5,
      icon: '🤖',
      title: 'AI / ML Development',
      description:
        'Intelligent AI-powered solutions that unlock insights, automation, and business intelligence.',
    },
    {
      id: 6,
      icon: '📈',
      title: 'SEO & Digital Growth',
      description:
        'ROI-driven SEO and growth strategies to increase visibility, traffic, and conversions.',
    },
    {
      id: 7,
      icon: '👥',
      title: 'AI Integration',
      description:
        'Seamless AI integration into your existing systems to enhance efficiency and innovation.',
    },
    {
      id: 8,
      icon: '🛠️',
      title: 'Support & Maintenance',
      description:
        'Reliable post-launch support and maintenance to keep your systems secure and updated.',
    },
    {
      id: 9,
      icon: '🎨',
      title: 'Brand Building',
      description:
        'Strong visual identity and storytelling that builds trust and long-term brand recognition.',
    },
    {
      id: 10,
      icon: '🔐',
      title: 'Cyber Security',
      description:
        'Security-focused solutions to protect your applications, data, and infrastructure.',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-green-50 to-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block mb-4 text-green-700 font-semibold text-sm tracking-wider uppercase bg-green-100 px-5 py-2 rounded-full border border-green-200">
            Our Services
          </span>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-6">
            Transform Your Business with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Expert Solutions
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive digital services designed to help your business grow,
            scale, and succeed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Hover glow */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500`}
              />

              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl p-8 border border-green-200 shadow-md hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02]">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-green-100 text-3xl shadow-sm group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-700 transition">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex items-center text-green-700 font-semibold text-sm">
                  <span className="mr-2">Learn More</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
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

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
