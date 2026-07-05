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
          background: "#0A0A0A",
          position: "relative",
        }}
      >
        {/* Orange glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,83,26,0.25) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Orange accent bar left */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 8,
            height: "100%",
            background: "#E8531A",
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
              fontFamily: "sans-serif",
              fontSize: 48,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-1.5px",
            }}
          >
            kento
          </span>
          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: 48,
              fontWeight: 800,
              color: "#E8531A",
              letterSpacing: "-1.5px",
            }}
          >
            lab
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 68,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.06,
              letterSpacing: "-2px",
            }}
          >
            Full-service marketing
            <br />
            <span style={{ color: "#E8531A" }}>for coaching businesses.</span>
          </div>

          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.5)",
              fontFamily: "sans-serif",
              letterSpacing: "-0.3px",
            }}
          >
            Go High Level · Paid Media · Content · Community Management
          </div>

          {/* Pills */}
          <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
            {["GHL Experts", "Paid Media", "Content", "Community"].map((pill) => (
              <div
                key={pill}
                style={{
                  padding: "8px 20px",
                  borderRadius: 30,
                  border: "1px solid rgba(232,83,26,0.4)",
                  background: "rgba(232,83,26,0.1)",
                  color: "#E8531A",
                  fontSize: 18,
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
            color: "rgba(255,255,255,0.4)",
            fontSize: 22,
            fontFamily: "sans-serif",
            fontWeight: 500,
            letterSpacing: "0px",
          }}
        >
          kentolab.com
        </div>
      </div>
    ),
    { ...size }
  );
}
