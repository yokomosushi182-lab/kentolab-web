"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;

const screenshots = [
  {
    src: "/oh-call-1.png",
    alt: "Live Office Hours session — coaching clients working through GHL together",
    caption: "weekly group calls",
  },
  {
    src: "/oh-ghl-1.png",
    alt: "GHL funnel setup during a live Office Hours session",
    caption: "live inside GHL",
  },
  {
    src: "/oh-call-2.png",
    alt: "Office Hours coaching group — kento lab clients collaborating",
    caption: "real community",
  },
  {
    src: "/oh-ghl-2.png",
    alt: "GHL workflow automation built during Office Hours",
    caption: "hands-on support",
  },
];

export function OfficeHours() {
  return (
    <section
      className="px-6 py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--bone)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease }}
          >
            <p className="text-sm font-medium mb-5" style={{ color: "var(--moss)" }}>
              exclusive to Deep Roots
            </p>
            <h2
              className="font-semibold leading-tight"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                color: "var(--forest)",
              }}
            >
              Office Hours — live, every week
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
          >
            <p
              className="leading-relaxed mb-5"
              style={{ color: "var(--forest)", fontSize: "1.0625rem", maxWidth: "44ch", opacity: 0.82 }}
            >
              GHL has hundreds of features. Your coaches don&apos;t need all of
              them — they need the right ones, set up for their specific offer,
              without spending hours figuring it out alone.
            </p>
            <p
              className="leading-relaxed"
              style={{ color: "var(--forest)", fontSize: "1.0625rem", maxWidth: "44ch", opacity: 0.82 }}
            >
              Every week, we get on a live call with your clients. We answer
              questions, fix things in real time, and make sure nobody gets
              left behind. It&apos;s what keeps them on your platform — and
              it&apos;s what makes your SaaS worth renewing.
            </p>
          </motion.div>
        </div>

        {/* Screenshot grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {screenshots.map((s, i) => (
            <motion.div
              key={s.src}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.1, ease }}
              className="flex flex-col gap-3"
            >
              <div
                className="relative rounded-xl overflow-hidden"
                style={{
                  paddingBottom: "72%",
                  boxShadow: "0 8px 32px rgba(47,64,53,0.14)",
                }}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* subtle overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(47,64,53,0.06)" }}
                  aria-hidden="true"
                />
              </div>
              <p
                className="text-xs font-medium text-center"
                style={{ color: "var(--stone)" }}
              >
                {s.caption}
              </p>
            </motion.div>
          ))}
        </div>

        {/* What this means for coaches */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease }}
          className="grid md:grid-cols-3 gap-5"
        >
          {[
            {
              title: "We know their offers",
              body: "We understand how coaches package and sell their programs — funnels, automations, booking flows — so we speak their language, not just GHL's.",
            },
            {
              title: "We handle the complexity",
              body: "GHL is powerful and overwhelming. We keep your coaches focused on their clients while we handle the backend that makes it all run.",
            },
            {
              title: "We reduce your churn",
              body: "Clients who feel supported and confident in their tools stay. Office Hours is the retention strategy built into your SaaS model.",
            },
          ].map(({ title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease }}
              className="p-7 rounded-xl border"
              style={{
                borderColor: "rgba(47,64,53,0.1)",
                background: "rgba(47,64,53,0.03)",
              }}
            >
              <h3
                className="font-semibold mb-3 text-lg"
                style={{ color: "var(--forest)" }}
              >
                {title}
              </h3>
              <p
                className="leading-relaxed text-sm"
                style={{ color: "var(--stone)" }}
              >
                {body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
