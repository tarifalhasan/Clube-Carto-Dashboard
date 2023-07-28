import { LockIcon } from "@/assets/svg/icons";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CheckboxReactHookFormMultiple } from "./group-checkbox";

const AdicionarGrupo = () => {
  const items = {
    dashboard: [
      {
        id: "dashboard",
        label: "Dashboard",
      },
      {
        id: "home",
        label: "Home",
      },
      {
        id: "applications",
        label: "Applications",
      },
      {
        id: "desktop",
        label: "Desktop",
      },
      {
        id: "downloads",
        label: "Downloads",
      },
      {
        id: "documents",
        label: "Documents",
      },
    ],
    categorias: [
      {
        id: "categorias",
        label: "Categorias",
      },
      {
        id: "categorias-adicionar",
        label: "Categorias - Adicionar",
      },
      {
        id: "categorias-remover",
        label: "Categorias - Remover",
      },
      {
        id: "categorias-editar",
        label: "Categorias - Editar",
      },
      {
        id: "categorias-listar",
        label: "Categorias - Listar",
      },
      {
        id: "estoque",
        label: "Estoque",
      },
      {
        id: "lista-de-preços",
        label: "Lista de Preços",
      },
      {
        id: "comentários",
        label: "Comentários",
      },
    ],
    Promoções: [
      {
        id: "promoções",
        label: "Promoções",
      },
      {
        id: "entrega",
        label: "Entrega",
      },
      {
        id: "pedidos",
        label: "Pedidos",
      },
      {
        id: "clientes",
        label: "Clientes",
      },
      {
        id: "agentes",
        label: "Agentes",
      },
      {
        id: "roadmap-colaborativo",
        label: "Roadmap colaborativo",
      },
    ],
    Lookbook: [
      {
        id: "lookbook",
        label: "Lookbook",
      },
      {
        id: "relatórios",
        label: "Relatórios",
      },
      {
        id: "layouts-e-conteúdos",
        label: "Layouts e Conteúdos",
      },
      {
        id: "configurações",
        label: "Configurações",
      },
      {
        id: "administradores",
        label: "Administradores",
      },
    ],
  };

  return (
    <div>
      <MainNavbar title="Funcionários" />
      <div className=" space-y-5 pb-1">
        <SubHeader name="EBloquear funcionário" href="/permissions" />
        <div>
          <div className=" space-y-4 bg-white rounded-2xl p-5 lg:p-8">
            <h3 className=" text-4xl">Selecionar grupo</h3>
            <div className=" flex flex-col lg:flex-row lg:items-center gap-4">
              <div className=" w-full lg:w-[565px]">
                <Select>
                  <SelectTrigger className=" min-w-full w-full">
                    <SelectValue placeholder="Selecionar funcionário" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Nome do funcionário</SelectLabel>
                      <SelectItem value="us">US</SelectItem>
                      <SelectItem value="uk">UK</SelectItem>
                      <SelectItem value="bd">BD</SelectItem>
                      <SelectItem value="ind">IND</SelectItem>
                      <SelectItem value="sl">SL</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="">
                <Button
                  className="  gap-2 text-base !lg:text-4xl font-semibold"
                  variant={"secondary"}
                >
                  <AiOutlinePlusCircle size={20} />
                  Adicionar
                </Button>
              </div>
            </div>
          </div>
          <div className=" mt-10 space-y-4 bg-white rounded-2xl p-5 lg:p-8 ">
            <div className=" p-5 inline-flex items-center gap-2">
              <h2 className=" text-base lg:text-4xl">
                Seleciona as permissões do funcionário que deseja bloquear
              </h2>
              <LockIcon />
            </div>
            <div className="flex mb-5 items-center space-x-2">
              <Checkbox disabled id="terms" />
              <label
                htmlFor="terms"
                className="text-lg font-bold text-black  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Marcar / Desmarcar todos
              </label>
            </div>
            <CheckboxReactHookFormMultiple items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdicionarGrupo;
