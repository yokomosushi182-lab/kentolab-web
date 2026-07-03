"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  .film-grain {
    position: absolute; inset: 0; width: 100%; height: 100%;
    pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-kento {
    background-size: 60px 60px;
    background-image:
      linear-gradient(to right, rgba(244,239,230,0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(244,239,230,0.04) 1px, transparent 1px);
    mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  .text-3d-kento {
    color: #F4EFE6;
    text-shadow:
      0 10px 30px rgba(47,64,53,0.4),
      0 2px 4px rgba(47,64,53,0.2);
  }

  .text-clay-reveal {
    background: linear-gradient(180deg, #F4EFE6 0%, rgba(216,138,87,0.7) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateZ(0);
    filter:
      drop-shadow(0px 10px 20px rgba(216,138,87,0.25))
      drop-shadow(0px 2px 4px rgba(47,64,53,0.3));
  }

  .text-card-light {
    background: linear-gradient(180deg, #F4EFE6 0%, rgba(244,239,230,0.6) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateZ(0);
    filter:
      drop-shadow(0px 12px 24px rgba(0,0,0,0.6))
      drop-shadow(0px 4px 8px rgba(0,0,0,0.4));
  }

  .premium-depth-card {
    background: linear-gradient(145deg, #1a2e1f 0%, #080e09 100%);
    box-shadow:
      0 40px 100px -20px rgba(0,0,0,0.9),
      0 20px 40px -20px rgba(0,0,0,0.8),
      inset 0 1px 2px rgba(244,239,230,0.08),
      inset 0 -2px 4px rgba(0,0,0,0.8);
    border: 1px solid rgba(244,239,230,0.04);
    position: relative;
  }

  .card-sheen {
    position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
    background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(216,138,87,0.06) 0%, transparent 40%);
    mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  .iphone-bezel {
    background-color: #111;
    box-shadow:
      inset 0 0 0 2px #52525B,
      inset 0 0 0 7px #000,
      0 40px 80px -15px rgba(0,0,0,0.9),
      0 15px 25px -5px rgba(0,0,0,0.7);
    transform-style: preserve-3d;
  }

  .hardware-btn {
    background: linear-gradient(90deg, #404040 0%, #171717 100%);
    box-shadow:
      -2px 0 5px rgba(0,0,0,0.8),
      inset -1px 0 1px rgba(255,255,255,0.15),
      inset 1px 0 2px rgba(0,0,0,0.8);
    border-left: 1px solid rgba(255,255,255,0.05);
  }

  .screen-glare {
    background: linear-gradient(110deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 45%);
  }

  .widget-depth {
    background: linear-gradient(180deg, rgba(244,239,230,0.04) 0%, rgba(244,239,230,0.01) 100%);
    box-shadow:
      0 10px 20px rgba(0,0,0,0.3),
      inset 0 1px 1px rgba(244,239,230,0.04),
      inset 0 -1px 1px rgba(0,0,0,0.5);
    border: 1px solid rgba(244,239,230,0.04);
  }

  .floating-ui-badge {
    background: linear-gradient(135deg, rgba(244,239,230,0.07) 0%, rgba(244,239,230,0.01) 100%);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    box-shadow:
      0 0 0 1px rgba(244,239,230,0.08),
      0 25px 50px -12px rgba(0,0,0,0.8),
      inset 0 1px 1px rgba(244,239,230,0.12),
      inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  .btn-kento-primary {
    background: linear-gradient(180deg, #D88A57 0%, #B5602F 100%);
    color: #F4EFE6;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.3), 0 12px 24px -4px rgba(181,96,47,0.5), inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(0,0,0,0.3);
    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-kento-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 0 1px rgba(0,0,0,0.1), 0 6px 12px -2px rgba(181,96,47,0.4), 0 20px 32px -6px rgba(181,96,47,0.6), inset 0 1px 1px rgba(255,255,255,0.25), inset 0 -2px 4px rgba(0,0,0,0.3);
  }
  .btn-kento-secondary {
    background: linear-gradient(180deg, rgba(244,239,230,0.1) 0%, rgba(244,239,230,0.04) 100%);
    color: #F4EFE6;
    box-shadow: 0 0 0 1px rgba(244,239,230,0.12), 0 2px 4px rgba(0,0,0,0.4), 0 12px 24px -4px rgba(0,0,0,0.6), inset 0 1px 1px rgba(244,239,230,0.08);
    backdrop-filter: blur(12px);
    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-kento-secondary:hover {
    transform: translateY(-3px);
    background: linear-gradient(180deg, rgba(244,239,230,0.16) 0%, rgba(244,239,230,0.08) 100%);
    box-shadow: 0 0 0 1px rgba(244,239,230,0.2), 0 6px 12px -2px rgba(0,0,0,0.4), 0 20px 32px -6px rgba(0,0,0,0.7), inset 0 1px 1px rgba(244,239,230,0.12);
  }

  .progress-ring {
    transform: rotate(-90deg);
    transform-origin: center;
    stroke-dasharray: 402;
    stroke-dashoffset: 402;
    stroke-linecap: round;
  }
`;

interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CinematicHero({ className, ...props }: CinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return;
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          mainCardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;
          gsap.to(mockupRef.current, { rotationY: xVal * 12, rotationX: -yVal * 12, ease: "power3.out", duration: 1.2 });
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => { window.removeEventListener("mousemove", handleMouseMove); cancelAnimationFrame(requestRef.current); };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.set(".text-track", { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 });
      gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set([".card-left-text", ".card-right-text", ".mockup-scroll-wrapper", ".floating-badge", ".phone-widget"], { autoAlpha: 0 });
      gsap.set(".cta-wrapper", { autoAlpha: 0, scale: 0.8, filter: "blur(30px)" });

      const introTl = gsap.timeline({ delay: 0.3 });
      introTl
        .to(".text-track", { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", rotationX: 0, ease: "expo.out" })
        .to(".text-days", { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=1.0");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=7000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to([".hero-text-wrapper", ".bg-grid-kento"], { scale: 1.15, filter: "blur(20px)", opacity: 0.2, ease: "power2.inOut", duration: 2 }, 0)
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
        .fromTo(".mockup-scroll-wrapper",
          { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2.5 }, "-=0.8"
        )
        .fromTo(".phone-widget", { y: 40, autoAlpha: 0, scale: 0.95 }, { y: 0, autoAlpha: 1, scale: 1, stagger: 0.15, ease: "back.out(1.2)", duration: 1.5 }, "-=1.5")
        .to(".progress-ring", { strokeDashoffset: 60, duration: 2, ease: "power3.inOut" }, "-=1.2")
        .to(".counter-val", { innerHTML: 6, snap: { innerHTML: 1 }, duration: 2, ease: "expo.out" }, "-=2.0")
        .fromTo(".floating-badge", { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 }, { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.5, stagger: 0.2 }, "-=2.0")
        .fromTo(".card-left-text", { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 }, "-=1.5")
        .fromTo(".card-right-text", { x: 50, autoAlpha: 0, scale: 0.8 }, { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5 }, "<")
        .to({}, { duration: 2.5 })
        .set(".hero-text-wrapper", { autoAlpha: 0 })
        .set(".cta-wrapper", { autoAlpha: 1 })
        .to({}, { duration: 1.5 })
        .to([".mockup-scroll-wrapper", ".floating-badge", ".card-left-text", ".card-right-text"], {
          scale: 0.9, y: -40, z: -200, autoAlpha: 0, ease: "power3.in", duration: 1.2, stagger: 0.05,
        })
        .to(".main-card", {
          width: isMobile ? "92vw" : "85vw",
          height: isMobile ? "92vh" : "85vh",
          borderRadius: isMobile ? "32px" : "40px",
          ease: "expo.inOut",
          duration: 1.8,
        }, "pullback")
        .to(".cta-wrapper", { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.8 }, "pullback")
        .to(".main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const CALENDLY = "https://calendly.com/luis-garcia-kento-lab/30min";
  const WHATSAPP = `https://wa.me/5492944157182?text=${encodeURIComponent("Hi! I found you through your website and I'd love to learn more about kento lab.")}`;

  return (
    <div
      ref={containerRef}
      className={cn("relative w-screen h-screen overflow-hidden flex items-center justify-center antialiased", className)}
      style={{ background: "var(--forest)", perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-kento absolute inset-0 z-0 pointer-events-none opacity-50" aria-hidden="true" />

      {/* Hero text */}
      <div className="hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4">
        <h1 className="text-track gsap-reveal text-3d-kento text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight mb-2"
          style={{ color: "var(--bone)", letterSpacing: "-0.04em" }}>
          your coaches need
        </h1>
        <h1 className="text-days gsap-reveal text-clay-reveal text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter"
          style={{ letterSpacing: "-0.04em" }}>
          a real team.
        </h1>
      </div>

      {/* CTA screen */}
      <div className="cta-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 gsap-reveal pointer-events-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          style={{ color: "var(--bone)", letterSpacing: "-0.04em" }}>
          Ready to grow?
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed"
          style={{ color: "rgba(244,239,230,0.55)" }}>
          No pressure, no jargon. Just a real conversation about GHL, paid media, content, and community — all handled for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
            className="btn-kento-primary flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            book a free call
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="btn-kento-secondary flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Deep card */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0">

            {/* Right — brand name */}
            <div className="card-right-text gsap-reveal order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full">
              <h2 className="text-6xl md:text-[6rem] lg:text-[7rem] font-black uppercase tracking-tighter text-card-light">
                kento
                <br />
                lab
              </h2>
            </div>

            {/* Center — phone mockup */}
            <div className="mockup-scroll-wrapper order-2 relative w-full h-[380px] lg:h-[600px] flex items-center justify-center z-10" style={{ perspective: "1000px" }}>
              <div className="relative w-full h-full flex items-center justify-center transform scale-[0.65] md:scale-85 lg:scale-100">
                <div ref={mockupRef} className="relative w-[280px] h-[580px] rounded-[3rem] iphone-bezel flex flex-col will-change-transform">
                  {/* Buttons */}
                  <div className="absolute top-[120px] -left-[3px] w-[3px] h-[25px] hardware-btn rounded-l-md" aria-hidden="true" />
                  <div className="absolute top-[160px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md" aria-hidden="true" />
                  <div className="absolute top-[220px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md" aria-hidden="true" />
                  <div className="absolute top-[170px] -right-[3px] w-[3px] h-[70px] hardware-btn rounded-r-md scale-x-[-1]" aria-hidden="true" />

                  <div className="absolute inset-[7px] bg-[#050e08] rounded-[2.5rem] overflow-hidden text-white z-10">
                    <div className="absolute inset-0 screen-glare z-40 pointer-events-none" aria-hidden="true" />

                    {/* Dynamic Island */}
                    <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-end px-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D88A57] shadow-[0_0_8px_rgba(216,138,87,0.8)] animate-pulse" />
                    </div>

                    <div className="relative w-full h-full pt-12 px-5 pb-8 flex flex-col">
                      {/* Header */}
                      <div className="phone-widget flex justify-between items-center mb-8">
                        <div>
                          <span className="text-[10px] text-[rgba(244,239,230,0.4)] uppercase tracking-widest font-bold block mb-1">Dashboard</span>
                          <span className="text-xl font-bold tracking-tight text-[#F4EFE6]">kento lab</span>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-[rgba(216,138,87,0.15)] flex items-center justify-center font-bold text-sm border border-[rgba(216,138,87,0.3)]"
                          style={{ color: "#D88A57" }}>KL</div>
                      </div>

                      {/* Ring counter */}
                      <div className="phone-widget relative w-44 h-44 mx-auto flex items-center justify-center mb-8 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]">
                        <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                          <circle cx="88" cy="88" r="64" fill="none" stroke="rgba(244,239,230,0.04)" strokeWidth="12" />
                          <circle className="progress-ring" cx="88" cy="88" r="64" fill="none" stroke="#D88A57" strokeWidth="12" />
                        </svg>
                        <div className="text-center z-10 flex flex-col items-center">
                          <span className="counter-val text-4xl font-extrabold tracking-tighter" style={{ color: "#F4EFE6" }}>0</span>
                          <span className="text-[8px] uppercase tracking-[0.1em] font-bold mt-0.5" style={{ color: "rgba(216,138,87,0.6)" }}>Specialists</span>
                        </div>
                      </div>

                      {/* Service widgets */}
                      <div className="space-y-3">
                        <div className="phone-widget widget-depth rounded-2xl p-3 flex items-center">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3 border"
                            style={{ background: "rgba(216,138,87,0.15)", borderColor: "rgba(216,138,87,0.25)" }}>
                            <svg className="w-4 h-4" style={{ color: "#D88A57" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="h-2 w-20 rounded-full mb-2" style={{ background: "rgba(244,239,230,0.2)" }} />
                            <div className="h-1.5 w-12 rounded-full" style={{ background: "rgba(244,239,230,0.08)" }} />
                          </div>
                          <span className="text-xs font-semibold" style={{ color: "#D88A57" }}>GHL</span>
                        </div>
                        <div className="phone-widget widget-depth rounded-2xl p-3 flex items-center">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3 border"
                            style={{ background: "rgba(124,138,95,0.2)", borderColor: "rgba(124,138,95,0.3)" }}>
                            <svg className="w-4 h-4" style={{ color: "#7C8A5F" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="h-2 w-16 rounded-full mb-2" style={{ background: "rgba(244,239,230,0.2)" }} />
                            <div className="h-1.5 w-24 rounded-full" style={{ background: "rgba(244,239,230,0.08)" }} />
                          </div>
                          <span className="text-xs font-semibold" style={{ color: "#7C8A5F" }}>Ads</span>
                        </div>
                      </div>

                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] rounded-full" style={{ background: "rgba(244,239,230,0.15)" }} />
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="floating-badge absolute flex top-6 lg:top-12 left-[-15px] lg:left-[-80px] floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 z-30">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center border"
                    style={{ background: "rgba(216,138,87,0.15)", borderColor: "rgba(216,138,87,0.3)" }}>
                    <span className="text-base lg:text-xl" aria-hidden="true">⚡</span>
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm font-bold tracking-tight" style={{ color: "#F4EFE6" }}>GHL Launched</p>
                    <p className="text-[10px] lg:text-xs font-medium" style={{ color: "rgba(216,138,87,0.6)" }}>Funnel live in 48h</p>
                  </div>
                </div>

                <div className="floating-badge absolute flex bottom-12 lg:bottom-20 right-[-15px] lg:right-[-80px] floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 z-30">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center border"
                    style={{ background: "rgba(124,138,95,0.2)", borderColor: "rgba(124,138,95,0.3)" }}>
                    <span className="text-base lg:text-lg" aria-hidden="true">📈</span>
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm font-bold tracking-tight" style={{ color: "#F4EFE6" }}>Ads Running</p>
                    <p className="text-[10px] lg:text-xs font-medium" style={{ color: "rgba(124,138,95,0.6)" }}>Google + Meta active</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Left — description */}
            <div className="card-left-text gsap-reveal order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full px-4 lg:px-0">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-0 lg:mb-5 tracking-tight" style={{ color: "#F4EFE6", letterSpacing: "-0.03em" }}>
                Full-service marketing.
              </h3>
              <p className="hidden md:block text-base lg:text-lg font-light leading-relaxed max-w-sm" style={{ color: "rgba(244,239,230,0.55)" }}>
                <span style={{ color: "#F4EFE6", fontWeight: 600 }}>kento lab</span> gives coaching businesses a complete team: GHL specialists, paid media, content creators, and community managers working as one unit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
