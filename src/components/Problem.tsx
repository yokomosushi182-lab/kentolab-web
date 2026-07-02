"use client";
import { FadeIn } from "./FadeIn";

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
              The problem is never just one thing. It&apos;s{" "}
              <span style={{ color: "var(--clay)" }}>
                not having the right team behind you.
              </span>{" "}
              We cover GHL, paid media, content, and community so you stop patching things together and start growing.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
