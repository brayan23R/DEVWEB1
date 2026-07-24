import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.legalName,

    short_name: siteConfig.name,

    description: siteConfig.description,

    start_url: "/",

    scope: "/",

    display: "standalone",

    background_color: "#020b1f",

    theme_color: "#020b1f",

    lang: "es-PE",

    orientation: "portrait-primary",
  };
}