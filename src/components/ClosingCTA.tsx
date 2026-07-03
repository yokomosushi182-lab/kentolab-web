"use client";
import { FadeIn } from "./FadeIn";

const WHATSAPP = `https://wa.me/5492944157182?text=${encodeURIComponent(
  "Hi! I found you through your website and I'd love to learn more about kento lab."
)}`;
const CALENDLY = "https://calendly.com/luis-garcia-kento-lab/30min";

export function ClosingCTA() {
  return (
    <section
      className="px-6 py-24 md:py-36 overflow-hidden relative"
      style={{ background: "var(--forest)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 60%, rgba(216,138,87,0.1) 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <p
            className="text-sm font-medium mb-6"
            style={{ color: "var(--clay)" }}
          >
            ready when you are
          </p>
          <h2
            className="leading-tight mb-8"
            style={{
              fontFamily: "var(--font-bodoni), Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
              color: "var(--bone)",
              maxWidth: "18ch",
              letterSpacing: "-0.03em",
              fontWeight: 700,
            }}
          >
            Ready to grow with a team behind you?
          </h2>
          <p
            className="leading-relaxed mb-12 font-light"
            style={{
              fontSize: "1.0625rem",
              color: "rgba(244,239,230,0.7)",
              maxWidth: "44ch",
            }}
          >
            No pressure, no jargon. Just a real conversation about where you are and what it would look like to have GHL, paid ads, content, and community all handled for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="closing-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-semibold text-base transition-all duration-200"
              style={{ background: "var(--terracotta)", color: "var(--bone)" }}
            >
              book a free call
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="closing-wa inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-semibold text-base border transition-all duration-200"
              style={{
                borderColor: "rgba(244,239,230,0.25)",
                color: "var(--bone)",
              }}
            >
              <WhatsAppIcon />
              message on WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>

      <style jsx>{`
        .closing-primary:hover {
          background: var(--clay) !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(181, 96, 47, 0.35);
        }
        .closing-wa:hover {
          background: rgba(244, 239, 230, 0.08);
          border-color: rgba(244, 239, 230, 0.5) !important;
        }
      `}</style>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
