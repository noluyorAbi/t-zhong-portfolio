import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Tesla Cyberrad",
  description:
    "Tesla Cyberrad — a futuristic motorcycle concept inspired by Tesla's Cybertruck design language. Transportation Design by Tianxiong Zhong.",
  openGraph: {
    title: "Tesla Cyberrad | Tianxiong Zhong",
    description:
      "Futuristic motorcycle concept exploring angular geometry and electric powertrain integration.",
    images: ["/images/tesla-cyberrad-design-banner.png"],
  },
  alternates: { canonical: "/projects/tesla" },
};

const images = [
  {
    src: "/images/tesla-cyberrad-design-banner.png",
    alt: "Tesla Cyberrad Design Banner",
  },
  {
    src: "/images/tesla-cyber-design-design-page-content_09-1.png",
    alt: "Tesla Cyberrad Design 1",
  },
  {
    src: "/images/tesla-cyber-design-design-page-content_09-2.png",
    alt: "Tesla Cyberrad Design 2",
  },
  {
    src: "/images/tesla-cyber-design-design-page-content_09-3.png",
    alt: "Tesla Cyberrad Design 3",
  },
  {
    src: "/images/tesla-cyber-design-design-page-content_09-5.png",
    alt: "Tesla Cyberrad Design 5",
  },
  {
    src: "/images/tesla-cyber-design-design-page-content_09-6.png",
    alt: "Tesla Cyberrad Design 6",
  },
];

export default function TeslaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://t-zhong.de",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Design",
                item: "https://t-zhong.de/design",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Tesla Cyberrad",
                item: "https://t-zhong.de/projects/tesla",
              },
            ],
          }),
        }}
      />
      <ProjectGallery
        title="Tesla Cyberrad"
        subtitle="Transportation Design"
        images={images}
      />
    </>
  );
}
