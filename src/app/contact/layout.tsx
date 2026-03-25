import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tianxiong Zhong — designer based in Munich, Germany. Available via email, LinkedIn, or Instagram.",
  openGraph: {
    title: "Contact | Tianxiong Zhong",
    description:
      "Reach out to Tianxiong Zhong for design collaborations and inquiries.",
    images: ["/images/bio-pic-contact-page-2x.png"],
  },
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
