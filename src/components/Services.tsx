"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const WHATSAPP = `https://wa.me/5492944157182?text=${encodeURIComponent(
  "Hi! I found you through your website and I'd love to learn more about kento lab."
)}`;
const CALENDLY = "https://calendly.com/luis-garcia-kento-lab/30min";

const ease = [0.16, 1, 0.3, 1] as const;

const bloomIncludes = [
  "Custom Go High Level (GHL) funnels & automations",
  "Paid media campaign setup (Google & Meta)",
  "Landing pages & websites",
  "Content strategy & creation",
  "One-off fixes or full rebuilds",
];

const deepIncludes = [
  "Full Go High Level (GHL) management & support",
  "Paid media management (Google & Meta)",
  "Content creation & scheduling",
  "Community management",
  "Weekly Office Hours (live)",
  "Monthly marketing strategy sessions",
];

function ServicePanel({
  colorSide,
  colorBg,
  label,
  title,
  tagline,
  tag,
  items,
  accentColor,
  dotColor,
  body,
  ctas,
  photo,
  photoAlt,
}: {
  colorSide: "left" | "right";
  colorBg: string;
  label: string;
  title: string;
  tagline: string;
  tag: string;
  items: string[];
  accentColor: string;
  dotColor: string;
  body: string;
  ctas: React.ReactNode;
  photo?: string;
  photoAlt?: string;
}) {
  const colorPanel = (
    <motion.div
      className="md:w-[42%] flex flex-col justify-center px-6 py-10 md:px-14 md:py-16 relative overflow-hidden"
      style={{ background: colorBg }}
      initial={{ x: colorSide === "left" ? -60 : 60, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease }}
    >
      {photo && (
        <>
          <Image
            src={photo}
            alt={photoAlt ?? ""}
            fill
            className="object-cover opacity-20"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
          <div className="absolute inset-0" style={{ background: `${colorBg}cc` }} aria-hidden="true" />
        </>
      )}
      <div className="relative z-10">
        <p className="text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ color: "rgba(244,239,230,0.55)" }}>
          {label}
        </p>
        <h3 className="font-semibold leading-tight mb-3"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--bone)" }}>
          {title}
        </h3>
        <p className="font-light leading-relaxed mb-8"
          style={{ color: "rgba(244,239,230,0.82)", fontSize: "1.0625rem", maxWidth: "28ch" }}>
          {tagline}
        </p>
        <span className="text-sm font-medium px-4 py-1.5 rounded-full self-start inline-block"
          style={{ background: "rgba(244,239,230,0.13)", color: accentColor }}>
          {tag}
        </span>
      </div>
    </motion.div>
  );

  const contentPanel = (
    <motion.div
      className="md:w-[58%] flex flex-col justify-center px-6 py-10 md:px-14 md:py-16"
      style={{ background: "var(--bone)" }}
      initial={{ x: colorSide === "left" ? 40 : -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: 0.1, ease }}
    >
      <p className="text-sm font-medium mb-6" style={{ color: "var(--stone)" }}>
        what&apos;s included
      </p>
      <ul className="space-y-3.5 mb-8">
        {items.map((item, i) => (
          <motion.li
            key={item}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.25 + i * 0.07, ease }}
          >
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: dotColor }} aria-hidden="true" />
            <span className="leading-snug"
              style={{ color: "var(--forest)", fontSize: "0.9375rem" }}>
              {item}
            </span>
          </motion.li>
        ))}
      </ul>
      <p className="leading-relaxed mb-8 text-sm"
        style={{ color: "var(--stone)", maxWidth: "40ch" }}>
        {body}
      </p>
      <div className="flex flex-wrap gap-3">{ctas}</div>
    </motion.div>
  );

  return (
    <div className={`flex flex-col md:flex-row md:min-h-[500px] ${colorSide === "right" ? "md:flex-row-reverse" : ""}`}>
      {colorPanel}
      {contentPanel}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" style={{ background: "var(--bone)" }}>
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-sm font-medium mb-4" style={{ color: "var(--moss)" }}>
            two ways to work together
          </p>
          <h2
            className="font-semibold"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "var(--forest)",
              maxWidth: "22ch",
            }}
          >
            Full-service marketing for coaching businesses
          </h2>
        </motion.div>
      </div>

      {/* Bloom Build */}
      <ServicePanel
        colorSide="left"
        colorBg="var(--terracotta)"
        label="for coaches, therapists & entrepreneurs"
        title="Bloom Build"
        tagline="The exact project you need, built right and ready to run."
        tag="pay-per-project · no commitment"
        accentColor="var(--bone)"
        dotColor="var(--terracotta)"
        items={bloomIncludes}
        body="Pay for exactly what you need, when you need it. From a single funnel to a full campaign launch. No retainer, no lock-in. Come back anytime."
        photo="https://images.unsplash.com/photo-1585974738771-84483dd9f89f?auto=format&fit=crop&w=800&q=80"
        photoAlt="A flourishing, grounded workspace"
        ctas={
          <>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="svc-btn-terra px-6 py-3 rounded-md font-semibold text-sm"
              style={{ background: "var(--terracotta)", color: "var(--bone)" }}>
              start a project
            </a>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
              className="svc-btn-ghost-terra px-6 py-3 rounded-md font-semibold text-sm border"
              style={{ borderColor: "var(--terracotta)", color: "var(--terracotta)" }}>
              book a free call
            </a>
          </>
        }
      />

      {/* Divider */}
      <div className="h-px mx-6" style={{ background: "rgba(47,64,53,0.08)" }} />

      {/* Deep Roots */}
      <ServicePanel
        colorSide="right"
        colorBg="var(--forest)"
        label="for coaches & SaaS platforms ready to scale"
        title="Deep Roots"
        tagline="Your full marketing team, on retainer. We run it all."
        tag="ongoing retainer · built for growth"
        accentColor="var(--clay)"
        dotColor="var(--forest)"
        items={deepIncludes}
        body="We run the systems, manage the ads, create the content, and keep your community engaged. You focus on the product. We handle everything that grows it."
        ctas={
          <>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
              className="svc-btn-forest px-6 py-3 rounded-md font-semibold text-sm"
              style={{ background: "var(--forest)", color: "var(--bone)" }}>
              book a discovery call
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="svc-btn-ghost-forest px-6 py-3 rounded-md font-semibold text-sm border"
              style={{ borderColor: "var(--forest)", color: "var(--forest)" }}>
              ask a question
            </a>
          </>
        }
      />

      <style jsx>{`
        .svc-btn-terra       { transition: all .2s; }
        .svc-btn-terra:hover { background: var(--clay) !important; transform: translateY(-1px); }
        .svc-btn-ghost-terra       { transition: all .2s; }
        .svc-btn-ghost-terra:hover { background: var(--terracotta) !important; color: var(--bone) !important; }
        .svc-btn-forest       { transition: all .2s; }
        .svc-btn-forest:hover { background: var(--moss) !important; transform: translateY(-1px); }
        .svc-btn-ghost-forest       { transition: all .2s; }
        .svc-btn-ghost-forest:hover { background: var(--forest) !important; color: var(--bone) !important; }
      `}</style>
    </section>
  );
}
