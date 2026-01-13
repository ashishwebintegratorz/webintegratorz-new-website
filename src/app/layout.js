import "./globals.css";
import ClientLayoutWrapper from "../components/ClientLayoutWrapper";

export const metadata = {
    title: "Top IT Company in India | AI, MERN Stack & Enterprise Software Development",
    description: "Webintegratorz Technologies is a top IT company in India delivering AI-powered, MERN stack, and enterprise software solutions. Trusted global IT outsourcing partner for UAE, USA, Europe, Japan & India.",
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
