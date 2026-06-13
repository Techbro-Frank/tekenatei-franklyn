"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

/* ─────────── career data ─────────── */
const careers = [
  {
    icon: Briefcase,
    title: "PRODUCT/\nPROJECT MANAGER",
    description:
      "I turn ideas into structured plans and lead projects that deliver real value.",
    color: "cyan",
    href: "/portfolios/product-management",
  },
  {
    icon: Code2,
    title: "FRONT-END\nENGINEER",
    description:
      "I build fast, responsive and beautiful user experiences with modern technologies.",
    color: "blue",
    href: "/portfolios/engineering",
  },
  {
    icon: Shield,
    title: "CYBER SECURITY\n& ETHICAL HACKING",
    description:
      "I am transitioning into this role, exploring how to find weaknesses so systems stay strong and protected.",
    color: "purple",
    href: "/portfolios/cybersecurity",
  },
];

/* ═══════════════════════════════════════════════ */
/* ═════════  PORTFOLIO PAGE CONTENT  ═══════════ */
/* ═══════════════════════════════════════════════ */
export default function PortfolioPageContent() {
  return (
    <div className="relative">
      {/* Background grid layer */}
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />

      {/* ═══════ HERO HEADER ═══════ */}
      <section className="relative text-center pb-6 lg:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded border border-primary/25 bg-primary/5 mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.2em] text-primary">
            MY PORTFOLIOS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold tracking-tight leading-[1.15] mb-6"
        >
          Which Side of Me{" "}
          <span className="text-gradient-primary">Would You</span>{" "}
          <span className="text-gradient-accent">Like to</span>{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Explore?
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.85] max-w-2xl mx-auto mb-4"
        >
          Hi there! I wear multiple hats across technology, product development, and security.
          Whether you want to see me as a{" "}
          <span className="text-primary font-medium">Product Manager</span>, a{" "}
          <span className="text-cyan-400 font-medium">Front-End Engineer</span>, or a{" "}
          <span className="text-purple-400 font-medium">
            Cybersecurity & Ethical Hacking Professional
          </span>{" "}
          — pick a card below to explore that side of my work.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[13px] text-muted-foreground/60 italic"
        >
          Choose a path to explore my projects, experience, and contributions.
        </motion.p>
      </section>

      {/* ═══════ CAREER CARDS ═══════ */}
      <section className="relative">
        {/* Subtle glow behind cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(0,180,255,0.06),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {careers.map((career, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.15 }}
            >
              <Link href={career.href} className="block group">
                <div className={`hud-card hud-card--${career.color} portfolio-card`}>
                  {/* Corner glow nodes */}
                  <span className="hud-node hud-node--v0" />
                  <span className="hud-node hud-node--v1" />
                  <span className="hud-node hud-node--v2" />
                  <span className="hud-node hud-node--v3" />
                  <span className="hud-node hud-node--v4" />
                  <span className="hud-node hud-node--v5" />
                  <span className="hud-node hud-node--v6" />
                  <span className="hud-node hud-node--v7" />

                  <div className="hud-card-content flex flex-col items-center text-center min-h-[280px] justify-between">
                    {/* Icon */}
                    <div className="hud-icon-box inline-flex p-3 rounded-lg border bg-transparent mb-5 hud-icon">
                      <career.icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="hud-card-title text-[17px] lg:text-[19px] font-bold tracking-wide mb-3 whitespace-pre-line leading-tight">
                      {career.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[12px] lg:text-[13px] text-[#B0B7C3] leading-relaxed mb-6 max-w-[280px]">
                      {career.description}
                    </p>

                    {/* Button */}
                    <div className="hud-btn">
                      EXPLORE <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════ BOTTOM QUOTE ═══════ */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative text-center pt-14 lg:pt-20 pb-4"
      >
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <p className="text-[12px] md:text-[13px] text-muted-foreground/60 leading-relaxed max-w-xl mx-auto italic">
          &ldquo;Each path represents a dimension of who I am. Together, they define the{" "}
          <span className="text-primary font-semibold not-italic">builder</span>,{" "}
          <span className="text-cyan-400 font-semibold not-italic">creator</span>, and{" "}
          <span className="text-purple-400 font-semibold not-italic">protector</span>{" "}
          I strive to be.&rdquo;
        </p>
        <p className="mt-2 text-sm text-cyan-400/80 font-[family-name:var(--font-script)]">
          Tekenatei Franklyn
        </p>
      </motion.section>
    </div>
  );
}
