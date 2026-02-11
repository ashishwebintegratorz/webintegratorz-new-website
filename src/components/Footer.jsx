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
  Cookie,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Stable social icons array (no dynamic className generation)
  const socialIcons = [
    { Icon: Linkedin, href: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A83544760&keywords=webintegratorz%20technologies&origin=ENTITY_SEARCH_HOME_HISTORY&position=0&sid=%2CY2" },
    { Icon: Twitter, href: "https://twitter.com/webintegratorz" },
    { Icon: Facebook, href: "https://facebook.com/webintegratorz" },
    { Icon: Instagram, href: "https://www.instagram.com/webintegratorz_technologies/" },
    { Icon: Youtube, href: "https://youtube.com/@webintegratorz" },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-white/10">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#25ccad] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#25ccad] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* MAIN GRID */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div className="space-y-10">
            <div className="flex justify-start relative w-58 h-12">
              <Image
                src="/weblogo.webp"
                alt="Webintegratorz Logo"
                fill
                className="object-contain -ml-2 md:-ml-3"
              />
            </div>

            <p className="text-sm text-white/70 leading-relaxed">
              Transforming digital experiences through innovative web, mobile,
              SaaS, and AI-powered solutions.
            </p>

            {/* SOCIAL ICONS (Stable rendering) */}
            <div className="flex gap-3">
              {socialIcons.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="social-link"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-[#25ccad] hover:text-black transition-all duration-300"
                >
                  <item.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Services
              <span className="block w-10 h-1 bg-[#25ccad] mt-2 rounded-full" />
            </h3>
            <ul className="space-y-4">
              <li><a href="#" className="flex items-center text-white/90 hover:text-[#25ccad] transition underline underline-offset-4 decoration-white/20 hover:decoration-[#25ccad]"><ArrowRight className="w-4 h-4 mr-2" />Web Development</a></li>
              <li><a href="#" className="flex items-center text-white/90 hover:text-[#25ccad] transition underline underline-offset-4 decoration-white/20 hover:decoration-[#25ccad]"><ArrowRight className="w-4 h-4 mr-2" />Mobile Development</a></li>
              <li><a href="#" className="flex items-center text-white/90 hover:text-[#25ccad] transition underline underline-offset-4 decoration-white/20 hover:decoration-[#25ccad]"><ArrowRight className="w-4 h-4 mr-2" />CMS Solutions</a></li>
              <li><a href="#" className="flex items-center text-white/90 hover:text-[#25ccad] transition underline underline-offset-4 decoration-white/20 hover:decoration-[#25ccad]"><ArrowRight className="w-4 h-4 mr-2" />UI/UX Design</a></li>
              <li><a href="#" className="flex items-center text-white/90 hover:text-[#25ccad] transition underline underline-offset-4 decoration-white/20 hover:decoration-[#25ccad]"><ArrowRight className="w-4 h-4 mr-2" />Digital Marketing</a></li>
              <li><a href="#" className="flex items-center text-white/90 hover:text-[#25ccad] transition underline underline-offset-4 decoration-white/20 hover:decoration-[#25ccad]"><ArrowRight className="w-4 h-4 mr-2" />AI Integration</a></li>
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
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#25ccad] transition"
              >
                <Mail className="w-5 h-5 text-[#25ccad]" />
                <div>
                  <p className="text-xs text-white/50">Email</p>
                  <p className="text-sm text-white/80">info@webintegratorz.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-[#25ccad]" />
                <div>
                  <p className="text-xs text-white/50">Registration</p>
                  <p className="text-sm text-white/80">UDYAM-MP-30-0031514</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-[#25ccad]" />
                <div>
                  <p className="text-xs text-white/50">DUNS Number</p>
                  <p className="text-sm text-white/80">93-356-9189</p>
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
              <li><a href="/news" className="text-white/90 hover:text-[#25ccad] transition underline underline-offset-4 decoration-white/20 hover:decoration-[#25ccad]">News</a></li>
              <li><a href="/contact-us" className="text-white/90 hover:text-[#25ccad] transition underline underline-offset-4 decoration-white/20 hover:decoration-[#25ccad]">Contact Us</a></li>
              <li><a href="/about" className="text-white/90 hover:text-[#25ccad] transition underline underline-offset-4 decoration-white/20 hover:decoration-[#25ccad]">About</a></li>
              <li><a href="/privacy-policy" className="text-white/90 hover:text-[#25ccad] transition underline underline-offset-4 decoration-white/20 hover:decoration-[#25ccad]">Privacy Policy</a></li>
              <li><a href="/terms" className="text-white/90 hover:text-[#25ccad] transition underline underline-offset-4 decoration-white/20 hover:decoration-[#25ccad]">Terms & Conditions</a></li>
              <li><a href="/cookies" className="flex items-center text-white/90 hover:text-[#25ccad] transition underline underline-offset-4 decoration-white/20 hover:decoration-[#25ccad]"><Cookie className="w-4 h-4 mr-2 text-[#25ccad]" />Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm text-white/80">
              © {currentYear} <span className="text-[#25ccad] font-semibold">Webintegratorz</span>. All rights reserved.
            </p>
            <p className="text-[10px] text-white/60 max-w-[450px] text-center md:text-left leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. <a href="/cookies" className="text-[#25ccad] underline underline-offset-2 decoration-[#25ccad]/40 hover:decoration-[#25ccad] transition-all">Manage Preferences</a>
            </p>
          </div>

          <div className="flex gap-6 text-xs text-white/70">
            <a href="/privacy-policy" className="hover:text-[#25ccad] transition underline underline-offset-4 decoration-white/20 hover:decoration-[#25ccad]">Privacy</a>
            <a href="/cookies" className="hover:text-[#25ccad] transition underline underline-offset-4 decoration-white/20 hover:decoration-[#25ccad]">Cookies</a>
            <a href="/sitemap.xml" className="hover:text-[#25ccad] transition underline underline-offset-4 decoration-white/20 hover:decoration-[#25ccad]">Sitemap</a>
          </div>
        </div>
      </div>

      {/* SCROLL TO TOP BUTTON (Stable, unchanged color) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#25ccad] text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition z-50"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
