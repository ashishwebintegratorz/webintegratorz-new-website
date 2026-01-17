import ComingSoonClient from "./ComingSoonClient";

export async function generateStaticParams() {
    const services = [
        "generative-ai-development",
        "llm-development",
        "generative-ai-integration",
        "chatgpt-integration",
        "generative-ai-consulting",
        "agent-development",
        "chatbot-development",
        "enterprise-ai",
        "ai-as-a-service",
        "ml-model-engineering",
        "ml-development",
        "ml-data-science-consulting",
        "ai-consulting"
    ];

    return services.map((service) => ({
        service: service,
    }));
}

export default function Page({ params }) {
    return <ComingSoonClient params={params} />;
}
