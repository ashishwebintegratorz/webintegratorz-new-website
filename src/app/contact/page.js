"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [shareMode, setShareMode] = useState("");

  const meetLink = "https://meet.google.com/landing?hs=197&authuser=0&pli=1";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const message = `Hello 👋, I want to discuss a project.\nGoogle Meet Link: ${meetLink}`;

  const shareToEmail = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        userEmail
      )}&su=${encodeURIComponent("Project Meeting with Webintegratorz")}&body=${encodeURIComponent(
        message
      )}`,
      "_self"
    );
  };

  const shareToWhatsApp = () => {
    window.open(
      `https://wa.me/918989944488?text=${encodeURIComponent(message)}`,
      "_self"
    );
  };

  return (
    <div className="contact-page-wrapper">
      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>

      <div className="contact-container">
        <header className={`contact-header ${isVisible ? "visible" : ""}`}>
          <div className="contact-logo">
            <h1>webintegratorz</h1>
            <div className="contact-tagline">We Innovate, Build and Excel</div>
          </div>
          <h2>Let&apos;s Build Something Amazing Together</h2>
          <p className="contact-subtitle">
            We&apos;re here to transform your vision into reality with cutting-edge
            web, mobile, SaaS, and AI/ML solutions.
          </p>
        </header>

        <div className="contact-grid">
          {/* Head Quarter Card */}
          <div
            className={`contact-card ${isVisible ? "visible" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="contact-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="contact-card-title">Head Quarter</h3>
            <div className="contact-card-content">
              <p>
                <strong>India</strong>
              </p>
              <p>
                LG 19, Mangal City, AB Rd <br />
                Scheme 54, PU4, Indore <br />
                Madhya Pradesh 452010
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div
            className={`contact-card ${isVisible ? "visible" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="contact-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="contact-card-title">Email Address</h3>
            <div className="contact-card-content">
              <p>
                <strong>Sales Inquiries</strong>
              </p>
              <p>
                <a href="mailto:sales@webintegratorz.com">
                  webintegratorztechnologies@gmail.com
                </a>
              </p>
              <p style={{ marginTop: "16px" }}>
                <strong>Support</strong>
              </p>
              <p>
                <a href="mailto:support@webintegratorz.com">
                  webintegratorztechnologies@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Business Talk Card */}
          <div
            className={`contact-card ${isVisible ? "visible" : ""}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="contact-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="contact-card-title">Business Talk</h3>
            <div className="contact-card-content">
              <p>
                <strong>Direct Lines</strong>
              </p>
              <p>
                <a href="tel:+918989944488">+91 8989944488</a>
              </p>
              <p>
                <a href="tel:+919131640479">+91 9131640479</a>
              </p>
              <p
                style={{
                  marginTop: "12px",
                  color: "var(--contact-gray)",
                  fontSize: "14px",
                }}
              >
                Available Mon-Fri, 9:00 AM - 5:00 PM IST
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`contact-cta-section ${isVisible ? "visible" : ""}`}
          style={{ animationDelay: "0.5s" }}
        >
          <h3 className="contact-cta-title">Ready to Start Your Project?</h3>
          <p className="contact-cta-text">
            Feel free to contact us or just drop a line here.
          </p>

          <div className="contact-cta-buttons">
            {/* Meeting Request Button */}
            <button
              onClick={() => setShowPopup(true)}
              className="contact-btn contact-btn-primary"
            >
              Meeting Request
            </button>

            {/* Call Button */}
            <a
              href="tel:+918989944488"
              className="contact-btn contact-btn-secondary"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[1000] flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0A2540] border border-white/20 rounded-2xl p-6 w-full max-w-sm shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                Book a Meeting
              </h3>

              <input
                type="email"
                placeholder="Enter your email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/30 text-white outline-none mb-4"
              />

              <div className="grid grid-cols-1 gap-3">
                {/* Share on WhatsApp */}
                <button
                  onClick={shareToWhatsApp}
                  className="contact-btn contact-btn-secondary"
                >
                  Share on WhatsApp
                </button>

                {/* Share on Email */}
                <button
                  onClick={shareToEmail}
                  disabled={!userEmail}
                  className="contact-btn contact-btn-primary"
                >
                  Share on Email
                </button>
              </div>

              {/* Cancel */}
              <button
                onClick={() => setShowPopup(false)}
                className="mt-5 w-full py-2 text-xs text-white/60 hover:text-white transition"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
