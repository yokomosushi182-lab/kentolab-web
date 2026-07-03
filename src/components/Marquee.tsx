"use client";
import { motion } from "framer-motion";

const row1 = [
  "GHL experts", "·", "paid media", "·", "content creation", "·",
  "community management", "·", "marketing strategy", "·", "real support", "·",
  "no jargon", "·", "by your side", "·", "full-service", "·",
];

const row2 = [
  "Go High Level", "·", "Google Ads", "·", "Meta Ads", "·",
  "email automations", "·", "funnels", "·", "CRM setup", "·",
  "content calendars", "·", "community growth", "·", "monthly strategy", "·",
];

const doubled1 = [...row1, ...row1];
const doubled2 = [...row2, ...row2];

function Row({
  words,
  direction = 1,
  speed = 24,
  size = "sm",
}: {
  words: string[];
  direction?: 1 | -1;
  speed?: number;
  size?: "sm" | "base";
}) {
  return (
    <div className="overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
      <motion.div
        className="flex gap-6 whitespace-nowrap py-3"
        animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className={`flex-shrink-0 font-medium ${size === "base" ? "text-base" : "text-sm"}`}
            style={{
              color: word === "·"
                ? "var(--clay)"
                : size === "base"
                ? "rgba(244,239,230,0.5)"
                : "rgba(244,239,230,0.35)",
              letterSpacing: word === "·" ? "0" : "0.03em",
            }}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Marquee() {
  return (
    <div
      className="overflow-hidden py-2 border-y"
      style={{
        background: "var(--forest)",
        borderColor: "rgba(244,239,230,0.07)",
      }}
      aria-hidden="true"
    >
      <Row words={doubled1} direction={1} speed={28} size="base" />
      <Row words={doubled2} direction={-1} speed={22} size="sm" />
    </div>
  );
}
