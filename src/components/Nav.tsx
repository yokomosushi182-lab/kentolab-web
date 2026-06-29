"use client";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 transition-all duration-300"
        style={{
          zIndex: "var(--z-nav)",
          background: "var(--bone)",
          boxShadow: scrolled ? "0 1px 0 rgba(47,64,53,0.1)" : "0 1px 0 rgba(47,64,53,0.06)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" aria-label="kento lab home">
            <Logo size="md" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <a href="#services" className="nav-link text-sm font-medium" style={{ color: "var(--forest)" }}>
              services
            </a>
            <a href="#about" className="nav-link text-sm font-medium" style={{ color: "var(--forest)" }}>
              about
            </a>
            <a
              href={`https://wa.me/5492944157182?text=${encodeURIComponent("Hi! I found you through your website and I'd love to learn more about kento lab.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn text-sm font-semibold px-5 py-2.5 rounded-md transition-all duration-200"
              style={{ background: "var(--terracotta)", color: "var(--bone)" }}
            >
              let&apos;s talk
            </a>
          </nav>

          {/* Mobile hamburger — 44×44 touch target */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-11 h-11 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300 origin-center"
              style={{
                background: "var(--forest)",
                transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{ background: "var(--forest)", opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300 origin-center"
              style={{
                background: "var(--forest)",
                transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay — full screen */}
      <div
        id="mobile-menu"
        className="fixed inset-0 md:hidden flex flex-col transition-all duration-300"
        style={{
          zIndex: "calc(var(--z-nav) - 1)",
          background: "var(--forest)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        aria-hidden={!menuOpen}
      >
        {/* Spacer for header */}
        <div className="h-16 flex-shrink-0" />

        <nav
          className="flex flex-col px-6 pt-10 pb-10 gap-0 flex-1"
          aria-label="Mobile navigation"
        >
          {[
            { label: "services", href: "#services" },
            { label: "about", href: "#about" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-2xl font-semibold py-5 border-b"
              style={{
                color: "var(--bone)",
                borderColor: "rgba(244,239,230,0.1)",
                letterSpacing: "-0.02em",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}

          <div className="mt-auto pt-10 flex flex-col gap-3">
            <a
              href={`https://wa.me/5492944157182?text=${encodeURIComponent("Hi! I found you through your website and I'd love to learn more about kento lab.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md font-semibold text-base min-h-[52px]"
              style={{ background: "var(--terracotta)", color: "var(--bone)" }}
              onClick={() => setMenuOpen(false)}
            >
              <WhatsAppIcon />
              chat on WhatsApp
            </a>
            <a
              href="https://calendly.com/luis-garcia-kento-lab/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md font-semibold text-base border min-h-[52px]"
              style={{ borderColor: "rgba(244,239,230,0.25)", color: "var(--bone)" }}
              onClick={() => setMenuOpen(false)}
            >
              book a free call
            </a>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
          text-decoration: none;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 100%;
          height: 2px;
          background: var(--terracotta);
          transition: right 0.25s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .nav-link:hover::after { right: 0; }
        .cta-btn:hover { background: var(--clay) !important; transform: translateY(-1px); }
      `}</style>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
