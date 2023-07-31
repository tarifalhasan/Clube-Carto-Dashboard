import { SaveFileICon } from "@/assets/svg/icons";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Categorie from "../categorie";

const AddCategories = () => {
  return (
    <div className=" space-y-5 pb-7">
      <MainNavbar title="Descontos" />
      <SubHeader name="Adicionar Categoria" href="list-categories" />
      <div className="shadow-5xl  bg-white rounded-2xl  px-5 py-8">
        <div className="flex  flex-wrap lg:flex-nowrap items-center gap-6 ">
          <Input placeholder="Escreva a nova Categoria" />
          <Input
            id="Faça upload do ícone"
            placeholder="Faça upload do ícone"
            type="file"
          />
          <Button variant={"secondary"} className=" gap-3 ">
            <SaveFileICon />{" "}
            <span className="text-base font-semibold text-white">
              Adicionar
            </span>
          </Button>
        </div>
      </div>
      <div className=" shadow-5xl bg-white rounded-2xl p-5">
        <h2 className=" text-xl">
          Clique na categoria que deseja e adicione ao seu produto
        </h2>
        <Categorie />
      </div>
    </div>
  );
};

export default AddCategories;
