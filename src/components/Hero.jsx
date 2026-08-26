"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Globe2,
  Award,
  Lock,
  Cpu
} from "lucide-react";
import { NoiseButton } from "./ui/noise-background";

export default function HeroSection({ mobileOpen }) {
  const router = useRouter();

  return (
    <section
      className="hero relative w-full bg-transparent text-gray-900 dark:text-white pt-32 sm:pt-36 md:pt-40 pb-16 px-4 text-center overflow-hidden transition-colors duration-200"
      style={{ display: mobileOpen ? "none" : "block" }}
    >
      <div className="mx-auto max-w-4xl">
        {/* Top Badges */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#030712] border border-[#155dfc]/30 px-4 py-1.5 text-sm font-medium text-white shadow-2xs">
            <Star className="h-4 w-4 fill-[#50a2ff] text-[#50a2ff]" />
            <span>4.9 from 100+ Enterprise Clients</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#030712] border border-[#50a2ff]/30 px-4 py-1.5 text-sm font-medium text-[#50a2ff] shadow-2xs">
            <Globe2 className="h-4 w-4 text-[#50a2ff]" />
            <span>100% Fully Remote Company</span>
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
          Engineering Intelligent Software<br />
          <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">Enterprise AI &amp; Digital Products</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl leading-relaxed">
          A 100% remote-first digital engineering squad. We build high-performance web platforms, cross-platform mobile applications, and custom Generative AI ecosystems for high-growth enterprises globally.
        </p>

        {/* Action Buttons with Noise Background */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <NoiseButton
            onClick={() => router.push("/contact-us")}
            className="w-full sm:w-auto text-base font-semibold"
          >
            <span>Hire Us — Start Your Project</span>
            <ArrowRight className="w-4 h-4 text-[#50a2ff]" />
          </NoiseButton>

          <button
            type="button"
            onClick={() => router.push("/services")}
            className="w-full sm:w-auto rounded-full border border-white/[0.12] bg-[#030712] px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-[#50a2ff]/50 hover:text-[#50a2ff] cursor-pointer shadow-md"
          >
            Explore Services
          </button>
        </div>

        {/* Social Proof Text Ribbon */}
        <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span>100+ Apps &amp; Systems Delivered</span>
          <span className="h-4 w-px bg-white/[0.12]" />
          <span>48-Hour Rapid Onboarding</span>
          <span className="h-4 w-px bg-white/[0.12] hidden sm:inline" />
          <span className="hidden sm:inline">2-Week Zero-Risk Trial</span>
        </div>
      </div>

      {/* Trust Ribbon Bar */}
      <div className="mt-16 border-t border-b border-white/[0.08] bg-[#030712]/80 backdrop-blur-md px-4 py-6">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 lg:grid-cols-4">
          <div className="flex items-center justify-center gap-2.5 text-gray-300 text-sm font-medium">
            <span className="text-[#50a2ff]">
              <Award className="h-5 w-5" />
            </span>
            <span>Top-Rated Global Agency</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 text-gray-300 text-sm font-medium">
            <span className="text-[#50a2ff]">
              <Globe2 className="h-5 w-5" />
            </span>
            <span>100% Fully Remote Squads</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 text-gray-300 text-sm font-medium">
            <span className="text-[#50a2ff]">
              <Lock className="h-5 w-5" />
            </span>
            <span>Bank-Grade SOC-2 Security</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 text-gray-300 text-sm font-medium">
            <span className="text-[#50a2ff]">
              <Cpu className="h-5 w-5" />
            </span>
            <span>Next.js, AI &amp; Cloud Native</span>
          </div>
        </div>
      </div>
    </section>
  );
}