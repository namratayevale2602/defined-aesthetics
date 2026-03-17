import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import GalleryClient from "./GalleryClient";

export const metadata = buildMetadata("gallery");

export default function GalleryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getBreadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Gallery", href: "/gallery" },
      ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalleryClient />
    </>
  );
}
