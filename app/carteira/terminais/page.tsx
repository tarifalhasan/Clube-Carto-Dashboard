import SubHeader from "@/components/sub-header";
import { carteira_routes } from "@/constant/carteira";

import React from "react";

function Termanias() {
  return (
    <div>
      <SubHeader
        href="/termanias"
        name="Termanias"
        buttonsData={carteira_routes}
      />
    </div>
  );
}

export default Termanias;
