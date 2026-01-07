
"use client";
import dynamic from "next/dynamic";
import FocusAreasSection from "@/components/Focusareassection"; 
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Casestudies from "@/components/Casestudies";
import Workflowcycle from "@/components/Workflowcycle";
import Featuredsection from "@/components/Featuredsection";
import FAQSection from "@/components/Faq";
// Load Hero as client-only to avoid hydration mismatch
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />
      <FocusAreasSection />
      <OurServices />
      <WhyChooseUs />
      <Casestudies />
      <Workflowcycle />
      <Featuredsection />
      <FAQSection />
    </>
  );
}
