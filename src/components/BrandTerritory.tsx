"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "./FadeIn";

const ease = [0.16, 1, 0.3, 1] as const;

export function BrandTerritory() {
  return (
    <section
      className="overflow-hidden"
      style={{ background: "var(--clay)" }}
    >
      {/* Top: quote + photo grid */}
      <div className="max-w-6xl mx-auto px-6 pt-24 md:pt-32 pb-16 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <FadeIn direction="left">
          <h2
            className="font-semibold leading-[1.08]"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              color: "var(--forest)",
            }}
          >
            A bridge between technology and the roots of life
          </h2>
        </FadeIn>

        {/* Photo */}
        <FadeIn direction="right" delay={0.12}>
          <div
            className="relative rounded-2xl overflow-hidden w-full"
            style={{ aspectRatio: "4/3", boxShadow: "0 20px 60px rgba(47,64,53,0.2)" }}
          >
            <Image
              src="/bridge.png"
              alt="A bridge between technology and the roots of life"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(216,138,87,0.1)" }}
              aria-hidden="true"
            />
          </div>
        </FadeIn>
      </div>

      {/* Body copy */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <FadeIn delay={0.1}>
          <p
            className="leading-relaxed mb-5"
            style={{
              fontSize: "1.0625rem",
              color: "var(--forest)",
              opacity: 0.85,
              maxWidth: "52ch",
            }}
          >
            kento lab exists at the intersection of technology and what&apos;s
            human. We believe digital tools should feel as natural as a
            conversation — not like an obstacle.
          </p>
          <p
            className="leading-relaxed"
            style={{
              fontSize: "1.0625rem",
              color: "var(--forest)",
              opacity: 0.85,
              maxWidth: "52ch",
            }}
          >
            That&apos;s why we support coaches, therapists, and the SaaS
            platforms built around them — with real technical help, in human
            language — so technology stops being a barrier and goes back to
            serving what matters: the people you help.
          </p>
        </FadeIn>
      </div>

      {/* Three pillars */}
      <div className="max-w-6xl mx-auto px-6 pb-24 md:pb-32 grid md:grid-cols-3 gap-5">
        {[
          {
            word: "grounded",
            desc: "We work within your world, not around it. Plain language, no jargon, no disappearing act.",
          },
          {
            word: "steady",
            desc: "We stick around after the build. Not a one-time fix — a partner you can actually reach.",
          },
          {
            word: "rooted",
            desc: "The niche is intentional. Coaches, therapists, and the platforms built around them. We know your context.",
          },
        ].map(({ word, desc }, i) => (
          <motion.div
            key={word}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: i * 0.1, ease }}
            className="p-7 rounded-xl"
            style={{ background: "rgba(47,64,53,0.12)" }}
          >
            <p
              className="font-semibold text-xl mb-3"
              style={{ color: "var(--forest)" }}
            >
              {word}
            </p>
            <p
              className="leading-relaxed text-sm"
              style={{ color: "var(--forest)", opacity: 0.72 }}
            >
              {desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
