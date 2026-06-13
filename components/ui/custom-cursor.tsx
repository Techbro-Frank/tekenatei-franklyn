"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Don't render on server to avoid hydration mismatch
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const dotColor = isDark ? "bg-primary shadow-[0_0_10px_rgba(0,180,255,0.5)]" : "bg-[#0077b6] shadow-[0_0_10px_rgba(0,119,182,0.4)]";
  const ringColor = isDark ? "border-primary/30" : "border-[#0077b6]/30";

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{ left: pos.x - 4, top: pos.y - 4 }}
      >
        <div className={`h-2 w-2 rounded-full ${dotColor}`} />
      </div>
      <div
        className="fixed pointer-events-none z-[9998] hidden md:block transition-all duration-150"
        style={{ left: pos.x - 16, top: pos.y - 16 }}
      >
        <div className={`h-8 w-8 rounded-full border ${ringColor}`} />
      </div>
    </>
  );
}
