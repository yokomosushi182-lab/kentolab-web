"use client";
import { motion } from "framer-motion";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const ease = [0.16, 1, 0.3, 1] as const;

const slides = [
  {
    src: "/oh-call-1.png",
    name: "weekly group calls",
    designation: "live every week",
    quote: "Every week we get on a live call with your clients. We answer questions, fix things in real time, and make sure nobody gets left behind.",
  },
  {
    src: "/oh-ghl-1.png",
    name: "live inside GHL",
    designation: "hands-on in the platform",
    quote: "We screen-share directly inside Go High Level, walking coaches through the exact setup for their offer, not a generic tutorial.",
  },
  {
    src: "/oh-call-2.png",
    name: "real community",
    designation: "coaches helping coaches",
    quote: "Your clients learn from each other. Common questions get answered once and the whole group levels up together.",
  },
  {
    src: "/oh-ghl-2.png",
    name: "hands-on support",
    designation: "we handle the complexity",
    quote: "GHL is powerful and overwhelming. We keep your coaches focused on their clients while we handle the backend that makes it all run.",
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
              Office Hours, live every week
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
              them. They need the right ones, set up for their specific offer,
              without spending hours figuring it out alone.
            </p>
            <p
              className="leading-relaxed"
              style={{ color: "var(--forest)", fontSize: "1.0625rem", maxWidth: "44ch", opacity: 0.82 }}
            >
              Every week, we get on a live call with your clients. We answer
              questions, fix things in real time, and make sure nobody gets
              left behind. It&apos;s what keeps them on your platform, and
              it&apos;s what makes your SaaS worth renewing.
            </p>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease }}
          className="flex justify-center mb-16"
        >
          <CircularTestimonials
            testimonials={slides}
            autoplay
            colors={{
              name: "var(--forest)",
              designation: "var(--moss)",
              testimony: "var(--forest)",
              arrowBackground: "var(--forest)",
              arrowForeground: "var(--bone)",
              arrowHoverBackground: "var(--terracotta)",
            }}
            fontSizes={{
              name: "1.375rem",
              designation: "0.75rem",
              quote: "1rem",
            }}
          />
        </motion.div>

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
              body: "We understand how coaches package and sell their programs — funnels, automations, booking flows, so we speak their language, not just GHL's.",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              ),
            },
            {
              title: "We handle the complexity",
              body: "GHL is powerful and overwhelming. We keep your coaches focused on their clients while we handle the backend that makes it all run.",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07"/>
                </svg>
              ),
            },
            {
              title: "We reduce your churn",
              body: "Clients who feel supported and confident in their tools stay. Office Hours is the retention strategy built into your SaaS model.",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
                </svg>
              ),
            },
          ].map(({ title, body, icon }, i) => (
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
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "rgba(47,64,53,0.08)", color: "var(--forest)" }}
              >
                {icon}
              </div>
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
