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
    name: "Retirar",
    href: "retirar",
  },
  {
    name: "Cobrança",
    href: "cobrança",
  },
  {
    name: "Produtos",
    href: "produtos",
  },
  {
    name: "Relatórios",
    href: "relatórios",
  },
  {
    name: "Mais utilizados",
    href: "minhastaxas",
  },
];

export { carteira_routes };
