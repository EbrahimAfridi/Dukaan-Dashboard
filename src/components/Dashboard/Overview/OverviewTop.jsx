import DownArrow from "../../../assets/DownArrow.svg";

const OverviewTop = () => {
  return(
    <div className="flex-col items-start gap-[20px] self-stretch">
      <div className="flex justify-between items-center self-stretch">
        <p className="text-[20px] font-medium not-italic leading-[28px]">Overview</p>
        <div className="flex items-center gap-[16px] text-[#4D4D4D]">
          <button className="flex items-center p-2 w-[137px] h-[36px] shrink-0 rounded-[4px] border-solid border-[1px] border-[#D9D9D9]">
            <span className="text-[16px] not-italic font-normal leading-[24px]">Last Month</span>
            <img className="w-4 h-4 shrink-0 ml-2" src={DownArrow} alt="Down Arrow"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OverviewTop;