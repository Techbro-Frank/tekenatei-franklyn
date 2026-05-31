"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: Target,
    title: "Vision-Driven",
    description: "I approach every project with a clear vision, transforming complex challenges into structured, achievable goals.",
    color: "cyan",
  },
  {
    icon: Lightbulb,
    title: "Innovation-First",
    description: "From ideation to execution, I leverage cutting-edge tools and methodologies to deliver modern digital solutions.",
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Growth-Oriented",
    description: "I believe in continuous learning and evolution — staying ahead of industry trends to create lasting impact.",
    color: "purple",
  },
];

export default function AboutPreviewSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded border border-primary/20 bg-primary/5 mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-primary">
              WHO I AM
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            More Than a{" "}
            <span className="text-gradient-primary">Developer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed"
          >
            I sit at the intersection of technology, strategy, and creativity.
            My approach combines technical expertise with entrepreneurial thinking
            to build solutions that matter.
          </motion.p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, i) => {
            const borderGlow =
              item.color === "cyan"
                ? "border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                : item.color === "blue"
                  ? "border-primary/20 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,180,255,0.1)]"
                  : "border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]";

            const iconColor =
              item.color === "cyan"
                ? "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
                : item.color === "blue"
                  ? "text-primary bg-primary/10 border-primary/20"
                  : "text-purple-400 bg-purple-500/10 border-purple-500/20";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
                className={`rounded-xl border ${borderGlow} bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 group`}
              >
                <div className={`inline-flex p-2.5 rounded-lg border ${iconColor} mb-4`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-semibold tracking-[0.15em] rounded border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,180,255,0.15)]"
          >
            LEARN MORE ABOUT ME
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
