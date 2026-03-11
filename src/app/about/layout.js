export const metadata = {
    title: "About Webintegratorz Technologies | Top IT Company in India & AI Experts",
    description: "Learn how Webintegratorz Technologies, a top IT company in India, delivers scalable software product engineering, AI solutions, and dedicated MERN stack teams for global enterprises.",
    keywords: [
        "About Webintegratorz Technologies",
        "History of Webintegratorz",
        "Top IT Company in India",
        "AI Software Product Engineering",
        "MERN Stack Experts India",
        "Global IT Outsourcing Partner",
        "Dubai IT Outsourcing",
        "USA Software Development Partner"
    ],
    alternates: {
        canonical: "https://webintegratorz.com/about",
    },
    openGraph: {
        title: "About Webintegratorz Technologies | Top IT Company in India & AI Experts",
        description: "Learn how Webintegratorz Technologies delivers scalable software, AI solutions, and dedicated MERN stack teams for global enterprises.",
        url: "https://webintegratorz.com/about",
        siteName: "Webintegratorz",
        images: [
            {
                url: "/webint.webp",
                width: 1200,
                height: 630,
                alt: "About Webintegratorz Technologies",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Webintegratorz Technologies | Top IT Company in India",
        description: "Learn how Webintegratorz Technologies delivers scalable software, AI solutions, and dedicated MERN stack teams.",
        images: ["/webint.webp"],
    },
};

export default function AboutLayout({ children }) {
    return <>{children}</>;
}
