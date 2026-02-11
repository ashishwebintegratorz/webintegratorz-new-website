"use client";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Focusareassection from "@/components/Focusareassection";
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";
const Casestudies = dynamic(() => import("@/components/Casestudies"));
const Workflowcycle = dynamic(() => import("@/components/Workflowcycle"));
const Featuredsection = dynamic(() => import("@/components/Featuredsection"));
const Ourpresence = dynamic(() => import("@/components/Ourpresence"));
const Faq = dynamic(() => import("@/components/Faq"));

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is Webintegratorz Technologies considered a top IT company in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Webintegratorz Technologies is recognized as a top IT company in India due to its AI-first engineering approach, expertise in MERN stack development, enterprise-grade security standards, and proven delivery for global clients across UAE, USA, Europe, Japan, and India."
        }
      },
      {
        "@type": "Question",
        "name": "What IT outsourcing services does Webintegratorz Technologies offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Webintegratorz Technologies offers end-to-end IT outsourcing services including custom software development, AI and machine learning solutions, MERN stack development, mobile app development, cloud engineering, and dedicated offshore development teams in India."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide AI development services for global enterprises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Webintegratorz Technologies provides enterprise-grade AI development services including Generative AI solutions, ChatGPT integration, AI agents, predictive analytics, and custom machine learning models for businesses worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "Can I hire dedicated developers from India through Webintegratorz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Webintegratorz Technologies allows businesses to hire dedicated developers in India including React developers, MERN stack engineers, AI/ML specialists, mobile app developers, and DevOps engineers with flexible engagement models."
        }
      },
      {
        "@type": "Question",
        "name": "Which countries do you serve for software development and IT outsourcing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Webintegratorz Technologies serves clients globally including UAE, United States, Europe, Japan, India, and other international markets through its offshore and remote delivery model."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does Webintegratorz Technologies specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Webintegratorz Technologies specializes in MERN stack, React.js, Next.js, Node.js, Flutter, AI and Generative AI, machine learning, cloud-native architectures, and enterprise software development."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with startups as well as large enterprises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Webintegratorz Technologies partners with early-stage startups, funded scale-ups, and large enterprises, providing tailored product engineering and AI solutions based on business stage and growth goals."
        }
      },
      {
        "@type": "Question",
        "name": "How does Webintegratorz ensure data security and compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We follow enterprise-grade security practices including secure coding standards, data encryption, access control, NDA protection, and compliance-ready architectures suitable for global business environments."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get a project estimate or consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Webintegratorz Technologies via email or WhatsApp to request a free consultation, discuss project requirements, and receive a customized project estimate from our technical experts."
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
      <Focusareassection />
      <OurServices />
      <WhyChooseUs />
      <Casestudies />
      <Workflowcycle />
      <Featuredsection />
      <Ourpresence />
      <Faq />
    </>
  );
}
