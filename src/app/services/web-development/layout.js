export const metadata = {
    title: "Web Development Company India | MERN Stack & Next.js Experts",
    description: "Webintegratorz Technologies is a premier web development company in India specializing in MERN stack, React.js, and Next.js. We build scalable, SEO-optimized web products.",
    keywords: [
        "Web Development Company India",
        "MERN Stack Development India",
        "React JS Development Services",
        "Next.js Development Agency",
        "Enterprise Web Application Development",
        "Custom Web Development India",
        "Full Stack Development Company India",
        "Hire Web Developers India"
    ],
    alternates: {
        canonical: "https://webintegratorz.com/services/web-development",
    },
    openGraph: {
        title: "Web Development Company India | MERN Stack & Next.js Experts",
        description: "Webintegratorz Technologies is a premier web development company in India specializing in MERN stack, React.js, and Next.js. We build scalable, SEO-optimized web products.",
        url: "https://webintegratorz.com/services/web-development",
        siteName: "Webintegratorz",
        images: [{ url: "https://webintegratorz.com/webint.webp", width: 1200, height: 630, alt: "Web Development Company India | Webintegratorz" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Company India | MERN Stack & Next.js Experts",
        description: "Webintegratorz Technologies specializes in MERN stack, React.js, and Next.js web development.",
        images: ["https://webintegratorz.com/webint.webp"],
    },
};

export default function WebLayout({ children }) {
    return <>{children}</>;
}
