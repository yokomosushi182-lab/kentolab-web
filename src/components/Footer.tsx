"use client";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 py-12 border-t"
      style={{
        background: "var(--bone)",
        borderColor: "rgba(47,64,53,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-3">
          <Logo size="sm" />
          <p className="text-sm" style={{ color: "var(--stone)" }}>
            where technology meets nature
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium"
          aria-label="Footer navigation"
        >
          <a
            href="#services"
            className="footer-link transition-colors duration-150"
            style={{ color: "var(--stone)" }}
          >
            services
          </a>
          <a
            href="#about"
            className="footer-link transition-colors duration-150"
            style={{ color: "var(--stone)" }}
          >
            about
          </a>
          <a
            href={`https://wa.me/5492944157182`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link transition-colors duration-150"
            style={{ color: "var(--stone)" }}
          >
            WhatsApp
          </a>
        </nav>

        <p className="text-xs" style={{ color: "var(--stone)", opacity: 0.6 }}>
          © {year} kento lab
        </p>
      </div>

      <style jsx>{`
        .footer-link:hover {
          color: var(--terracotta) !important;
        }
      `}</style>
    </footer>
  );
}
