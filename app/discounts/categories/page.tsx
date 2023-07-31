import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { DescontosSub } from "@/constant/data";
import AddCategories from "./add-category";
import ListCategories from "./list-category";

interface Props {
  className?: string;
}

const Categorys: React.FC<Props> = ({ className }) => {
  return (
    <div className=" space-y-5">
      <MainNavbar title="Descontos" />
      <SubHeader
        href="discounts"
        name="Categorias"
        buttonsData={DescontosSub}
      />
      <div className={`${className} lg:grid-cols-2 grid gap-6`}>
        <div className=" bg-white rounded-14 shadow-5xl p-5">
          <h2 className="text-lg py-5 lg:text-xl font-semibold">
            Clique para adicionar uma categoria
          </h2>
          <AddCategories />
        </div>
        <div className="bg-white rounded-14 shadow-5xl p-5">
          <h2 className="text-lg py-5 lg:text-xl font-semibold">
            Clique para listar categorias
          </h2>
          <ListCategories />
        </div>
      </div>
    </div>
  );
};

export default Categorys;
