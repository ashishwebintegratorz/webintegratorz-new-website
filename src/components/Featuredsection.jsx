'use client';

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function FeaturedSection() {
  const router = useRouter();

  const mediaLogos = [
    { name: "Forbes", link: "/about", img: "/images/fresh.png" },
    { name: "Fortune", link: "/about", img:"/images/fresh.png" },
    { name: "TechCrunch", link: "/about", img:"/images/fresh.png" },
    { name: "Yahoo", link: "/about", img: "/images/fresh.png" },
    { name: "AOL", link: "/about", img: "/images/fresh.png" },
    { name: "ANI India", link: "/about", img:"/images/fresh.png" },
    { name: "YourStory", link: "/about", img: "/images/fresh.png" },
  ];

  return (
    <section className="w-full bg-white py-14">

      {/* Section Title */}
      <div className="text-center mb-10">
        <div className="text-sm font-semibold text-[#25ccad] uppercase tracking-widest mb-3">
          — Featured On —
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
          Media & Recognition
        </h2>
        <div className="w-16 h-[3px] bg-[#25ccad]/60 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Logo Row */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {mediaLogos.map((logo, i) => (
          <div
            key={i}
            onClick={() => logo.link && router.push(logo.link)}
            className="flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
            style={{ width: "160px", height: "70px" }} // Larger placeholder
          >
            {logo.img ? (
              <Image
                src={logo.img}
                alt={logo.name}
                width={160}
                height={70}
                sizes="(max-width: 768px) 140px, 160px"
                priority
                className="object-contain"
              />
            ) : (
              <span className="text-[#25ccad]/35 font-bold text-xs uppercase tracking-wide">
                Logo Here
              </span>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
