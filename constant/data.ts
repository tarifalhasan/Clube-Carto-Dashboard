import {
  AccociadorListType,
  ButtonGroupType,
  DataTableType,
} from "@/interfaces";

const associadosButtonData: ButtonGroupType[] = [
  {
    name: "Lista",
    href: "/associados/lista",
  },
  {
    name: "Adicionar associado",
    href: "/associados/adicionar_associado",
  },
  {
    name: "Editar associado",
    href: "/associados/editar_associado",
  },
  {
    name: "Importar Remessa",
    href: "/associados/importar_remessa",
  },
  {
    name: "Exportar Remessa",
    href: "/associados/exportar_remessa",
  },
  {
    name: "Importar Remessa",
    href: "/associados/grupos",
  },
];

const PermissõesRoutes: ButtonGroupType[] = [
  {
    name: "Adicionar grupo",
    href: "adicionar-grupo",
  },
  {
    name: "Editar grupo",
    href: "editar-grupo",
  },
  {
    name: "Excluir grupo",
    href: "excluir-grupo",
  },
  {
    name: "Listar grupo",
    href: "listar-grupo",
  },
];

const FinanceiroRoutes: ButtonGroupType[] = [
  {
    name: "Minha fatura",
    href: "minha-faturao",
  },
  {
    name: "Solicitar 2ª via",
    href: "solicitar",
  },
  {
    name: "Dados da conta",
    href: "dados-da-conta",
  },
  {
    name: "Histórico",
    href: "historic",
  },
];

const AssoociadorList: AccociadorListType[] = [
  {
    name: "Nome do associado",
    id: "1",
  },
  {
    name: "Nome do associado",
    id: "2",
  },
  {
    name: "Nome do associado",
    id: "3",
  },
  {
    name: "Nome do associado",
    id: "4",
  },
  {
    name: "Nome do associado",
    id: "5",
  },
  {
    name: "Nome do associado",
    id: "6",
  },
];
const ImportarRemessaList: AccociadorListType[] = [
  {
    name: "Nome do associado",
    id: "1",
  },
  {
    name: "Nome do associado",
    id: "2",
  },
  {
    name: "Nome do associado",
    id: "3",
  },
  {
    name: "Nome do associado",
    id: "4",
  },
];

const dummyDataForTable: DataTableType[] = [
  {
    data: "00/00/0000",
    protocolo: "12123",
    descrição: " lorem ipsun dollar sit amer",
    valor: "",
    ações: "",
  },
  {
    data: "00/00/0000",
    protocolo: "12123",
    descrição: " lorem ipsun dollar sit amer",
    valor: "",
    ações: "",
  },
  {
    data: "00/00/0000",
    protocolo: "12123",
    descrição: " lorem ipsun dollar sit amer",
    valor: "",
    ações: "",
  },
  {
    data: "00/00/0000",
    protocolo: "12123",
    descrição: " lorem ipsun dollar sit amer",
    valor: "",
    ações: "",
  },
  {
    data: "00/00/0000",
    protocolo: "12123",
    descrição: " lorem ipsun dollar sit amer",
    valor: "",
    ações: "",
  },
];

export {
  AssoociadorList,
  FinanceiroRoutes,
  ImportarRemessaList,
  PermissõesRoutes,
  associadosButtonData,
  dummyDataForTable,
};
