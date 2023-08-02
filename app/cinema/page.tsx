import OverView from "@/components/common/overview/overviews";
import SubHeader from "@/components/sub-header";
import { cinema_routes } from "@/constant/cinema";

const Cinema = () => {
  return (
    <>
      <OverView />
      <SubHeader href="cinema" buttonsData={cinema_routes} name="Cinema" />
    </>
  );
};

export default Cinema;
