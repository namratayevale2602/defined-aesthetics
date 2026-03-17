import { buildMetadata } from "@/utils/seoConfig";
import { services } from "@/lib/data";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { getFAQSchema, getBreadcrumbSchema } from "@/utils/seoConfig";

export const metadata = buildMetadata("scalp");

export default function ScalpMicropigmentationPage() {
  const service = services.find((s) => s.slug === "scalp-micropigmentation");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getFAQSchema(service.faqs),
      getBreadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Scalp Micropigmentation", href: "/services/scalp-micropigmentation" },
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
