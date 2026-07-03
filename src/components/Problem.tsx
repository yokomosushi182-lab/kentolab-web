"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const problems = [
  {
    number: "01",
    title: "Too many tools, not enough results",
    body: "You have the CRM, the ad account, the content calendar. But nothing talks to each other and nothing is working as well as it should. The tech is there. The strategy is missing.",
  },
  {
    number: "02",
    title: "They built it and disappeared",
    body: "The setup looked great on a screen share. Then they were gone. No follow-up, no one to call when something broke. You were left managing a system you didn't fully understand, alone.",
  },
  {
    number: "03",
    title: "Marketing feels like a second job",
    body: "Ads, content, emails, automations, community. Each one is a discipline on its own. You're spending more time on the machine than on the work that actually moves your business forward.",
  },
];

function ProblemRow({
  number,
  title,
  body,
  index,
}: {
  number: string;
  title: string;
  body: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
      className="relative grid md:grid-cols-[1fr_2fr] gap-6 md:gap-16 py-12 md:py-16 border-b group"
      style={{ borderColor: "rgba(244,239,230,0.08)" }}
    >
      {/* Ghost number — decorative, background */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none"
        aria-hidden="true"
        style={{
          fontFamily: "var(--font-bodoni), Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(8rem, 18vw, 18rem)",
          color: "rgba(244,239,230,0.03)",
          letterSpacing: "-0.06em",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        {number}
      </div>

      {/* Left — number + subtle label */}
      <div className="flex items-start gap-4 md:gap-0 md:flex-col md:pt-1">
        <span
          className="font-semibold tabular-nums"
          style={{ color: "var(--clay)", fontSize: "0.8125rem", letterSpacing: "0.08em" }}
        >
          {number}
        </span>
        <motion.div
          className="h-px hidden md:block mt-6"
          style={{ background: "rgba(244,239,230,0.15)", width: "100%" }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 + index * 0.08, ease }}
        />
      </div>

      {/* Right — title + body */}
      <div className="relative z-10">
        <div style={{ overflow: "hidden" }}>
          <motion.h3
            initial={{ y: "105%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.1 + index * 0.08, ease }}
            className="font-semibold mb-5 leading-snug"
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              color: "var(--bone)",
              letterSpacing: "-0.025em",
            }}
          >
            {title}
          </motion.h3>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.22 + index * 0.08, ease }}
          className="leading-relaxed font-light"
          style={{ color: "rgba(244,239,230,0.55)", fontSize: "0.9375rem", maxWidth: "44ch" }}
        >
          {body}
        </motion.p>
      </div>
    </motion.div>
  );
}

export function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-3%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "var(--forest)" }}
    >
      {/* Ambient glow top left */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 20%, rgba(181,96,47,0.08) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-28">
        {/* Section opener */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-4"
        >
          <p className="text-sm font-medium mb-8" style={{ color: "var(--clay)" }}>
            sound familiar?
          </p>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: "105%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.05, ease }}
              style={{
                fontFamily: "var(--font-bodoni), Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(2rem, 5vw, 3.75rem)",
                color: "var(--bone)",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
              }}
            >
              You&apos;ve probably
              <br />
              been here before.
            </motion.h2>
          </div>
        </motion.div>

        {/* Problems */}
        <div className="mt-12 md:mt-16">
          {problems.map((p, i) => (
            <ProblemRow key={p.number} {...p} index={i} />
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="py-16 md:py-20"
        >
          <p
            className="font-light leading-relaxed"
            style={{
              fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
              color: "rgba(244,239,230,0.72)",
              maxWidth: "52ch",
            }}
          >
            The problem is never just one thing. It&apos;s{" "}
            <span style={{ color: "var(--clay)", fontWeight: 500 }}>
              not having the right team behind you.
            </span>{" "}
            We cover GHL, paid media, content, and community so you stop patching things together and start growing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
