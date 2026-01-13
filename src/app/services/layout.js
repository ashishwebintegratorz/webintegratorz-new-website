export const metadata = {
    title: "Our Services | Software Product Engineering & AI Solutions",
    description: "Explore our comprehensive digital services including AI integration, MERN stack web development, mobile app development, and UI/UX design.",
    keywords: [
        "IT Services India",
        "Digital Transformation Services",
        "Software Engineering Services",
        "AI Integration",
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "SaaS Development"
    ],
    alternates: {
        canonical: "https://webintegratorz.com/services",
    },
    openGraph: {
        title: "Our Services | Software Product Engineering & AI Solutions",
        description: "Explore our comprehensive digital services including AI integration, MERN stack web development, and more.",
        url: "https://webintegratorz.com/services",
        siteName: "Webintegratorz",
        images: [
            {
                url: "/webint.webp",
                width: 1200,
                height: 630,
                alt: "Our Services | Webintegratorz Technologies",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Services | Software Product Engineering & AI Solutions",
        description: "Explore our comprehensive digital services including AI integration, MERN stack web development, and more.",
        images: ["/webint.webp"],
    },
};

export default function ServicesLayout({ children }) {
    return <>{children}</>;
}
