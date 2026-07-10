"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;

const team = [
  {
    name: "Luis Garcia",
    role: "GHL Specialist",
    initials: "LG",
    bg: "var(--forest)",
    text: "var(--bone)",
    accent: "var(--moss)",
    photo: "/luis.png",
    portfolio: "https://luis.kentolab.com/",
    linkedin: "https://www.linkedin.com/in/luis-garcia-67b837393",
  },
  {
    name: "Agustina Czemerys",
    role: "GHL Specialist",
    initials: "AC",
    bg: "var(--forest)",
    text: "var(--bone)",
    accent: "var(--moss)",
    photo: "/agustina.jpeg",
    portfolio: "https://agustina-ghl-expert-9dqia91.gamma.site/",
    linkedin: "https://www.linkedin.com/in/agustina-czemerys-aa804718a/",
  },
  {
    name: "Florencia Sanchez",
    role: "Marketing Specialist",
    initials: "FS",
    bg: "var(--terracotta)",
    text: "var(--bone)",
    accent: "var(--clay)",
    photo: "/FlorSanchez ProfilePicture.png copia.png",
    portfolio: "https://www.instagram.com/flowerpower.emprende",
    linkedin: "https://www.linkedin.com/in/florsanchezodo/",
  },
  {
    name: "Luisina Comes",
    role: "Paid Media Specialist",
    desc: "Google & Meta Ads",
    initials: "LU",
    bg: "var(--clay)",
    text: "var(--forest)",
    accent: "var(--terracotta)",
    photo: "/luisina.jpeg",
    linkedin: "https://www.linkedin.com/in/luisina-comes-84516020a/",
  },
  {
    name: "Gala Rodriguez",
    role: "Content Creator & Community Management",
    initials: "GA",
    bg: "var(--moss)",
    text: "var(--bone)",
    accent: "var(--clay)",
    photo: "/milagros.jpg",
    linkedin: "https://www.instagram.com/flowerpower.emprende",
  },
  {
    name: "Meli Cores",
    role: "Content Creation & Community Management",
    initials: "ME",
    photo: "/meli-cores.jpeg",
    bg: "var(--moss)",
    text: "var(--bone)",
    accent: "var(--clay)",
    portfolio: "https://melicontent.netlify.app/",
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
            A team of 6 specialists, each one deep in their niche
          </h2>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl"
              style={{
                background: "rgba(47,64,53,0.04)",
                border: "1px solid rgba(47,64,53,0.08)",
              }}
            >
              {/* Avatar */}
              {"photo" in member && member.photo ? (
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 relative">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="56px"
                  />
                </div>
              ) : (
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-semibold text-base flex-shrink-0"
                  style={{
                    background: member.bg,
                    color: member.text,
                    letterSpacing: "-0.02em",
                  }}
                  aria-hidden="true"
                >
                  {member.initials}
                </div>
              )}

              {/* Info */}
              <div className="flex flex-col gap-1 flex-1">
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
                {"desc" in member && member.desc && (
                  <p
                    className="text-xs leading-snug"
                    style={{ color: "var(--stone)", opacity: 0.7 }}
                  >
                    {member.desc}
                  </p>
                )}
              </div>

              {/* Links */}
              {(member.portfolio || member.linkedin) && (
                <div className="flex flex-col gap-1.5 w-full mt-1">
                  {member.portfolio && (
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium px-3 py-1.5 rounded-md transition-all duration-200 text-center"
                      style={{
                        background: "rgba(47,64,53,0.08)",
                        color: "var(--forest)",
                      }}
                    >
                      see portfolio
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium px-3 py-1.5 rounded-md transition-all duration-200 text-center"
                      style={{
                        background: "rgba(47,64,53,0.08)",
                        color: "var(--forest)",
                      }}
                    >
                      LinkedIn profile
                    </a>
                  )}
                </div>
              )}

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
          Every person on this team works within a specific area. No generalists,
          no guesswork. When you work with kento lab, you get the right person
          for the right problem, every time.
        </motion.p>
      </div>
    </section>
  );
}
