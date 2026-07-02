"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;

const headlineWords = [
  "your coaches need",
  "more than a CRM.",
  "they need a team.",
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY  = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--forest)" }}
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 65% 45%, rgba(216,138,87,0.11) 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full px-5 sm:px-6 pt-24 pb-16 relative grid md:grid-cols-2 gap-10 md:gap-8 items-center">

        {/* Left — text */}
        <motion.div style={{ y: textY }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-xs sm:text-sm font-medium mb-5 sm:mb-7 tracking-wide"
            style={{ color: "var(--clay)" }}
          >
            for coaches, SaaS platforms &amp; entrepreneurs
          </motion.p>

          {/* Word-by-word headline */}
          <h1
            className="font-semibold leading-[1.1] mb-5 sm:mb-7"
            style={{
              fontSize: "clamp(1.75rem, 7vw, 4.5rem)",
              color: "var(--bone)",
            }}
          >
            {headlineWords.map((line, li) => (
              <span key={li} className="block">
                {line.split(" ").map((word, wi) => (
                  <motion.span
                    key={wi}
                    className="inline-block mr-[0.22em]"
                    initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2 + li * 0.16 + wi * 0.06,
                      ease,
                    }}
                  >
                    {word === "team." ? (
                      <span style={{ color: "var(--clay)" }}>{word}</span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
            className="text-base sm:text-lg leading-relaxed mb-8 font-light"
            style={{ color: "rgba(244,239,230,0.72)", maxWidth: "42ch" }}
          >
            From GHL setup and automation to paid ads, content creation, and community management, we build and run the complete marketing system so coaches can focus on what they do best.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="#services"
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md font-semibold text-sm sm:text-base min-h-[52px]"
              style={{ background: "var(--terracotta)", color: "var(--bone)" }}
            >
              see how it works
            </a>
            <a
              href={`https://wa.me/5492944157182?text=${encodeURIComponent("Hi! I found you through your website and I'd love to learn more about kento lab.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md font-semibold text-sm sm:text-base border min-h-[52px]"
              style={{ borderColor: "rgba(244,239,230,0.3)", color: "var(--bone)" }}
            >
              <WhatsAppIcon />
              chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Right — photo (desktop only) */}
        <motion.div
          className="hidden md:block relative"
          style={{ y: photoY }}
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease }}
        >
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ height: "520px", boxShadow: "0 32px 80px rgba(0,0,0,0.35)" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="A coach in a warm, focused consultation"
              fill
              className="object-cover object-top"
              priority
              sizes="500px"
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(47,64,53,0.18)" }}
              aria-hidden="true"
            />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6, ease }}
            className="absolute -bottom-5 -left-6 px-5 py-3.5 rounded-xl"
            style={{ background: "var(--bone)", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}
          >
            <p className="text-xs font-medium mb-0.5" style={{ color: "var(--stone)" }}>
              full-service · one team
            </p>
            <p className="text-sm font-semibold" style={{ color: "var(--forest)" }}>
              GHL · Ads · Content · Community
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "rgba(244,239,230,0.3)" }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-7"
          style={{ background: "rgba(244,239,230,0.2)" }}
        />
      </motion.div>

      <style jsx>{`
        .btn-primary { transition: all 0.2s; }
        .btn-primary:hover { background: var(--clay) !important; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(181,96,47,0.3); }
        .btn-wa { transition: all 0.2s; }
        .btn-wa:hover { background: rgba(244,239,230,0.08); border-color: rgba(244,239,230,0.6) !important; }
      `}</style>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
