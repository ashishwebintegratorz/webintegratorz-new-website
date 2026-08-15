"use client";
import React from "react";
import OurServices from "@/components/OurServices";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ServicesOverviewPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" }
  ];

  return (
    <main className="min-h-screen pt-24 md:pt-32 bg-[#030712] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <h1 className="sr-only">Our IT &amp; AI Services Overview</h1>
      <OurServices />
    </main>
  );
}
