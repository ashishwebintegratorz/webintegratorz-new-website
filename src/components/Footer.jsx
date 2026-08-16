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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { Icon: Linkedin, href: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A83544760&keywords=webintegratorz%20technologies&origin=ENTITY_SEARCH_HOME_HISTORY&position=0&sid=%2CY2", label: "LinkedIn" },
    { Icon: Twitter, href: "https://twitter.com/webintegratorz", label: "Twitter" },
    { Icon: Facebook, href: "https://facebook.com/webintegratorz", label: "Facebook" },
    { Icon: Instagram, href: "https://www.instagram.com/webintegratorz_technologies/", label: "Instagram" },
    { Icon: Youtube, href: "https://youtube.com/@webintegratorz", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-[#030712] text-white overflow-hidden border-t border-white/[0.08]">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter / Quick Consultation Banner */}
        <div className="py-12 sm:py-16 border-b border-white/[0.08] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00f5a0] text-xs font-bold uppercase tracking-widest mb-1">
              <Zap size={13} /> Accelerate Your Roadmap
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Ready to engineer your next digital breakthrough?
            </h3>
            <p className="text-sm text-slate-200 max-w-xl font-normal">
              Get in touch for a comprehensive technical consultation and tailored architecture estimate.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] hover:opacity-95 text-black font-black text-sm rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(0,245,160,0.4)] flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
            >
              <span>Schedule Free Tech Session</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* BRAND COLUMN */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative w-52 h-12">
              <Image
                src="/weblogo.webp"
                alt="Webintegratorz Logo"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-sm text-slate-200 leading-relaxed max-w-sm font-normal">
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
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#090d16] border border-white/15 hover:bg-[#00f5a0] hover:text-black hover:border-transparent text-white transition-all duration-300"
                >
                  <item.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* SERVICES COLUMN */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-black tracking-wider text-white uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00f5a0]" />
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/web-development" className="text-slate-200 hover:text-[#00f5a0] transition-colors flex items-center gap-2 font-medium">
                  <ArrowRight size={12} className="text-[#00f5a0]" /> Web &amp; SaaS Platforms
                </Link>
              </li>
              <li>
                <Link href="/services/accessibility-compliance" className="text-slate-200 hover:text-[#00f5a0] transition-colors flex items-center gap-2 font-medium">
                  <ArrowRight size={12} className="text-[#00f5a0]" /> WCAG &amp; ADA Code Remediation
                </Link>
              </li>
              <li>
                <Link href="/services/ai-integration/generative-ai-development" className="text-slate-200 hover:text-[#00f5a0] transition-colors flex items-center gap-2 font-medium">
                  <ArrowRight size={12} className="text-[#00f5a0]" /> Generative AI &amp; LLMs
                </Link>
              </li>
              <li>
                <Link href="/services/ai-integration/agent-development" className="text-slate-200 hover:text-[#00f5a0] transition-colors flex items-center gap-2 font-medium">
                  <ArrowRight size={12} className="text-[#00f5a0]" /> Autonomous AI Agents
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="text-slate-200 hover:text-[#00f5a0] transition-colors flex items-center gap-2 font-medium">
                  <ArrowRight size={12} className="text-[#00f5a0]" /> Mobile &amp; Flutter Apps
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux" className="text-slate-200 hover:text-[#00f5a0] transition-colors flex items-center gap-2 font-medium">
                  <ArrowRight size={12} className="text-[#00f5a0]" /> UI/UX Design Systems
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-slate-200 hover:text-[#00f5a0] transition-colors flex items-center gap-2 font-medium">
                  <ArrowRight size={12} className="text-[#00f5a0]" /> Technical SEO &amp; Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-black tracking-wider text-white uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00f5a0]" />
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-slate-200 hover:text-[#00f5a0] transition-colors font-medium">About Us</Link></li>
              <li><Link href="/awards" className="text-slate-200 hover:text-[#00f5a0] transition-colors font-medium">Awards &amp; Recognition</Link></li>
              <li><Link href="/news" className="text-slate-200 hover:text-[#00f5a0] transition-colors font-medium">Insights &amp; News</Link></li>
              <li><Link href="/#casestudies" className="text-slate-200 hover:text-[#00f5a0] transition-colors font-medium">Case Studies</Link></li>
              <li><Link href="/contact-us" className="text-slate-200 hover:text-[#00f5a0] transition-colors font-medium">Contact Careers</Link></li>
              <li><Link href="/privacy-policy" className="text-slate-200 hover:text-[#00f5a0] transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-200 hover:text-[#00f5a0] transition-colors font-medium">Terms of Service</Link></li>
            </ul>
          </div>

          {/* VERIFIED REGISTRATION & CONTACT */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-black tracking-wider text-white uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00f5a0]" />
              Enterprise Verification
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:info@webintegratorz.com"
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#090d16] border border-white/10 hover:border-emerald-500/50 transition-all"
              >
                <Mail className="w-4 h-4 text-[#00f5a0] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-[#00f5a0] font-black uppercase">Official Inquiries</p>
                  <p className="text-xs text-white font-bold">info@webintegratorz.com</p>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#090d16] border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#00f5a0] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-[#00f5a0] font-black uppercase">Govt. Registration</p>
                  <p className="text-xs text-white font-bold">UDYAM-MP-30-0031514</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#090d16] border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#00f5a0] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-[#00f5a0] font-black uppercase">Security &amp; Privacy</p>
                  <p className="text-xs text-white font-bold">SOC 2 &amp; GDPR Compliant</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-200 font-medium">
          <p>© {currentYear} Webintegratorz Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#00f5a0] transition-colors">Privacy</Link>
            <Link href="/cookies" className="hover:text-[#00f5a0] transition-colors">Cookie Policy</Link>
            <Link href="/terms" className="hover:text-[#00f5a0] transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-[#00f5a0] transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-11 h-11 bg-[#00f5a0] text-black rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,245,160,0.4)] hover:scale-110 active:scale-95 transition-all z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
