"use client";
import { FadeIn } from "./FadeIn";

const problems = [
  {
    number: "01",
    title: "It felt like a foreign language",
    body: "Funnels, workflows, pipelines, triggers: you nodded along but left more confused than when you started. Nobody stopped to explain what any of it actually meant for your business.",
  },
  {
    number: "02",
    title: "They built it and disappeared",
    body: "The setup looked great on a screen share. Then they were gone. No follow-up, no one to call when something broke, no continuity. You were left alone with a system you didn't fully understand.",
  },
  {
    number: "03",
    title: "Something got broken and trust went with it",
    body: "An automation fired wrong, leads fell through, a campaign sent to the wrong people. Now you're nervous to touch anything. The CRM feels fragile, and so does your confidence in it.",
  },
];

export function Problem() {
  return (
    <section
      id="about"
      className="px-6 py-24 md:py-32"
      style={{ background: "var(--bone)" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium mb-4" style={{ color: "var(--moss)" }}>
            sound familiar?
          </p>
          <h2
            className="font-semibold mb-16 md:mb-20"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "var(--forest)",
              maxWidth: "22ch",
            }}
          >
            You&apos;ve probably been here before
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {problems.map((p, i) => (
            <FadeIn key={p.number} delay={i * 0.12}>
              <div className="flex flex-col gap-5">
                <span
                  className="font-semibold text-4xl"
                  style={{ color: "rgba(47,64,53,0.15)", letterSpacing: "-0.04em" }}
                  aria-hidden="true"
                >
                  {p.number}
                </span>
                <h3
                  className="font-semibold text-xl leading-snug"
                  style={{ color: "var(--forest)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "var(--forest)", fontSize: "0.9375rem", maxWidth: "38ch" }}
                >
                  {p.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div
            className="mt-20 md:mt-24 p-8 md:p-10 rounded-xl"
            style={{ background: "var(--forest)" }}
          >
            <p
              className="font-medium leading-relaxed"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "var(--bone)",
                maxWidth: "60ch",
              }}
            >
              The problem is never just technical. It&apos;s a{" "}
              <span style={{ color: "var(--clay)" }}>
                broken relationship with technology
              </span>
              . Our job isn&apos;t just to fix your CRM. It&apos;s to rebuild
              your confidence in it.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
