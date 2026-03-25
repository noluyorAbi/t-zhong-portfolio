import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "LittleEasy Table",
  description:
    "LittleEasy Table — a minimalist table design focusing on simplicity and elegant form. Furniture Design by Tianxiong Zhong.",
  openGraph: {
    title: "LittleEasy Table | Tianxiong Zhong",
    description:
      "Minimalist table design focusing on simplicity, functionality, and elegant form.",
    images: ["/images/little-easy-table-design-banner.png"],
  },
  alternates: { canonical: "/projects/little" },
};

const images = [
  {
    src: "/images/little-easy-table-design-banner.png",
    alt: "LittleEasy Table Banner",
  },
  ...Array.from({ length: 7 }, (_, i) => ({
    src: `/images/little-easy-table-design-page-content-pic-${i + 1}.png`,
    alt: `LittleEasy Table Design ${i + 1}`,
  })),
];

export default function LittlePage() {
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
                name: "LittleEasy Table",
                item: "https://t-zhong.de/projects/little",
              },
            ],
          }),
        }}
      />
      <ProjectGallery
        title="LittleEasy Table"
        subtitle="Furniture Design"
        images={images}
      />
    </>
  );
}
