import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "The Book of Time",
  description:
    "The Book of Time — an illustrated book exploring the concept of time through visual storytelling. Illustration by Tianxiong Zhong.",
  openGraph: {
    title: "The Book of Time | Tianxiong Zhong",
    description:
      "Illustrated book project exploring time through visual storytelling and artistic expression.",
    images: ["/images/the-book-of-time-design-banner.png"],
  },
  alternates: { canonical: "/projects/illustration" },
};

const images = [
  {
    src: "/images/the-book-of-time-design-banner.png",
    alt: "The Book of Time Banner",
  },
  ...Array.from({ length: 25 }, (_, i) => ({
    src: `/images/the-book-of-time-design-content-${i + 1}.png`,
    alt: `The Book of Time ${i + 1}`,
  })),
];

export default function IllustrationPage() {
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
                name: "The Book of Time",
                item: "https://t-zhong.de/projects/illustration",
              },
            ],
          }),
        }}
      />
      <ProjectGallery
        title="The Book of Time"
        subtitle="Illustration"
        images={images}
      />
    </>
  );
}
