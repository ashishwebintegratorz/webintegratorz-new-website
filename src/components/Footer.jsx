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
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowUp
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NoiseButton } from "./ui/noise-background";

const Footer = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { Icon: Linkedin, href: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A83544760&keywords=webintegratorz%20technologies&origin=ENTITY_SEARCH_HOME_HISTORY&position=0&sid=%2CY2", label: "LinkedIn" },
    { Icon: Twitter, href: "https://twitter.com/webintegratorz", label: "Twitter" },
    { Icon: Facebook, href: "https://facebook.com/webintegratorz", label: "Facebook" },
    { Icon: Instagram, href: "https://www.instagram.com/webintegratorz_technologies/", label: "Instagram" },
    { Icon: Youtube, href: "https://youtube.com/@webintegratorz", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Quick Consultation Banner */}
        <div className="py-12 sm:py-16 border-b border-gray-200 dark:border-gray-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-1">
              <Zap size={13} className="text-blue-600 dark:text-blue-400" /> High-Velocity Engineering Squads
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Ready to engineer your next digital breakthrough?
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl">
              Get in touch for a comprehensive technical consultation and tailored architecture estimate.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <NoiseButton
              onClick={() => router.push("/contact-us")}
              className="w-full sm:w-auto"
            >
              <span>Get Started — Hire Us</span>
              <ArrowRight size={16} className="text-blue-400" />
            </NoiseButton>
          </div>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* BRAND COLUMN */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" aria-label="Webintegratorz Technologies Home" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-xs group-hover:bg-blue-700 transition-colors">
                W
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white select-none">
                Webintegratorz<span className="text-blue-600 dark:text-blue-400">.</span>
              </span>
            </Link>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
              Webintegratorz Technologies is a premier global AI &amp; IT engineering firm delivering scalable cloud architectures, generative AI ecosystems, and bespoke digital software.
            </p>

            {/* Social Link Capsules */}
            <div className="flex gap-2.5 pt-2">
              {socialIcons.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white text-gray-600 dark:text-gray-400 transition-colors cursor-pointer"
                >
                  <item.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* SERVICES COLUMN */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-gray-900 dark:text-gray-100 uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/web-development" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 font-normal">
                  <ArrowRight size={12} className="text-blue-600 dark:text-blue-400" /> Web &amp; SaaS Platforms
                </Link>
              </li>
              <li>
                <Link href="/services/accessibility-compliance" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 font-normal">
                  <ArrowRight size={12} className="text-blue-600 dark:text-blue-400" /> WCAG &amp; ADA Code Remediation
                </Link>
              </li>
              <li>
                <Link href="/services/ai-integration/generative-ai-development" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 font-normal">
                  <ArrowRight size={12} className="text-blue-600 dark:text-blue-400" /> Generative AI &amp; LLMs
                </Link>
              </li>
              <li>
                <Link href="/services/ai-integration/agent-development" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 font-normal">
                  <ArrowRight size={12} className="text-blue-600 dark:text-blue-400" /> Autonomous AI Agents
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 font-normal">
                  <ArrowRight size={12} className="text-blue-600 dark:text-blue-400" /> Mobile &amp; Flutter Apps
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 font-normal">
                  <ArrowRight size={12} className="text-blue-600 dark:text-blue-400" /> UI/UX Design Systems
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 font-normal">
                  <ArrowRight size={12} className="text-blue-600 dark:text-blue-400" /> Technical SEO &amp; Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-gray-900 dark:text-gray-100 uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-normal">About Us</Link></li>
              <li><Link href="/awards" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-normal">Awards &amp; Recognition</Link></li>
              <li><Link href="/news" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-normal">Insights &amp; News</Link></li>
              <li><Link href="/#casestudies" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-normal">Case Studies</Link></li>
              <li><Link href="/contact-us" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-normal">Contact Careers</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-normal">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-normal">Terms of Service</Link></li>
            </ul>
          </div>

          {/* VERIFIED REGISTRATION & CONTACT */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-gray-900 dark:text-gray-100 uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#155dfc]" />
              Enterprise Verification
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:info@webintegratorz.com"
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[#030712] border border-white/[0.08] hover:border-[#50a2ff]/40 hover:shadow-lg transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
                <Mail className="w-4 h-4 text-[#50a2ff] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-[#50a2ff] font-semibold uppercase tracking-wider">Official Inquiries</p>
                  <p className="text-xs text-white font-medium">info@webintegratorz.com</p>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#030712] border border-white/[0.08] group relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#50a2ff] to-transparent opacity-70" />
                <ShieldCheck className="w-4 h-4 text-[#50a2ff] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-[#50a2ff] font-semibold uppercase tracking-wider">Govt. Registration</p>
                  <p className="text-xs text-white font-medium">UDYAM-MP-30-0031514</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#030712] border border-white/[0.08] group relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />
                <ShieldCheck className="w-4 h-4 text-[#50a2ff] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-[#50a2ff] font-semibold uppercase tracking-wider">Security &amp; Privacy</p>
                  <p className="text-xs text-white font-medium">SOC 2 &amp; GDPR Compliant</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400 font-normal">
          <p>© {currentYear} Webintegratorz Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy</Link>
            <Link href="/cookies" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cookie Policy</Link>
            <Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-11 h-11 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all z-40 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
