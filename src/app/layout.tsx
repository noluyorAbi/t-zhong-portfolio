import type { Metadata, Viewport } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://t-zhong.de";

export const viewport: Viewport = {
  themeColor: "#5C3BBD",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Tianxiong Zhong — Transportation & Industrial Design Portfolio",
    template: "%s | Tianxiong Zhong Design Portfolio",
  },
  description:
    "Explore the design portfolio of Tianxiong Zhong — Transportation Design, Industrial Design, Illustration & Furniture Design projects by a Hochschule München student and former automotive engineer.",
  keywords: [
    "Tianxiong Zhong",
    "design portfolio",
    "transportation design",
    "industrial design",
    "illustration",
    "furniture design",
    "Hochschule München",
    "automotive design",
    "product design",
    "München designer",
    "motorcycle concept",
    "Tesla Cyberrad",
    "design student Munich",
  ],
  authors: [{ name: "Tianxiong Zhong", url: siteUrl }],
  creator: "Tianxiong Zhong",
  publisher: "Tianxiong Zhong",
  category: "Design",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "de_DE",
    url: siteUrl,
    siteName: "Tianxiong Zhong Portfolio",
    title:
      "Tianxiong Zhong — Transportation & Industrial Design Portfolio",
    description:
      "Explore Tianxiong Zhong's design portfolio — Tesla Cyberrad, Readymade Motorcycle, Book of Time illustration & LittleEasy Table by a Hochschule München student.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Tianxiong Zhong — Design Portfolio featuring Transportation, Industrial, Illustration & Furniture Design",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tianxiong Zhong — Transportation & Industrial Design Portfolio",
    description:
      "Explore Tianxiong Zhong's design portfolio — Tesla Cyberrad, Readymade Motorcycle, Book of Time illustration & LittleEasy Table by a Hochschule München student.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "de-DE": siteUrl,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
  other: {
    "msapplication-TileColor": "#5C3BBD",
  },
};

const structuredData = [
  // Person schema
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Tianxiong Zhong",
    url: siteUrl,
    image: `${siteUrl}/images/bio-pic-about-me-homepage-2x.png`,
    jobTitle: "Design Student",
    description:
      "Design student at Hochschule München specializing in transportation design, industrial design, illustration, and furniture design. Former automotive engineer.",
    affiliation: {
      "@type": "EducationalOrganization",
      name: "Hochschule München",
      url: "https://design.hm.edu/",
    },
    email: "t.zhong@hm.edu",
    telephone: "+49 176-3066-0547",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lothstraße 17",
      addressLocality: "München",
      postalCode: "80335",
      addressCountry: "DE",
    },
    sameAs: [
      "https://www.linkedin.com/in/tianxiong-zhong",
      "https://www.instagram.com/baerchenphoto",
    ],
    knowsAbout: [
      "Transportation Design",
      "Industrial Design",
      "Illustration",
      "Furniture Design",
      "Automotive Engineering",
      "Photography",
      "Visual Storytelling",
    ],
  },
  // WebSite schema
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Tianxiong Zhong - Design Portfolio",
    description:
      "Portfolio of Tianxiong Zhong — Transportation Design, Industrial Design, Illustration & Furniture Design.",
    publisher: { "@id": `${siteUrl}/#person` },
    inLanguage: ["en-US", "de-DE"],
  },
  // Portfolio / CollectionPage schema
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/design`,
    url: `${siteUrl}/design`,
    name: "Design Projects",
    description: "Selected design works by Tianxiong Zhong.",
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "CreativeWork",
            name: "Tesla Cyberrad",
            url: `${siteUrl}/projects/tesla`,
            description:
              "A futuristic motorcycle concept inspired by Tesla's Cybertruck design language.",
            creator: { "@id": `${siteUrl}/#person` },
            genre: "Transportation Design",
            image: `${siteUrl}/images/tesla-cyberrad-design-banner.png`,
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "CreativeWork",
            name: "Readymade Motorcycle",
            url: `${siteUrl}/projects/readymade`,
            description:
              "A motorcycle design concept reimagining the readymade philosophy in industrial design.",
            creator: { "@id": `${siteUrl}/#person` },
            genre: "Transportation Design",
            image: `${siteUrl}/images/readymade-motorcycle-design-banner.png`,
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "CreativeWork",
            name: "The Book of Time",
            url: `${siteUrl}/projects/illustration`,
            description:
              "An illustrated book exploring the concept of time through visual storytelling.",
            creator: { "@id": `${siteUrl}/#person` },
            genre: "Illustration",
            image: `${siteUrl}/images/the-book-of-time-design-banner.png`,
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "CreativeWork",
            name: "LittleEasy Table",
            url: `${siteUrl}/projects/little`,
            description:
              "A minimalist table design focusing on simplicity, functionality, and elegant form.",
            creator: { "@id": `${siteUrl}/#person` },
            genre: "Furniture Design",
            image: `${siteUrl}/images/little-easy-table-design-banner.png`,
          },
        },
      ],
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} antialiased`}>
      <head>
        {/* Structured Data */}
        {structuredData.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
        {/* AI crawler hints */}
        <link rel="author" href={`${siteUrl}/llms.txt`} />
        <meta name="ai-content-declaration" content="human-created" />
        <meta
          name="description-long"
          content="Tianxiong Zhong is a design student at Hochschule München (Munich University of Applied Sciences) specializing in transportation design, industrial design, illustration, and furniture design. Former automotive engineer with a passion for photography and visual storytelling. Portfolio features Tesla Cyberrad motorcycle concept, Readymade Motorcycle, The Book of Time illustration project, and LittleEasy Table furniture design."
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] noise-overlay">
        <CustomCursor />
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
