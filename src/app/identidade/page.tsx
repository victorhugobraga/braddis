import type { Metadata } from "next";
import PortfolioPage, { Squiggle } from "@/components/PortfolioPage";
import { identidade } from "@/data/portfolio";
import Contato from "@/components/ContatoSection";

export const metadata: Metadata = { title: "Braddis — Identidade Visual" };

export default function Page() {
  return (
    <>
      <PortfolioPage
        part="portfólio · parte 2 de 2"
        title={<Squiggle>Identidade Visual</Squiggle>}
        intro="Marca não é logo solto: é jeito de falar, de aparecer e de ser lembrada. Cada identidade nasce de rascunho, ganha cor própria e sai com manual pra durar."
        sections={identidade}
      />
      <Contato />
    </>
  );
}
