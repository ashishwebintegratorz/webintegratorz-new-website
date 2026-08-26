"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Focusareassection from "@/components/Focusareassection";
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";

const Casestudies = dynamic(() => import("@/components/Casestudies"), {
  ssr: true,
});
const Workflowcycle = dynamic(() => import("@/components/Workflowcycle"), {
  ssr: true,
});
const Faq = dynamic(() => import("@/components/Faq"), {
  ssr: true,
});

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is Webintegratorz Technologies considered a top IT and Mobile App development company in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Webintegratorz Technologies is recognized as a top IT company in India due to its AI-first engineering approach, production-grade iOS and Android mobile app development (React Native & Flutter), MERN stack expertise, enterprise-grade security, and proven delivery for 100+ global clients across USA, UAE, Europe, Japan, and India."
        }
      },
      {
        "@type": "Question",
        "name": "What mobile app development services do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build end-to-end custom mobile applications including native iOS (Swift), native Android (Kotlin), and cross-platform apps using React Native and Flutter. Our mobile solutions include eCommerce apps, enterprise ERP mobile suites, FinTech applications, and AI-powered mobile experiences."
        }
      },
      {
        "@type": "Question",
        "name": "What IT outsourcing and dedicated engineering services does Webintegratorz offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Webintegratorz Technologies offers end-to-end IT outsourcing including custom SaaS engineering, Generative AI integration, MERN stack web applications, native and cross-platform mobile apps, cloud infrastructure on AWS, and dedicated offshore development teams in India."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide AI development and LLM integration for global businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Webintegratorz provides enterprise-grade AI development including Generative AI solutions, ChatGPT & Claude API integration, autonomous AI agent networks, private vector search RAG systems, and custom predictive ML pipelines."
        }
      },
      {
        "@type": "Question",
        "name": "Can I hire dedicated mobile app and full stack developers from Webintegratorz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Businesses can hire vetted senior developers from India across React Native, Flutter, Next.js, Node.js, Python AI/ML specialists, and cloud architects with 100% IP ownership, flexible time-zone overlap, and rapid 48-hour onboarding."
        }
      },
      {
        "@type": "Question",
        "name": "Which countries do you serve for software development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Webintegratorz Technologies serves clients globally across the United States, United Arab Emirates (Dubai/Abu Dhabi), United Kingdom, Europe, Japan, and India through our 100% remote-first delivery model."
        }
      },
      {
        "@type": "Question",
        "name": "How does Webintegratorz ensure enterprise data security and compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We adhere to enterprise-grade security protocols including strict non-disclosure agreements (NDAs), encrypted CI/CD pipelines, private data isolation with zero third-party model leaks, and compliance-ready architectures (HIPAA, GDPR, SOC 2 alignment)."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can I get a project architecture roadmap and estimate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can schedule a direct technical discovery call or message our lead architects via WhatsApp or contact form to receive a detailed technical scope, architectural diagram, and delivery timeline within 24 hours."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <div className="render-optimize">
        <Focusareassection />
      </div>
      <div className="render-optimize">
        <OurServices />
      </div>
      <div className="render-optimize">
        <WhyChooseUs />
      </div>
      <div className="render-optimize">
        <Casestudies />
      </div>
      <div className="render-optimize">
        <Workflowcycle />
      </div>
      <div className="render-optimize">
        <Faq />
      </div>
    </>
  );
}
