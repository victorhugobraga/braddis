import type { Metadata } from "next";
import PortfolioPage, { Squiggle } from "@/components/PortfolioPage";
import { conteudo } from "@/data/portfolio";
import Contato from "@/components/ContatoSection";

export const metadata: Metadata = { title: "Braddis — Planejamento e Criação de Conteúdo" };

export default function Page() {
  return (
    <>
      <PortfolioPage
        part="portfólio · parte 1 de 2"
        title={<>Planejamento e <Squiggle>Criação de Conteúdo</Squiggle></>}
        intro="Sete clientes, sete cores, zero feed genérico. Calendário pensado, arte desenhada e copy com voz própria. Funcionando do planejamento ao último post."
        sections={conteudo}
      />
      <Contato />
    </>
  );
}
