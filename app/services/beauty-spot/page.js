import { buildMetadata } from "@/utils/seoConfig";
import { services } from "@/lib/data";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { getFAQSchema, getBreadcrumbSchema } from "@/utils/seoConfig";

export const metadata = buildMetadata("beautySpot");

export default function BeautySpotPage() {
  const service = services.find((s) => s.slug === "beauty-spot");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getFAQSchema(service.faqs),
      getBreadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Beauty Spot Making", href: "/services/beauty-spot" },
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
