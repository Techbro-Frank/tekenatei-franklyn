"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { StatItem } from "@/types";

interface StatsCardProps extends StatItem {
  className?: string;
}

export function StatsCard({
  label,
  value,
  suffix,
  prefix,
  trend,
  trendValue,
  className,
}: StatsCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || typeof value !== "number") return;

    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setDisplayValue(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-border bg-card p-4 space-y-2",
        className
      )}
    >
      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <div className="flex items-baseline gap-1">
        {prefix && <span className="text-sm text-muted-foreground">{prefix}</span>}
        <span className="text-2xl font-bold font-mono tabular-nums">
          {typeof value === "number" ? displayValue : value}
        </span>
        {suffix && <span className="text-sm text-muted-foreground">{suffix}</span>}
      </div>
      {trend && (
        <div
          className={cn(
            "flex items-center gap-1 text-xs font-mono",
            trend === "up" && "text-success",
            trend === "down" && "text-destructive",
            trend === "neutral" && "text-muted-foreground"
          )}
        >
          <TrendIcon className="h-3 w-3" />
          {trendValue}
        </div>
      )}
    </div>
  );
}
