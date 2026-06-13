import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { PageTransition } from "@/components/animations/page-transition";
import { generatePageMetadata } from "@/lib/metadata";
import AboutPageContent from "@/components/sections/about-page-content";

export const metadata: Metadata = generatePageMetadata({
  title: "About",
  description: "Learn more about Tekenatei Franklyn — Product Manager, Front-End Engineer, and Cybersecurity Professional. Discover his journey, experience, and vision.",
});

export default function AboutPage() {
  return (
    <PageTransition>
      <PageContainer>
        <AboutPageContent />
      </PageContainer>
    </PageTransition>
  );
}
