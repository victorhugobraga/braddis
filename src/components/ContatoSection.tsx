import { RoughFilter } from "./Defs";

export default function ContatoSection() {
  return (
    <section
      id="contato"
      style={{
        position: "relative", zIndex: 2, width: "100%", background: "var(--ink)", color: "var(--paper)",
        overflow: "hidden", borderRadius: "48px 48px 0 0", marginTop: -48,
      }}
    >
      <RoughFilter />
      <div className="sec-in" style={{ maxWidth: 1440, margin: "0 auto", padding: "112px 48px 56px", display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center" }}>
        <div style={{ flex: "1 1 min(520px,100%)", minWidth: 0 }}>
          <p className="hand" style={{ margin: 0, fontSize: 36, fontWeight: 700, color: "var(--sun)", transform: "rotate(-2deg)", display: "inline-block" }}>
            última parada do tour
          </p>
          <h2 className="serif" style={{ margin: "8px 0 0", fontWeight: 600, fontSize: "clamp(48px,6.4vw,96px)", lineHeight: 1.02, letterSpacing: "-0.03em" }}>
            Bora tirar a ideia <em style={{ fontWeight: 400 }}>do papel?</em>
          </h2>
          <p style={{ margin: "32px 0 0", maxWidth: 560, fontSize: 21, lineHeight: 1.55, fontWeight: 500 }}>
            Manda um oi, conta o que você quer vender e a gente volta com um caminho — direto, colorido e com cara de gente.
          </p>
          <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 16 }}>
            <a className="btn" href="mailto:contato@braddis.com" style={{ background: "var(--sun)", color: "var(--ink-deep)", textDecoration: "none", padding: "18px 32px", borderRadius: 999, fontWeight: 700, fontSize: 19, maxWidth: "100%", overflowWrap: "anywhere", boxShadow: "5px 5px 0 var(--accent)" }}>
              contato@braddis.com
            </a>
          </div>
        </div>
        <div style={{ flex: "1 1 min(360px,100%)", minWidth: 0, display: "flex", justifyContent: "center", position: "relative" }}>
          <img src="/media/0e88bb8cdee0e179beddeb758270b586.png" alt="Braddis" style={{ width: "min(100%,560px)", height: "auto", transform: "rotate(-4deg)" }} />
        </div>
      </div>
      <footer className="sec-in" style={{ maxWidth: 1440, margin: "0 auto", padding: "40px 48px 56px", display: "flex", flexWrap: "wrap", gap: "12px 32px", justifyContent: "space-between", alignItems: "baseline", borderTop: "2px dashed rgba(242,237,228,.4)" }}>
        <span className="serif" style={{ fontStyle: "italic", fontSize: 22 }}>Inovação criativa</span>
        <span className="hand" style={{ fontSize: 28, fontWeight: 700, color: "var(--sun)" }}>tecnologia acelera, quem assina é a mão ✱</span>
        <span style={{ fontSize: 15, fontWeight: 500 }}>© 2026 Braddis</span>
      </footer>
    </section>
  );
}
