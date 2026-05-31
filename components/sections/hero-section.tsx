"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Code2,
  Shield,
  Brain,
  ArrowRight,
  Rocket,
  Users,
  Clock,
  Award,
  TrendingUp,
  Infinity,
} from "lucide-react";

/* ─────────── animated letter-by-letter title ─────────── */
function AnimatedTitle() {
  const lines = ["TEKENATEI", "FRANKLYN"];
  return (
    <div className="space-y-0 leading-none">
      {lines.map((line, li) => (
        <div key={li} className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 + li * 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-black tracking-tight leading-[0.95]">
              {line.split("").map((char, ci) => (
                <motion.span
                  key={ci}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + li * 0.3 + ci * 0.04 }}
                  className={li === 1 ? "text-gradient-primary inline-block" : "inline-block"}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

/* ─────────── hero tag badge ─────────── */
function HeroTag() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded border border-cyan-500/30 bg-cyan-500/5"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
      <span className="text-[11px] font-bold tracking-[0.2em] text-cyan-400">
        DIGITAL LEADER. ENTREPRENEUR. INNOVATOR.
      </span>
    </motion.div>
  );
}

/* ─────────── skill pills ─────────── */
const skills = [
  { icon: Briefcase, label: "PRODUCT/PROJECT MANAGEMENT", color: "cyan" },
  { icon: Code2, label: "FRONT-END ENGINEER", color: "blue" },
  { icon: Shield, label: "CYBER SECURITY & ETHICAL HACKING", color: "purple" },
  { icon: Brain, label: "AI", color: "cyan" },
];

function SkillPills() {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => {
        const iconBorderColor =
          skill.color === "cyan"
            ? "border-cyan-500/40 text-cyan-400 bg-cyan-500/5"
            : skill.color === "blue"
              ? "border-primary/40 text-primary bg-primary/5"
              : "border-purple-500/40 text-purple-400 bg-purple-500/5";

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.8 + i * 0.1 }}
            className="flex items-center gap-2 pl-1.5 pr-3 py-1 rounded border border-border bg-card/50 backdrop-blur-sm text-[9px] xl:text-[10px] font-semibold tracking-wider text-muted-foreground hover:border-primary/30 hover:text-primary transition-all cursor-default"
          >
            {/* Styled Icon Box */}
            <div className={`p-1 rounded border ${iconBorderColor} flex items-center justify-center shrink-0`}>
              <skill.icon className="h-3 w-3" />
            </div>
            <span>{skill.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─────────── career cards ─────────── */
const careers = [
  {
    icon: Briefcase,
    title: "PRODUCT/\nPROJECT MANAGER",
    description: "I turn ideas into structured plans and lead projects that deliver real value.",
    color: "cyan",
  },
  {
    icon: Code2,
    title: "FRONT-END\nENGINEER",
    description: "I build fast, responsive and beautiful user experiences with modern technologies.",
    color: "blue",
  },
  {
    icon: Shield,
    title: "CYBER SECURITY\n& ETHICAL HACKING",
    description: "I am transitioning into this role, exploring how to find weaknesses so systems stay strong and protected.",
    color: "purple",
  },
];

function CareerCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {careers.map((career, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 + i * 0.15 }}
        >
          <div className={`hud-card hud-card--${career.color}`}>
            {/* Corner glow nodes at chamfer vertices */}
            <span className="hud-node hud-node--v0" />
            <span className="hud-node hud-node--v1" />
            <span className="hud-node hud-node--v2" />
            <span className="hud-node hud-node--v3" />
            <span className="hud-node hud-node--v4" />
            <span className="hud-node hud-node--v5" />
            <span className="hud-node hud-node--v6" />
            <span className="hud-node hud-node--v7" />

            <div className="hud-card-content">
              {/* Icon */}
              <div className="hud-icon-box inline-flex p-1.5 rounded-md border bg-transparent mb-3 hud-icon">
                <career.icon className="h-4 w-4" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="hud-card-title text-[14px] xl:text-[15px] font-bold tracking-wide mb-2 whitespace-pre-line leading-tight">
                {career.title}
              </h3>

              {/* Description */}
              <p className="text-[11px] xl:text-[12px] text-[#B0B7C3] leading-relaxed mb-4">
                {career.description}
              </p>

              {/* Button */}
              <button className="hud-btn">
                EXPLORE <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}


/* ─────────── simplified world map svg ─────────── */
function WorldMapSVG() {
  return (
    <svg viewBox="0 0 120 60" className="w-full h-full text-cyan-400/25" fill="currentColor">
      {/* North America */}
      <path d="M10,12 L18,12 L22,16 L25,14 L32,15 L35,22 L28,26 L22,25 L16,22 L12,22 L10,16 Z" />
      {/* Greenland */}
      <path d="M30,8 L36,7 L38,10 L34,12 Z" />
      {/* South America */}
      <path d="M26,27 L32,27 L35,32 L32,38 L30,46 L27,48 L25,44 L23,38 L25,32 Z" />
      {/* Africa */}
      <path d="M50,22 L58,20 L64,22 L66,28 L64,34 L60,40 L57,42 L55,40 L54,34 L50,28 Z" />
      {/* Europe & Asia */}
      <path d="M42,12 L50,11 L60,11 L70,12 L84,14 L92,15 L95,20 L92,26 L88,28 L80,28 L74,25 L68,26 L62,25 L55,27 L48,26 L45,22 L42,16 Z" />
      {/* India / Southeast Asia */}
      <path d="M72,25 L75,28 L78,28 L82,32 L84,30 L80,25 Z" />
      {/* Australia */}
      <path d="M84,38 L92,38 L94,42 L90,46 L85,45 L82,42 Z" />
      {/* Japan */}
      <path d="M93,17 L95,19 L94,22 Z" />
      {/* UK & Ireland */}
      <path d="M42,14 L44,15 L43,18 Z" />
    </svg>
  );
}

/* ─────────── system status panel ─────────── */
function SystemStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="rounded-xl border border-border bg-card/70 backdrop-blur-md p-3.5 xl:p-4 space-y-2.5"
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-[0.15em] text-muted-foreground">
          SYSTEM STATUS
        </span>
        <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse" />
      </div>

      <div className="h-px bg-border/60" />

      <div className="space-y-2 text-[10px]">
        <div className="flex gap-2">
          <span className="text-muted-foreground font-medium w-14 shrink-0">PROFILE:</span>
          <span className="font-semibold text-foreground">TEKENATEI FRANKLYN</span>
        </div>
        <div className="flex gap-2">
          <span className="text-muted-foreground font-medium w-14 shrink-0">ROLES:</span>
          <span className="font-semibold text-foreground leading-normal">
            PRODUCT/PROJECT MANAGER,
            <br />
            FRONT-END ENGINEER,
            <br />
            CYBER SECURITY & ETHICAL HACKING
          </span>
        </div>
      </div>

      <div className="h-px bg-border/60" />

      <div className="flex justify-between items-end gap-2 text-[10px]">
        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex gap-2">
            <span className="text-muted-foreground font-medium w-14 shrink-0">LOCATION:</span>
            <span className="font-semibold text-foreground">GLOBAL</span>
          </div>
          <div className="flex gap-2">
            <span className="text-muted-foreground font-medium w-14 shrink-0">STATUS:</span>
            <span className="font-bold text-emerald-400 flex items-center gap-1">ONLINE</span>
          </div>
          <div className="flex gap-2">
            <span className="text-muted-foreground font-medium w-14 shrink-0">FOCUS:</span>
            <span className="font-semibold text-[9px] tracking-tight text-foreground uppercase">
              INNOVATE | SECURE | SCALE
            </span>
          </div>
        </div>

        {/* Mini World Map */}
        <div className="w-24 h-12 shrink-0 opacity-60 mr-1 mb-0.5">
          <WorldMapSVG />
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────── market watch widget ─────────── */
function MarketWatch() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let offset = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Candlestick-like bars
      const barWidth = 5;
      const gap = 2.5;
      const count = Math.floor(w / (barWidth + gap));

      for (let i = 0; i < count; i++) {
        const x = i * (barWidth + gap);
        const seed = Math.sin((i + offset * 0.02) * 0.5) * 0.5 + 0.5;
        const barH = seed * (h * 0.7) + h * 0.1;
        const isGreen = Math.sin((i + offset * 0.015) * 0.7) > -0.2;

        ctx.fillStyle = isGreen ? "rgba(34,197,94,0.7)" : "rgba(239,68,68,0.5)";
        ctx.fillRect(x, h - barH, barWidth, barH);

        // Wick
        ctx.strokeStyle = isGreen ? "rgba(34,197,94,0.4)" : "rgba(239,68,68,0.3)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x + barWidth / 2, h - barH - seed * 6);
        ctx.lineTo(x + barWidth / 2, h - barH);
        ctx.stroke();
      }

      offset++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1.1 }}
      className="rounded-xl border border-border bg-card/70 backdrop-blur-md p-3.5 xl:p-4 space-y-2"
    >
      <span className="text-[10px] font-bold tracking-[0.15em] text-muted-foreground">
        MARKET WATCH
      </span>
      <div className="space-y-0.5">
        <span className="text-[9px] font-bold text-emerald-400 tracking-wider">NQ 100</span>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold font-mono tabular-nums">18,732.65</span>
          <span className="text-[9px] font-bold text-emerald-400">+1.35%</span>
        </div>
      </div>
      <canvas ref={canvasRef} width={200} height={45} className="w-full rounded opacity-80" />
      <div className="text-[9px] font-bold tracking-wider text-muted-foreground">
        TREND: <span className="text-emerald-400">BULLISH</span>
      </div>
    </motion.div>
  );
}

/* ─────────── bottom metrics ─────────── */
const metrics = [
  { icon: Rocket, value: "15+", label: "PROJECTS\nDELIVERED" },
  { icon: Users, value: "10+", label: "HAPPY\nCLIENTS" },
  { icon: Clock, value: "2+", label: "YEARS OF\nEXPERIENCE" },
  { icon: Award, value: <Infinity className="h-5 w-5" />, label: "COMMITMENT TO\nEXCELLENCE" },
];

function BottomMetrics() {
  return (
    <div className="flex flex-wrap items-center gap-5 sm:gap-8">
      {metrics.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.8 + i * 0.1 }}
          className="flex items-center gap-2.5"
        >
          <div className="p-1.5 rounded-lg border border-border bg-muted/30">
            <m.icon className="h-3.5 w-3.5 text-primary" />
          </div>
          <div>
            <div className="text-lg font-bold font-mono tabular-nums leading-none">
              {m.value}
            </div>
            <div className="text-[8px] font-semibold tracking-[0.15em] text-muted-foreground whitespace-pre-line leading-tight mt-0.5">
              {m.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─────────── rotating quotes ─────────── */
const quotes = [
  "I DON'T JUST FOLLOW THE FUTURE, I BUILD IT, SECURE IT, AND INVEST IN IT.",
  "VISION WITHOUT EXECUTION IS ONLY IMAGINATION.",
  "INNOVATION STARTS WHERE CURIOSITY MEETS DISCIPLINE.",
  "TECHNOLOGY IS MOST POWERFUL WHEN IT SOLVES REAL PROBLEMS.",
  "BUILD. LEARN. ADAPT. REPEAT.",
];

function RotatingQuote() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % quotes.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const renderQuote = (q: string) => {
    if (q.includes("BUILD IT")) {
      return (
        <span>
          I DON&apos;T JUST FOLLOW THE FUTURE, <br />
          I <span className="text-primary font-black">BUILD IT</span>,{" "}
          <span className="text-emerald-400 font-black">SECURE IT</span>, AND{" "}
          <span className="text-purple-400 font-black">INVEST IN IT</span>.
        </span>
      );
    }
    return q;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 3.0 }}
      className="max-w-md text-right"
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-[11px] xl:text-xs font-bold tracking-wider leading-relaxed text-muted-foreground uppercase"
        >
          {renderQuote(quotes[idx])}
        </motion.p>
      </AnimatePresence>
      <p className="mt-1 text-base text-cyan-400/80 font-[family-name:var(--font-script)] transition-all">
        Tekenatei Franklyn
      </p>
    </motion.div>
  );
}

/* ─────────── cyber grid background ─────────── */
function CyberGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    let animId: number;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Slow-moving grid
      const gridSize = 60;
      const offsetY = (frame * 0.15) % gridSize;

      ctx.strokeStyle = "rgba(0, 180, 255, 0.03)";
      ctx.lineWidth = 0.5;

      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = -gridSize + offsetY; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Subtle particles
      for (let i = 0; i < 30; i++) {
        const px = ((Math.sin(i * 7.3 + frame * 0.003) + 1) / 2) * w;
        const py = ((Math.cos(i * 4.7 + frame * 0.002) + 1) / 2) * h;
        const alpha = (Math.sin(frame * 0.01 + i) + 1) * 0.015;
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 180, 255, ${alpha})`;
        ctx.fill();
      }

      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}

/* ─────────── custom cursor ─────────── */
function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{ left: pos.x - 4, top: pos.y - 4 }}
      >
        <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,180,255,0.5)]" />
      </div>
      <div
        className="fixed pointer-events-none z-[9998] hidden md:block transition-all duration-150"
        style={{ left: pos.x - 16, top: pos.y - 16 }}
      >
        <div className="h-8 w-8 rounded-full border border-primary/30" />
      </div>
    </>
  );
}



/* ═══════════════════════════════════════════════ */
/* ═══════════════  MAIN HERO EXPORT  ═══════════ */
/* ═══════════════════════════════════════════════ */
export default function HeroSection() {
  return (
    <>
      <CustomCursor />
      <CyberGrid />

      <section className="relative min-h-screen lg:min-h-0 lg:h-screen lg:max-h-screen overflow-hidden flex flex-col justify-between">
        {/* Hero background image */}
        <div className="absolute inset-0 z-0 bg-black">
          <div
            className="absolute inset-0 bg-cover bg-[position:56%_50%] bg-no-repeat opacity-[0.90] transition-all duration-700"
            style={{ backgroundImage: "url('/images/hero-bg.png')" }}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Main content */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-10 pt-[72px] pb-2 flex-1 flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch flex-1 w-full">
            {/* ── LEFT COLUMN: Hero content ── */}
            <div className="lg:col-span-7 flex flex-col justify-between py-1">
              <div className="space-y-3">
                <HeroTag />
                <AnimatedTitle />

                {/* Hero copy */}
                <div className="space-y-0.5 max-w-lg">
                  {[
                    "Hi, welcome to my world.",
                    "I am a Digital Leader, Strategist, Mentor and Innovator with an Entrepreneurial mindset.",
                    "I transform ideas into reality by combining technology, strategy, and creativity to solve real world problems.",
                    "I build, lead and innovate with a passion for excellence. From digital products and user experiences to emerging technologies and business innovation, I am committed to creating value, driving growth, and shaping the future.",
                    "",
                    "Building. Leading. Innovating.",
                  ].map((line, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
                      className="text-[11px] xl:text-[12px] text-muted-foreground leading-relaxed"
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>

                <SkillPills />
              </div>

              {/* Career cards */}
              <div className="mt-3">
                <CareerCards />
              </div>
            </div>

            {/* ── CENTER: Spacer column ── */}
            <div className="hidden lg:flex lg:col-span-2 relative items-center justify-center">
              {/* Text is baked into the background image */}
            </div>

            {/* ── RIGHT COLUMN: Widgets ── */}
            <div className="lg:col-span-3 flex flex-col justify-between py-1 max-w-[275px] xl:max-w-[290px] ml-auto w-full h-full self-stretch">
              <SystemStatus />
              <MarketWatch />
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR: Metrics + Quote ── */}
        <div className="relative z-10 border-t border-border bg-card/30 backdrop-blur-sm">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-3">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <BottomMetrics />
              <RotatingQuote />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
