"use client";
import dynamic from "next/dynamic";
import Focusareassection from "@/components/Focusareassection";
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Casestudies from "@/components/Casestudies";
import Workflowcycle from "@/components/Workflowcycle";
import Featuredsection from "@/components/Featuredsection";
import Ourpresence from "@/components/Ourpresence";
import Faq from "@/components/Faq";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });

export default function Home() {
  return (
    <>
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
