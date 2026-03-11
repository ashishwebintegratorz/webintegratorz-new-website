export const metadata = {
    title: "Enterprise SaaS & CMS Development Company India",
    description: "Webintegratorz Technologies is a top SaaS development company in India specializing in multi-tenant architectures and enterprise CMS solutions. Architecting scalable platforms.",
    keywords: [
        "Enterprise SaaS Development",
        "SaaS Development Company India",
        "CMS Solutions India",
        "Multi-tenant SaaS Architecture",
        "Cloud Native SaaS Development",
        "White Label SaaS Solutions",
        "B2B SaaS Development Company",
        "Hire SaaS Developers India"
    ],
    alternates: {
        canonical: "https://webintegratorz.com/services/cms-solution",
    },
    openGraph: {
        title: "Enterprise SaaS & CMS Development Company India",
        description: "Webintegratorz Technologies specializes in multi-tenant SaaS architectures and enterprise CMS solutions for scalable digital platforms.",
        url: "https://webintegratorz.com/services/cms-solution",
        siteName: "Webintegratorz",
        images: [{ url: "https://webintegratorz.com/webint.webp", width: 1200, height: 630, alt: "Enterprise SaaS & CMS Development | Webintegratorz" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise SaaS & CMS Development Company India",
        description: "Webintegratorz Technologies specializes in multi-tenant SaaS architectures and enterprise CMS solutions.",
        images: ["https://webintegratorz.com/webint.webp"],
    },
};

export default function CMSLayout({ children }) {
    return <>{children}</>;
}
