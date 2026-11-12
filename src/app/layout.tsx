import type { Metadata } from "next";
import { Caveat, Fraunces, Montserrat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Braddis — Inovação criativa",
  description:
    "Agência de inovação criativa. Tecnologia acelera, quem assina é a mão.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${caveat.variable} ${fraunces.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
