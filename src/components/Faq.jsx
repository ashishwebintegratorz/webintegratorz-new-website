'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
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
    <section id="faq" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] overflow-hidden border-t border-slate-200/80 content-auto">
      <div className="relative max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-4"
          >
            <HelpCircle size={13} className="text-[#635BFF]" />
            <span className="text-[#635BFF] text-xs font-bold uppercase tracking-wider">
              Knowledge Base
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight leading-tight"
          >
            Frequently Asked <span className="text-[#635BFF]">Questions</span>
          </motion.h2>

          <p className="mt-3 text-base text-[#475569] max-w-xl font-normal">
            Everything you need to know about our engineering standards, engagement models, and AI delivery capabilities.
          </p>
        </div>

        {/* Accordion Cards - Stripe Clean Cards */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                className={`rounded-xl bg-white border transition-all duration-200 shadow-sm ${
                  isOpen ? "border-indigo-200 shadow-md" : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="p-5 sm:p-6">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? "text-[#0A2540]" : "text-slate-800 hover:text-[#0A2540]"
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-indigo-50 text-[#635BFF] rotate-180" : "bg-slate-100 text-slate-500"
                    }`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3.5 pt-3.5 border-t border-slate-100 text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
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

        {/* Bottom Help Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div>
            <p className="text-sm font-bold text-[#0A2540]">Still have questions?</p>
            <p className="text-xs text-slate-500">Our senior engineering architects are available for technical scoping.</p>
          </div>
          <button
            type="button"
            onClick={() => router.push("/contact-us")}
            className="px-5 py-2.5 rounded-xl bg-[#0A2540] hover:bg-[#635BFF] text-white text-xs font-bold flex items-center gap-1.5 transition-all duration-200 cursor-pointer shrink-0 shadow-sm"
          >
            <span>Ask an Architect</span>
            <ArrowRight size={13} />
          </button>
        </div>

      </div>
    </section>
  );
}
