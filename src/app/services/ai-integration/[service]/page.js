import ServiceDetailClient from "./ServiceDetailClient";
import { aiServicesData } from "@/lib/aiServicesData";

export async function generateStaticParams() {
    const services = Object.keys(aiServicesData);
    return services.map((service) => ({
        service: service,
    }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const serviceSlug = resolvedParams.service;
    const data = aiServicesData[serviceSlug];

    if (!data) {
        return {
            title: "AI Integration Services | Webintegratorz Technologies",
            description: "Enterprise-grade AI, LLMs, and custom Machine Learning solutions engineered by Webintegratorz Technologies.",
        };
    }

    return {
        title: `${data.title} | Webintegratorz Technologies`,
        description: data.description,
        openGraph: {
            title: `${data.title} | Webintegratorz Technologies`,
            description: data.description,
            url: `https://webintegratorz.com/services/ai-integration/${data.slug}`,
            siteName: "Webintegratorz",
        },
    };
}

export default async function Page({ params }) {
    const resolvedParams = await params;
    return <ServiceDetailClient serviceSlug={resolvedParams.service} />;
}
