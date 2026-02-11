'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from "next/navigation";
import { CircleDollarSign, Zap, Target, Lock, TrendingUp, Clock, Lightbulb, Rocket, Sparkles } from "lucide-react";


export default function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);


  useEffect(() => {
    // Generate particles only on the client to avoid hydration mismatch
    setParticles([...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${5 + Math.random() * 10}s`
    })));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    requestAnimationFrame(() => {
      const rect = currentTarget.getBoundingClientRect();
      setMousePosition({
        x: clientX - rect.left,
        y: clientY - rect.top,
      });
    });
  };

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Expert Talent" },
    { number: "99%", label: "Success Rate" }
  ];

  const features = [
    {
      icon: CircleDollarSign,
      title: "Transparent Pricing",
      description: "Clear, upfront costs with no hidden fees. You know exactly what you're paying for.",
      color: "#25ccad"
    },
    {
      icon: Zap,
      title: "Proven Expertise",
      description: "Years of experience delivering cutting-edge solutions across industries.",
      color: "#25ccad"
    },
    {
      icon: Target,
      title: "Top-Notch IT Solutions",
      description: "Enterprise-grade technology solutions that scale with your business growth.",
      color: "#25ccad"
    },
    {
      icon: Lock,
      title: "Secure & Reliable",
      description: "Bank-level security protocols ensuring your data is always protected.",
      color: "#25ccad"
    },
    {
      icon: TrendingUp,
      title: "ROI Focused",
      description: "Every solution designed to maximize your return on investment.",
      color: "#25ccad"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support team ready to assist whenever you need us.",
      color: "#25ccad"
    }
  ];

  const teamMembers = [
    { name: "Team Lead", role: "Strategy" },
    { name: "Developer", role: "Engineering" },
    { name: "Designer", role: "Creative" },
    { name: "Manager", role: "Operations" }
  ];

  return (
    <section
      ref={sectionRef}
      className="why-section pb-0"
    >
      {/* Animated Background */}
      <div className="why-background">
        {/* Gradient Orbs */}
        <div className="orb orb-top"></div>
        <div className="orb orb-bottom"></div>

        {/* Grid Lines */}
        <div className="grid-lines"></div>

        {/* Animated Particles */}
        <div className="particles-container">
          {particles.map((p, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: p.left,
                top: p.top,
                animationDelay: p.delay,
                animationDuration: p.duration
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content Container - Perfectly Aligned with Navbar */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="why-header">
          {/* Badge */}
          <div className={`badge-wrapper ${isVisible ? 'visible' : ''}`}>
            <div className="badge">
              <div className="badge-dot"></div>
              <span className="badge-text">WHY US</span>
            </div>
            <div className="badge-line"></div>
          </div>

          {/* Main Heading */}
          <div className={`heading-wrapper ${isVisible ? 'visible' : ''}`}>
            <h2 className="main-heading">
              <span className="heading-white">Why </span>
              <span className="heading-brand-wrapper">
                <span className="heading-brand">Webintegratorz</span>
                <div className="heading-underline"></div>
              </span>
              <span className="heading-white">?</span>
            </h2>

            <p className="heading-description">
              We wholeheartedly support you in transforming your vision into a tangible reality,
              ensuring that your digital transformation serves as a robust foundation for your
              sustained growth and success in the ever-evolving marketplace.
            </p>
          </div>
        </div>

        {/* Stats Counter Section */}
        <div className={`stats-grid ${isVisible ? 'visible' : ''}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Glow Effect */}
              <div className="stat-glow"></div>

              <div className="stat-content">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>

              {/* Corner Accent */}
              <div className="stat-corner"></div>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="content-columns">
          {/* Left Column - Image/Visual Section */}
          <div className={`left-column ${isVisible ? 'visible' : ''}`}>
            <div className="visual-wrapper">
              {/* Main Image Container */}
              <div className="main-visual">
                {/* Decorative Circle Top Left */}
                <div className="decorative-circle circle-top"></div>

                {/* Goal Badge */}
                <div className="goal-badge">
                  <div className="goal-text-main">OUR GOAL</div>
                  <div className="goal-text-sub">IS YOUR</div>
                  <div className="goal-text-large">SUCCESS</div>
                </div>

                {/* Team Grid */}
                <div className="team-section">
                  <div className="team-grid">
                    {teamMembers.map((member, index) => (
                      <div
                        key={index}
                        className="team-card"
                      >
                        {/* Avatar */}
                        <div className="team-avatar">
                          {member.name.charAt(0)}
                        </div>
                        <div className="team-info">
                          <p className="team-name">{member.name}</p>
                          <p className="team-role">{member.role}</p>
                        </div>
                        {/* Hover effect */}
                        <div className="team-hover"></div>
                      </div>
                    ))}
                  </div>

                  {/* Team Excellence Label */}
                  <div className="team-label">
                    <div className="team-badge">
                      <Sparkles className="team-badge-icon" size={14} style={{ color: '#25ccad' }} />
                      <span className="team-badge-text">Team Excellence</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Workspace Cards */}
              <div className="workspace-cards">
                <div className="workspace-card">
                  <div className="workspace-icon-wrapper">
                    <Lightbulb className="workspace-icon" size={18} />
                  </div>
                  <p className="workspace-title">Innovation Hub</p>
                  <p className="workspace-subtitle">Creative Solutions</p>
                </div>
                <div className="workspace-card">
                  <div className="workspace-icon-wrapper">
                    <Rocket className="workspace-icon" size={18} />
                  </div>
                  <p className="workspace-title">Fast Delivery</p>
                  <p className="workspace-subtitle">Quick Turnaround</p>
                </div>
              </div>

              {/* Decorative Circle Bottom Right */}
              <div className="decorative-circle circle-bottom"></div>
            </div>
          </div>

          {/* Right Column - Features Grid (NO ARROW ICONS) */}
          <div className={`right-column ${isVisible ? 'visible' : ''}`}>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-card group"
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="feature-content">
                    {/* Hover Glow */}
                    <div className="feature-glow"></div>

                    <div className="feature-inner">
                      {/* Icon */}
                      <div className="feature-icon-wrapper group-hover:bg-[#25ccad] transition-all">
                        <feature.icon className="feature-icon text-[#25ccad] group-hover:text-black transition-colors" size={24} />
                      </div>

                      {/* Content */}
                      <div className="feature-text">
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                      </div>

                      {/* NO ARROW ICON - REMOVED */}
                    </div>

                    {/* Active Indicator */}
                    {activeCard === index && (
                      <div className="feature-indicator"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`cta-section ${isVisible ? 'visible' : ''}`}>
          <button
            className="cta-button"
            onClick={() => router.push("/contact-us")}
            onMouseMove={handleMouseMove}
          >
            <span className="cta-text">
              Get a Free Consultation
              <svg className="cta-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="cta-bg"></div>
            <div
              className="cta-follow"
              style={{
                left: mousePosition.x - 64,
                top: mousePosition.y - 64,
              }}
            ></div>
          </button>
        </div>
      </div>
    </section>
  );
}