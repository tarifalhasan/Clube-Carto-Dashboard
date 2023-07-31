import { AddAppsIcon } from "@/assets/svg/icons";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IoIosArrowForward } from "react-icons/io";
const Recent = () => {
  const Data = [
    {
      name: "Nome do estabelecimento",
    },
    {
      name: "Nome do estabelecimento",
    },
    {
      name: "Nome do estabelecimento",
    },
    {
      name: "Nome do estabelecimento",
    },
    {
      name: "Nome do estabelecimento",
    },
    {
      name: "Nome do estabelecimento",
    },
    {
      name: "Nome do estabelecimento",
    },
    {
      name: "Nome do estabelecimento",
    },
    {
      name: "Nome do estabelecimento",
    },
  ];

  return (
    <div className=" space-y-5">
      <MainNavbar title="Desconto" />
      <SubHeader href="discounts" name="Mais utilizados" />
      <div className="  bg-white rounded-2xl p-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className=" text-xl lg:text-5xl !font-normal">
              Veja os estabelecimentos mais utilizados
            </h2>
            <p className=" text-xl font-semibold">
              Conheça os estabelecimentos
            </p>
          </div>
          <AddAppsIcon />
        </div>
        <div className=" py-5">
          <ul className=" space-y-2 ">
            {Data.map((data, index) => (
              <li
                key={index}
                className={cn(
                  "bg-white rounded-xl  flex items-center justify-between p-4",

                  {
                    "shadow-5xl": index % 2 === 0,
                  }
                )}
              >
                <span>{data.name}</span>
                <IoIosArrowForward />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <span>1/5</span>
          <Button variant={"secondary"} className=" gap-3  font-semibold">
            <span className=" text-white">ver mais</span> <IoIosArrowForward />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Recent;
