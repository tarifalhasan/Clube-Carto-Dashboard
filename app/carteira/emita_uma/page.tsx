import SubHeader from "@/components/sub-header";
import { carteira_routes } from "@/constant/carteira";
import React from "react";

function emita_uma_cobrança() {
  return (
    <SubHeader
      href="/emita_uma"
      name="Emita uma cobrança"
      buttonsData={carteira_routes}
    />
  );
}

export default emita_uma_cobrança;
