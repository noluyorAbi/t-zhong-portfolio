import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Readymade Motorcycle",
  description:
    "Readymade Motorcycle — a design concept reimagining the readymade philosophy in industrial design. Transportation Design by Tianxiong Zhong.",
  openGraph: {
    title: "Readymade Motorcycle | Tianxiong Zhong",
    description:
      "Motorcycle concept combining found objects with purposeful engineering.",
    images: ["/images/readymade-motorcycle-design-banner.png"],
  },
  alternates: { canonical: "/projects/readymade" },
};

const images = [
  {
    src: "/images/readymade-motorcycle-design-banner.png",
    alt: "Readymade Motorcycle Design Banner",
  },
  ...Array.from({ length: 6 }, (_, i) => ({
    src: `/images/readymade-motorcycle-design-content-page-pic-${i + 1}.png`,
    alt: `Readymade Motorcycle Design ${i + 1}`,
  })),
];

export default function ReadymadePage() {
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
                name: "Readymade Motorcycle",
                item: "https://t-zhong.de/projects/readymade",
              },
            ],
          }),
        }}
      />
      <ProjectGallery
        title="Readymade Motorcycle"
        subtitle="Transportation Design"
        images={images}
      />
    </>
  );
}
