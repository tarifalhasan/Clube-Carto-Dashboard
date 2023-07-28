import {
  AccociadorListType,
  ButtonGroupType,
  ClínicasType,
  DataTableType,
  pacientenType,
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

const SaúdeRoutes: ButtonGroupType[] = [
  {
    name: "Listar Clínicas",
    href: "listar-clicas",
  },
  {
    name: "Listar Especialidades",
    href: "listar-especialidades",
  },
  {
    name: "Agendamentos",
    href: "agendamentos",
  },
  {
    name: "Realizar Agendamento",
    href: "realizar-agendamento",
  },
  {
    name: "Recentes",
    href: "recentes",
  },
  {
    name: "Mais utilizados",
    href: "mais-utilizados",
  },
];

const FuncionáriosRoutes: ButtonGroupType[] = [
  {
    name: "Adicionar funcionário",
    href: "add-employee",
  },
  {
    name: "Editar funcionário",
    href: "editar-funcionário",
  },
  {
    name: "Bloquear funcionário",
    href: "block-employee",
  },
  {
    name: "Listar funcionário",
    href: "list-employee",
  },
  {
    name: "Grupos",
    href: "groups",
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

const ClínicasDummyList: ClínicasType[] = [
  {
    name: "Hospital Vitória, Rio de Janeiro 1",
    Especialidades: "Estado - Cidade",
    location:
      "Av. Altamiro Avelino Soares, 1061 - Castelo, Belo Horizonte - MG, 31330-000",
    id: "1",
  },
  {
    name: "Hospital Vitória, Rio de Janeiro 2",
    Especialidades: "Estado - Cidade 2",
    location:
      "Av. Altamiro Avelino Soares, 1061 - Castelo, Belo Horizonte - MG, 31330-000",
    id: "2",
  },
  {
    name: "Hospital Vitória, Rio de Janeiro 3",
    Especialidades: "Estado - Cidade 3",
    location:
      "Av. Altamiro Avelino Soares, 1061 - Castelo, Belo Horizonte - MG, 31330-000",
    id: "3",
  },
  {
    name: "Hospital Vitória, Rio de Janeiro 4",
    Especialidades: "Estado - Cidade 4",
    location:
      "Av. Altamiro Avelino Soares, 1061 - Castelo, Belo Horizonte - MG, 31330-000",
    id: "4",
  },
  {
    name: "Hospital Vitória, Rio de Janeiro 5",
    Especialidades: "Estado - Cidade 5",
    location:
      "Av. Altamiro Avelino Soares, 1061 - Castelo, Belo Horizonte - MG, 31330-000",
    id: "5",
  },
  {
    name: "Hospital Vitória, Rio de Janeiro 6",
    Especialidades: "Estado - Cidade 6",
    location:
      "Av. Altamiro Avelino Soares, 1061 - Castelo, Belo Horizonte - MG, 31330-000",
    id: "6",
  },
];

const pacienteLists: pacientenType[] = [
  {
    name: "Tarif Al Hasan",
    plano: "Estado - Cidade",
    location:
      "Av. Altamiro Avelino Soares, 1061 - Castelo, Belo Horizonte - MG, 31330-000",
    id: "1",
  },
  {
    name: "Tarif Al Hasan",
    plano: "Estado - Cidade",
    location:
      "Av. Altamiro Avelino Soares, 1061 - Castelo, Belo Horizonte - MG, 31330-000",
    id: "1",
  },
  {
    name: "Tarif Al Hasan",
    plano: "Estado - Cidade",
    location:
      "Av. Altamiro Avelino Soares, 1061 - Castelo, Belo Horizonte - MG, 31330-000",
    id: "1",
  },
  {
    name: "Tarif Al Hasan",
    plano: "Estado - Cidade",
    location:
      "Av. Altamiro Avelino Soares, 1061 - Castelo, Belo Horizonte - MG, 31330-000",
    id: "1",
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
  ClínicasDummyList,
  FinanceiroRoutes,
  FuncionáriosRoutes,
  ImportarRemessaList,
  PermissõesRoutes,
  SaúdeRoutes,
  associadosButtonData,
  dummyDataForTable,
  pacienteLists,
};
