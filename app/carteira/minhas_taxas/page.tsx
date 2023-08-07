import SubHeader from "@/components/sub-header";
import { carteira_routes } from "@/constant/carteira";
import React from "react";

function MinhasTaxas() {
  return (
    <div>
      <SubHeader
        href="/minhas_taxas"
        name="Minhas taxas"
        buttonsData={carteira_routes}
      />
    </div>
  );
}

export default MinhasTaxas;