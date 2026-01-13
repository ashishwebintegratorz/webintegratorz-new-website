"use client";
import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ items }) {
    if (!items || items.length === 0) return null;

    return (
        <nav className="flex items-center gap-2 text-xs md:text-sm font-medium text-white/40 mb-8 overflow-x-auto whitespace-nowrap pb-2 md:pb-0 scrollbar-hide">
            <Link
                href="/"
                className="flex items-center gap-1.5 hover:text-[#25ccad] transition-colors shrink-0"
            >
                <Home size={14} />
                <span>Home</span>
            </Link>

            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <ChevronRight size={14} className="shrink-0 opacity-40" />
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="hover:text-[#25ccad] transition-colors shrink-0"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-white/80 shrink-0">{item.label}</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
}
