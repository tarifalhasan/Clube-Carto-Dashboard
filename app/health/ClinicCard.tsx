import { ClínicasType } from "@/interfaces";
import { FaUserDoctor } from "react-icons/fa6";
const ClinicCard: React.FC<ClínicasType> = ({
  name,
  location,
  Especialidades,
}) => {
  return (
    <>
      <div className=" flex  bg-white gap-4 p-4 rounded-14">
        <div>
          <div className=" w-[51px] h-[51px] rounded-full bg-[#EBEBEB] grid place-items-center">
            <FaUserDoctor className="text-[#353A40]" size={25} />
          </div>
        </div>
        <div className="">
          <h2 className="text-base text-[#353A40] font-bold">{name}</h2>
          <p className="text-xs text-[#353A40] font-semibold">Especialidades</p>
          <p className="text-xs text-[#353A40] font-medium">{Especialidades}</p>
          <p className="text-xs sm:max-w-[251px] text-[#353A40] font-normal">
            {location}
          </p>
        </div>
      </div>
      <div className="  bg-[#569A59] rounded-br-14 rounded-bl-14">
        <p className=" text-sm text-white py-1 px-1">Ver no mapa</p>
      </div>
    </>
  );
};

export default ClinicCard;
