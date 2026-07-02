import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "kento lab — full-service marketing for coaching businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background: "#2F4035",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 700,
            height: 500,
            background:
              "radial-gradient(ellipse at 80% 30%, rgba(216,138,87,0.22) 0%, transparent 65%)",
            display: "flex",
          }}
        />
        {/* Bottom-left circle */}
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -80,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "rgba(124,138,95,0.12)",
            display: "flex",
          }}
        />

        {/* Wordmark */}
        <div
          style={{
            position: "absolute",
            top: 72,
            left: 80,
            display: "flex",
            alignItems: "baseline",
            gap: 0,
          }}
        >
          <span
            style={{
              fontFamily: "serif",
              fontSize: 52,
              fontWeight: 700,
              color: "#F4EFE6",
              letterSpacing: "-1px",
            }}
          >
            kento
          </span>
          <span
            style={{
              fontFamily: "serif",
              fontSize: 52,
              fontWeight: 700,
              color: "#D88A57",
              letterSpacing: "-1px",
            }}
          >
            lab
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontFamily: "serif",
              fontSize: 72,
              fontWeight: 700,
              color: "#F4EFE6",
              lineHeight: 1.08,
              letterSpacing: "-2px",
            }}
          >
            Full-service marketing
            <br />
            for coaching businesses.
          </div>

          <div
            style={{
              fontSize: 26,
              color: "rgba(244,239,230,0.6)",
              fontFamily: "sans-serif",
              letterSpacing: "-0.3px",
            }}
          >
            Go High Level CRM · Paid Media · Content · Community Management
          </div>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 3,
              background: "#D88A57",
              borderRadius: 2,
              marginTop: 4,
              display: "flex",
            }}
          />

          {/* Pills */}
          <div style={{ display: "flex", gap: 12, marginTop: 4, flexWrap: "wrap" }}>
            {["GHL Experts", "Paid Media", "Content", "Community"].map((pill) => (
              <div
                key={pill}
                style={{
                  padding: "10px 22px",
                  borderRadius: 30,
                  background: "rgba(124,138,95,0.3)",
                  color: "#F4EFE6",
                  fontSize: 20,
                  fontFamily: "sans-serif",
                  fontWeight: 600,
                  display: "flex",
                }}
              >
                {pill}
              </div>
            ))}
          </div>
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 72,
            right: 80,
            color: "#D88A57",
            fontSize: 26,
            fontFamily: "sans-serif",
            fontWeight: 600,
            letterSpacing: "-0.3px",
          }}
        >
          kentolab.com
        </div>
      </div>
    ),
    { ...size }
  );
}
