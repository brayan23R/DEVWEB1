import type {
  Metadata,
  Viewport,
} from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import { ScrollEffects } from "@/components/site/ScrollEffects";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default:
      "DevWeb | Consultoría, Software, IA y Cloud",

    template: "%s | DevWeb",
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.legalName,

  publisher: siteConfig.legalName,

  generator: "Next.js",

  category: "technology",

  keywords: [...siteConfig.keywords],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    siteName: siteConfig.name,

    title:
      "DevWeb | Consultoría, Software, IA y Cloud",

    description: siteConfig.description,

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,

        alt:
          "DevWeb, consultoría tecnológica, software, inteligencia artificial y cloud",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "DevWeb | Consultoría, Software, IA y Cloud",

    description: siteConfig.description,

    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview": "large",

      "max-snippet": -1,

      "max-video-preview": -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#020b1f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        {children}
        <ScrollEffects />
      </body>
    </html>
  );
}