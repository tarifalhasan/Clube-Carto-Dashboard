import { ProfileIcon } from "@/assets/svg/icons";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

interface CardInterface {
  name: string;
  amount: string;
  description: string;
}

function Card(props: CardInterface) {
  return (
    <div className="overview-card p-3 cursor-pointer hover:drop-shadow-lg">
      <div>
        <div className=" w-10 h-10 rounded-full bg-skin-JungleGreen grid place-items-center">
          {props.name === "Receita Total" ? (
            <BarChartOutlinedIcon sx={{ color: "white" }} />
          ) : props.name === "Multinível" ? (
            <AccountTreeOutlinedIcon sx={{ color: "white" }} />
          ) : props.name === "Cashback" ? (
            <AddCardOutlinedIcon sx={{ color: "white" }} />
          ) : (
            <ProfileIcon />
          )}
        </div>
      </div>
      <p className=" text-xstext-muted">{props.name}</p>
      <h2 className=" text-skin-gray-950 font-normal  text-2xl">
        {props.amount}
      </h2>
      <div className="text-xs font-normal flex items-center gap-1 ">
        <GoArrowUpRight className=" text-skin-JungleGreen" size={20} />
        {props.description}
      </div>
    </div>
  );
}

export default Card;
