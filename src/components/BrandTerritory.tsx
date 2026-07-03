"use client";
import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const ease = [0.16, 1, 0.3, 1] as const;

const pillars = [
  {
    word: "grounded",
    desc: "Plain language, no jargon, no disappearing act. We work within your world.",
  },
  {
    word: "steady",
    desc: "Not a one-time fix. A partner you can actually reach after the build is done.",
  },
  {
    word: "rooted",
    desc: "Coaches, therapists, and the platforms built around them. We know your context.",
  },
];

export function BrandTerritory() {
  return (
    <section className="overflow-hidden" style={{ background: "var(--forest)" }}>

      {/* Robot + headline */}
      <div
        className="relative overflow-hidden"
        style={{ background: "#0a0a0a", minHeight: "560px" }}
      >
        <Spotlight
          className="-top-40 left-0 md:left-40 md:-top-20"
          fill="white"
        />

        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-10 md:gap-0 relative z-10">

          {/* Left — text */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease }}
              className="text-sm font-medium mb-5 tracking-wide"
              style={{ color: "var(--clay)" }}
            >
              our philosophy
            </motion.p>

            <div style={{ overflow: "hidden" }}>
              <motion.h2
                initial={{ y: "105%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.85, delay: 0.05, ease }}
                className="font-bold leading-[1.08] mb-6"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.75rem)",
                  color: "#f4efe6",
                  letterSpacing: "-0.04em",
                }}
              >
                A bridge between
                <br />
                technology and
                <br />
                <span style={{ color: "var(--clay)" }}>what&apos;s human.</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="leading-relaxed font-light mb-8"
              style={{
                fontSize: "1rem",
                color: "rgba(244,239,230,0.55)",
                maxWidth: "38ch",
              }}
            >
              Digital tools should feel as natural as a conversation. We make sure
              technology serves your people, not the other way around.
            </motion.p>

            {/* Stat chips */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="flex flex-wrap gap-3"
            >
              {["human language", "real support", "zero jargon"].map((chip) => (
                <span
                  key={chip}
                  className="text-xs font-medium px-4 py-2 rounded-full border"
                  style={{
                    borderColor: "rgba(244,239,230,0.15)",
                    color: "rgba(244,239,230,0.55)",
                  }}
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Spline robot */}
          <div className="flex-1 relative h-[400px] md:h-[520px] w-full">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Bottom fade to forest */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--forest))",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Body copy + pillars */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="leading-relaxed mb-14 font-light"
          style={{
            fontSize: "1.0625rem",
            color: "rgba(244,239,230,0.6)",
            maxWidth: "52ch",
          }}
        >
          That&apos;s why we support coaches, therapists, and the SaaS platforms
          built around them, with real technical help in human language, so
          technology stops being a barrier and goes back to serving what matters:
          the people you help.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map(({ word, desc }, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.1, ease }}
              className="p-7 rounded-xl border"
              style={{
                background: "rgba(244,239,230,0.04)",
                borderColor: "rgba(244,239,230,0.08)",
              }}
            >
              <p
                className="font-semibold text-xl mb-3"
                style={{ color: "var(--clay)" }}
              >
                {word}
              </p>
              <p
                className="leading-relaxed text-sm font-light"
                style={{ color: "rgba(244,239,230,0.55)" }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
