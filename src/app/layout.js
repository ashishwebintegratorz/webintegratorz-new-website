import "./globals.css";
import { Inter } from "next/font/google";
import ClientLayoutWrapper from "../components/ClientLayoutWrapper";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    preload: true,
});

export const viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#030712",
};

export const metadata = {
    metadataBase: new URL("https://www.webintegratorz.com"),
    title: "Webintegratorz Technologies | Top IT Company in India | AI, Mobile & Web App Development",
    description: "Webintegratorz Technologies is a premier global software engineering & AI development company. We deliver scalable mobile apps (iOS & Android), AI/LLM integration, MERN stack SaaS, and enterprise web solutions.",
    keywords: [
        "Top IT Company in India",
        "Mobile App Development Company India",
        "Custom Mobile Application Development Services",
        "iOS and Android App Development Company",
        "React Native and Flutter Developers India",
        "AI Development Company India",
        "Enterprise AI Solutions",
        "Generative AI Development Services",
        "MERN Stack Development Company",
        "Software Development Company India",
        "AI Software Development Services",
        "Full Stack Development Company",
        "Hire Dedicated Developers India",
        "Offshore Development Center India",
        "Custom Software Development India",
        "UI UX Design Agency India"
    ],
    authors: [{ name: "Webintegratorz Technologies", url: "https://webintegratorz.com" }],
    creator: "Webintegratorz Technologies",
    publisher: "Webintegratorz Technologies",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://webintegratorz.com",
    },
    openGraph: {
        title: "Top IT Company in India | AI, Mobile & Web App Development | Webintegratorz",
        description: "Webintegratorz Technologies is a leading software engineering & AI development company delivering mission-critical mobile apps, Generative AI, and custom enterprise web platforms.",
        url: "https://webintegratorz.com",
        siteName: "Webintegratorz Technologies",
        images: [
            {
                url: "https://webintegratorz.com/webint.webp",
                width: 1200,
                height: 630,
                alt: "Webintegratorz Technologies - Premier Software & AI Engineering",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Top IT Company in India | AI, Mobile & Web App Development | Webintegratorz",
        description: "Webintegratorz Technologies is a leading IT & AI software engineering company delivering enterprise mobile apps, AI solutions, and web platforms.",
        images: ["https://webintegratorz.com/webint.webp"],
        creator: "@webintegratorz",
    },
    other: {
        "geo.region": "IN-MP",
        "geo.placename": "Indore",
        "geo.position": "22.7196;75.8577",
        "ICBM": "22.7196, 75.8577",
    }
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Webintegratorz Technologies",
    "url": "https://webintegratorz.com",
    "logo": "https://webintegratorz.com/weblogo.webp",
    "description": "Webintegratorz Technologies is a premier IT software engineering company in India specializing in Mobile App Development, Generative AI, MERN stack, and enterprise web solutions for global businesses.",
    "foundingDate": "2020",
    "areaServed": ["India", "United States", "United Arab Emirates", "United Kingdom", "Europe", "Japan", "Global"],
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Support & Architecture Consulting",
        "telephone": "+918989944488",
        "email": "contact@webintegratorz.com",
        "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
        "https://www.linkedin.com/company/webintegratorz",
        "https://twitter.com/webintegratorz",
        "https://facebook.com/webintegratorz",
        "https://www.instagram.com/webintegratorz_technologies/",
        "https://youtube.com/@webintegratorz"
    ]
};

const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Webintegratorz Technologies",
    "image": "https://webintegratorz.com/webint.webp",
    "url": "https://webintegratorz.com",
    "telephone": "+918989944488",
    "priceRange": "$$$",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Indore",
        "addressRegion": "Madhya Pradesh",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 22.7196,
        "longitude": 75.8577
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128",
        "bestRating": "5",
        "worstRating": "1"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Engineering & AI Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Mobile App Development (iOS & Android)",
                    "description": "High-performance native and cross-platform mobile apps built with React Native, Flutter, Swift, and Kotlin."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Generative AI & LLM Engineering",
                    "description": "Custom foundation models, multi-agent workflows, vector search RAG systems, and enterprise GenAI integration."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Web & SaaS Development",
                    "description": "Next.js, React, Node.js, and cloud microservice engineering for mission-critical enterprise platforms."
                }
            }
        ]
    }
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Webintegratorz Technologies",
    "url": "https://webintegratorz.com",
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://webintegratorz.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                          (function() {
                            try {
                              var stored = localStorage.getItem('theme');
                              if (stored === 'light') {
                                document.documentElement.classList.remove('dark');
                                document.documentElement.style.colorScheme = 'light';
                              } else {
                                document.documentElement.classList.add('dark');
                                document.documentElement.style.colorScheme = 'dark';
                              }
                            } catch(e) {}
                          })();
                        `,
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                />
                {/* Preload critical logo asset */}
                <link
                    rel="preload"
                    href="/weblogo.webp"
                    as="image"
                    fetchPriority="high"
                />
            </head>
            <body className={`${inter.variable} font-sans antialiased text-slate-900 bg-white dark:text-white dark:bg-[#030712] selection:bg-[#50a2ff] selection:text-[#030712]`}>
                <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
            </body>
        </html>
    );
}

