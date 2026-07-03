"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MagneticButton } from "./MagneticButton";

const ease = [0.16, 1, 0.3, 1] as const;

const lines = [
  { text: "your coaches need", accentWord: null },
  { text: "more than a CRM.", accentWord: null },
  { text: "they need a team.", accentWord: "team." },
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
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 68% 42%, rgba(216,138,87,0.13) 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,239,230,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(244,239,230,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Film grain */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.18]" aria-hidden="true">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

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

          {/* Rising-text headline */}
          <h1
            className="font-bold leading-[1.05] mb-6 sm:mb-8"
            style={{
              fontSize: "clamp(2.4rem, 7.5vw, 5.25rem)",
              color: "var(--bone)",
              letterSpacing: "-0.04em",
            }}
          >
            {lines.map((line, li) => (
              <span key={li} className="block" style={{ overflow: "hidden" }}>
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.25 + li * 0.14, ease }}
                >
                  {line.accentWord
                    ? line.text.replace(line.accentWord, "").concat("").split("").length > 0 && (
                        <>
                          {line.text.slice(0, line.text.indexOf(line.accentWord))}
                          <span style={{ color: "var(--clay)" }}>{line.accentWord}</span>
                        </>
                      )
                    : line.text}
                </motion.span>
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
            From Go High Level (GHL) setup and automation to paid ads, content creation, and community management, we build and run the complete marketing system so coaches can focus on what they do best.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <MagneticButton
              href="#services"
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md font-semibold text-sm sm:text-base min-h-[52px]"
              style={{ background: "var(--terracotta)", color: "var(--bone)" }}
            >
              see how it works
            </MagneticButton>
            <MagneticButton
              href={`https://wa.me/5492944157182?text=${encodeURIComponent("Hi! I found you through your website and I'd love to learn more about kento lab.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md font-semibold text-sm sm:text-base border min-h-[52px]"
              style={{ borderColor: "rgba(244,239,230,0.3)", color: "var(--bone)" }}
            >
              <WhatsAppIcon />
              chat on WhatsApp
            </MagneticButton>
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
            style={{ height: "540px", boxShadow: "0 40px 100px rgba(0,0,0,0.45)" }}
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
              style={{
                background: "linear-gradient(to top, rgba(47,64,53,0.65) 0%, rgba(47,64,53,0.08) 50%, transparent 100%)",
              }}
              aria-hidden="true"
            />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.35, duration: 0.7, ease }}
            className="absolute -bottom-5 -left-7 px-5 py-4 rounded-xl"
            style={{ background: "var(--bone)", boxShadow: "0 12px 40px rgba(0,0,0,0.22)" }}
          >
            <p className="text-xs font-medium mb-1" style={{ color: "var(--stone)" }}>
              full-service · one team
            </p>
            <p className="text-sm font-semibold" style={{ color: "var(--forest)" }}>
              Go High Level CRM · Ads · Content · Community
            </p>
          </motion.div>

          {/* Decorative rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1, ease }}
            className="absolute -top-4 -right-4 w-20 h-20 rounded-full border pointer-events-none"
            style={{ borderColor: "rgba(216,138,87,0.25)" }}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.65, duration: 1, ease }}
            className="absolute -top-1 -right-1 w-10 h-10 rounded-full border pointer-events-none"
            style={{ borderColor: "rgba(216,138,87,0.4)" }}
            aria-hidden="true"
          />
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
