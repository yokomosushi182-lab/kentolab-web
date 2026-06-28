"use client";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  inverted?: boolean; // bone text on dark bg
}

const sizes = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
};

export function Logo({ size = "md", inverted = false }: LogoProps) {
  const kentoColor = inverted ? "#F4EFE6" : "#2F4035";
  const labColor = inverted ? "#D88A57" : "#B5602F";

  return (
    <span
      className={`font-semibold tracking-tight ${sizes[size]}`}
      aria-label="kento lab"
      style={{ letterSpacing: "-0.03em" }}
    >
      <span style={{ color: kentoColor }}>kento</span>
      <span style={{ color: labColor }}>lab</span>
    </span>
  );
}
