import SubHeader from "@/components/sub-header";
import { carteira_routes } from "@/constant/carteira";
import React from "react";

function Retirar() {
  return (
    <div>
      <SubHeader href="/retirar" name="Retirar" buttonsData={carteira_routes} />
    </div>
  );
}

export default Retirar;
