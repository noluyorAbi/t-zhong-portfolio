import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Legal notice, disclaimer, and privacy policy for Tianxiong Zhong's portfolio website.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
