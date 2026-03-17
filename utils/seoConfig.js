export const siteSEO = {
  siteName: "Defined MD Aesthetics by Mayuri",
  shortName: "Defined Aesthetics",
  defaultTitle: "Defined MD Aesthetics by Mayuri | Permanent Makeup Studio Nashik",
  defaultDescription:
    "Defined MD Aesthetics by Mayuri — Premium permanent makeup studio in Nashik. Expert microblading, ombre brows, lip blush, scalp micropigmentation & beauty spot. Book your appointment today.",
  tagline: "Defined Beauty. Lasting Confidence.",
  baseUrl: "https://definedaesthetics.in",
  defaultImage: "/og-defined-aesthetics.jpg",
  locale: "en_IN",
  email: "definedaestheticsbymayuri@gmail.com",
  phone: "+918422926464",
  address: "Nashik, Maharashtra, India",
  artist: "Mayuri Londhe",
  foundingYear: "2022",
  instagram: "https://www.instagram.com/_defined_aesthetics_by_mayuri",
  whatsapp: "https://wa.me/918422926464",
  gaMeasurementId: "G-XXXXXXXXXX",
};

export const pageSEO = {
  home: {
    title: "Defined MD Aesthetics by Mayuri | Best Permanent Makeup Artist Nashik",
    description:
      "Defined MD Aesthetics by Mayuri — Nashik's premier permanent makeup studio. Microblading, ombre brows, lip blush, scalp micropigmentation & beauty spot making by expert artist Mayuri Londhe.",
    keywords:
      "permanent makeup nashik, microblading nashik, lip blush nashik, ombre brows nashik, eyebrow tattoo nashik, scalp micropigmentation nashik, permanent makeup artist nashik, Mayuri Londhe",
    canonical: "/",
  },
  about: {
    title: "About Mayuri Londhe | Permanent Makeup Artist Nashik | Defined Aesthetics",
    description:
      "Meet Mayuri Londhe, expert permanent makeup artist at Defined MD Aesthetics. Specialising in eyebrow microblading, lip blush & scalp micropigmentation in Nashik, Maharashtra.",
    keywords:
      "Mayuri Londhe permanent makeup artist, about defined aesthetics nashik, PMU artist nashik",
    canonical: "/about",
  },
  services: {
    title: "Services | Permanent Makeup Treatments | Defined MD Aesthetics Nashik",
    description:
      "Explore all permanent makeup services at Defined MD Aesthetics: eyebrows (microblading, ombre, powder, nano), lip blush, scalp micropigmentation & beauty spots. Nashik, Maharashtra.",
    keywords:
      "permanent makeup services nashik, microblading services, lip blush treatment, scalp micropigmentation, beauty spot making nashik",
    canonical: "/services",
  },
  eyebrows: {
    title: "Permanent Eyebrows Nashik | Microblading, Ombre, Nano Brows | Defined Aesthetics",
    description:
      "Perfect your brows forever. Microblading, ombre powder brows, combination brows & nano brows by Mayuri Londhe at Defined MD Aesthetics, Nashik. Wake up with flawless brows daily.",
    keywords:
      "microblading nashik, ombre brows nashik, powder brows nashik, nano brows nashik, combination brows nashik, eyebrow tattoo nashik, permanent eyebrows nashik",
    canonical: "/services/eyebrows",
    h1: "Permanent Eyebrows — Nashik",
    breadcrumb: "Eyebrows",
  },
  lipBlush: {
    title: "Lip Blush Nashik | Dark Lip Neutralisation | Defined MD Aesthetics",
    description:
      "Lip blush & dark lip neutralisation treatments by Mayuri Londhe in Nashik. Achieve natural nude, baby rosy or bold lip colours that last. Expert lip pigmentation artist.",
    keywords:
      "lip blush nashik, dark lip neutralisation nashik, lip tattoo nashik, lip pigmentation nashik, nude lips treatment nashik",
    canonical: "/services/lip-blush",
    h1: "Lip Blush & Neutralisation — Nashik",
    breadcrumb: "Lip Blush",
  },
  scalp: {
    title: "Scalp Micropigmentation Nashik | SMP Hair Treatment | Defined Aesthetics",
    description:
      "Scalp micropigmentation (SMP) in Nashik by Defined MD Aesthetics. Non-surgical hair loss treatment, hairline restoration & density illusion for men and women.",
    keywords:
      "scalp micropigmentation nashik, SMP nashik, hair loss treatment nashik, hairline tattoo nashik, hair density treatment nashik",
    canonical: "/services/scalp-micropigmentation",
    h1: "Scalp Micropigmentation — Nashik",
    breadcrumb: "Scalp Micropigmentation",
  },
  beautySpot: {
    title: "Beauty Spot Making Nashik | Permanent Beauty Mark | Defined Aesthetics",
    description:
      "Add a timeless beauty spot with precision permanent makeup at Defined MD Aesthetics, Nashik. Subtle, elegant & lasting beauty mark placement by expert artist Mayuri Londhe.",
    keywords: "beauty spot nashik, permanent beauty mark nashik, beauty mole making nashik",
    canonical: "/services/beauty-spot",
    h1: "Beauty Spot Making — Nashik",
    breadcrumb: "Beauty Spot",
  },
  gallery: {
    title: "Gallery | Before & After Results | Defined MD Aesthetics Nashik",
    description:
      "View stunning before & after transformations at Defined MD Aesthetics Nashik. Real results for microblading, lip blush, scalp micropigmentation & beauty spots by Mayuri Londhe.",
    keywords:
      "before after microblading nashik, lip blush results nashik, permanent makeup gallery nashik, eyebrow transformation nashik",
    canonical: "/gallery",
  },
  contact: {
    title: "Contact & Book Appointment | Defined MD Aesthetics Nashik",
    description:
      "Book your permanent makeup appointment at Defined MD Aesthetics by Mayuri in Nashik. Call, WhatsApp or fill the inquiry form. Free consultation available.",
    keywords:
      "book permanent makeup appointment nashik, contact defined aesthetics, Mayuri Londhe appointment, permanent makeup consultation nashik",
    canonical: "/contact",
  },
  blog: {
    title: "Blog | Permanent Makeup Tips & Aftercare | Defined MD Aesthetics",
    description:
      "Expert permanent makeup tips, aftercare guides, and beauty insights from Defined MD Aesthetics by Mayuri. Learn about microblading, lip blush, and scalp micropigmentation.",
    keywords:
      "permanent makeup blog, microblading aftercare, lip blush tips, scalp micropigmentation guide",
    canonical: "/blog",
  },
};

export function buildMetadata(pageKey) {
  const seo = pageSEO[pageKey] || pageSEO.home;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: `${siteSEO.baseUrl}${seo.canonical}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${siteSEO.baseUrl}${seo.canonical}`,
      siteName: siteSEO.siteName,
      locale: siteSEO.locale,
      type: "website",
      images: [
        {
          url: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${siteSEO.baseUrl}${siteSEO.defaultImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "BeautySalon"],
    name: siteSEO.siteName,
    image: `${siteSEO.baseUrl}/images/logo_aesthetics.jpeg`,
    "@id": siteSEO.baseUrl,
    url: siteSEO.baseUrl,
    telephone: siteSEO.phone,
    email: siteSEO.email,
    description: siteSEO.defaultDescription,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.9975,
      longitude: 73.7898,
    },
    sameAs: [siteSEO.instagram],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    founder: { "@type": "Person", name: siteSEO.artist },
  };
}

export function getFAQSchema(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function buildBlogMetadata(post) {
  const title = `${post.title} | Defined MD Aesthetics Blog`;
  const description = post.excerpt;
  return {
    title,
    description,
    keywords: post.tags ? post.tags.join(", ") : siteSEO.defaultTitle,
    alternates: { canonical: `${siteSEO.baseUrl}/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      url: `${siteSEO.baseUrl}/blog/${post.slug}`,
      siteName: siteSEO.siteName,
      locale: siteSEO.locale,
      type: "article",
      publishedTime: post.date,
      authors: [siteSEO.artist],
      images: [{ url: `${siteSEO.baseUrl}${siteSEO.defaultImage}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteSEO.baseUrl}${siteSEO.defaultImage}`],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  };
}

export function getBreadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteSEO.baseUrl}${item.href}`,
    })),
  };
}
