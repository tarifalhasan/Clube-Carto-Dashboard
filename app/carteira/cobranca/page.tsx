import SubHeader from "@/components/sub-header";
import { carteira_routes } from "@/constant/carteira";
import React from "react";

function Cobranca() {
  return (
    <div>
      <SubHeader
        href="/cobranca"
        name="Cobrança"
        buttonsData={carteira_routes}
      />
    </div>
  );
}

export default Cobranca;
