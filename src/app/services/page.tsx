import type { Metadata } from "next";
import { ServicesPage } from "@/components/service/services-page";
import { servicesPage } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: servicesPage.description,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Muhamad Ilham Saputra",
    description: servicesPage.description,
    url: "/services",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Services offered by Muhamad Ilham Saputra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Muhamad Ilham Saputra",
    description: servicesPage.description,
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return <ServicesPage />;
}
