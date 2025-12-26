'use client';

import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="contact-page-wrapper">
      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>

      <div className="contact-container">
        <header className={`contact-header ${isVisible ? 'visible' : ''}`}>
          <div className="contact-logo">
            <h1>webintegratorz</h1>
            <div className="contact-tagline">We Innovate, Build and Excel</div>
          </div>
          <h2>Let&apos;s Build Something Amazing Together</h2>
          <p className="contact-subtitle">
            We&apos;re here to transform your vision into reality with cutting-edge web, mobile, SaaS, and AI/ML solutions.
          </p>
        </header>

        <div className="contact-grid">
          <div className={`contact-card ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.1s' }}>
            <div className="contact-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="contact-card-title">Head Quarter</h3>
            <div className="contact-card-content">
              <p><strong>India</strong></p>
              <p>LG 19, Mangal City, AB Rd<br />Scheme 54, PU4, Indore<br />Madhya Pradesh 452010</p>
            </div>
          </div>

          <div className={`contact-card ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="contact-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="contact-card-title">Email Address</h3>
            <div className="contact-card-content">
              <p><strong>Sales Inquiries</strong></p>
              <p><a href="mailto:sales@webintegratorz.com">sales@webintegratorz.com</a></p>
              <p style={{ marginTop: '16px' }}><strong>Support</strong></p>
              <p><a href="mailto:support@webintegratorz.com">support@webintegratorz.com</a></p>
            </div>
          </div>

          <div className={`contact-card ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="contact-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="contact-card-title">Business Talk</h3>
            <div className="contact-card-content">
              <p><strong>Direct Lines</strong></p>
              <p><a href="tel:+918989944488">+91 8989944488</a></p>
              <p><a href="tel:+919131640479">+91 9131640479</a></p>
              <p style={{ marginTop: '12px', color: 'var(--contact-gray)', fontSize: '14px' }}>
                Available Mon-Fri, 9:00 AM - 5:00 PM IST
              </p>
            </div>
          </div>
        </div>

        <div className={`contact-info-section ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.4s' }}>
          <div className="contact-description">
            <strong>About Webintegratorz Technologies:</strong> Your Trusted Partner for Web, Mobile, SaaS, and AI/ML Solutions. We specialize in crafting cutting-edge web and mobile applications, SaaS platforms, and AI/ML solutions. Based in India, we deliver innovation-driven services tailored to meet your business needs.
          </div>

          <div className="contact-info-grid">
            <div className="contact-info-item">
              <div className="contact-info-label">Business Hours</div>
              <div className="contact-info-value">Monday - Friday<br />09:00 AM - 5:00 PM IST</div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-label">Founded</div>
              <div className="contact-info-value">2010</div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-label">Team Size</div>
              <div className="contact-info-value">10-50 Professionals</div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-label">Legal Name</div>
              <div className="contact-info-value">Webintegratorz Technologies</div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-label">Office Address</div>
              <div className="contact-info-value">70 Mahalaxmi Nagar<br />Indore 452010</div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-label">Customer Service</div>
              <div className="contact-info-value">
                <a href="tel:+918989944488">+91 8989944488</a>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}