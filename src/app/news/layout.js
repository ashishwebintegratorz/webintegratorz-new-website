export const metadata = {
    title: "News & Updates | Webintegratorz Technologies",
    description: "Stay updated with the latest news, partnerships, product launches, and industry insights from Webintegratorz Technologies, a leading IT company in India.",
    keywords: [
        "Webintegratorz News",
        "IT Company Updates India",
        "Tech News India",
        "Software Development News",
        "AI Industry Updates",
        "Webintegratorz Technologies Blog"
    ],
    alternates: {
        canonical: "https://webintegratorz.com/news",
    },
    openGraph: {
        title: "News & Updates | Webintegratorz Technologies",
        description: "Stay updated with the latest news, partnerships, and industry insights from Webintegratorz Technologies.",
        url: "https://webintegratorz.com/news",
        siteName: "Webintegratorz",
        images: [{ url: "https://webintegratorz.com/webint.webp", width: 1200, height: 630, alt: "News & Updates | Webintegratorz Technologies" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "News & Updates | Webintegratorz Technologies",
        description: "Stay updated with the latest news and insights from Webintegratorz Technologies.",
        images: ["https://webintegratorz.com/webint.webp"],
    },
};

export default function NewsLayout({ children }) {
    return <>{children}</>;
}
