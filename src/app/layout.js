import "./globals.css";
import localFont from "next/font/local";
import ClientLayoutWrapper from "../components/ClientLayoutWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceGrotesk = localFont({
    src: [
        {
            path: "../../public/font/SpaceGrotesk-VariableFont_wght.ttf",
            weight: "400 700",
            style: "normal",
        },
    ],
    variable: "--font-space-grotesk",
    display: "swap",
});

export const metadata = {
    title: "Top IT Company in India | AI & Software Development",
    description: "Webintegratorz Technologies is a leading IT company in India specializing in AI, MERN stack, and custom software development for global enterprises.",
    keywords: [
        "Top IT Company in India",
        "IT Outsourcing India",
        "AI Development Company India",
        "MERN Stack Development Company",
        "Software Development Company India",
        "AI Software Development Services",
        "Full Stack Development Company",
        "Hire Dedicated Developers India",
        "Enterprise AI Solutions",
        "React JS Development Company",
        "Custom Software Development India",
        "Offshore Development Center India"
    ],
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow",
    alternates: {
        canonical: "https://webintegratorz.com",
    },
    openGraph: {
        title: "Top IT Company in India | AI & Software Development",
        description: "Webintegratorz Technologies is a leading IT company in India specializing in AI, MERN stack, and custom software development.",
        url: "https://webintegratorz.com",
        siteName: "Webintegratorz",
        images: [
            {
                url: "/webint.webp",
                width: 1200,
                height: 630,
                alt: "Webintegratorz Technologies",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Top IT Company in India | AI & Software Development",
        description: "Webintegratorz Technologies is a leading IT company in India specializing in AI, MERN stack, and custom software development.",
        images: ["/webint.webp"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Preload critical resources */}
                <link
                    rel="preload"
                    href="/font/SpaceGrotesk-VariableFont_wght.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/weblogo.webp"
                    as="image"
                />
            </head>
            <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
                <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
                <SpeedInsights />
            </body>
        </html>
    );
}
