import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tianxiong Zhong - Design Portfolio",
    short_name: "TZ Portfolio",
    description:
      "Portfolio of Tianxiong Zhong — Transportation Design, Industrial Design, Illustration & Furniture Design.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#5C3BBD",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
