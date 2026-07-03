"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 1400;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      // ease-out-quart
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(Math.round(eased * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const stats = [
  { value: 6, suffix: "", label: "specialists, one team" },
  { value: 3, suffix: "", label: "core service areas" },
  { value: 100, suffix: "%", label: "dedicated to your growth" },
];

export function Stats() {
  return (
    <section
      style={{ background: "var(--forest)" }}
      className="border-b"
      aria-label="Key numbers"
    >
      <div
        className="max-w-6xl mx-auto px-6 grid grid-cols-3"
        style={{ borderColor: "rgba(244,239,230,0.08)" }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease }}
            className="flex flex-col items-start px-6 py-10 md:py-12 gap-1.5 border-r last:border-r-0"
            style={{ borderColor: "rgba(244,239,230,0.08)" }}
          >
            <p
              className="font-display-italic leading-none"
              style={{
                fontFamily: "var(--font-bodoni), Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(3rem, 6vw, 5rem)",
                color: "var(--bone)",
                letterSpacing: "-0.04em",
              }}
            >
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p
              className="text-sm font-medium"
              style={{ color: "rgba(244,239,230,0.5)", letterSpacing: "0.01em" }}
            >
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        div[class*="grid"] > * + * {
          border-left: 1px solid rgba(244,239,230,0.08);
        }
      `}</style>
    </section>
  );
}
