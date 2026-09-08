import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { seo } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? seo.siteUrl;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: seo.title.default,
    template: seo.title.template,
  },
  description: seo.description,
  keywords: seo.keywords,
  creator: seo.creator,
  authors: [{ name: seo.creator }],
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: seo.openGraph.title,
    description: seo.openGraph.description,
    url: seo.openGraph.url,
    siteName: seo.openGraph.siteName,
    images: [
      {
        url: seo.openGraph.image,
        width: 1200,
        height: 630,
        alt: seo.openGraph.imageAlt,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: seo.twitter.card,
    title: seo.twitter.title,
    description: seo.twitter.description,
    images: [seo.openGraph.image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
