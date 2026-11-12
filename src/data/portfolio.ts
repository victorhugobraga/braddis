export type Slide =
  | { kind: "img"; w: number; src: string; alt: string }
  | { kind: "vid"; w: number; src: string; poster: string; alt: string }
  | { kind: "ph"; w: number; label: string };

export type ClientSection = {
  name: string;
  sub?: string;
  bg: string;
  fg: string;
  line: string;
  tags: string[];
  slides: Slide[];
};

const M = "/media/";
const img = (id: string, alt: string, w = 352): Slide => ({ kind: "img", w, src: `${M}${id}.jpg`, alt });
const vid = (id: string, poster: string, alt: string): Slide => ({
  kind: "vid",
  w: 262,
  src: `${M}${id}.mp4`,
  poster: `${M}${poster}.jpg`,
  alt,
});

export const conteudo: ClientSection[] = [
  {
    name: "Casa do Vidro", bg: "#1F5FBF", fg: "#FFFFFF",
    line: "Vidro é luz e leveza. O feed ganhou a mesma transparência.",
    tags: ["Planejamento", "Criação de posts"],
    slides: [
      img("e3987afcb299b6995f48a3ec8bf9d194", "Post Casa do Vidro: quando o projeto encontra o vidro, o ambiente se transforma"),
      img("50e45d1bfb7bbb097445e11d24e06063", "Post Casa do Vidro"),
      img("c3230542fcbe0bb2d8d6c271d0cf30ce", "Post Casa do Vidro"),
      img("9327601b8610d2e096f88ca66022da80", "Post Casa do Vidro"),
      img("ca9f08294d43a8c11b19574948eb8f3f", "Post Casa do Vidro"),
    ],
  },
  {
    name: "Entre Olhares", bg: "#8FC9EC", fg: "#0E2F5A",
    line: "Núcleo de desenvolvimento infantil pede cor, traço solto e muita vida. Cada campanha parece brincadeira e leva pais pra agenda.",
    tags: ["Planejamento", "Criação de posts", "Campanhas"],
    slides: [
      img("347aa836844d6c0038167e680eb48b7d", "Post Entre Olhares: colônia de férias"),
      vid("3d2d88cbd0d43aeb454cd9dac270f4a6", "6fbc24a293435bd102649bd28e40e97a", "Reels Entre Olhares"),
      img("1445200e8fc5c2b2ad1333273a7d37c4", "Post Entre Olhares"),
      img("b23e5fa61b70b8f07c3e727414b8b033", "Post Entre Olhares"),
      vid("c06bca0f5bc7e996bb4284687ffc81ed", "65d6b6d0ab3693909b30b1edae7d3e3b", "Reels Entre Olhares"),
      img("f32ea74a213f1b3d85a09dbb92c24763", "Post Entre Olhares"),
      img("b57e8b5f220096deb383f4af32ed2154", "Post Entre Olhares"),
      vid("c07b78c2c2499479c30b5c4e80fa9304", "529a32cd82cb7f6c4f7b095b215cb024", "Reels Entre Olhares"),
      img("c836ce54fc8afc2edd60d5a0545949f5", "Post Entre Olhares"),
    ],
  },
  {
    name: "Flor & Ser", bg: "#A5B99B", fg: "#1F3320",
    line: "Psicologia com cara de acolhimento, não de consultório frio. Posts e reels que explicam sem pesar.",
    tags: ["Planejamento", "Posts", "Reels"],
    slides: [
      img("19ec3bd545575067ab0f8005c12f7372", "Post Flor e Ser: quando buscar psicoterapia para crianças"),
      vid("169eb7def41712a57b30c32aaa1561d9", "6884387f1a13e728e132d1a9c7582f7d", "Reels Flor e Ser"),
      img("cd1e9527799abb4d02ce44dbd475397b", "Post Flor e Ser"),
      img("17e2886946b69efbbd6122c5ffb08452", "Post Flor e Ser"),
      img("51b7fb63a778aebe3911b9d005173894", "Post Flor e Ser"),
    ],
  },
  {
    name: "Vitaminar", bg: "#F59E1B", fg: "#2B1600",
    line: "Conteúdo planejado pra render: bastidores na cozinha, atendimento de perto e papo claro sobre temas que geram dúvida na alimentação infantil.",
    tags: ["Planejamento", "Reels"],
    slides: [
      vid("9d9182fb56984c551bb53a82fae6b556", "820ac44a29b4da09991974058a5ba390", "Reels Vitaminar: canetas emagrecedoras"),
      vid("21494df0b89c75ed002be9fa583a3535", "466d523b73393ea17d15b8ef1063e60d", "Reels Vitaminar: laboratório"),
      vid("de6f5fedb23a9da4485017f597eee1c6", "0dd9abdb43d7d58d2f3ff5f7dab1a7cb", "Reels Vitaminar: atendimento"),
      vid("561c0b9b5e51219ddb530d4e562b50ef", "13c0041f6b4c56f830f69b731ddd6b60", "Reels Vitaminar: fase da seletividade"),
    ],
  },
  {
    name: "Aliment Consultoria", bg: "#F05A27", fg: "#2B0F05",
    line: "Consultoria que fala com gente de verdade: reels diretos, com cara de conversa e sem papo de manual.",
    tags: ["Planejamento", "Posts", "Reels"],
    slides: [
      vid("4770764bcd7233029c9a6d6c512edeac", "8bbb3938139c79d2d69ae7fa25b73669", "Reels Aliment"),
      img("c69303c1bc1becad1a656b91609d1a24", "Post Aliment Consultoria: quer ser o profissional que se destaca? Comece com uma especialização prática"),
      vid("c9a3ea231181552d9891052e93178491", "2d94ddb331a5db0659ccf07211496f90", "Reels Aliment"),
      img("217b087862900c708d08d560b9414ac4", "Post Aliment Consultoria: por trás de cada prato servido, há um trabalho invisível de cuidado e excelência"),
      vid("8d0c07b559d27a34cecd712f0baaf5cb", "8cc1a4168cf7efdd464d89c6c4b551c5", "Reels Aliment"),
      img("01c184d0850cf491c5846fc1c29234bf", "Post Aliment Consultoria: o que você precisa para abrir sua consultoria na prática"),
      vid("f7f53802f73e52e38d7b5078a62e8f1b", "d6c4110c433e03c96e327f9d96789809", "Reels Aliment"),
    ],
  },
  {
    name: "Renascer", bg: "#364C3F", fg: "#FFF4E8",
    line: "Um movimento de transformação pra mulheres, em vídeo: edição acolhedora e ritmo de quem quer ser ouvida.",
    tags: ["Planejamento", "Reels"],
    slides: [
      vid("033c0f4804fa14256a53b85d9fc44b6d", "c898a6138dcc157ceb8e222af4662927", "Reels Renascer"),
      vid("b49ee3b840cfed2c281688d5982fc288", "390d3a792eee21707549630575d56121", "Reels Renascer"),
      vid("071fd9e6fc88c51765583d75027fbe28", "0d2d8678881d0cca66e4b7b85410ba4a", "Reels Renascer"),
      vid("8fe79de0f69a5fe9156fd87581334726", "ebe519e809333660a8d06a83b16e323e", "Reels Renascer"),
      vid("85db48c419143fb85adc0e1c3cfe8306", "258b57f00e1d01be9fcbc6b4cb08ce62", "Reels Renascer"),
    ],
  },
  {
    name: "Pipocando", bg: "#F08FA6", fg: "#3A0715",
    line: "Pipoca gourmet que pede foto bonita e vídeo que dá fome: sabor, brilho e clima de data especial.",
    tags: ["Planejamento", "Fotos", "Reels"],
    slides: [
      vid("da5fb4a9e0fdea7a5238c4ef1fe0412e", "cf2d8450d07ae2e7293674f77453be9e", "Reels Pipocando"),
      img("d8226d01258c6245bba4fb23f33bed83", "Pipocando com Nutella"),
      vid("e670d7079f3a38c784520d945c758a11", "924ba4853668c8f7710e9efdef79075f", "Reels Pipocando: clima de natal"),
      img("b2ffa861282be6a9aa9ebb5994310f52", "Pipocando com leite Ninho"),
      vid("2012045f14ad86e37aaa75c5a4195395", "88554fa333eb82bd745510642dd235ea", "Reels Pipocando"),
      img("533d5a99e5c0cb86ea8069a291a1d0a9", "Pipocando de chocolate com laço de natal"),
      vid("c7a7f22855ec0c8cf37fee085a97e7b9", "7452138f50be2b3e4bc723c144de6e5a", "Reels Pipocando"),
      vid("12741c37eb4a1dd38d14e5ec05e9d23c", "e041849e4d040bb7fd9c7c597336d7e8", "Reels Pipocando: pipoca de nutella"),
      vid("3699feccb96fb97edea0ef60a12417d3", "5d2294c59ed723df8087886c1a6e5739", "Reels Pipocando"),
    ],
  },
];

const wide = (id: string, alt: string) => img(id, alt, 767);
const photo = (id: string, alt: string) => img(id, alt, 352);

export const identidade: ClientSection[] = [
  {
    name: "Renascer", sub: "", bg: "#364C3F", fg: "#FFF4E8",
    line: "Uma marca de recomeço, que pedem cores fortes como o verde escuro mas que revelam femilinidade no rosa.",
    tags: ["Identidade visual", "Branding book"],
    slides: [
      wide("92a98a8fc2c49db682f39ed40ceb374e", "Logo Renascer em quatro cores"),
      wide("3b31e8dee3232400c74bca7eda4c5df8", "Branding book Renascer: capa"),
      wide("63067a0b432117b1a88b516a716d546b", "Branding book Renascer: conceito"),
      wide("b172ee2c713d0a3c8cd52ccaf2cad22a", "Branding book Renascer: tipografia"),
      wide("3c42c57613f7103d1783661069979199", "Branding book Renascer: versões do logo"),
      img("192dce7c6a298b3bdf62eccd10b307a3", "Camiseta Renascer verde, frente com logo e R com flor, costas com a palavra STAFF", 527),
      wide("0e410f1ed772d5e8850f2f92059ac659", "Branding book Renascer: aplicações"),
      img("aa68e967d739b827e303c0d288624987", "Arte da Conferência de Mulheres Renascer, 19 de outubro, Uberlândia-MG", 262),
    ],
  },
  {
    name: "NutreCon", sub: "", bg: "#F2734A", fg: "#3A1205",
    line: "Empresa júnior de nutrição: marca que representa a faculdade sem cara de aula.",
    tags: ["Identidade visual", "Peças de divulgação"],
    slides: [
      wide("64c3cf1a9732c506922b5515d3723f38", "Logo NutreCon"),
      photo("95074cdff432cd6a8492d2ad048b4b29", "Símbolo NutreCon"),
      photo("6b974c4a013c781d3c78db45d9e27687", "Posts para redes sociais NutreCon"),
      wide("efed3f8fb72ec02964f9d80db4c94987", "Padrão gráfico NutreCon"),
      photo("bddc55142b832c4c96ae3a024b889e43", "Paleta de cores NutreCon"),
      photo("64f256e7ad8aef76e8a9b98608ccab4a", "Flyer do 1º Ciclo de Palestras NutreCon"),
    ],
  },
  {
    name: "GR Serralheria", sub: "", bg: "#271C5C", fg: "#F9FD2F",
    line: "Solda à domicílio com marca firme e que se destaca pela qualidade.",
    tags: ["Identidade visual", "Aplicações"],
    slides: [
      wide("721b9cdd629243f51252d0b28aa209eb", "Logo GR Serralheria"),
      photo("8fd804294f968bacfc3bb8d2e62587cc", "Cartão de WhatsApp GR Serralheria"),
      wide("b871dbc545d3ecc01a06b09864fb31a5", "Paleta de cores GR Serralheria"),
      wide("1fd126af61f80a1ba5b0f6e1740c021f", "Mockup dos cartões de visita"),
      img("74b821bf8eb455e1350006a5efb8aaf0", "Capa de contato GR Serralheria", 440),
      wide("191170ae9fd3eb1172134871ec82bcd2", "Camisetas GR Serralheria"),
    ],
  },
];
