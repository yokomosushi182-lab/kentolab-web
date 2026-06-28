"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const team = [
  {
    name: "Luis Garcia",
    role: "GHL Specialist",
    initials: "LG",
    bg: "var(--forest)",
    text: "var(--bone)",
    accent: "var(--moss)",
  },
  {
    name: "Agustina Czemerys",
    role: "GHL Specialist",
    initials: "AC",
    bg: "var(--forest)",
    text: "var(--bone)",
    accent: "var(--moss)",
  },
  {
    name: "Florencia Sanchez",
    role: "Marketing Specialist",
    initials: "FS",
    bg: "var(--terracotta)",
    text: "var(--bone)",
    accent: "var(--clay)",
  },
  {
    name: "Luisina",
    role: "Facebook & Meta Ads",
    initials: "LU",
    bg: "var(--clay)",
    text: "var(--forest)",
    accent: "var(--terracotta)",
  },
  {
    name: "Gala & Meli",
    role: "Content Creation & Community Management",
    initials: "GM",
    bg: "var(--moss)",
    text: "var(--bone)",
    accent: "var(--clay)",
  },
];

export function Team() {
  return (
    <section
      className="px-6 py-24 md:py-32"
      style={{ background: "var(--bone)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease }}
          className="mb-16"
        >
          <p className="text-sm font-medium mb-4" style={{ color: "var(--moss)" }}>
            the people behind kento lab
          </p>
          <h2
            className="font-semibold"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "var(--forest)",
              maxWidth: "24ch",
            }}
          >
            A team of 5 specialists — each one deep in their niche
          </h2>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className={`flex flex-col items-center text-center gap-4 p-6 rounded-2xl${i === team.length - 1 ? " col-span-2 md:col-span-1 max-w-[220px] mx-auto w-full" : ""}`}
              style={{
                background: "rgba(47,64,53,0.04)",
                border: "1px solid rgba(47,64,53,0.08)",
              }}
            >
              {/* Avatar */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-semibold text-lg flex-shrink-0"
                style={{
                  background: member.bg,
                  color: member.text,
                  letterSpacing: "-0.02em",
                }}
                aria-hidden="true"
              >
                {member.initials}
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1">
                <p
                  className="font-semibold text-sm leading-tight"
                  style={{ color: "var(--forest)" }}
                >
                  {member.name}
                </p>
                <p
                  className="text-xs leading-snug"
                  style={{ color: "var(--stone)" }}
                >
                  {member.role}
                </p>
              </div>

              {/* Role accent dot */}
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: member.accent }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="mt-12 text-sm leading-relaxed"
          style={{ color: "var(--stone)", maxWidth: "52ch" }}
        >
          Every person on this team works within a specific area — no generalists,
          no guesswork. When you work with kento lab, you get the right person
          for the right problem, every time.
        </motion.p>
      </div>
    </section>
  );
}
