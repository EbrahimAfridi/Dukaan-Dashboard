import OverviewBottom from "./OverviewBottom.jsx";
import OverviewTop from "./OverviewTop.jsx";

const Overview = () => {

  return(
    <div className="flex-col gap-[24px] flex items-start self-stretch">
      <OverviewTop/>
      <OverviewBottom/>
    </div>
  )
}

export default Overview;
