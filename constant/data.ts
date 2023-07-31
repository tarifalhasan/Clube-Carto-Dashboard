import {
  AccociadorListType,
  ButtonGroupType,
  ClínicasType,
  DataTableType,
  EstablishType,
  pacientenType,
} from "@/interfaces";

const associadosButtonData: ButtonGroupType[] = [
  {
    name: "Lista",
    href: "lista",
  },
  {
    name: "Adicionar associado",
    href: "adiciona-rassociado",
  },
  {
    name: "Editar associado",
    href: "editar-associado",
  },
  {
    name: "Importar Remessa",
    href: "importar-remessa",
  },
  {
    name: "Exportar Remessa",
    href: "exportar-remessa",
  },
  {
    name: "Importar Remessa",
    href: "grupos",
  },
];

interface sidebarType {
  path: string;
  Categorias: ButtonGroupType[];
  Estabelecimento: ButtonGroupType[];
}
const DescontosRoutes: sidebarType = {
  path: "discounts",
  Categorias: [
    {
      name: "Categorias",
      href: "categories",
    },
    {
      name: "Adicionar Categoria",
      href: "add-category",
    },
    {
      name: " Listar Categorias",
      href: "list-categories",
    },
  ],
  Estabelecimento: [
    {
      name: "Estabelecimento",
      href: "establishment",
    },
    {
      name: " Adicionar estabelecimento ",
      href: "add-establishment",
    },
    {
      name: "Cadastrar Descontos ",
      href: "register-discounts",
    },

    {
      name: "Detaque Scroll",
      href: "detaque-scroll",
    },
    {
      name: "Listar estabelecimento",
      href: "list-establishment",
    },
    {
      name: "Bloquear ",
      href: "block",
    },
    {
      name: "Recentes ",
      href: "Recent",
    },
    {
      name: " Mais utilizados ",
      href: "most-used",
    },
  ],
};
const DescontosSub: ButtonGroupType[] = [
  {
    name: "Categorias",
    href: "discounts",
  },
  {
    name: "Estabelecimento",
    href: "discounts",
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
    href: "edit-employee",
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
const CashbackRoutess: ButtonGroupType[] = [
  {
    name: "Categorias",
    href: "categories",
  },
  {
    name: "Adicionar estabelecimento",
    href: "add-establishment",
  },
  {
    name: "Lista",
    href: "list",
  },
  {
    name: "Meus Ganhos",
    href: "my-earnings",
  },
];
const TelemedicineRoutes: ButtonGroupType[] = [
  {
    name: "List Specialties",
    href: "list-specialties",
  },
  {
    name: "Planos Ativos",
    href: "active-plans",
  },
  {
    name: "Chamados recentes",
    href: "recent-calls",
  },
  {
    name: "Gerar link consulta",
    href: "generate-query-link",
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

const ListOfEstablishmentsData: EstablishType[] = [
  {
    name: "Hospital Vitória",
    id: "1",
  },
  {
    name: "Hospital Vitória",
    id: "2",
  },
  {
    name: "Hospital Vitória",
    id: "3",
  },
  {
    name: "Hospital Vitória",
    id: "4",
  },
  {
    name: "Hospital Vitória",
    id: "5",
  },
  {
    name: "Hospital Vitória",
    id: "6",
  },
];

export {
  AssoociadorList,
  CashbackRoutess,
  ClínicasDummyList,
  DescontosRoutes,
  DescontosSub,
  FinanceiroRoutes,
  FuncionáriosRoutes,
  ImportarRemessaList,
  ListOfEstablishmentsData,
  PermissõesRoutes,
  SaúdeRoutes,
  TelemedicineRoutes,
  associadosButtonData,
  dummyDataForTable,
  pacienteLists,
};
