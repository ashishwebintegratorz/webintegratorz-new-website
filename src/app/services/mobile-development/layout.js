export const metadata = {
    title: "Top Mobile App Development Company India | iOS, Android, Flutter & React Native",
    description: "Webintegratorz Technologies is a leading mobile app development company in India. We design & engineer high-performance native iOS, Android, Flutter, and React Native mobile apps for startups and global enterprises.",
    keywords: [
        "Mobile App Development Company India",
        "Top Mobile App Developers India",
        "Flutter App Development Company India",
        "React Native App Development Services",
        "Custom iOS App Development Company",
        "Android App Development Services India",
        "Hire Dedicated Mobile App Developers",
        "Cross Platform Mobile App Development",
        "Enterprise Mobile Application Solutions",
        "Offshore Mobile App Development India"
    ],
    alternates: {
        canonical: "https://webintegratorz.com/services/mobile-development",
    },
    openGraph: {
        title: "Top Mobile App Development Company India | iOS, Android, Flutter & React Native",
        description: "Scale your business with premier mobile app development services from Webintegratorz Technologies. Native Swift, Kotlin, Flutter, and React Native engineering.",
        url: "https://webintegratorz.com/services/mobile-development",
        siteName: "Webintegratorz Technologies",
        images: [{ url: "https://webintegratorz.com/webint.webp", width: 1200, height: 630, alt: "Mobile App Development Company India | Webintegratorz" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Top Mobile App Development Company India | iOS, Android, Flutter & React Native",
        description: "Webintegratorz Technologies specializes in high-performance iOS, Android, Flutter, and React Native mobile app development for global enterprises.",
        images: ["https://webintegratorz.com/webint.webp"],
    },
};

const mobileServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development Services",
    "provider": {
        "@type": "Organization",
        "name": "Webintegratorz Technologies",
        "url": "https://webintegratorz.com"
    },
    "serviceType": "Mobile Application Engineering",
    "areaServed": ["India", "United States", "United Arab Emirates", "United Kingdom", "Europe", "Japan", "Global"],
    "description": "End-to-end custom mobile app development services including native iOS (Swift), native Android (Kotlin), and cross-platform apps using Flutter and React Native.",
    "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "Custom Quote",
        "availability": "https://schema.org/InStock"
    }
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://webintegratorz.com"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://webintegratorz.com/services"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Mobile App Development",
            "item": "https://webintegratorz.com/services/mobile-development"
        }
    ]
};

export default function MobileLayout({ children }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileServiceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {children}
        </>
    );
}
