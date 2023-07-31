import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import Categorie from "../categorie";

const ListCategories = () => {
  return (
    <div className=" space-y-5 pb-7">
      <MainNavbar title="Descontos" />
      <SubHeader name="Listar Categorias" href="list-categories" />
      <div className=" shadow-5xl bg-white rounded-2xl p-5">
        <h2 className=" text-xl">
          Clique na categoria que deseja e adicione ao seu produto
        </h2>
        <Categorie />
      </div>
    </div>
  );
};

export default ListCategories;
