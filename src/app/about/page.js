'use client';

import { useState, useEffect } from 'react';

export default function ContactPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="contact-page-wrapper mt-12">
            <div className="decorative-circle circle-1"></div>
            <div className="decorative-circle circle-2"></div>

            <div className="contact-container">
                <header className={`contact-header ${isVisible ? 'visible' : ''}`}>
                    <div className="contact-logo">
                        <h1>webintegratorz</h1>
                        <div className="contact-tagline">We Innovate, Build and Excel</div>
                    </div>
                    <h2 className="text-4xl xs:text-5xl md:text-6xl font-extrabold px-4">Let&apos;s Build Something Amazing Together</h2>
                    <p className="contact-subtitle px-4 mt-4">
                        We&apos;re here to transform your vision into reality with cutting-edge web, mobile, SaaS, and AI/ML solutions.
                    </p>
                </header>

                <div className="contact-grid">
                    <div className={`contact-card ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.1s' }}>
                        <div className="contact-icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
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
                                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor" />
                            </svg>
                        </div>
                        <h3 className="contact-card-title">Email Address</h3>
                        <div className="contact-card-content">
                            <p><strong>Sales Inquiries</strong></p>
                            <p><a href="mailto:sales@webintegratorz.com">info@webintegratorz.com</a></p>
                            <p style={{ marginTop: '16px' }}><strong>Support & Chat</strong></p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                                <a href="tel:+918989944488" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#25ccad', fontWeight: '800', textDecoration: 'none' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
                                    </svg>
                                    8989944488
                                </a>
                                <a href="https://wa.me/918989944488" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#25ccad', fontWeight: '800', textDecoration: 'none' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`contact-card ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.3s' }}>
                        <div className="contact-icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor" />
                            </svg>
                        </div>
                        <h3 className="contact-card-title">Business Talk</h3>
                        <div className="contact-card-content">
                            <p><strong>Direct Lines</strong></p>
                            <p><a href="tel:+918989944488">+91 8989944488</a></p>
                            <p><a href="tel:+919131640479">+91 9131640479</a></p>
                            <p style={{ marginTop: '12px', color: 'var(--contact-gray)', fontSize: '14px' }}>
                                Available Mon-Fri, 9:00 AM - 5:00 PM IST<br />
                                (2nd & 4th Sat Off)
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`contact-info-section ${isVisible ? 'visible' : ''} !p-6 md:!p-12`} style={{ animationDelay: '0.4s' }}>
                    <div className="contact-description !text-base md:!text-lg leading-relaxed">
                        <strong>About Webintegratorz Technologies:</strong> Your Trusted Partner for Web, Mobile, SaaS, and AI/ML Solutions. We specialize in crafting cutting-edge web and mobile applications, SaaS platforms, and AI/ML solutions. Based in India, we deliver innovation-driven services tailored to meet your business needs.
                    </div>

                    <div className="contact-info-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        <div className="contact-info-item">
                            <div className="contact-info-label">Business Hours</div>
                            <div className="contact-info-value !text-sm md:!text-base">
                                Monday - Friday<br className="sm:hidden" />
                                <span className="opacity-80">(2nd & 4th Sat Off)</span>
                                <br />09:00 AM - 5:00 PM IST
                            </div>
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
