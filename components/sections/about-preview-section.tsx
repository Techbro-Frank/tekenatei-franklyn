"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ─────────── floating stat badges (3 left · 3 right) ─────────── */
const floatingStats = [
  // RIGHT side (top → bottom)
  { label: "Product Management", color: "cyan",    side: "right" },
  { label: "Software Engineering", color: "blue",   side: "right" },
  { label: "Oil and Gas",          color: "emerald", side: "right" },
  // LEFT side (top → bottom)
  { label: "Project Management",   color: "cyan",    side: "left" },
  { label: "Cybersecurity",        color: "purple",  side: "left" },
  { label: "Ethical Hacking",      color: "purple",  side: "left" },
];

export default function AboutPreviewSection() {
  return (
    <section id="about" className="relative py-14 lg:py-20 overflow-hidden">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(0,180,255,0.06),transparent_70%)] pointer-events-none" />
      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ════════ LEFT: Image Column ════════ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative flex justify-center lg:justify-start lg:ml-2"
          >
            {/* Glowing frame behind the image */}
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/20 via-cyan-500/10 to-purple-500/15 blur-xl opacity-60" />

              {/* Image container with styled border */}
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_0_40px_rgba(0,180,255,0.08)]">
                <Image
                  src="/images/about_1.png"
                  alt="Tekenatei Franklyn — Digital Leader, Product Manager & Engineer"
                  width={520}
                  height={520}
                  className="object-cover w-full max-w-[480px] aspect-square"
                  priority
                />
                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/80 to-transparent image-bottom-fade" />
              </div>

              {/* Corner accent marks */}
              <div className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-primary/40 rounded-tl-md" />
              <div className="absolute -top-1.5 -right-1.5 w-6 h-6 border-t-2 border-r-2 border-cyan-400/40 rounded-tr-md" />
              <div className="absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-2 border-l-2 border-purple-400/40 rounded-bl-md" />
              <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-primary/40 rounded-br-md" />

              {/* Floating stat badges — 3 left, 3 right */}
              {floatingStats.map((stat, i) => {
                // 3 right positions, 3 left positions
                const rightPositions = [
                  "top-8 -right-4 lg:-right-14",
                  "top-[42%] -right-4 lg:-right-16",
                  "bottom-12 -right-4 lg:-right-14",
                ];
                const leftPositions = [
                  "top-8 -left-4 lg:-left-14",
                  "top-[42%] -left-4 lg:-left-16",
                  "bottom-12 -left-4 lg:-left-14",
                ];

                // First 3 are right, last 3 are left
                const isRight = stat.side === "right";
                const sideIndex = isRight
                  ? floatingStats.filter((s, j) => j < i && s.side === "right").length
                  : floatingStats.filter((s, j) => j < i && s.side === "left").length;
                const position = isRight ? rightPositions[sideIndex] : leftPositions[sideIndex];

                const dotColor =
                  stat.color === "cyan"
                    ? "bg-cyan-400"
                    : stat.color === "blue"
                      ? "bg-primary"
                      : stat.color === "emerald"
                        ? "bg-emerald-400"
                        : "bg-purple-400";
                const borderColor =
                  stat.color === "cyan"
                    ? "border-cyan-500/25"
                    : stat.color === "blue"
                      ? "border-primary/25"
                      : stat.color === "emerald"
                        ? "border-emerald-500/25"
                        : "border-purple-500/25";

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className={`absolute ${position} hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border ${borderColor} bg-card/80 backdrop-blur-md shadow-lg`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />
                    <span className="text-[10px] font-semibold tracking-wider text-foreground/80">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ════════ RIGHT: Content Column ════════ */}
          <div className="flex flex-col">
            {/* Section tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded border border-primary/25 bg-primary/5 mb-6 w-fit"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-primary">
                WHO I AM
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-[2.1rem] font-bold tracking-tight leading-tight mb-6"
            >
              More Than a{" "}
              <span className="text-gradient-primary">Product Manager</span>
              .{" "}More Than a{" "}
              <span className="text-gradient-accent">Developer</span>
              , More Than a{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Cyber Boy</span>
              .
            </motion.h2>

            {/* Body paragraphs */}
            <div className="space-y-4 mb-8">
              {[
                "I am a technology professional driven by curiosity, innovation and the belief that every problem has a solution.",
                "Over the past years, I have worked across product management, software engineering, oil and gas, and digital innovation, helping turn ideas into real products, leading development and cross-functional teams, and building solutions that create real value for businesses and people.",
                "My journey started with a simple goal, to learn, build and keep growing. Today, that journey continues as I expand into cyber-security and ethical hacking, exploring emerging technologies, AI and the broader spectrum of technology, and deepening my understanding of how technology shapes the future.",
                "Whether I am leading a product, building and improving digital products, or solving complex challenges, my focus remains the same, I want to create real impact with technology."
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="text-[13px] md:text-sm text-muted-foreground leading-[1.8]"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA — Learn More */}
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-lg text-[11px] font-bold tracking-[0.15em] text-primary-foreground bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-[0_0_20px_rgba(0,180,255,0.15)] hover:shadow-[0_0_30px_rgba(0,180,255,0.3)] overflow-hidden"
              >
                {/* Shine sweep on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2.5">
                  LEARN MORE ABOUT ME
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>

              {/* Secondary CTA — Download Resume */}
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-lg text-[11px] font-bold tracking-[0.15em] border border-border hover:border-primary/40 text-foreground/80 hover:text-primary bg-card/40 hover:bg-primary/5 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,180,255,0.08)]"
              >
                <Download className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform" />
                DOWNLOAD RESUME
              </a>
            </motion.div>

            {/* Decorative divider with quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 pt-8 border-t border-border/50"
            >
              <div className="flex items-start gap-3">
                <div className="w-1 h-10 rounded-full bg-gradient-to-b from-primary to-cyan-400 shrink-0 mt-0.5" />
                <p className="text-[12px] text-muted-foreground/70 leading-relaxed italic">
                  &ldquo;I don&apos;t just follow the future — I{" "}
                  <span className="text-primary font-semibold not-italic">build it</span>,{" "}
                  <span className="text-emerald-400 font-semibold not-italic">secure it</span>, and{" "}
                  <span className="text-purple-400 font-semibold not-italic">invest in it</span>.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
