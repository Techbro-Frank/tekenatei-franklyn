"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, FolderOpen, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ─── fade-up animation wrapper ─── */
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── styled section divider ─── */
function SectionDivider() {
  return (
    <div className="flex items-center gap-4 my-14 lg:my-20">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}

/* ─── section tag badge ─── */
function SectionTag({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded border border-primary/25 bg-primary/5 mb-5">
      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
      <span className="text-[10px] font-bold tracking-[0.2em] text-primary">{label}</span>
    </div>
  );
}

/* ─── styled pull-quote ─── */
function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <FadeUp>
      <blockquote className="relative my-10 lg:my-14 pl-6 border-l-2 border-primary/40">
        <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary/60" />
        <p className="text-lg md:text-xl font-semibold leading-relaxed text-foreground/90 italic">
          {children}
        </p>
      </blockquote>
    </FadeUp>
  );
}

/* ─── body paragraph ─── */
function P({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <FadeUp>
      <p className={`text-[14px] md:text-[15px] text-muted-foreground leading-[1.9] mb-5 ${className}`}>
        {children}
      </p>
    </FadeUp>
  );
}

/* ─── sub-heading ─── */
function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <FadeUp>
      <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4 mt-2">{children}</h3>
    </FadeUp>
  );
}

/* ═══════════════════════════════════════════════ */
/* ═══════════  ABOUT PAGE CONTENT  ═════════════ */
/* ═══════════════════════════════════════════════ */
export default function AboutPageContent() {
  return (
    <div className="relative">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />

      {/* ═══════ HERO HEADER ═══════ */}
      <section className="relative pb-4 lg:pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Text column */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <FadeUp>
              <SectionTag label="ABOUT ME" />
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold tracking-tight leading-[1.15] mb-6">
                Building{" "}
                <span className="text-gradient-primary">Solutions</span>, Leading{" "}
                <span className="text-gradient-accent">Products</span>, and Exploring{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                  What Comes Next
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-[15px] md:text-base text-muted-foreground leading-[1.85] max-w-2xl">
                My name is{" "}
                <span className="text-foreground font-semibold">Tekenatei Franklyn</span>.
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.85] mt-4 max-w-2xl">
                I am a{" "}
                <span className="text-primary font-medium">Product Manager</span>,{" "}
                <span className="text-cyan-400 font-medium">Front-End Engineer</span>, and emerging{" "}
                <span className="text-purple-400 font-medium">Cybersecurity and Ethical Hacking Professional</span>{" "}
                with a deep passion for technology, innovation, leadership, and continuous learning.
              </p>
            </FadeUp>

            {/* Quick action buttons */}
            <FadeUp delay={0.35}>
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <a
                  href="/resume.pdf"
                  download
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[10px] font-bold tracking-[0.12em] border border-border hover:border-primary/40 text-foreground/80 hover:text-primary bg-card/40 hover:bg-primary/5 backdrop-blur-sm transition-all duration-300"
                >
                  <Download className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform" />
                  DOWNLOAD RÉSUMÉ
                </a>
                <Link
                  href="/portfolios"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[10px] font-bold tracking-[0.12em] border border-border hover:border-cyan-400/40 text-foreground/80 hover:text-cyan-400 bg-card/40 hover:bg-cyan-500/5 backdrop-blur-sm transition-all duration-300"
                >
                  <FolderOpen className="h-3.5 w-3.5" />
                  VIEW PORTFOLIO
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-2 order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/15 via-cyan-500/8 to-purple-500/12 blur-2xl opacity-60" />

              <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-[0_0_50px_rgba(0,180,255,0.06)]">
                <Image
                  src="/images/about_2.png"
                  alt="Tekenatei Franklyn — Full portrait"
                  width={460}
                  height={575}
                  className="object-cover w-full max-w-[400px]"
                  priority
                />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/70 to-transparent image-bottom-fade" />
              </div>

              {/* Corner accents */}
              <div className="absolute -top-1.5 -left-1.5 w-5 h-5 border-t-2 border-l-2 border-primary/40 rounded-tl-md" />
              <div className="absolute -top-1.5 -right-1.5 w-5 h-5 border-t-2 border-r-2 border-cyan-400/40 rounded-tr-md" />
              <div className="absolute -bottom-1.5 -left-1.5 w-5 h-5 border-b-2 border-l-2 border-purple-400/40 rounded-bl-md" />
              <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 border-b-2 border-r-2 border-primary/40 rounded-br-md" />
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════ BODY CONTENT — centered narrower like journey page ═══════ */}
      <div className="mx-auto max-w-4xl">

      {/* ═══════ THE BEGINNING ═══════ */}
      <section>
        <FadeUp><SectionTag label="THE BEGINNING" /></FadeUp>
        <SubHeading>Where It All Started</SubHeading>

        <P>
          For me, technology has never been just a career path. It has been a journey of{" "}
          <span className="text-cyan-400 font-medium">curiosity</span>,{" "}
          <span className="text-emerald-400 font-medium">resilience</span>, and{" "}
          <span className="text-purple-400 font-medium">determination</span>.
        </P>

        <P>
          Long before I managed products or built software, I was simply a young student fascinated by how technology worked and how it could be used to solve real-world problems. In{" "}
          <span className="text-foreground font-semibold">2019</span>, I got my first laptop — a machine that many people would probably consider unusable today. It was slow, unreliable, and often took so long to start that I would turn it on and walk away before coming back to use it.
        </P>

        <PullQuote>
          But that laptop became the foundation of everything that followed.
        </PullQuote>

        <P>
          While studying at university, I dedicated countless hours to learning technology independently. I started with{" "}
          <span className="text-primary font-medium">HTML</span>,{" "}
          <span className="text-cyan-400 font-medium">CSS</span>, and{" "}
          <span className="text-emerald-400 font-medium">JavaScript</span>, spending my free time watching tutorials, practicing, building small projects, and trying to understand how digital products were created.
        </P>

        <PullQuote>
          What began as curiosity eventually became commitment — and a lifetime one at that.
        </PullQuote>

        <P>
          As my interest grew, I pursued formal training through multiple professional programs and certifications, including the{" "}
          <span className="text-foreground font-medium">ALX Software Engineering Program</span>, product management training, project management, entrepreneurship education, digital marketing and several other technology-focused programs. By the time I graduated from university, I had completed{" "}
          <span className="text-primary font-semibold">seven professional certifications</span>{" "}
          across different disciplines while simultaneously balancing academics, leadership activities, and personal development.
        </P>

        <PullQuote>Those experiences shaped how I think today.</PullQuote>

        <P>
          They taught me that great products are not built by technology alone. They are built by{" "}
          <span className="text-cyan-400 font-medium">understanding people</span>,{" "}
          <span className="text-primary font-medium">solving meaningful problems</span>, and{" "}
          <span className="text-purple-400 font-medium">bringing together teams</span>{" "}
          capable of turning ideas into reality.
        </P>
      </section>

      <SectionDivider />

      {/* ═══════ POST GRADUATION ═══════ */}
      <section>
        <FadeUp><SectionTag label="POST GRADUATION" /></FadeUp>
        <SubHeading>The Professional Journey</SubHeading>

        <P>
          Over the years, I have worked across multiple industries, contributing to projects within{" "}
          <span className="text-foreground font-medium">hospitality</span>,{" "}
          <span className="text-foreground font-medium">business services</span>,{" "}
          <span className="text-foreground font-medium">digital platforms</span>,{" "}
          <span className="text-foreground font-medium">SaaS products</span>,{" "}
          <span className="text-foreground font-medium">mobile applications</span>,{" "}
          <span className="text-foreground font-medium">emerging technology solutions</span>,{" "}
          <span className="text-foreground font-medium">oil and gas</span> and{" "}
          <span className="text-foreground font-medium">real estate</span>.
        </P>

        <P>
          My professional journey into Product Management officially began in{" "}
          <span className="text-primary font-semibold">2024</span>, although I had already been actively contributing to the development and delivery of live digital products and technology solutions long before then. Through hands-on involvement in software projects, startup environments, and collaborative product development efforts, I gained practical experience in transforming ideas into working solutions and understanding how technology creates value for businesses and users.
        </P>

        <P>
          As a <span className="text-primary font-medium">Product Manager</span>, I have led products from concept to execution — working closely with stakeholders, gathering user insights, defining product requirements, creating user flows, coordinating design and development teams, and ensuring every solution delivers measurable business value.
        </P>
      </section>

      <SectionDivider />

      {/* ═══════ ANLI SOLUTIONS ═══════ */}
      <section>
        <FadeUp><SectionTag label="KEY PRODUCT" /></FadeUp>
        <SubHeading>Anli Solutions</SubHeading>

        <P>
          One of the most significant products I have led is{" "}
          <span className="text-primary font-semibold">Anli Solutions</span>, a web-based hospitality management platform designed to go beyond the traditional Property Management System (PMS). The platform was built to serve the broader hospitality ecosystem, integrating{" "}
          <span className="text-foreground font-medium">hotel operations</span>,{" "}
          <span className="text-foreground font-medium">food and beverage management</span>,{" "}
          <span className="text-foreground font-medium">restaurants</span>,{" "}
          <span className="text-foreground font-medium">bars</span>,{" "}
          <span className="text-foreground font-medium">inventory management</span>,{" "}
          <span className="text-foreground font-medium">banquet operations</span>,{" "}
          <span className="text-foreground font-medium">membership management</span>, and other critical business functions into a unified solution.
        </P>

        <P>
          What makes this journey particularly meaningful to me is that I was involved from the very beginning. Starting with an idea and a vision for what the platform could become, I worked across both Product Management and Project Management functions — leading product discovery, gathering user requirements, defining workflows, documenting product requirements, coordinating stakeholders, guiding design and development teams, managing delivery timelines, and helping transform the concept into a live, evolving product used today.
        </P>

        <PullQuote>
          That experience strengthened my ability to bridge business goals, user needs, and technical execution while leading cross-functional teams toward a common objective.
        </PullQuote>
      </section>

      <SectionDivider />

      {/* ═══════ CAADES GROUP ═══════ */}
      <section>
        <FadeUp><SectionTag label="CURRENT ROLE" /></FadeUp>
        <SubHeading>Caades Group</SubHeading>

        <P>
          Beyond product management and software development, I currently contribute to the operations of{" "}
          <span className="text-foreground font-semibold">Caades Group</span>, a diversified conglomerate with interests spanning{" "}
          <span className="text-emerald-400 font-medium">oil and gas</span>,{" "}
          <span className="text-cyan-400 font-medium">hospitality</span>,{" "}
          <span className="text-purple-400 font-medium">real estate and construction</span>{" "}
          through its subsidiaries, including{" "}
          <span className="text-foreground font-medium">Caades Energies</span>,{" "}
          <span className="text-foreground font-medium">The Corniche Hotel</span>,{" "}
          <span className="text-foreground font-medium">Chimberland Properties</span>, and{" "}
          <span className="text-foreground font-medium">Caades Construction</span>.
        </P>

        <P>
          My role sits at the intersection of technology, project coordination, business development and strategic operations. I oversee and manage digital platforms and technology infrastructure across the group, support technology-driven initiatives, and contribute to projects that cut across the oil and gas, hospitality, real estate and construction sectors.
        </P>

        <P>
          I also contribute as an{" "}
          <span className="text-primary font-medium">Evaluation Analyst</span> and{" "}
          <span className="text-cyan-400 font-medium">Business Development Professional</span>, where I review investment proposals, evaluate business opportunities, prepare presentations and strategic reports, support decision-making processes and contribute to business growth initiatives. I am also involved in supporting the group&apos;s import and export operations, particularly in engagements with partners and suppliers in China, helping bridge business objectives with operational execution.
        </P>

        <P>
          This multifaceted experience has given me valuable exposure to industries beyond traditional software development and strengthened my understanding of business strategy, investment analysis, business operations, stakeholder expectations, project delivery, technology implementation and organizational growth. Working across diverse sectors and complex environments has enabled me to bridge technical and commercial perspectives, helping me make informed decisions that align business objectives, operational efficiency, and long-term growth.
        </P>
      </section>

      <SectionDivider />

      {/* ═══════ ENGINEERING & CYBERSECURITY ═══════ */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Engineering */}
          <div>
            <FadeUp><SectionTag label="ENGINEERING" /></FadeUp>
            <SubHeading>Front-End Engineering</SubHeading>

            <P>
              As a <span className="text-cyan-400 font-medium">Front-End Engineer</span>, I have contributed to building responsive digital experiences, business platforms, web applications, and customer-facing products. My engineering background gives me a practical understanding of{" "}
              <span className="text-foreground font-medium">how products are built</span>, while my product management experience helps me focus on{" "}
              <span className="text-foreground font-medium">why they should be built</span>.
            </P>

            <PullQuote>
              This combination allows me to bridge the gap between business objectives, user needs, and technical execution.
            </PullQuote>
          </div>

          {/* Cybersecurity */}
          <div>
            <FadeUp><SectionTag label="NEXT CHAPTER" /></FadeUp>
            <SubHeading>Cybersecurity</SubHeading>

            <P>
              Today, my journey continues as I expand into{" "}
              <span className="text-purple-400 font-medium">cybersecurity</span>.
            </P>

            <P>
              Cybersecurity represents the next chapter of my growth — a field that combines{" "}
              <span className="text-primary font-medium">problem-solving</span>,{" "}
              <span className="text-cyan-400 font-medium">analytical thinking</span>,{" "}
              <span className="text-emerald-400 font-medium">continuous learning</span>{" "}
              and the responsibility of protecting digital systems in an increasingly connected world.
            </P>

            <P>
              I am currently building expertise in security operations, ethical hacking, and digital security while leveraging the strong foundations I have developed through product management and software engineering.
            </P>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════ WHAT I BELIEVE ═══════ */}
      <section>
        <FadeUp><SectionTag label="PHILOSOPHY" /></FadeUp>
        <SubHeading>What I Believe</SubHeading>

        <div className="max-w-3xl">
          <FadeUp>
            <div className="rounded-xl border border-primary/15 bg-primary/[0.03] p-6 md:p-8 mb-8">
              <p className="text-lg md:text-xl font-semibold text-foreground/90 leading-relaxed mb-4">
                I believe every problem has a{" "}
                <span className="text-primary">solution</span>.
              </p>
              <p className="text-[14px] text-muted-foreground leading-[1.8] mb-2">
                Sometimes the solution is obvious.
              </p>
              <p className="text-[14px] text-muted-foreground leading-[1.8] mb-2">
                Sometimes it requires research, collaboration, experimentation, and persistence.
              </p>
              <p className="text-[14px] text-foreground/80 leading-[1.8] font-medium">
                But solutions exist.
              </p>
            </div>
          </FadeUp>

          <P>
            That mindset has guided me throughout my career and continues to shape how I approach challenges, projects, teams, and opportunities.
          </P>

          <P>
            I also believe that{" "}
            <span className="text-cyan-400 font-medium">learning should never stop</span>.
            Technology evolves too quickly for complacency, which is why I constantly invest in expanding my knowledge, exploring new industries, and developing new skills.
          </P>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════ BEYOND WORK ═══════ */}
      <section>
        <FadeUp><SectionTag label="PERSONAL" /></FadeUp>
        <SubHeading>Beyond Work</SubHeading>

        <P>When I am not working, you will usually find me learning.</P>

        <P>
          I enjoy studying technology trends, reading books on leadership, entrepreneurship, personal development, and innovation, exploring financial markets, playing chess, watching football, and spending time outdoors.
        </P>

        <P>
          I enjoy thoughtful conversations, new ideas, and opportunities that challenge me to grow.
        </P>

        <PullQuote>
          Most importantly, I enjoy building things that make a meaningful difference.
        </PullQuote>
      </section>

      <SectionDivider />

      {/* ═══════ CTA ═══════ */}
      <section className="pb-8">
        <FadeUp><SectionTag label="CONNECT" /></FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            Let&apos;s Build Something{" "}
            <span className="text-gradient-primary">Meaningful</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.85] max-w-3xl mb-4">
            Whether you are looking for a{" "}
            <span className="text-primary font-medium">Product Manager</span>, a{" "}
            <span className="text-cyan-400 font-medium">Front-End Engineer</span>, a technology collaborator, an intern Cybersecurity Analyst to join your team or simply someone passionate about solving problems and creating impact — I would love to connect.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.85] max-w-3xl mb-8">
            Feel free to explore my portfolio, view my projects, download my résumé, or reach out directly.
          </p>
        </FadeUp>

        {/* CTA Buttons */}
        <FadeUp delay={0.25}>
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-lg text-[11px] font-bold tracking-[0.15em] text-primary-foreground bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-[0_0_20px_rgba(0,180,255,0.15)] hover:shadow-[0_0_30px_rgba(0,180,255,0.3)] overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10 flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5" />
                LET&apos;S CONNECT
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-[11px] font-bold tracking-[0.15em] border border-border hover:border-primary/40 text-foreground/80 hover:text-primary bg-card/40 hover:bg-primary/5 backdrop-blur-sm transition-all duration-300"
            >
              <Download className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform" />
              DOWNLOAD RÉSUMÉ
            </a>

            <Link
              href="/portfolios"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-[11px] font-bold tracking-[0.15em] border border-border hover:border-cyan-400/40 text-foreground/80 hover:text-cyan-400 bg-card/40 hover:bg-cyan-500/5 backdrop-blur-sm transition-all duration-300"
            >
              <FolderOpen className="h-3.5 w-3.5" />
              VIEW PORTFOLIO
            </Link>
          </div>
        </FadeUp>

        {/* Journey callout */}
        <FadeUp delay={0.3}>
          <div className="rounded-xl border border-purple-500/15 bg-purple-500/[0.03] p-6 md:p-8 max-w-3xl">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg border border-purple-500/25 bg-purple-500/10 shrink-0 mt-0.5">
                <BookOpen className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.85]">
                  And if you are interested in my full story — my childhood, the challenges, lessons, failures, milestones and experiences that shaped who I am today from the day I was born till date, you can visit{" "}
                  <Link
                    href="/journey"
                    className="text-purple-400 font-semibold hover:text-purple-300 underline underline-offset-4 decoration-purple-400/30 hover:decoration-purple-400/60 transition-colors"
                  >
                    My Journey
                  </Link>{" "}
                  page to learn more about the path behind the person.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      </div>{/* end centered body content */}
    </div>
  );
}
