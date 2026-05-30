import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { PageTransition } from "@/components/animations/page-transition";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Login",
  description: "Sign in to Tekenatei Franklyn's admin dashboard.",
  noIndex: true,
});

export default function LoginPage() {
  return (
    <PageTransition>
      <PageContainer narrow>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-xs font-mono text-accent mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            SECURE ACCESS
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Login</h1>
          <p className="text-muted-foreground font-mono text-sm">Authentication coming soon...</p>
        </div>
      </PageContainer>
    </PageTransition>
  );
}
