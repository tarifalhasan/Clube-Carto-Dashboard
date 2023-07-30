import OverView from "@/components/common/overview/overviews";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { ButtonGroupType } from "@/interfaces";
import AddCategories from "./categories/add-category";
import ListCategories from "./categories/list-category";

const Discounts = () => {
  const Descontos: ButtonGroupType[] = [
    {
      name: "Categorias",
      href: "discounts",
    },
    {
      name: "Estabelecimento",
      href: "discounts",
    },
  ];

  return (
    <div className="space-y-5">
      <MainNavbar title="Descontos" />
      <OverView />
      <SubHeader href="discounts" buttonsData={Descontos} name="Descontos" />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-2xl p-5">
          <h2 className=" text-xl pb-5 font-semibold">Categorias</h2>
          <div className={`grid   gap-6`}>
            <AddCategories />
            <ListCategories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
