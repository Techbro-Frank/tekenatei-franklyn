import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { PageTransition } from "@/components/animations/page-transition";
import { generatePageMetadata } from "@/lib/metadata";
import MyStoryContent from "@/components/sections/my-story-content";
import "@/styles/my-story.css";

export const metadata: Metadata = generatePageMetadata({
  title: "My Journey",
  description:
    "The journey of Tekenatei Franklyn — from a small community in Bayelsa State to building technology solutions. A story of resilience, purpose, and continuous growth.",
});

export default function JourneyPage() {
  return (
    <PageTransition>
      <PageContainer narrow>
        <MyStoryContent />
      </PageContainer>
    </PageTransition>
  );
}
