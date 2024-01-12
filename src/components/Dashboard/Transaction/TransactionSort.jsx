import Outline from "../../../assets/Outline.svg";
import Download from "../../../assets/Download.svg";

const TransactionSort = () => {
  return(
    <div className="flex justify-end items-center gap-[12px]">
      <div className="flex items-center gap-[6px] py-[6px] px-[12px] rounded-[4px] border-[1px] border-[#D9D9D9] border-solid bg-white">
        <p className="text-[#4D4D4D] text-[16px] font-normal not-italic leading-[24px]">Sort</p>
        <img className="w-[16px] h-[16px]" src={Outline} alt="Sort Icon"/>
      </div>
      <div className="w-[36px] h-[36px] pl-1.5 pt-1.5 shrink-0 rounded-[4px] border-[1px] border-[#D9D9D9] border-solid bg-white">
        <img className="w-[20px] h-[20px] shrink-0" src={Download} alt="download Icon"/>
      </div>
    </div>
  )
}

export default TransactionSort;