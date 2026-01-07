'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";  // ✔ added

export default function WebDevelopmentPage() {
  const router = useRouter();  // ✔ added
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mern');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = {
    mern: [
      { name: 'MongoDB', icon: '🍃', color: '#47A248' },
      { name: 'Express.js', icon: '⚡', color: '#000000' },
      { name: 'React', icon: '⚛️', color: '#61DAFB' },
      { name: 'Node.js', icon: '🟢', color: '#339933' }
    ],
    frontend: [
      { name: 'HTML5', icon: '📄', color: '#E34F26' },
      { name: 'CSS3', icon: '🎨', color: '#1572B6' },
      { name: 'JavaScript', icon: '⚡', color: '#F7DF1E' },
      { name: 'TypeScript', icon: '🔷', color: '#3178C6' },
      { name: 'React', icon: '⚛️', color: '#61DAFB' },
      { name: 'Next.js', icon: '▲', color: '#000000' },
      { name: 'Vue.js', icon: '💚', color: '#4FC08D' },
      { name: 'Tailwind CSS', icon: '🌊', color: '#06B6D4' }
    ],
    backend: [
      { name: 'Node.js', icon: '🟢', color: '#339933' },
      { name: 'Express.js', icon: '⚡', color: '#000000' },
      { name: 'MongoDB', icon: '🍃', color: '#47A248' },
      { name: 'PostgreSQL', icon: '🐘', color: '#4169E1' },
      { name: 'REST APIs', icon: '🔌', color: '#FF6C37' },
      { name: 'GraphQL', icon: '◆', color: '#E10098' }
    ]
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN application with payment integration, real-time inventory, and admin dashboard',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒'
    },
    {
      title: 'SaaS Dashboard',
      description: 'Enterprise-grade analytics platform with real-time data visualization and multi-tenant architecture',
      tech: ['Next.js', 'Express', 'PostgreSQL', 'Redis'],
      image: '📊'
    },
    {
      title: 'Social Media App',
      description: 'Real-time chat, posts, stories with WebSocket integration and cloud storage',
      tech: ['React', 'Socket.io', 'MongoDB', 'AWS'],
      image: '💬'
    }
  ];

  const services = [
    {
      icon: '🚀',
      title: 'MERN Stack Development',
      description: 'Complete full-stack solutions using MongoDB, Express.js, React, and Node.js for scalable applications',
      features: ['Custom APIs', 'Database Design', 'Real-time Features', 'Cloud Deployment']
    },
    {
      icon: '⚛️',
      title: 'React & Next.js',
      description: 'Modern, performant front-end applications with server-side rendering and optimal SEO',
      features: ['SSR/SSG', 'Performance Optimization', 'Responsive Design', 'State Management']
    },
    {
      icon: '🔧',
      title: 'Backend Development',
      description: 'Robust server-side solutions with RESTful APIs, authentication, and database management',
      features: ['API Development', 'Authentication', 'Database Design', 'Microservices']
    },
    {
      icon: '🎨',
      title: 'UI/UX Implementation',
      description: 'Pixel-perfect implementation of designs with smooth animations and interactions',
      features: ['Responsive Design', 'Animations', 'Accessibility', 'Cross-browser']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="webdev-page">
      {/* Hero Section */}
      <section className="webdev-hero">
        <div className="webdev-hero-bg">
          <div className="webdev-grid-pattern"></div>
          <div className="webdev-gradient-orb webdev-orb-1"></div>
          <div className="webdev-gradient-orb webdev-orb-2"></div>
        </div>

        <div className={`webdev-hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="webdev-badge">
            <span className="webdev-badge-dot"></span>
            MERN Stack Specialists
          </div>
          <h1 className="webdev-hero-title">
            Web Development
            <span className="webdev-title-highlight"> That Scales</span>
          </h1>
          <p className="webdev-hero-subtitle">
            Building powerful, modern web applications with React, Node.js, and cutting-edge technologies. 
            From concept to deployment, we deliver enterprise-grade solutions.
          </p>
          <div className="webdev-hero-buttons">
           
            <button className="webdev-btn webdev-btn-secondary">
              View Our Work
            </button>
          </div>

          {/* Tech Stack Preview */}
          <div className="webdev-tech-preview">
            <div className="webdev-tech-item" style={{ animationDelay: '0.1s' }}>
              <span className="webdev-tech-icon">⚛️</span>
              React
            </div>
            <div className="webdev-tech-item" style={{ animationDelay: '0.2s' }}>
              <span className="webdev-tech-icon">🟢</span>
              Node.js
            </div>
            <div className="webdev-tech-item" style={{ animationDelay: '0.3s' }}>
              <span className="webdev-tech-icon">🍃</span>
              MongoDB
            </div>
            <div className="webdev-tech-item" style={{ animationDelay: '0.4s' }}>
              <span className="webdev-tech-icon">▲</span>
              Next.js
            </div>
          </div>
        </div>

        {/* Floating Code Snippet */}
        <div className="webdev-code-float">
          <div className="webdev-code-header">
            <span className="webdev-code-dot" style={{ background: '#ff5f56' }}></span>
            <span className="webdev-code-dot" style={{ background: '#ffbd2e' }}></span>
            <span className="webdev-code-dot" style={{ background: '#27c93f' }}></span>
          </div>
          <pre className="webdev-code-content">
{`import { useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  
  return <div>Hello World</div>;
};`}
          </pre>
        </div>
      </section>

      {/* Stats Section */}
      <section className="webdev-stats">
        <div className="webdev-container">
          <div className="webdev-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="webdev-stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="webdev-stat-number">{stat.number}</div>
                <div className="webdev-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="webdev-technologies">
        <div className="webdev-container">
          <div className="webdev-section-header">
            <span className="webdev-section-tag">OUR EXPERTISE</span>
            <h2 className="webdev-section-title">
              Technologies We <span className="webdev-text-gradient">Master</span>
            </h2>
            <p className="webdev-section-subtitle">
              Specialized in the MERN stack and modern web technologies for building scalable, performant applications
            </p>
          </div>

          <div className="webdev-tech-tabs">
            <button 
              className={`webdev-tab ${activeTab === 'mern' ? 'active' : ''}`}
              onClick={() => setActiveTab('mern')}
            >
              MERN Stack
            </button>
            <button 
              className={`webdev-tab ${activeTab === 'frontend' ? 'active' : ''}`}
              onClick={() => setActiveTab('frontend')}
            >
              Frontend
            </button>
            <button 
              className={`webdev-tab ${activeTab === 'backend' ? 'active' : ''}`}
              onClick={() => setActiveTab('backend')}
            >
              Backend
            </button>
          </div>

          <div className="webdev-tech-grid">
            {technologies[activeTab].map((tech, index) => (
              <div 
                key={index} 
                className="webdev-tech-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="webdev-tech-card-icon" style={{ background: `${tech.color}15` }}>
                  {tech.icon}
                </span>
                <span className="webdev-tech-card-name">{tech.name}</span>
                <div className="webdev-tech-card-shine"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="webdev-services">
        <div className="webdev-container">
          <div className="webdev-section-header">
            <span className="webdev-section-tag">WHAT WE DO</span>
            <h2 className="webdev-section-title">
              Our <span className="webdev-text-gradient">Services</span>
            </h2>
          </div>

          <div className="webdev-services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="webdev-service-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="webdev-service-icon">{service.icon}</div>
                <h3 className="webdev-service-title">{service.title}</h3>
                <p className="webdev-service-description">{service.description}</p>
                <ul className="webdev-service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <span className="webdev-feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="webdev-service-hover-gradient"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
     <section className="webdev-cta">
      <div className="webdev-cta-bg">
        <div className="webdev-cta-pattern"></div>
      </div>
      <div className="webdev-container">
        <div className="webdev-cta-content">
          <h2 className="webdev-cta-title">Ready to Build Something Amazing?</h2>
          <p className="webdev-cta-text">
            Let&apos;s discuss your project and create a solution that exceeds expectations
          </p>
          <div className="webdev-cta-buttons">
            <button
              onClick={() => router.push("/contact-us")}
              className="webdev-btn webdev-btn-primary webdev-btn-large webdev-btn-large"
            >
              Get in Touch
              <span className="webdev-btn-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}