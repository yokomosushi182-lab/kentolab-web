"use client";
import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function MagneticButton({
  children,
  className,
  style,
  href,
  strength = 0.35,
  target,
  rel,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  strength?: number;
  target?: string;
  rel?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const springCfg = { stiffness: 220, damping: 20, mass: 0.5 };
  const x = useSpring(0, springCfg);
  const y = useSpring(0, springCfg);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const Tag = href ? "a" : "button";

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      style={{ display: "inline-block" }}
    >
      <motion.div style={{ x, y }}>
        <Tag
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          className={className}
          style={style}
        >
          {children}
        </Tag>
      </motion.div>
    </div>
  );
}
