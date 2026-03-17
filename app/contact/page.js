import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import ContactClient from "./ContactClient";

export const metadata = buildMetadata("contact");

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getBreadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Contact", href: "/contact" },
      ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
