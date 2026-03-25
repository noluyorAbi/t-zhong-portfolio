import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Projects",
  description:
    "Selected design works by Tianxiong Zhong — Tesla Cyberrad, Readymade Motorcycle, LittleEasy Table, and The Book of Time illustration project.",
  openGraph: {
    title: "Design Projects | Tianxiong Zhong",
    description:
      "Selected design works spanning transportation, industrial, furniture, and illustration design.",
    images: ["/images/tesla-cyber-design-design-page-overview.png"],
  },
  alternates: { canonical: "/design" },
};

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
