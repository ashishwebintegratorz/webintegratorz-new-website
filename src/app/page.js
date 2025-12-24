import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurServices from "@/components/OurServices";
import Workflowcycle from "@/components/Workflowcycle";
import Featuredsection from "@/components/Featuredsection";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* OUR SERVICES */}
      <OurServices />

      {/* WORKFLOW CYCLE */}
      <Workflowcycle />  

      {/* FEATURED SECTION */}
      <Featuredsection />
    </>
  );
}
