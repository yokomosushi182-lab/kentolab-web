"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  quote: string;
  name: string;
  designation: string;
  src: string;
}
interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}
interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}
interface CircularTestimonialsProps {
  testimonials: Slide[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

function ArrowLeft({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}

function ArrowRight({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) => {
  const colorName = colors.name ?? "#2F4035";
  const colorDesignation = colors.designation ?? "#7A7A6E";
  const colorTestimony = colors.testimony ?? "#2F4035";
  const colorArrowBg = colors.arrowBackground ?? "#2F4035";
  const colorArrowFg = colors.arrowForeground ?? "#F4EFE6";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#D88A57";
  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.9rem";
  const fontSizeQuote = fontSizes.quote ?? "1.0625rem";

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(600);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = useMemo(() => testimonials.length, [testimonials]);
  const active = useMemo(() => testimonials[activeIndex], [activeIndex, testimonials]);

  useEffect(() => {
    function onResize() {
      if (imageContainerRef.current) setContainerWidth(imageContainerRef.current.offsetWidth);
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((p) => (p + 1) % count);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, [count]);

  const handlePrev = useCallback(() => {
    setActiveIndex((p) => (p - 1 + count) % count);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, [count]);

  useEffect(() => {
    if (autoplay) autoplayRef.current = setInterval(() => setActiveIndex((p) => (p + 1) % count), 4500);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [autoplay, count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handlePrev, handleNext]);

  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + count) % count === index;
    const isRight = (activeIndex + 1) % count === index;

    if (isActive) return {
      zIndex: 3, opacity: 1, pointerEvents: "auto",
      transform: "translateX(0px) translateY(0px) scale(1) rotateY(0deg)",
      transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
    };
    if (isLeft) return {
      zIndex: 2, opacity: 1, pointerEvents: "auto",
      transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
      transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
    };
    if (isRight) return {
      zIndex: 2, opacity: 1, pointerEvents: "auto",
      transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
      transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
    };
    return { zIndex: 1, opacity: 0, pointerEvents: "none", transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)" };
  }

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div style={{ width: "100%", maxWidth: "56rem", padding: "1rem" }}>
      <div style={{ display: "grid", gap: "4rem" }}>
        {/* Images */}
        <div ref={imageContainerRef} style={{ position: "relative", width: "100%", height: "22rem", perspective: "1000px" }}>
          {testimonials.map((item, index) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={item.src}
              src={item.src}
              alt={item.name}
              style={{
                position: "absolute", width: "100%", height: "100%",
                objectFit: "contain", borderRadius: "1.25rem",
                boxShadow: "0 12px 40px rgba(47,64,53,0.2)",
                ...getImageStyle(index),
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3 style={{ fontWeight: 700, marginBottom: "0.25rem", color: colorName, fontSize: fontSizeName, letterSpacing: "-0.02em" }}>
                {active.name}
              </h3>
              <p style={{ color: colorDesignation, fontSize: fontSizeDesignation, marginBottom: "1.5rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 500 }}>
                {active.designation}
              </p>
              <p style={{ color: colorTestimony, fontSize: fontSizeQuote, lineHeight: 1.75 }}>
                {active.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ filter: "blur(8px)", opacity: 0, y: 4 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * i }}
                    style={{ display: "inline-block" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Arrows + dots */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", paddingTop: "2.5rem" }}>
            <button
              onClick={handlePrev}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous"
              style={{
                width: "2.75rem", height: "2.75rem", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", border: "none", transition: "background-color 0.25s",
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
              }}
            >
              <ArrowLeft size={18} color={colorArrowFg} />
            </button>

            {/* Dot indicators */}
            <div style={{ display: "flex", gap: "0.4rem", flex: 1 }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveIndex(i); if (autoplayRef.current) clearInterval(autoplayRef.current); }}
                  aria-label={`Go to slide ${i + 1}`}
                  style={{
                    width: i === activeIndex ? "1.5rem" : "0.4rem",
                    height: "0.4rem",
                    borderRadius: "9999px",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    backgroundColor: i === activeIndex ? colorArrowHoverBg : "rgba(47,64,53,0.2)",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next"
              style={{
                width: "2.75rem", height: "2.75rem", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", border: "none", transition: "background-color 0.25s",
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
              }}
            >
              <ArrowRight size={18} color={colorArrowFg} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          div[style*="gap: 4rem"] {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default CircularTestimonials;
