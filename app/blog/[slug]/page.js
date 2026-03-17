import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import { buildBlogMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import BlogArticleClient from "./BlogArticleClient";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return buildBlogMetadata(post);
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: { "@type": "Person", name: siteSEO.artist },
        publisher: {
          "@type": "Organization",
          name: siteSEO.siteName,
          logo: { "@type": "ImageObject", url: `${siteSEO.baseUrl}/images/logo_aesthetics.jpeg` },
        },
        url: `${siteSEO.baseUrl}/blog/${post.slug}`,
        image: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
      },
      getBreadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
        { name: post.title, href: `/blog/${post.slug}` },
      ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogArticleClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}
