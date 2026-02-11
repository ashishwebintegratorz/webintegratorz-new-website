'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, ShoppingCart, Smartphone, Brain, LineChart, Bot, Settings, Palette, ShieldCheck } from 'lucide-react';

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: Globe,
      title: 'Web Development',
      description:
        'Build high-performance, scalable websites using modern frameworks like React, Next.js, and Vue. Our expert team delivers responsive, SEO-optimized solutions that drive engagement and conversions. From landing pages to complex web applications, we ensure your digital presence stands out with cutting-edge technology and best engineering practices.',
    },
    {
      id: 2,
      icon: Cpu,
      title: 'Custom Software & Product Development',
      description:
        'Transform your unique business requirements into powerful software solutions. We design and develop custom applications tailored to your workflows, ensuring seamless integration with existing systems. Our agile development process guarantees flexibility, scalability, and a product that evolves with your business needs.',
    },
    {
      id: 3,
      icon: ShoppingCart,
      title: 'E-commerce Development',
      description:
        'Launch and scale your online store with feature-rich e-commerce platforms built on Shopify, WooCommerce, or custom solutions. We optimize every aspect—from checkout flows to inventory management—ensuring speed, security, and an exceptional shopping experience that maximizes your sales and customer satisfaction.',
    },
    {
      id: 4,
      icon: Smartphone,
      title: 'Mobile App & SaaS Solutions',
      description:
        'Create powerful mobile applications and SaaS platforms that deliver exceptional user experiences across all devices. Whether native iOS/Android apps or progressive web apps, we build solutions that are intuitive, performant, and designed for long-term growth. Our cloud-native architecture ensures reliability and scalability.',
    },
    {
      id: 5,
      icon: Brain,
      title: 'AI / ML Development',
      description:
        'Leverage the power of artificial intelligence and machine learning to gain competitive advantages. From predictive analytics to natural language processing, we build intelligent systems that automate processes, uncover insights, and drive data-driven decision making. Transform your business with cutting-edge AI solutions.',
    },
    {
      id: 6,
      icon: LineChart,
      title: 'SEO & Digital Growth',
      description:
        'Increase your online visibility and drive qualified traffic with proven SEO strategies and digital marketing campaigns. Our data-driven approach combines technical SEO, content optimization, and performance tracking to improve rankings, boost conversions, and deliver measurable ROI for your business.',
    },
    {
      id: 7,
      icon: Bot,
      title: 'AI Integration',
      description:
        'Seamlessly integrate AI capabilities into your existing systems and workflows. We help businesses adopt AI technologies like chatbots, recommendation engines, and automation tools without disrupting operations. Enhance efficiency, improve customer experiences, and stay ahead of the competition with smart AI integration.',
    },
    {
      id: 8,
      icon: Settings,
      title: 'Support & Maintenance',
      description:
        'Keep your digital products running smoothly with our comprehensive support and maintenance services. We provide regular updates, security patches, performance monitoring, and quick issue resolution. Our proactive approach ensures your systems stay secure, up-to-date, and optimized for peak performance.',
    },
    {
      id: 9,
      icon: Palette,
      title: 'Brand Building',
      description:
        'Create a memorable brand identity that resonates with your target audience. From logo design to comprehensive brand guidelines, we craft visual identities and compelling narratives that build trust and recognition. Our strategic approach ensures consistency across all touchpoints and long-term brand equity.',
    },
    {
      id: 10,
      icon: ShieldCheck,
      title: 'Cyber Security',
      description:
        'Protect your digital assets with enterprise-grade security solutions. We implement robust security measures including vulnerability assessments, penetration testing, encryption, and compliance frameworks. Safeguard your applications, data, and infrastructure against evolving cyber threats with our comprehensive security services.',
    },
  ];

  return (
    <section
      className="min-h-screen py-12 px-6"
      style={{ backgroundColor: "#E9FAF6" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#25ccad]/10 border border-[#25ccad]/20 mb-8 font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#25ccad] animate-pulse"></div>
            <span className="text-[#25ccad] text-xs tracking-[0.2em] uppercase">
              Our Services
            </span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-6">
            Transform Your Business with{' '}
            <span style={{ color: "#25ccad", fontWeight: 700 }}>
              Expert Solutions
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive digital services designed to help your business grow,
            scale, and succeed.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
              whileHover={{ scale: 1.02 }}
            >
              {/* Hover glow */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-[#25ccad] to-emerald-400 rounded-2xl blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === service.id ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl p-8 border border-green-200 shadow-md hover:shadow-xl transition-all duration-500">
                {/* Icon */}
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#25ccad]/10 group-hover:bg-[#25ccad] transition-all duration-300 shadow-sm">
                    <service.icon size={32} className="text-[#25ccad] group-hover:text-black transition-colors" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#25ccad] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#25ccad] to-emerald-400 rounded-b-2xl"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredCard === service.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Let's Talk Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button
            onClick={() => window.location.href = '/contact-us'}
            className="group/btn relative inline-flex items-center gap-3 px-10 py-5 text-black font-bold text-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            style={{ backgroundColor: "#25ccad" }} // ← FORCED BRAND COLOR
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >



            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />

            <span className="relative z-10">Let's Talk</span>

            <motion.svg
              className="relative z-10 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}