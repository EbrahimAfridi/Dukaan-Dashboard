import Footer from "./Footer.jsx";

const data = [ "#281209", "7 July, 2023", "₹1,278.23", "₹22" ];

const DataTable = () => {
  return(
    <div className="flex w-[1128px] h-[48px] py-[14px] px-[12px] items-center gap-[40px] bg-white">
      <div className="flex flex-col justify-center items-start gap-[-1px] flex-[1_0_0] text-[#146EB4] text-[14px] not-italic font-medium leading-[20px]">
        {data[0]}
      </div>
      <div className="flex flex-col justify-center items-start gap-[-1px] flex-[1_0_0] text-[#1A181E] text-[14px] not-italic font-normal leading-[20px]">
        {data[1]}
      </div>
      <div className={`flex flex-col justify-center items-start gap-[-1px] flex-[1_0_0] text-[#1A181E] text-[14px] not-italic font-normal leading-[20px] text-right`}>
        {data[2]}
      </div>
      <div className={`flex flex-col justify-center items-end gap-[-1px] flex-[1_0_0] text-[#1A181E] text-[14px] not-italic font-normal leading-[20px] text-right`}>
        {data[3]}
      </div>
    </div>
  )
}

export default DataTable;