"use client";
import { motion } from "framer-motion";

const words = [
  "grounded", "·", "steady", "·", "rooted", "·",
  "real support", "·", "no jargon", "·", "by your side", "·",
  "plain english", "·", "human first", "·",
];
const doubled = [...words, ...words];

export function Marquee() {
  return (
    <div
      className="overflow-hidden py-5 border-y"
      style={{
        background: "var(--forest)",
        borderColor: "rgba(244,239,230,0.08)",
      }}
      aria-hidden="true"
    >
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "linear",
        }}
      >
        {doubled.map((word, i) => (
          <span
            key={i}
            className="text-sm font-medium flex-shrink-0"
            style={{
              color: word === "·" ? "var(--clay)" : "rgba(244,239,230,0.55)",
              letterSpacing: word === "·" ? "0" : "0.04em",
            }}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
