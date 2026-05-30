import { Metadata } from "next";
import { siteConfig } from "./constants";

interface PageMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  image,
  noIndex = false,
}: PageMetadataProps = {}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const metaDescription = description || siteConfig.description;
  const metaImage = image || siteConfig.ogImage;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [{ url: metaImage, width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: "@tekenatei",
    },
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  };
}
