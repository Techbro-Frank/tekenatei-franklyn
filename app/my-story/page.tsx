import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { PageTransition } from "@/components/animations/page-transition";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "My Story",
  description: "The journey of Tekenatei Franklyn — from curiosity to building at the intersection of tech and innovation.",
});

export default function MyStoryPage() {
  return (
    <PageTransition>
      <PageContainer>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-mono text-primary mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            SECTION: MY_STORY
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">My Story</h1>
          <p className="text-muted-foreground font-mono text-sm">Coming soon...</p>
        </div>
      </PageContainer>
    </PageTransition>
  );
}
