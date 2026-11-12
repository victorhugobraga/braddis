import Link from "next/link";
import { Grain, RoughFilter } from "@/components/Defs";
import ContatoSection from "@/components/ContatoSection";
import { pillars, principles, strip, topics } from "@/data/home";

const M = "/media/";

export default function Home() {
  return (
    <>
      <main className="page">
        <Grain opacity={0.35} />
        <RoughFilter />

        {/* NAV */}
        <header className="nav wrap nav-bar" style={{ display: "flex", flexWrap: "wrap", gap: "16px 32px", alignItems: "center", justifyContent: "space-between", padding: "24px 48px" }}>
          <Link href="/" aria-label="Braddis, início" style={{ display: "block" }}>
            <img src={`${M}af2d83dc91af05cb0d82fb296d923fca.png`} alt="Braddis" style={{ height: 46, width: "auto", display: "block" }} />
          </Link>
          <nav aria-label="Principal" style={{ display: "flex", flexWrap: "wrap", gap: "12px 32px", alignItems: "center", fontSize: 16, fontWeight: 600 }}>
            <a className="lnk" href="#manifesto" style={{ padding: "12px 0" }}>O papo</a>
            <a className="lnk" href="#pilares" style={{ padding: "12px 0" }}>Pilares</a>
            <a className="lnk" href="#portfolio" style={{ padding: "12px 0" }}>Portfólio</a>
            <Link className="btn" href="#contato" style={{ background: "var(--ink)", color: "var(--paper)", textDecoration: "none", padding: "12px 22px", borderRadius: 999, boxShadow: "4px 4px 0 var(--accent)", fontWeight: 700 }}>
              Bora conversar
            </Link>
          </nav>
        </header>

        {/* HERO */}
        <section className="wrap hero" style={{ padding: "24px 48px 72px", display: "flex", flexWrap: "wrap", gap: 40, alignItems: "center" }}>
          <div className="hero-copy" style={{ flex: "1 1 520px", minWidth: 0 }}>
            <h1 className="serif" style={{ margin: 0, fontWeight: 600, fontSize: "clamp(52px,6.2vw,92px)", lineHeight: 1.02, letterSpacing: "-0.02em", color: "var(--ink)" }}>
              Seu perfil merece virar{" "}
              <span style={{ position: "relative", display: "inline-block", fontStyle: "italic", fontWeight: 800 }}>
                ponto turístico.
                <svg aria-hidden="true" viewBox="0 0 400 120" preserveAspectRatio="none" style={{ position: "absolute", left: -18, top: 1, width: "calc(100% + 36px)", height: "calc(100% + 24px)", overflow: "visible", pointerEvents: "none" }}>
                  <path d="M14 66 C 6 22, 120 4, 236 8 S 396 26, 390 62 S 290 112, 170 110 S 18 104, 10 60 C 8 40, 60 22, 120 16" fill="none" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" filter="url(#rough)" />
                </svg>
              </span>
            </h1>
            <p style={{ margin: "36px 0 0", maxWidth: 560, fontSize: 20, lineHeight: 1.55, fontWeight: 500 }}>
              Somos a Braddis, agência de inovação criativa. Tecnologia (e IA, claro) acelera o processo — mas cada traço é pensado à mão. O resultado: marca com cor, personalidade e os número batendo meta.
            </p>
            <div style={{ marginTop: 36, display: "flex", flexWrap: "wrap", gap: 16 }}>
              <Link className="btn" href="#contato" style={{ background: "var(--ink)", color: "var(--paper)", textDecoration: "none", padding: "16px 30px", borderRadius: 999, fontWeight: 700, fontSize: 18, boxShadow: "5px 5px 0 var(--accent)" }}>
                Bora conversar
              </Link>
              <a className="btn" href="#portfolio" style={{ background: "transparent", color: "var(--ink)", textDecoration: "none", padding: "14px 28px", borderRadius: 999, fontWeight: 700, fontSize: 18, border: "2.5px solid var(--ink)", boxShadow: "5px 5px 0 #FFD23F" }}>
                Ver o que a gente fez
              </a>
            </div>
          </div>

          {/* colagem */}
          <div className="collage" style={{ flex: "1 1 420px", maxWidth: 600, minWidth: 0, position: "relative", height: 660 }}>
            <svg aria-hidden="true" viewBox="0 0 120 120" style={{ position: "absolute", right: "2%", top: -10, width: 110, height: 110, transform: "rotate(12deg)" }}>
              <path d="M60 6 L72 44 L112 46 L80 70 L92 110 L60 86 L28 110 L40 70 L8 46 L48 44 Z" fill="#FFD23F" stroke="var(--ink)" strokeWidth="4" strokeLinejoin="round" filter="url(#rough)" />
            </svg>
            <img className="hero-photo" src={`${M}e394dad6f1b3e74723b30ef1457bb7c4.png`} alt="Dupla da Braddis sorrindo, abraçada" />
            <figure className="fig1" style={{ position: "absolute", left: -45, top: 102, width: 199, margin: 0, background: "#fff", padding: "10px 10px 40px", boxShadow: "6px 8px 0 rgba(20,8,58,.18)", height: 242 }}>
              <img src={`${M}e3987afcb299b6995f48a3ec8bf9d194.jpg`} alt="Post da Casa do Vidro: quando o projeto encontra o vidro, o ambiente se transforma" style={{ display: "block", width: "100%", height: "auto" }} />
              <figcaption className="hand" style={{ position: "absolute", left: 0, right: 0, bottom: -1, textAlign: "center", fontSize: 26, fontWeight: 700 }}>Casa do Vidro</figcaption>
            </figure>
            <figure className="fig2" style={{ position: "absolute", left: -170, top: 409, width: 196, margin: 0, background: "#fff", padding: "10px 10px 40px", boxShadow: "6px 8px 0 rgba(20,8,58,.18)", transform: "rotate(4deg)", height: 241 }}>
              <img src={`${M}347aa836844d6c0038167e680eb48b7d.jpg`} alt="Post da Entre Olhares: colônia de férias" style={{ display: "block", width: "100%", height: "auto" }} />
              <figcaption className="hand" style={{ position: "absolute", left: 0, right: 0, bottom: 2, textAlign: "center", fontSize: 26, fontWeight: 700 }}>Entre Olhares</figcaption>
            </figure>
            <p className="hand" style={{ margin: "0 0 20px", fontSize: 32, fontWeight: 700, color: "var(--accent)", transform: "rotate(-2deg)", display: "inline-block" }}>
              oi, a gente é a braddis ↓
            </p>
          </div>
        </section>

        {/* FAIXA */}
        <div aria-hidden="true" className="mq" style={{ position: "relative", zIndex: 1, background: "var(--ink)", color: "var(--paper)", padding: "20px 0", transform: "rotate(-1deg)", margin: "0 -20px", fontSize: 0 }}>
          <div className="trk" style={{ animationDuration: "38s" }}>
            {[...strip, ...strip, ...strip, ...strip].map((t, i) => (
              <span key={i} className="serif" style={{ fontStyle: "italic", fontWeight: 600, fontSize: "clamp(26px,6vw,40px)", whiteSpace: "nowrap", paddingRight: 36 }}>
                {t} <span style={{ color: "#FFD23F", fontStyle: "normal" }}>✱</span>
              </span>
            ))}
          </div>
        </div>

        {/* MANIFESTO */}
        <section id="manifesto" className="wrap manifesto" style={{ padding: "112px 48px 72px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 64px", alignItems: "flex-start" }}>
            <div style={{ flex: "0 1 260px", minWidth: 0 }}>
              <p className="hand" style={{ margin: 0, fontSize: 36, fontWeight: 700, color: "var(--accent)", transform: "rotate(-3deg)" }}>o papo é o seguinte:</p>
              <svg aria-hidden="true" viewBox="0 0 160 90" style={{ width: 140, height: 80, marginTop: 8 }}>
                <path d="M8 12 C 40 70, 90 80, 148 58 M148 58 L122 50 M148 58 L134 82" fill="none" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#rough)" />
              </svg>
            </div>
            <div style={{ flex: "1 1 560px", minWidth: 0 }}>
              <p className="serif" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(30px,3.6vw,52px)", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                O mercado inteiro correu pro preto e branco “porque é seguro”. A gente foi pro outro lado:{" "}
                <em style={{ fontWeight: 600, background: "linear-gradient(transparent 62%, #FFD23F 62%)" }}>cor, traço e cara de gente.</em>{" "}
                Cada peça sai com identidade própria — a IA entra pra acelerar, a mão entra pra assinar.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 72, display: "flex", flexWrap: "wrap", gap: 28 }}>
            {principles.map((p) => (
              <div key={p.n} style={{ flex: "1 1 min(280px,100%)", position: "relative", padding: "32px 28px 36px", background: p.bg, border: "3px solid var(--ink)", borderRadius: p.radius, transform: `rotate(${p.rot}deg)`, boxShadow: "6px 6px 0 var(--ink)" }}>
                <div className="hand" style={{ fontSize: 30, fontWeight: 700, color: "var(--accent)" }}>{p.n}</div>
                <h3 className="serif" style={{ margin: "4px 0 10px", fontWeight: 800, fontSize: 34, lineHeight: 1.05 }}>{p.title}</h3>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, fontWeight: 500 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFÓLIO */}
        <section id="portfolio" style={{ position: "relative", zIndex: 1, background: "var(--ink)", color: "var(--paper)", borderRadius: "48px 48px 0 0", marginTop: 48 }}>
          <div className="sec-in" style={{ maxWidth: 1440, margin: "0 auto", padding: "96px 48px 112px" }}>
            <h2 className="serif" style={{ margin: "8px 0 0", position: "relative", display: "inline-block", fontWeight: 800, fontSize: "clamp(56px,9vw,132px)", lineHeight: 1, letterSpacing: "-0.03em", color: "var(--paper)" }}>
              Portfólio
              <svg aria-hidden="true" viewBox="0 0 600 30" preserveAspectRatio="none" style={{ position: "absolute", left: 0, bottom: -10, width: "100%", height: 22, overflow: "visible" }}>
                <path d="M4 18 C 60 4, 90 28, 150 14 S 250 4, 300 16 S 400 28, 460 12 S 560 6, 596 16" fill="none" stroke="var(--accent)" strokeWidth="6" strokeLinecap="round" filter="url(#rough)" />
              </svg>
            </h2>
            <div style={{ marginTop: 72, display: "flex", flexWrap: "wrap", gap: 32 }}>
              {topics.map((t) => (
                <Link key={t.href} className="btn" href={t.href} style={{ flex: "1 1 min(440px,100%)", minWidth: 0, textDecoration: "none", color: "var(--ink-deep)", padding: "40px 36px 36px", border: "3px solid var(--paper)", borderRadius: t.radius, boxShadow: "8px 8px 0 var(--paper)", display: "flex", flexDirection: "column", gap: 18, transform: `rotate(${t.rot}deg)`, background: "var(--paper)" }}>
                  <span className="hand" style={{ fontSize: 32, fontWeight: 700 }}>{t.n}</span>
                  <span className="serif" style={{ fontWeight: 800, fontSize: "clamp(34px,3.4vw,52px)", lineHeight: 1.05 }}>{t.title}</span>
                  <span style={{ fontSize: 18, lineHeight: 1.6, fontWeight: 500 }}>{t.clients}</span>
                  <span style={{ marginTop: 8, fontWeight: 700, fontSize: 18 }}>Ver seções →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PILARES */}
        <section id="pilares" style={{ position: "relative", zIndex: 2, background: "var(--paper)", color: "var(--ink)", borderRadius: "48px 48px 0 0", marginTop: -48 }}>
          <div className="sec-in" style={{ maxWidth: 1440, margin: "0 auto", padding: "96px 48px 104px" }}>
            <p className="hand" style={{ margin: 0, fontSize: 34, fontWeight: 700, color: "var(--accent)", transform: "rotate(-2deg)", display: "inline-block" }}>o menu</p>
            <h2 className="serif" style={{ margin: "8px 0 0", maxWidth: 900, fontWeight: 600, fontSize: "clamp(40px,5vw,72px)", lineHeight: 1.04, letterSpacing: "-0.02em" }}>
              Escolhe um pilar. <em style={{ fontWeight: 400 }}>Ou monte o seu combo.</em>
            </h2>
            <div style={{ marginTop: 56, display: "flex", flexWrap: "wrap", gap: 32 }}>
              {pillars.map((c) => (
                <article key={c.n} className="pcard" style={{ flex: "1 1 min(280px,100%)", minWidth: 0, background: c.bg, color: c.fg, padding: "30px 28px 34px", borderRadius: c.radius, transform: `rotate(${c.rot}deg)`, boxShadow: "8px 8px 0 rgba(0,0,0,.28)", display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span className="hand" style={{ fontSize: 30, fontWeight: 700 }}>{c.n}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", border: "2px solid currentColor", borderRadius: 999, padding: "4px 12px" }}>{c.area}</span>
                  </div>
                  <h3 className="serif" style={{ margin: 0, fontWeight: 800, fontSize: 36, lineHeight: 1.02 }}>{c.title}</h3>
                  <p className="serif" style={{ margin: 0, fontStyle: "italic", fontSize: 20, lineHeight: 1.3 }}>{c.tag}</p>
                  <ul style={{ margin: "6px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontSize: 16, fontWeight: 500, lineHeight: 1.4 }}>
                    {c.items.map((it) => (
                      <li key={it} style={{ display: "flex", gap: 10 }}>
                        <span aria-hidden="true" style={{ fontWeight: 800 }}>✱</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p style={{ margin: "64px 0 0", maxWidth: 860, fontSize: 22, lineHeight: 1.5, fontWeight: 500 }}>
              Quer misturar? Rola combo: <strong style={{ color: "var(--accent)" }}>Feed com Trilha</strong>, <strong style={{ color: "var(--accent)" }}>Lançou, Não Parou</strong>, <strong style={{ color: "var(--accent)" }}>Marca Nova, Casa Nova</strong> e o <strong style={{ color: "var(--accent)" }}>Do Zero ao Topo</strong>. Todo projeto pontual termina com uma ideia de continuidade — sem enrolação.
            </p>
          </div>
        </section>

        <ContatoSection />
      </main>
    </>
  );
}
