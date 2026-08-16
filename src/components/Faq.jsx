'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, HelpCircle, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const router = useRouter();

  const faqs = [
    {
      question: "Why is Webintegratorz Technologies considered a top AI & IT company?",
      answer: "Webintegratorz Technologies is recognized for its AI-first engineering methodology, deep full-stack MERN & cloud expertise, strict enterprise security compliance, and a proven track record delivering scalable solutions for global clients across the USA, UAE, Europe, Japan, and India."
    },
    {
      question: "What core IT outsourcing & digital engineering services do you provide?",
      answer: "We offer end-to-end digital engineering including custom full-stack web platforms, Generative AI & autonomous agent development, multi-platform mobile apps (Flutter/React Native), SaaS cloud infrastructure, and dedicated offshore engineering squads."
    },
    {
      question: "How do you deliver enterprise Generative AI and custom LLM solutions?",
      answer: "We design tailored AI architectures including custom LLM fine-tuning, retrieval-augmented generation (RAG) pipelines, proprietary vector databases, multi-agent automated workflows, and enterprise ChatGPT/Claude integrations with private data isolation."
    },
    {
      question: "Can we hire dedicated developers and agile squads from Webintegratorz?",
      answer: "Yes. You can hire dedicated full-stack engineers, React/Next.js developers, Python/AI specialists, mobile developers, and DevOps architects. We offer flexible engagement models: full squad pods, staff augmentation, or fixed milestone deliverables."
    },
    {
      question: "Which global markets and timezones do you support?",
      answer: "We actively serve clients across the United States, United Arab Emirates (GCC), United Kingdom, Germany, Japan, and India. Our engineers maintain substantial timezone overlap to ensure seamless real-time agile communication and daily standups."
    },
    {
      question: "How do you protect our Intellectual Property (IP) and data security?",
      answer: "We enforce bank-grade security protocols: 100% IP ownership transfer upon delivery, comprehensive non-disclosure agreements (NDAs), encrypted git repositories, OWASP secure coding compliance, and strict role-based access control."
    },
    {
      question: "What is the typical timeline and process to kick off a project?",
      answer: "Following an initial discovery consultation, we provide an architectural brief and milestone estimate within 48-72 hours. We can initiate Phase 01 sprint discovery and squad onboarding in as fast as 7 to 10 business days."
    },
    {
      question: "How can I schedule a consultation or get a project estimate?",
      answer: "You can book a free architecture session via our contact page or email us at info@webintegratorz.com. Our lead solutions architect will review your technical requirements and provide an actionable scope estimate."
    }
  ];

  return (
    <section id="faq" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#030712] overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 font-bold"
          >
            <HelpCircle size={14} className="text-[#00f5a0]" />
            <span className="text-[#00f5a0] text-xs font-bold uppercase tracking-[0.25em]">
              Knowledge Base
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Frequently Asked <span className="text-gradient-emerald">Questions</span>
          </motion.h2>

          <p className="mt-4 text-base text-slate-300 max-w-xl font-normal">
            Everything you need to know about our engineering standards, engagement models, and AI delivery capabilities.
          </p>
        </div>

        {/* Accordion Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`rounded-2xl p-px transition-all duration-300 ${
                  isOpen ? "bg-gradient-to-r from-emerald-500/40 via-cyan-500/30 to-transparent" : "bg-white/[0.06] hover:bg-white/[0.12]"
                }`}
              >
                <div className="rounded-2xl bg-[#090d16]/95 backdrop-blur-xl p-5 sm:p-6 overflow-hidden">
                  <button
                    type="button"
                    id={`faq-btn-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center text-left gap-4 group focus:outline-none"
                  >
                    <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? "text-[#00f5a0]" : "text-white group-hover:text-slate-200"}`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "bg-emerald-500/20 text-[#00f5a0] rotate-180" : "bg-white/[0.04] text-slate-400"}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-btn-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-4 mt-3 border-t border-white/[0.06] font-normal">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Contact Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-emerald-950/30 via-[#090d16] to-cyan-950/30 border border-emerald-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-left">
            <h3 className="text-lg font-bold text-white">Have a specific architectural query?</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Talk directly with our technical solutions team.</p>
          </div>

          <button
            onClick={() => router.push("/contact-us")}
            className="px-6 py-3 bg-[#00f5a0] hover:bg-[#00d9f5] text-black font-bold text-sm rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,245,160,0.3)] flex items-center gap-2 shrink-0 hover:scale-105"
          >
            <span>Ask Us Anything</span>
            <ArrowRight size={14} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
