"use client";

import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
}

export function SectionWrapper({
  children,
  className,
  id,
  title,
  subtitle,
  badge,
  centered = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", className)}
    >
      {(title || subtitle || badge) && (
        <ScrollReveal>
          <div className={cn("mb-12", centered && "text-center")}>
            {badge && (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-mono text-primary mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                {badge}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-muted-foreground max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        </ScrollReveal>
      )}
      {children}
    </section>
  );
}
