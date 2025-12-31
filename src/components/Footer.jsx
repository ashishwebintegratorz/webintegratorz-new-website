"use client";
import React from "react";
import {
  Mail,
  MapPin,
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#25ccad] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#25ccad] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* MAIN GRID */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black">
              Web<span className="text-[#25ccad]">integratorz</span>
            </h2>

            <p className="text-xs tracking-widest uppercase text-white/60">
              We Innovate, Build and Grow
            </p>

            <p className="text-sm text-white/70 leading-relaxed">
              Transforming digital experiences through innovative web, mobile,
              SaaS, and AI-powered solutions.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook, Instagram, Youtube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-lg
                               bg-white/5 border border-white/10
                               hover:bg-[#25ccad] hover:text-black
                               transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Services
              <span className="block w-10 h-1 bg-[#25ccad] mt-2 rounded-full" />
            </h3>
            <ul className="space-y-4">
              {[
                "Web Development",
                "Mobile Development",
                 " CMS Solutions",
                "UI/UX Design",
                "Digital Marketing",
                "AI Integration",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center text-white/70 hover:text-[#25ccad] transition"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Contact
              <span className="block w-10 h-1 bg-[#25ccad] mt-2 rounded-full" />
            </h3>

            <div className="space-y-5">
              <a
                href="mailto:info@webintegratorz.com"
                className="flex items-start gap-4 p-4 rounded-xl
                           bg-white/5 border border-white/10
                           hover:border-[#25ccad] transition"
              >
                <Mail className="w-5 h-5 text-[#25ccad]" />
                <div>
                  <p className="text-xs text-white/50">Email</p>
                  <p className="text-sm text-white/80">
                    info@webintegratorz.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl
                              bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-[#25ccad]" />
                <div>
                  <p className="text-xs text-white/50">Registration</p>
                  <p className="text-sm text-white/80">
                    UDYAM-MP-30-0031514
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Quick Links
              <span className="block w-10 h-1 bg-[#25ccad] mt-2 rounded-full" />
            </h3>
            <ul className="space-y-4">
              {[
                "News",
                "Contact Us",
                "Our CEO",
                "Privacy Policy",
                "Terms & Conditions",
                "Cookie Policy",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-[#25ccad] transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © {currentYear}{" "}
            <span className="text-[#25ccad] font-semibold">
              Webintegratorz
            </span>
            . All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-[#25ccad] transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#25ccad] transition">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-[#25ccad] transition">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12
                   bg-[#25ccad] text-black
                   rounded-full flex items-center justify-center
                   shadow-lg hover:scale-110 transition z-50"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
