"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Chapter data ─── */
interface Chapter {
  id: number;
  title: string;
  years: string;
  accentColor: string;
  glowColor: string;
  content: React.ReactNode;
}

/* ─── fade-up wrapper ─── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── paragraph helper ─── */
function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="story-paragraph">
      {children}
    </p>
  );
}

/* ─── emphasized line block ─── */
function ELine({ children }: { children: React.ReactNode }) {
  return <p className="story-emphasis-line">{children}</p>;
}

/* ─── pull quote ─── */
function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="story-pullquote">
      <div className="story-pullquote-bar" />
      <p>{children}</p>
    </blockquote>
  );
}

/* ═══════════════════════════════════════════════ */
/* ═══════  CHAPTER ACCORDION COMPONENT  ════════ */
/* ═══════════════════════════════════════════════ */

function ChapterAccordion({
  chapter,
  isOpen,
  onToggle,
  index,
}: {
  chapter: Chapter;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <FadeUp delay={index * 0.08}>
      <div className={`story-chapter ${isOpen ? "story-chapter--open" : ""}`}>
        {/* Timeline connector dot */}
        <div
          className="story-timeline-dot"
          style={{
            background: chapter.accentColor,
            boxShadow: `0 0 8px ${chapter.glowColor}, 0 0 20px ${chapter.glowColor}`,
          }}
        />

        {/* Chapter header — clickable */}
        <button
          onClick={onToggle}
          className="story-chapter-header"
          aria-expanded={isOpen}
          id={`chapter-btn-${chapter.id}`}
          aria-controls={`chapter-panel-${chapter.id}`}
        >
          {/* Left side: chapter info */}
          <div className="story-chapter-info">
            <span
              className="story-chapter-number"
              style={{ color: chapter.accentColor }}
            >
              CHAPTER {chapter.id}
            </span>
            <h3 className="story-chapter-title">{chapter.title}</h3>
            <span className="story-chapter-years">{chapter.years}</span>
          </div>

          {/* Right side: toggle button */}
          <div
            className="story-toggle-btn"
            style={
              {
                "--toggle-color": chapter.accentColor,
                "--toggle-glow": chapter.glowColor,
              } as React.CSSProperties
            }
          >
            <div className="story-toggle-icon">
              {/* Horizontal bar (always visible) */}
              <span className="story-toggle-h" />
              {/* Vertical bar (rotates away when open) */}
              <span
                className={`story-toggle-v ${isOpen ? "story-toggle-v--open" : ""}`}
              />
            </div>
          </div>
        </button>

        {/* Expandable content panel */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={`chapter-panel-${chapter.id}`}
              role="region"
              aria-labelledby={`chapter-btn-${chapter.id}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
                opacity: { duration: 0.35, delay: 0.1 },
              }}
              className="story-chapter-panel"
            >
              <div
                className="story-chapter-content"
                style={
                  {
                    "--chapter-accent": chapter.accentColor,
                    "--chapter-glow": chapter.glowColor,
                  } as React.CSSProperties
                }
              >
                {/* Accent top border line */}
                <div
                  className="story-content-accent-line"
                  style={{
                    background: `linear-gradient(to right, ${chapter.accentColor}, transparent)`,
                  }}
                />
                {chapter.content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}

/* ═══════════════════════════════════════════════ */
/* ═══════  CHAPTER DATA  ═══════════════════════ */
/* ═══════════════════════════════════════════════ */

const chapters: Chapter[] = [
  {
    id: 1,
    title: "The Beginning",
    years: "1999 – 2006",
    accentColor: "#00b4ff",
    glowColor: "rgba(0,180,255,0.35)",
    content: (
      <>
        <P>
          My name is <strong>Tekenatei Franklyn</strong>, and this is the story
          behind the person, the professional, and the journey that continues to
          shape who I am today.
        </P>
        <P>
          I was born on the <strong>23rd of July, 1999</strong>, in a community
          named <strong>Azuzuama</strong> in the Southern Ijaw Area of Bayelsa
          State, Nigeria, into a family that would eventually teach me some of
          life&apos;s hardest lessons much earlier than most people experience them.
        </P>
        <PullQuote>From the beginning, life was far from straightforward.</PullQuote>
        <P>
          My parents separated when I was just one year old. My father had left and
          the family structure that many children grow up with no longer existed. As
          a result, I spent most of my childhood without experiencing what it meant
          to have both parents actively raising me under the same roof. From a very
          early age, life taught me lessons about independence, resilience, and
          adaptation that many people do not encounter until much later in life.
        </P>
        <P>
          Our family consisted of five children. My mother had an older daughter
          before marrying my father, and together my parents had four children; two
          boys and two girls and I happened to be the last. While my sisters spent
          much of their childhood with relatives, my elder brother and I often moved
          between different homes and guardians as circumstances changed.
        </P>
        <P>
          For a period of my childhood, my elder brother and I lived with my
          grandfather, my mom&apos;s dad. It was there that I began primary school and
          started developing some of the qualities that would later define me.
        </P>
        <P>
          In <strong>2006</strong>, at the age of seven, my father returned and took
          my elder brother and me to live with him in a community near the
          Bayelsa–Delta boundary.
        </P>
      </>
    ),
  },
  {
    id: 2,
    title: "Learning Survival Early",
    years: "2006 – 2012",
    accentColor: "#06b6d4",
    glowColor: "rgba(6,182,212,0.35)",
    content: (
      <>
        <PullQuote>
          If there is one period of my life that taught me resilience, adaptability
          and survival, it was the years between 2006 and 2012.
        </PullQuote>
        <P>
          When my father took my elder brother and me to live with him, I believed
          life was finally becoming normal. Like many young boys, I hoped that
          living with my father would provide stability, guidance and a stronger
          sense of family.
        </P>
        <P>Life had other plans I guess.</P>
        <P>Those years became some of the most challenging years of my childhood.</P>
        <P>
          My father worked as a teacher and also operated a small medicine business
          within the community. On paper, it appeared that we had a chance to build
          a better life. In reality, however, my brother and I often found ourselves
          navigating difficult circumstances that forced us to mature far earlier
          than children should.
        </P>
        <P>
          Instead of experiencing a carefree childhood, I gradually learned what it
          meant to survive. At an age when most children worried about toys, games,
          and school activities, I was learning how to find solutions to real-life
          problems.
        </P>
        <div className="story-list-block">
          <ELine>I learned how to work.</ELine>
          <ELine>I learned how to hustle.</ELine>
          <ELine>I learned how to endure.</ELine>
        </div>
        <P>
          One lesson that remains vivid in my memory is learning how to cook. Today,
          many people compliment my cooking skills, especially when it comes to
          traditional meals and swallows. What they often do not know is that those
          skills were not developed out of convenience. They were developed out of
          necessity.
        </P>
        <P>
          I still remember the very first soup I ever cooked. I was around{" "}
          <strong>nine years old</strong>. The oil floated on top, the water sat
          beneath it, and the fish seemed to exist in an entirely different part of
          the pot. By every objective standard, it was a terrible meal.
        </P>
        <PullQuote>But to me, it represented something bigger.</PullQuote>
        <div className="story-list-block">
          <ELine>It represented independence.</ELine>
          <ELine>It represented adaptation.</ELine>
          <ELine>
            It represented a decision to find solutions instead of surrendering to
            circumstances.
          </ELine>
        </div>
        <P>As the years progressed, I became increasingly resourceful.</P>
        <div className="story-list-block">
          <ELine>I carried plank.</ELine>
          <ELine>I followed timber workers into the forest.</ELine>
          <ELine>I joined fishing activities.</ELine>
          <ELine>I participated in small trading activities.</ELine>
          <ELine>I sold goods.</ELine>
          <ELine>I looked for opportunities wherever I could find them.</ELine>
        </div>
        <P>
          The experiences were difficult, but they taught me something invaluable.
        </P>
        <div className="story-list-block">
          <ELine>They taught me that dignity comes from effort.</ELine>
          <ELine>They taught me that no honest work is beneath anyone.</ELine>
          <ELine>
            They taught me that survival often belongs to those willing to learn,
            adapt, and keep moving forward.
          </ELine>
        </div>
        <P>
          Football also became an important part of my childhood during this period.
          Whenever life became overwhelming, football provided an escape. For hours,
          I could forget every challenge and simply enjoy being a child.
        </P>
        <PullQuote>
          Looking back, I do not define those years by pain. I define them by
          growth.
        </PullQuote>
        <P>
          Those experiences built mental toughness. They developed problem-solving
          instincts. They strengthened my ability to function under pressure. They
          taught me how to remain calm when resources were limited. Most
          importantly, they helped me develop a deep appreciation for perseverance.
        </P>
        <P>
          Long before I understood leadership, entrepreneurship, technology, or
          business strategy, life was already teaching me the foundations of
          resilience.
        </P>
        <P>
          What I did not realize at the time was that resilience alone would not be
          enough. I still needed a compass. I still needed principles. I still
          needed values that would guide my decisions as I grew older.
        </P>
        <P>That discovery would begin in my teenage years.</P>
      </>
    ),
  },
  {
    id: 3,
    title: "Discovering Purpose",
    years: "2013 – 2018",
    accentColor: "#8b5cf6",
    glowColor: "rgba(139,92,246,0.35)",
    content: (
      <>
        <P>
          Every person has defining moments that change the direction of their life.
          For me, one of those moments happened in <strong>2014</strong>. I was
          fifteen years old.
        </P>
        <P>
          While many people around me focused only on immediate circumstances, I
          became fascinated by something different.{" "}
          <strong>Self-development.</strong>
        </P>
        <PullQuote>
          That curiosity would eventually transform my life.
        </PullQuote>
        <P>
          I began reading books on leadership, discipline, personal growth, success,
          communication, and self-improvement. Authors such as{" "}
          <strong>Brian Tracy</strong>, <strong>John C. Maxwell</strong>, and many
          others became silent mentors in my life.
        </P>
        <div className="story-list-block">
          <ELine>Books about leadership.</ELine>
          <ELine>Books about discipline.</ELine>
          <ELine>Books about personal responsibility.</ELine>
          <ELine>Books about excellence.</ELine>
          <ELine>Books about mindset.</ELine>
          <ELine>Books about success principles.</ELine>
          <ELine>Books about character.</ELine>
        </div>
        <PullQuote>
          For the first time, I realized that while I could not control where I came
          from, I could control who I was becoming.
        </PullQuote>
        <P>
          The more I read, the more I began to understand that success was not
          primarily about talent. It was about discipline. It was about consistency.
          It was about personal responsibility. It was about values.
        </P>
        <P>
          Over time, three principles became deeply rooted in my life:{" "}
          <strong>Discipline. Integrity. Dignity.</strong> Those principles continue
          to guide me today.
        </P>
        <P>
          Many years later, when opportunities emerged that could have generated
          quick money through unethical means, those same principles became my
          protection.
        </P>
        <P>
          At around the same period, my faith also became a significant part of my
          journey. My commitment to Christian values deepened and began influencing
          how I viewed life, leadership, service, and responsibility.
        </P>
        <div className="story-list-block">
          <ELine>Faith gave me perspective.</ELine>
          <ELine>Self-development gave me direction.</ELine>
          <ELine>Discipline gave me structure.</ELine>
        </div>
        <P>
          I started believing that I could build something meaningful. I started
          believing that leadership was not about titles but about influence and
          service. I started believing that technology could become a tool for
          solving real problems.
        </P>
        <PullQuote>
          Most importantly, I started believing that my story did not have to end
          where it started.
        </PullQuote>
      </>
    ),
  },
  {
    id: 4,
    title: "Fighting for Education",
    years: "2016 – 2019",
    accentColor: "#22c55e",
    glowColor: "rgba(34,197,94,0.35)",
    content: (
      <>
        <P>
          There are moments in life when survival becomes the primary goal. For my
          family, the years between <strong>2016 and 2019</strong> were some of
          those moments.
        </P>
        <P>
          By this time, I had already developed resilience, but resilience alone
          could not pay school fees, provide food, or guarantee a future. My dream
          was simple: I wanted an education. I wanted an opportunity. I wanted a
          chance to build a life larger than the circumstances I had been born into.
        </P>
        <P>
          Around this period, Nigeria experienced one of its most difficult economic
          downturns in recent history. My mother, who worked as a clerical officer
          at our community secondary school, was among those affected. Salaries were
          delayed for months, and when payments eventually came, deductions, loans
          and financial obligations consumed a significant portion of what little
          remained.
        </P>
        <PullQuote>
          If there is one person who deserves recognition in my story, it is my
          mother. She carried burdens that many people never saw.
        </PullQuote>
        <P>
          She endured financial hardship, emotional pressure, family
          responsibilities, and the challenge of raising children with limited
          resources. There were moments when she had almost nothing, yet she still
          found ways to keep us moving forward.
        </P>
        <P>
          There were seasons when survival became a daily battle. My elder brother
          and I often entered forests in search of food and resources. We trapped
          snail, gathered fruits, searched for anything that could help us make it
          through difficult days, and learned to survive with whatever was
          available.
        </P>
        <P>
          At one point, our situation became so challenging that our family moved to
          a fishing settlement within our community area. Night after night, we
          entered creeks and waterways to fish in the mangroves. We learned how to
          use nets and other fishing materials. We learned how to survive in
          unfamiliar environments.
        </P>
        <PullQuote>
          Adaptability is one of the greatest assets a person can possess.
        </PullQuote>
        <P>
          During this period, another person became instrumental in changing the
          direction of my future. My elder sister, <strong>Prosper</strong>, and her
          husband stepped in at a critical time. They provided support, shelter,
          encouragement, and stability during some of our most uncertain years.
        </P>
        <P>
          There is no honest version of my story that can be told without
          acknowledging the role Prosper played. She became more than an elder
          sister. She became a pillar. She became a protector.
        </P>
        <P>
          The road to university, however, was still far from smooth. My first WAEC
          examination did not produce the results I needed. I tried again. The
          second attempt was unsuccessful as well. For many people, repeated
          setbacks become reasons to quit. For me, they became reasons to continue.
        </P>
        <P>
          Eventually, after multiple attempts and countless frustrations, I secured
          the results I needed and sat for JAMB. When my admission into{" "}
          <strong>Niger Delta University</strong> finally came through, it felt like
          more than an admission letter.
        </P>
        <PullQuote>
          It felt like proof that persistence eventually produces results. It felt
          like hope.
        </PullQuote>
      </>
    ),
  },
  {
    id: 5,
    title: "The University Years",
    years: "2019 – 2024",
    accentColor: "#f59e0b",
    glowColor: "rgba(245,158,11,0.35)",
    content: (
      <>
        <P>
          If the previous chapters of my life were about survival, my university
          years were about <strong>transformation</strong>.
        </P>
        <P>
          I arrived at Niger Delta University carrying more than a school bag. I
          carried responsibilities. I carried expectations. I carried dreams. Most
          importantly, I carried a determination to create opportunities where none
          existed.
        </P>
        <P>
          Unlike many students whose education was primarily funded by parents, my
          journey through university was largely self-sponsored. My mother continued
          supporting me in every way she could, but her resources were limited.
        </P>
        <P>
          While many students focused solely on academics, I balanced academics with
          work, freelancing, personal development, leadership responsibilities,
          church service, and technology training. The workload was exhausting. But I
          had already learned something years earlier: progress rarely comes from
          comfort.
        </P>
        <PullQuote>
          That mindset eventually led me to graduate as the Best Graduating Student
          with a CGPA of 4.25, in the Department of Geography and Environmental
          Management.
        </PullQuote>
        <P>
          For me, that achievement represented far more than academic excellence. It
          represented years of sacrifice. Years of hunger. Years of self-belief.
          Years of refusing to quit. It represented every challenge that tried and
          failed to stop me.
        </P>
        <P>
          Beyond academics, I became deeply involved in leadership. I served as
          Secretary General within my faculty SUG and actively participated in
          student leadership initiatives.
        </P>
        <P>
          At the same time, my church became another important part of my
          development. I served extensively within the media and technical units,
          dedicating my time, skills, and resources to support the work being done.
        </P>
        <PullQuote>
          Those experiences helped shape my understanding of servant leadership —
          the idea that leadership is not about position but about responsibility.
        </PullQuote>
        <P>
          The university years also marked the beginning of my technology journey.
          That journey started with a decision that would later change my life. A
          laptop.
        </P>
      </>
    ),
  },
  {
    id: 6,
    title: "How I Got My First Laptop",
    years: "2019",
    accentColor: "#00b4ff",
    glowColor: "rgba(0,180,255,0.35)",
    content: (
      <>
        <P>
          One of the defining moments of my university journey was getting my first
          laptop. In <strong>2019</strong>, during my first year at the university,
          I had already developed a strong interest in technology and was spending
          countless hours learning through YouTube tutorials. I knew that if I
          wanted to build a future in tech, I needed a computer. The problem was
          simple: I could not afford one.
        </P>
        <P>
          At the time, my mother&apos;s salary was barely enough to support the family,
          and much of it was already committed to loans and other responsibilities.
          Yet I was determined not to allow my circumstances to limit my future.
          When her salary was paid, I withdrew the money and used it to purchase a
          fairly used laptop for about <strong>₦50,000</strong>.
        </P>
        <P>
          It was not a powerful machine by any standard. Sometimes it took so long
          to boot that I would switch it on, walk away to do something else, and
          return later when it was finally ready.
        </P>
        <PullQuote>
          When I showed the laptop to my mother and explained what I had done, it
          became an emotional moment for both of us. That laptop was more than a
          device — it was an investment in a dream.
        </PullQuote>
        <P>
          It became the tool through which I learned HTML, CSS, JavaScript, and many
          of the foundational skills that would eventually shape my career.
        </P>
        <P>
          As my journey progressed, I upgraded to a second laptop during my
          300-level year and another during my final year. Later, when I secured my
          first professional role, I was provided with a MacBook Pro for work.
          Looking back, each computer represented more than a technological
          upgrade — it marked a new stage in my growth, learning, and determination
          to build a future through technology.
        </P>
      </>
    ),
  },
  {
    id: 7,
    title: "Choosing Integrity",
    years: "University Years",
    accentColor: "#c44dff",
    glowColor: "rgba(196,77,255,0.35)",
    content: (
      <>
        <P>
          One of the most defining moments of my university journey was not
          receiving an award, passing an examination, or earning recognition. It was
          making a decision. A decision that would eventually shape the kind of
          professional I wanted to become.
        </P>
        <PullQuote>
          Skills can create opportunities, but character determines what you do with
          those opportunities.
        </PullQuote>
        <P>
          As my technical skills improved, I began receiving different types of
          requests from people. Some requests were legitimate. Others were not.
        </P>
        <P>
          I was approached by individuals who wanted websites and systems designed
          to deceive, manipulate, or exploit people — scamming sites for Yahoo
          (Internet Fraud) purposes. In some cases, the financial rewards were
          significant, especially for a student who had spent much of his life
          struggling financially.
        </P>
        <P>But there was a problem. They violated my principles.</P>
        <div className="story-list-block">
          <ELine>The books I had read.</ELine>
          <ELine>The values I had embraced.</ELine>
          <ELine>The discipline I had developed.</ELine>
          <ELine>The faith I had built.</ELine>
          <ELine>The lessons I had learned from my mother.</ELine>
        </div>
        <P>All of them pointed in the same direction.</P>
        <PullQuote>Integrity matters.</PullQuote>
        <P>
          I refused. Not because it was easy. Not because I was wealthy. Not because
          I had alternatives. I refused because I understood that the kind of future
          I wanted to build could not be built on compromised values.
        </P>
        <div className="story-list-block">
          <ELine>I wanted a career I could be proud of.</ELine>
          <ELine>I wanted a reputation people could trust.</ELine>
          <ELine>I wanted my name to stand for something meaningful.</ELine>
        </div>
        <P>
          That decision became one of the most important investments I ever made.
        </P>
        <P>
          During this period, I also completed several professional development
          programs and certifications in areas including entrepreneurship, project
          management, software engineering, virtual assistance, digital skills, and
          product management. Each certification represented more than knowledge. It
          represented preparation.
        </P>
        <P>
          As graduation approached, I made another important decision. I studied
          interview techniques. I learned recruitment processes. I prepared for
          opportunities before they arrived.
        </P>
        <PullQuote>
          Many people wait for opportunities before preparing. I chose to prepare
          before opportunities arrived.
        </PullQuote>
      </>
    ),
  },
  {
    id: 8,
    title: "Building a Career",
    years: "Post Graduation",
    accentColor: "#06b6d4",
    glowColor: "rgba(6,182,212,0.35)",
    content: (
      <>
        <P>
          By the time I graduated from Niger Delta University, I understood
          something that many people learn much later in life:
        </P>
        <PullQuote>
          A degree can open doors, but it is your skills, discipline, character, and
          ability to create value that determine how far you go.
        </PullQuote>
        <P>
          That mindset led me to one of the most transformative learning experiences
          of my life: <strong>ALX</strong>. The ALX Software Engineering Program was
          more than a technical course. It was a test of discipline, consistency,
          problem-solving, and personal responsibility.
        </P>
        <P>
          The same determination that helped me survive childhood challenges now
          helped me push through technical challenges. The same resilience that
          helped me navigate poverty now helped me navigate programming concepts,
          product thinking, software projects, and problem-solving frameworks.
        </P>
        <P>
          For me, technology was never simply about writing code. Technology became a
          tool for solving problems. A tool for creating opportunities. A tool for
          helping organizations become more efficient. A tool for creating impact at
          scale.
        </P>
        <P>
          Following graduation, I secured my first professional opportunity in
          technology. I began my professional journey as a{" "}
          <strong>Product Manager at Elusawari</strong>. The role exposed me to
          real-world product development, stakeholder management, user requirements,
          business strategy, and software delivery.
        </P>
        <P>
          Soon, another opportunity emerged. <strong>Anli Solutions</strong>. I
          became deeply involved in the growth and development of the platform,
          taking ownership of product decisions, stakeholder communication,
          requirements gathering, workflow optimization, and team coordination.
        </P>
        <P>
          The platform expanded across multiple functional areas, including front
          office operations, restaurant management, inventory control, food and
          beverage processes, membership systems, banquet management, and broader
          hospitality workflows.
        </P>
        <PullQuote>
          Technology is most valuable when it solves real-world problems.
        </PullQuote>
        <P>
          Alongside product management, I continued developing my technical
          capabilities. I worked as a freelance Front-End Engineer, designing and
          developing websites, digital platforms, and web applications for different
          organizations and clients.
        </P>
        <P>
          Today, whether I am working in product management, technology, consulting,
          business development, or organizational strategy, my objective remains the
          same: To create meaningful value. To solve meaningful problems. And to
          contribute to meaningful growth.
        </P>
      </>
    ),
  },
  {
    id: 9,
    title: "The Next Chapter",
    years: "Present & Beyond",
    accentColor: "#f43f5e",
    glowColor: "rgba(244,63,94,0.35)",
    content: (
      <>
        <P>
          Everything I have experienced — from childhood hardship to academic
          achievement, from self-education to leadership, from software engineering
          to product management — has contributed to a broader vision.
        </P>
        <PullQuote>
          A vision centered around leadership, innovation, enterprise building, and
          impact.
        </PullQuote>
        <P>
          I do not simply want to build a successful career. I want to build
          institutions. I want to build companies. I want to build systems that
          create opportunities for others. I want to contribute to industries that
          drive economic growth and human progress.
        </P>
        <P>
          The future I envision extends beyond software. It includes consulting. It
          includes engineering. It includes manufacturing. It includes energy. It
          includes business transformation. It includes leadership development. It
          includes innovation ecosystems that empower people and organizations to
          achieve more than they believed possible.
        </P>
        <P>
          One area that has recently captured my attention is{" "}
          <strong>cybersecurity</strong>. The more I learned about technology, the
          more I understood that innovation without security is incomplete. My goal
          is to understand how systems can be protected. A builder and a defender. A
          creator and a protector.
        </P>
        <PullQuote>
          Because when I look back, I see people whose sacrifices made my journey
          possible.
        </PullQuote>
        <P>
          I see my mother. A woman who carried responsibilities far beyond what
          should have been expected of one person. A woman who refused to quit even
          when life gave her every reason to.
        </P>
        <P>
          And I see my elder sister, <strong>Prosper</strong>. Someone who stepped
          forward when our family needed support. Someone who provided stability
          during uncertain seasons. Their sacrifices are woven into every achievement
          I have earned.
        </P>
        <PullQuote>
          Success is rarely achieved alone. The strongest people are often standing
          on foundations built by others who loved, sacrificed, and believed in them.
        </PullQuote>
      </>
    ),
  },
  {
    id: 10,
    title: "What I Believe",
    years: "Core Values",
    accentColor: "#8b5cf6",
    glowColor: "rgba(139,92,246,0.35)",
    content: (
      <>
        <PullQuote>
          A person&apos;s starting point does not determine their destination. Their
          mindset does. Their habits do. Their principles do.
        </PullQuote>

        {/* Values Grid */}
        <div className="story-values-grid">
          <div className="story-value-card" style={{ "--value-color": "#00b4ff" } as React.CSSProperties}>
            <span className="story-value-number">01</span>
            <h4>Discipline</h4>
            <p>
              Motivation comes and goes. Feelings change. Circumstances change.
              But discipline creates consistency. It is discipline that helped me
              study when others were sleeping and keep moving forward when progress
              felt slow.
            </p>
          </div>
          <div className="story-value-card" style={{ "--value-color": "#22c55e" } as React.CSSProperties}>
            <span className="story-value-number">02</span>
            <h4>Integrity</h4>
            <p>
              I would rather grow slowly with integrity than grow quickly without
              it. The opportunities I hope to attract in life require trust. And
              trust is built through integrity.
            </p>
          </div>
          <div className="story-value-card" style={{ "--value-color": "#f59e0b" } as React.CSSProperties}>
            <span className="story-value-number">03</span>
            <h4>Continuous Learning</h4>
            <p>
              Some of the most transformative lessons in my life came from books,
              courses, mentors, experiences, and personal reflection. I believe
              every person can reinvent themselves through learning.
            </p>
          </div>
          <div className="story-value-card" style={{ "--value-color": "#c44dff" } as React.CSSProperties}>
            <span className="story-value-number">04</span>
            <h4>Service</h4>
            <p>
              Leadership is about responsibility. It is about helping others
              succeed. It is about creating opportunities, solving problems, and
              leaving people and organizations better than you found them.
            </p>
          </div>
          <div className="story-value-card" style={{ "--value-color": "#f43f5e" } as React.CSSProperties}>
            <span className="story-value-number">05</span>
            <h4>Resilience</h4>
            <p>
              Resilience is not simply about surviving adversity. It is about
              growing through adversity — becoming stronger, wiser, and more
              capable because of what you have endured.
            </p>
          </div>
        </div>

        <P>
          These values — discipline, integrity, continuous learning, service, and
          resilience — form the foundation of who I am. They influence how I lead.
          They influence how I work. They influence how I build relationships. They
          influence how I make decisions.
        </P>
      </>
    ),
  },
  {
    id: 11,
    title: "The Legacy I Hope to Build",
    years: "The Future",
    accentColor: "#00F5D4",
    glowColor: "rgba(0,245,212,0.35)",
    content: (
      <>
        <P>
          When people read stories like mine, they often focus on where the story
          started. But when I think about my life, I spend very little time thinking
          about where I started. I spend much more time thinking about{" "}
          <strong>where I am going</strong>.
        </P>
        <PullQuote>Because my story is still being written.</PullQuote>
        <P>
          I believe I am still in the early stages of what I have been called to
          build. My ambition is not driven by a desire for recognition alone. It is
          driven by a desire for <strong>impact</strong>.
        </P>
        <div className="story-list-block">
          <ELine>I want to build organizations that solve meaningful problems.</ELine>
          <ELine>I want to create opportunities for talented people.</ELine>
          <ELine>I want to contribute to industries that improve lives.</ELine>
          <ELine>I want to help businesses grow.</ELine>
          <ELine>I want to help leaders succeed.</ELine>
          <ELine>
            I want to help teams achieve outcomes they once thought impossible.
          </ELine>
        </div>
        <P>
          I aspire to build companies that create value not only for shareholders,
          but also for employees, customers, communities, and society. I aspire to
          create systems that outlive me — systems that continue creating
          opportunities long after I am gone.
        </P>
        <PullQuote>
          I want to be remembered as someone who built things that mattered. Not
          just products. Not just businesses. Not just careers. But people.
        </PullQuote>
        <P>
          Somebody reading this may be facing challenges similar to the ones I
          faced. They may feel overlooked. They may feel disadvantaged. They may
          feel uncertain about what comes next.
        </P>
        <P>If my journey communicates anything, I hope it communicates this:</P>
        <div className="story-final-message">
          <ELine>Your current circumstances are not your final destination.</ELine>
          <ELine>Your future can be larger than your past.</ELine>
          <ELine>Your challenges can become your strengths.</ELine>
          <ELine>Your setbacks can become your lessons.</ELine>
          <ELine>
            And your story can become a source of inspiration for others.
          </ELine>
        </div>
        <PullQuote>
          That is the future I am working toward. That is the legacy I hope to
          build. And this journey is only just beginning.
        </PullQuote>
      </>
    ),
  },
];

/* ═══════════════════════════════════════════════ */
/* ═══════  MAIN MY STORY COMPONENT  ════════════ */
/* ═══════════════════════════════════════════════ */
export default function MyStoryContent() {
  const [openChapters, setOpenChapters] = useState<Set<number>>(new Set());

  const toggleChapter = (id: number) => {
    setOpenChapters((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenChapters(new Set(chapters.map((c) => c.id)));
  };

  const collapseAll = () => {
    setOpenChapters(new Set());
  };

  return (
    <div className="story-container">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="story-bg-glow story-bg-glow--1" />
      <div className="story-bg-glow story-bg-glow--2" />

      {/* ─── HERO HEADER ─── */}
      <section className="story-hero">
        <FadeUp>
          <div className="story-hero-badge">
            <span className="story-hero-badge-dot" />
            <span>MY JOURNEY</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="story-hero-title">
            The Story Behind{" "}
            <span className="story-hero-title-accent">The Person</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="story-hero-subtitle">
            From a small community in Bayelsa State to building technology
            solutions that impact lives — this is my journey of resilience,
            purpose, and continuous growth.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="story-hero-stats">
            <div className="story-stat">
              <span className="story-stat-number">11</span>
              <span className="story-stat-label">Chapters</span>
            </div>
            <div className="story-stat-divider" />
            <div className="story-stat">
              <span className="story-stat-number">27</span>
              <span className="story-stat-label">Years</span>
            </div>
            <div className="story-stat-divider" />
            <div className="story-stat">
              <span className="story-stat-number">∞</span>
              <span className="story-stat-label">Lessons</span>
            </div>
          </div>
        </FadeUp>

        {/* Expand/Collapse controls */}
        <FadeUp delay={0.35}>
          <div className="story-controls">
            <button onClick={expandAll} className="story-control-btn">
              Expand All
            </button>
            <span className="story-control-divider">|</span>
            <button onClick={collapseAll} className="story-control-btn">
              Collapse All
            </button>
          </div>
        </FadeUp>
      </section>

      {/* ─── CHAPTERS TIMELINE ─── */}
      <div className="story-timeline">
        {/* The vertical timeline line */}
        <div className="story-timeline-line" />

        {chapters.map((chapter, index) => (
          <ChapterAccordion
            key={chapter.id}
            chapter={chapter}
            isOpen={openChapters.has(chapter.id)}
            onToggle={() => toggleChapter(chapter.id)}
            index={index}
          />
        ))}
      </div>

      {/* ─── CLOSING NOTE ─── */}
      <FadeUp>
        <div className="story-closing">
          <div className="story-closing-inner">
            <p className="story-closing-text">
              &ldquo;The young boy who once searched for opportunities now dreams of
              creating them.&rdquo;
            </p>
            <p className="story-closing-author">— Tekenatei Franklyn</p>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
