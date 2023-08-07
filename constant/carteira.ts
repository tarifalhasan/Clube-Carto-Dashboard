import { sidebarNavigationType } from "@/interfaces";

const carteira_routes: sidebarNavigationType[] = [
  {
    name: "Adicionar saldo",
    href: "adicionar-saldo",
  },
  {
    name: "Transferir",
    href: "transferir",
  },
  {
    name: "Terminais",
    href: "terminais",
  },
  {
    name: "Retirar",
    href: "retirar",
  },
  {
    name: "Cobrança",
    href: "cobrança",
  },
  {
    name: "Emita uma cobrança",
    href: "emita_uma",
  },
  {
    name: "Produtos",
    href: "produtos",
  },
  {
    name: "Relatórios",
    href: "reports",
  },
  {
    name: "Minhas taxas",
    href: "minhas_taxas",
  },
];

export { carteira_routes };
