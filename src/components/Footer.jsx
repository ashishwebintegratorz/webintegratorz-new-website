"use client";
import React from "react";
import {
  Mail,
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  ShieldCheck,
  Zap,
  ArrowUp
} from "lucide-react";
import Link from "next/link";
import WiLogo from "./WiLogo";

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
    <footer className="relative bg-white text-slate-900 overflow-hidden border-t border-slate-200">
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Consultation Strip - Stripe Deep Navy Card */}
        <div className="my-12 p-8 sm:p-12 rounded-2xl bg-[#0A2540] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#00D4FF] text-xs font-bold uppercase tracking-wider mb-1">
              <Zap size={12} /> Enterprise Engineering
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Ready to engineer your next digital breakthrough?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal">
              Schedule a comprehensive technical architecture consultation and get an actionable milestone estimate.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto px-7 py-4 bg-[#635BFF] hover:bg-[#5349e0] text-white font-bold text-sm rounded-xl transition-all duration-200 shadow-sm flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>Schedule Architecture Session</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* BRAND COLUMN */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" aria-label="Webintegratorz Home" className="inline-block group">
              <WiLogo size="lg" variant="light" />
            </Link>

            <p className="text-sm text-[#475569] leading-relaxed max-w-sm font-normal">
              Webintegratorz Technologies is a premier global AI &amp; IT engineering firm delivering scalable cloud architectures, generative AI ecosystems, and bespoke digital software.
            </p>

            {/* Social Link Capsules */}
            <div className="flex gap-2 pt-2">
              {socialIcons.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 border border-slate-200 text-slate-600 hover:text-[#635BFF] hover:bg-slate-200 transition-all duration-200"
                >
                  <item.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* SERVICES COLUMN */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold tracking-wider text-[#0A2540] uppercase">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/web-development" className="text-[#475569] hover:text-[#635BFF] transition-colors font-medium">
                  Web &amp; SaaS Platforms
                </Link>
              </li>
              <li>
                <Link href="/services/accessibility-compliance" className="text-[#475569] hover:text-[#635BFF] transition-colors font-medium">
                  WCAG &amp; ADA Remediation
                </Link>
              </li>
              <li>
                <Link href="/services/ai-integration/generative-ai-development" className="text-[#475569] hover:text-[#635BFF] transition-colors font-medium">
                  Generative AI &amp; LLMs
                </Link>
              </li>
              <li>
                <Link href="/services/ai-integration/agent-development" className="text-[#475569] hover:text-[#635BFF] transition-colors font-medium">
                  Autonomous AI Agents
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="text-[#475569] hover:text-[#635BFF] transition-colors font-medium">
                  Mobile &amp; Flutter Apps
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux" className="text-[#475569] hover:text-[#635BFF] transition-colors font-medium">
                  UI/UX Design Systems
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-[#475569] hover:text-[#635BFF] transition-colors font-medium">
                  Technical SEO &amp; Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold tracking-wider text-[#0A2540] uppercase">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-[#475569] hover:text-[#635BFF] transition-colors font-medium">About Us</Link></li>
              <li><Link href="/awards" className="text-[#475569] hover:text-[#635BFF] transition-colors font-medium">Awards &amp; Recognition</Link></li>
              <li><Link href="/news" className="text-[#475569] hover:text-[#635BFF] transition-colors font-medium">Insights &amp; News</Link></li>
              <li><Link href="/#casestudies" className="text-[#475569] hover:text-[#635BFF] transition-colors font-medium">Case Studies</Link></li>
              <li><Link href="/contact-us" className="text-[#475569] hover:text-[#635BFF] transition-colors font-medium">Contact Careers</Link></li>
              <li><Link href="/privacy-policy" className="text-[#475569] hover:text-[#635BFF] transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-[#475569] hover:text-[#635BFF] transition-colors font-medium">Terms of Service</Link></li>
            </ul>
          </div>

          {/* VERIFIED REGISTRATION & CONTACT */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold tracking-wider text-[#0A2540] uppercase">
              Enterprise Verification
            </h4>
            <div className="space-y-2.5">
              <a
                href="mailto:info@webintegratorz.com"
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all"
              >
                <Mail className="w-4 h-4 text-[#635BFF] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Official Inquiries</p>
                  <p className="text-xs text-[#0A2540] font-bold">info@webintegratorz.com</p>
                </div>
              </a>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <ShieldCheck className="w-4 h-4 text-[#635BFF] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Govt. Registration</p>
                  <p className="text-xs text-[#0A2540] font-bold">UDYAM-MP-30-0031514</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <ShieldCheck className="w-4 h-4 text-[#635BFF] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Security &amp; Privacy</p>
                  <p className="text-xs text-[#0A2540] font-bold">SOC 2 &amp; GDPR Ready</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-200 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© {currentYear} Webintegratorz Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#0A2540] transition-colors">Privacy</Link>
            <Link href="/cookies" className="hover:text-[#0A2540] transition-colors">Cookie Policy</Link>
            <Link href="/terms" className="hover:text-[#0A2540] transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-[#0A2540] transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-10 h-10 bg-[#0A2540] text-white rounded-xl flex items-center justify-center shadow-md hover:bg-[#635BFF] transition-all z-40 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
};

export default Footer;
