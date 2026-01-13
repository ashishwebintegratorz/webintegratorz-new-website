'use client';

import React, { useState, useEffect } from 'react';


const Casestudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlides = () => {
      setSlidesToShow(window.innerWidth < 640 ? 1 : 3);
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
      description: "HOW RENT BUDDY BECAME A LEADING RENTAL PLATFORM",
      location: "India",
      image: "/images/rentbuddy1.png"
    },
    {
      id: 2,
      title: "New Era Shipping",
      subtitle: "UAE Logistics Solution",
      description: "AI BASED SHIPPING & TRACKING SYSTEM",
      location: "UAE",
      image: "/images/newera.jpeg"
    },
    {
      id: 3,
      title: "Fresh Go",
      subtitle: "Mobile Commerce App",
      description: "FRESH GO SCALED GLOBALLY WITH US",
      location: "India",
      image: "/images/fresh.png"
    },
    {
      id: 4,
      title: "Protech HPL",
      subtitle: "Industrial Management System",
      description: "HOW PROTECH HPL REVOLUTIONIZED MANUFACTURING",
      location: "India",
      image: "/images/protech.webp"
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      subtitle: "Online Retail Solution",
      description: "BUILDING THE NEXT GEN E-COMMERCE EXPERIENCE",
      location: "USA",
      image: "/images/ecommerce.png"
    },
    {
      id: 6,
      title: "Healthcare Portal",
      subtitle: "Patient Management System",
      description: "TRANSFORMING HEALTHCARE WITH TECHNOLOGY",
      location: "Canada",
      image: "/images/healthcare.png"
    },
    {
      id: 7,
      title: "Global Finserv",
      subtitle: "Digital Banking App",
      description: "SCALEABLE CLOUD-NATIVE FINTECH SOLUTION",
      location: "Germany",
      image: "/images/rentbuddy1.png"
    },
    {
      id: 8,
      title: "EduQuest AI",
      subtitle: "Personalized Learning",
      description: "PERSONALIZED LEARNING JOURNEYS POWERED BY AI",
      location: "India",
      image: "/images/newera.jpeg"
    },
    {
      id: 9,
      title: "Urban Fleet",
      subtitle: "Cabs & Logistics",
      description: "OPTIMIZED FLEET MANAGEMENT & ROUTING PLATFORM",
      location: "UK",
      image: "/images/fresh.png"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= CasestudiesData.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? CasestudiesData.length - slidesToShow : prevIndex - 1
    );
  };

  return (
    <section className="casestudies-section">
      <div className="casestudies-container">
        {/* Header */}
        <div className="casestudies-header">
          <div className="header-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12L10 17L20 7" stroke="#25ccad" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>CASE STUDIES</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12L10 17L20 7" stroke="#25ccad" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h2 className="section-title">
            What It's Like To Build With
            <br />
            <span className="brand-name">Webintegratorz</span>
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="carousel-wrapper">
          {/* Left Navigation */}
          <button
            className="nav-button nav-left"
            onClick={prevSlide}
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Cards Track */}
          <div className="cards-container">
            <div
              className="cards-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`
              }}
            >
              {CasestudiesData.map((study) => (
                <div key={study.id} className="study-card w-full sm:w-1/2 md:w-1/3 flex-shrink-0">
                  {/* Card Image Area */}
                  <div className="card-image-wrapper">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="card-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback Placeholder */}
                    <div className="card-placeholder">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#25ccad" strokeWidth="1.5" />
                        <circle cx="8.5" cy="8.5" r="1.5" fill="#25ccad" />
                        <path d="M3 16L7 12L10 15L14 11L21 18V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V16Z" fill="#25ccad" opacity="0.4" />
                      </svg>
                      <span>Add Image</span>
                    </div>

                    {/* Text Overlay */}
                    <div className="card-overlay">
                      <p className="overlay-text">{study.description}</p>
                    </div>
                  </div>

                  {/* Card Info Footer */}
                  <div className="card-footer">
                    <div className="footer-left">
                      <h3 className="card-title">{study.title}</h3>
                      <p className="card-subtitle">{study.subtitle}</p>
                    </div>
                    <div className="footer-right">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#25ccad" />
                      </svg>
                      <span className="location">{study.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Navigation */}
          <button
            className="nav-button nav-right"
            onClick={nextSlide}
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="pagination">
          {Array.from({ length: CasestudiesData.length - slidesToShow + 1 }).map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Casestudies;