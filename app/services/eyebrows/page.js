import { buildMetadata } from "@/utils/seoConfig";
import { services } from "@/lib/data";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { getFAQSchema, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";

export const metadata = buildMetadata("eyebrows");

export default function EyebrowsPage() {
  const service = services.find((s) => s.slug === "eyebrows");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getFAQSchema(service.faqs),
      getBreadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Permanent Eyebrows", href: "/services/eyebrows" },
      ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageLayout service={service} />
    </>
  );
}
