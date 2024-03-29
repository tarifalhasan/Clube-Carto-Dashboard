import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SingleButton({ name }: { name: string }) {
  return (
    <div className="flex items-center text-gray-700 py-1 px-3 bg-white rounded-lg border border-gray-300 hover:drop-shadow-lg cursor-pointer">
      <p className=" mr-1">{name}</p>
      <ArrowForwardIosIcon
        sx={{
          fontSize: "12px",
        }}
      />
    </div>
  );
}

export default SingleButton;
