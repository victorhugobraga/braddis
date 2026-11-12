import type { Metadata } from "next";
import ContatoSection from "@/components/ContatoSection";

export const metadata: Metadata = { title: "Braddis — Contato" };

export default function Page() {
  return (
    <main style={{ background: "var(--ink)", minHeight: "100vh" }}>
      <ContatoSection />
    </main>
  );
}
