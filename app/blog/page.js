import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import BlogListClient from "./BlogListClient";

export const metadata = buildMetadata("blog");

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getBreadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
      ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogListClient />
    </>
  );
}
