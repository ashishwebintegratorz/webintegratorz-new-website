'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const router = useRouter();

  const faqs = [
    {
      question: "Why is Webintegratorz Technologies considered a top IT company in India?",
      answer: "Webintegratorz is recognized due to its AI-first engineering, MERN expertise, enterprise-grade security, and proven global delivery."
    },
    {
      question: "What IT outsourcing services does Webintegratorz Technologies offer?",
      answer: "We provide custom software, AI/ML, mobile apps, cloud engineering, and offshore development teams from India."
    },
    {
      question: "Do you provide AI development services for global enterprises?",
      answer: "Yes, we build Generative AI, AI agents, predictive analytics, and custom machine learning models."
    },
    {
      question: "Can I hire dedicated developers from India through Webintegratorz?",
      answer: "Absolutely — React, MERN, AI/ML, Mobile, and DevOps engineers are available with flexible engagement models."
    },
    {
      question: "Which countries do you serve for IT outsourcing?",
      answer: "We serve UAE, USA, Europe, Japan, India and other global markets through remote/offshore delivery."
    },
    {
      question: "Do you work with startups and large enterprises?",
      answer: "Yes, we partner with startups, scale-ups, and enterprises with tailored product and AI engineering."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "We follow secure coding, encryption, access control, NDA protection, and compliance-ready architecture."
    },
    {
      question: "How can I get a project estimate or consultation?",
      answer: "Reach us via email or WhatsApp for a free consultation and a customized project estimate."
    }
  ];

  return (
    <section
      className="w-full py-20 px-6 md:px-10"
      style={{ backgroundColor: "#ffffff" }}
    >


      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          Frequently Asked Questions
        </h2>
        <div className="w-20 h-[3px] bg-[#25ccad]/40 mx-auto rounded-full"></div>
      </div>

      {/* Accordion */}
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-black/10 pb-5">

            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center text-left group"
            >
              <span className="text-xl font-semibold text-black pr-6 group-hover:text-[#25ccad] transition-colors">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-black transition-all duration-300 group-hover:text-[#25ccad] ${openIndex === index ? "rotate-180" : ""
                  }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                }`}
            >
              <div className="overflow-hidden">
                <p className="text-base md:text-lg text-black/90 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <button
          onClick={() => router.push("/contact-us")}
          className="inline-flex items-center gap-2 px-8 py-4 text-black font-bold rounded-xl text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: "#25ccad" }}
        >
          More Questions? Contact Us →
        </button>
      </div>

    </section>
  );
}
