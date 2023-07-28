import { TiPlusOutline } from "react-icons/ti";
const PatientCard = () => {
  return (
    <div>
      <div className=" flex  gap-4">
        <div>
          <div className=" w-[51px] h-[51px] rounded-full bg-[#EBEBEB] grid place-items-center">
            <TiPlusOutline className="text-[#353A40]" size={20} />
          </div>
        </div>
        <div className=" sm:max-w-[251px]">
          <h2 className="text-base text-[#353A40] font-bold leading-normal">
            Nome do paciente
          </h2>
          <p className="text-xs text-[#353A40] font-semibold">Plano</p>
          <p className="text-xs text-[#353A40] font-medium">Estado - Cidade</p>
          <p className="text-xs text-[#353A40] font-normal">
            Av. Altamiro Avelino Soares, 1061 - Castelo, Belo Horizonte - MG,
            31330-000
          </p>
        </div>
      </div>
      <div className=" bg-[#569A59] rounded-br-14 rounded-bl-14">
        <p className=" text-sm text-white py-1 px-1">Ver no mapa</p>
      </div>
    </div>
  );
};

export default PatientCard;
