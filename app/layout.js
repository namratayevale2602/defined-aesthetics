import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FloatingButtons from "@/components/common/FloatingButtons";
import { GoogleAnalytics } from "@next/third-parties/google";
import { siteSEO } from "@/utils/seoConfig";
import { cormorant, jost } from "./fonts";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(siteSEO.baseUrl),
  title: {
    template: `%s | ${siteSEO.shortName}`,
    default: siteSEO.defaultTitle,
  },
  description: siteSEO.defaultDescription,
  keywords: [
    "permanent makeup nashik",
    "microblading nashik",
    "lip blush nashik",
    "ombre brows nashik",
    "eyebrow tattoo nashik",
    "scalp micropigmentation nashik",
    "permanent makeup artist nashik",
    "beauty spot making nashik",
    "Mayuri Londhe",
    "Defined Aesthetics Nashik",
  ],
  authors: [{ name: siteSEO.artist }],
  creator: siteSEO.siteName,
  publisher: siteSEO.siteName,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: siteSEO.defaultTitle,
    description: siteSEO.defaultDescription,
    url: siteSEO.baseUrl,
    siteName: siteSEO.siteName,
    images: [{ url: `${siteSEO.baseUrl}${siteSEO.defaultImage}`, width: 1200, height: 630, alt: siteSEO.siteName }],
    locale: siteSEO.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteSEO.defaultTitle,
    description: siteSEO.defaultDescription,
    images: [`${siteSEO.baseUrl}${siteSEO.defaultImage}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  verification: { google: "your-google-verification-code" },
  category: "beauty",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "BeautySalon"],
        "@id": siteSEO.baseUrl,
        name: siteSEO.siteName,
        image: `${siteSEO.baseUrl}/images/logo_aesthetics.jpeg`,
        url: siteSEO.baseUrl,
        telephone: siteSEO.phone,
        email: siteSEO.email,
        description: siteSEO.defaultDescription,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nashik",
          addressRegion: "Maharashtra",
          postalCode: "422001",
          addressCountry: "IN",
        },
        geo: { "@type": "GeoCoordinates", latitude: 19.9975, longitude: 73.7898 },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "10:00",
            closes: "19:00",
          },
        ],
        sameAs: [siteSEO.instagram],
        founder: { "@type": "Person", name: siteSEO.artist },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Permanent Makeup Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Permanent Eyebrows (Microblading, Ombre, Powder, Nano)" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lip Blush & Dark Neutralisation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Scalp Micropigmentation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beauty Spot Making" } },
          ],
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} scroll-smooth`} suppressHydrationWarning >
      <head>
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nashik" />
        <meta name="geo.position" content="19.9975;73.7898" />
        <meta name="ICBM" content="19.9975, 73.7898" />
        <meta name="theme-color" content="#0C3B2E" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-jost antialiased min-h-screen" suppressHydrationWarning>
        <FloatingButtons />
        <Navbar />
        <main>{children}</main>
        <Footer />
        {siteSEO.gaMeasurementId && <GoogleAnalytics gaId={siteSEO.gaMeasurementId} />}
      </body>
    </html>
  );
}
