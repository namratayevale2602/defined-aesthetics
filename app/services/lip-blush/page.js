import { buildMetadata } from "@/utils/seoConfig";
import { services } from "@/lib/data";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { getFAQSchema, getBreadcrumbSchema } from "@/utils/seoConfig";

export const metadata = buildMetadata("lipBlush");

export default function LipBlushPage() {
  const service = services.find((s) => s.slug === "lip-blush");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getFAQSchema(service.faqs),
      getBreadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Lip Blush", href: "/services/lip-blush" },
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
