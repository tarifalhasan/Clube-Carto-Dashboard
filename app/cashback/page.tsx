import OverView from "@/components/common/overview/overviews";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";

import { CashbackRoutess } from "@/constant/data";
import ListOfEstablishments from "./list-of-establishments";
const CashBack = () => {
  return (
    <>
      <div className=" space-y-5  pb-6">
        <MainNavbar title="Cashback" />
        <div className="  space-y-5">
          <OverView />
          <SubHeader
            href="cashback"
            buttonsData={CashbackRoutess}
            name="CashBack"
          />
        </div>
        <ListOfEstablishments />
      </div>
    </>
  );
};

export default CashBack;
