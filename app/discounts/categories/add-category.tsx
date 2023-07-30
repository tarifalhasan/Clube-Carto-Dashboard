import { DocumentIconSvg } from "@/assets/svg/icons";
import { Button } from "@/components/ui/button";
import { MdSave } from "react-icons/md";

const AddCategories = () => {
  return (
    <div className="shadow-5xl space-y-3 bg-white p-4 rounded-2xl">
      <div>
        <DocumentIconSvg />
      </div>
      <div className="flex items-center justify-between">
        <h3 className=" text-xl font-normal">
          Adicionar <br /> Categorias
        </h3>
        <Button variant={"secondary"}>
          <MdSave size={20} className="text-white" />{" "}
          <span className=" text-white">Adicionar</span>
        </Button>
      </div>
    </div>
  );
};

export default AddCategories;
