"use client";
import React from "react";
import OurServices from "@/components/OurServices";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ServicesOverviewPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" }
  ];

  return (
    <main className="min-h-screen pt-24 md:pt-32 bg-[#E9FAF6]">
      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <OurServices />
    </main>
  );
}
