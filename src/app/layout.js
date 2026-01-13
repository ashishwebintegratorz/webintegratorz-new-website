import "./globals.css";
import ClientLayoutWrapper from "../components/ClientLayoutWrapper";

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
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased">
                <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
            </body>
        </html>
    );
}
