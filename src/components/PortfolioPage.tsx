import type { CSSProperties } from "react";
import type { ClientSection, Slide } from "@/data/portfolio";
import Link from "next/link";
import { Grain, RoughFilter } from "./Defs";

function rgb(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(",");
}

function SlideCard({ slide, fg, name, hidden }: { slide: Slide; fg: string; name: string; hidden: boolean }) {
  const frame: CSSProperties = { width: slide.w, height: 440 };
  if (slide.kind === "ph") {
    Object.assign(frame, {
      background: "rgba(255,255,255,.22)",
      border: `2.5px dashed ${fg}`,
      boxShadow: "none",
    });
  }
  return (
    <div className="card" style={frame}>
      {slide.kind === "img" && (
        <img
          src={slide.src}
          alt={hidden ? "" : slide.alt}
          loading="lazy"
          style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
      {slide.kind === "vid" && (
        <video
          src={slide.src}
          poster={slide.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={hidden ? undefined : slide.alt}
          style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
      {slide.kind === "ph" && (
        <div
          style={{
            width: "100%", height: "100%", display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 12, padding: 16, color: fg,
            background: `repeating-linear-gradient(135deg, rgba(${rgb(fg)},.10) 0 2px, transparent 2px 14px)`,
          }}
        >
          <svg aria-hidden="true" viewBox="0 0 120 90" style={{ width: 96, height: 72 }}>
            <rect x="8" y="8" width="104" height="74" rx="6" fill="none" stroke={fg} strokeWidth="4" strokeDasharray="10 7" filter="url(#rough)" />
            <circle cx="38" cy="32" r="9" fill="none" stroke={fg} strokeWidth="4" />
            <path d="M14 74 L46 46 L68 64 L84 52 L108 74" fill="none" stroke={fg} strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
          <span className="hand" style={{ fontSize: 38, fontWeight: 700, lineHeight: 1 }}>em breve</span>
          <span style={{ fontSize: 14, fontWeight: 600, textAlign: "center", lineHeight: 1.4 }}>{slide.label || `[ conteúdo da ${name} entra aqui ]`}</span>
        </div>
      )}
    </div>
  );
}

function BackLink({ style }: { style?: CSSProperties }) {
  return (
    <Link
      className="btn"
      href="/"
      style={{
        display: "inline-block", background: "var(--ink)", color: "var(--paper)", textDecoration: "none",
        padding: "12px 24px", borderRadius: 999, fontWeight: 700, fontSize: 17,
        boxShadow: "4px 4px 0 var(--accent)", ...style,
      }}
    >
      ← Voltar à página inicial
    </Link>
  );
}

function Section({ s }: { s: ClientSection }) {
  const sum = s.slides.reduce((a, x) => a + x.w + 28, 0);
  return (
    <section
      style={{
        position: "relative", zIndex: 1, marginTop: -48, borderRadius: "48px 48px 0 0",
        background: s.bg, color: s.fg,
      }}
    >
      <div
        className="sec-in"
        style={{
          maxWidth: 1440, margin: "0 auto", padding: "112px 48px 80px", display: "flex",
          flexWrap: "wrap", gap: "40px 56px", alignItems: "center",
        }}
      >
        <div style={{ flex: "1 1 min(300px,100%)", maxWidth: 380, minWidth: 0 }}>
          <h3 className="serif" style={{ margin: 0, fontWeight: 800, fontSize: "clamp(40px,4.6vw,64px)", lineHeight: 1, letterSpacing: "-0.02em" }}>
            {s.name}
          </h3>
          {s.sub && <div className="hand" style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.1, marginTop: 4 }}>{s.sub}</div>}
          <svg aria-hidden="true" viewBox="0 0 300 20" style={{ width: "min(260px,100%)", height: 18, marginTop: 10, overflow: "visible" }}>
            <path d="M4 12 C 40 2, 70 20, 110 10 S 180 2, 220 12 S 270 16, 296 8" fill="none" stroke={s.fg} strokeWidth="4" strokeLinecap="round" filter="url(#rough)" />
          </svg>
          <p style={{ margin: "22px 0 0", fontSize: 19, lineHeight: 1.5, fontWeight: 500 }}>{s.line}</p>
          <div style={{ marginTop: 22, display: "flex", flexWrap: "wrap", gap: 10 }}>
            {s.tags.map((t) => (
              <span key={t} style={{ border: `2px solid ${s.fg}`, borderRadius: 999, padding: "6px 14px", fontSize: 14, fontWeight: 700 }}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="mq" style={{ flex: "999 1 min(560px,100%)", minWidth: 0, padding: "22px 0 36px" }}>
          <div className="trk" style={{ animationDuration: `${Math.round(sum / 55)}s` }}>
            {[false, true].flatMap((hidden) =>
              s.slides.map((sl, i) => (
                <SlideCard key={`${hidden}-${i}`} slide={sl} fg={s.fg} name={s.name} hidden={hidden} />
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioPage({
  part, title, intro, sections,
}: {
  part: string;
  title: React.ReactNode;
  intro: string;
  sections: ClientSection[];
}) {
  return (
    <main className="page">
      <Grain />
      <RoughFilter />
      <header className="wrap" style={{ padding: "40px 48px 128px" }}>
        <div style={{ marginBottom: 40 }}>
          <BackLink />
        </div>
        <p className="hand" style={{ margin: 0, fontSize: 34, fontWeight: 700, color: "var(--accent)", transform: "rotate(-2deg)", display: "inline-block" }}>
          {part}
        </p>
        <h1 className="serif" style={{ margin: "8px 0 0", maxWidth: 1100, fontWeight: 800, fontSize: "clamp(44px,6.4vw,96px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "var(--ink)" }}>
          {title}
        </h1>
        <p style={{ margin: "36px 0 0", maxWidth: 620, fontSize: 20, lineHeight: 1.55, fontWeight: 500 }}>{intro}</p>
      </header>
      {sections.map((s) => (
        <Section key={s.name} s={s} />
      ))}
    </main>
  );
}

export function Squiggle({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ position: "relative", display: "inline-block", fontStyle: "italic", fontWeight: 600 }}>
      {children}
      <svg aria-hidden="true" viewBox="0 0 600 24" preserveAspectRatio="none" style={{ position: "absolute", left: 0, bottom: -8, width: "100%", height: 16, overflow: "visible" }}>
        <path d="M4 14 C 60 2, 100 22, 160 10 S 260 2, 320 12 S 420 22, 480 8 S 560 6, 596 12" fill="none" stroke="#FF5B3A" strokeWidth="5" strokeLinecap="round" filter="url(#rough)" />
      </svg>
    </span>
  );
}
