import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { PageTransition } from "@/components/animations/page-transition";
import { generatePageMetadata } from "@/lib/metadata";
import PortfolioPageContent from "@/components/sections/portfolio-page-content";

export const metadata: Metadata = generatePageMetadata({
  title: "Portfolios",
  description: "Explore projects and work by Tekenatei Franklyn across product management, engineering, and cybersecurity.",
});

export default function PortfoliosPage() {
  return (
    <PageTransition>
      <PageContainer>
        <PortfolioPageContent />
      </PageContainer>
    </PageTransition>
  );
}
