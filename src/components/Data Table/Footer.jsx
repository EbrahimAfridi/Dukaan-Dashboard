import left from "../../assets/left.svg";
import right from "../../assets/right.svg";

const data = [ "#281209", "7 July, 2023", "₹1,278.23", "₹22" ];

const Footer = () => {
  return(
    <div className="flex flex-col items-center gap-[24px]">
      <div>
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
        <div className="flex w-[1104px] h-[0px] justify-center items-center absolute left-[12px] bottom-[0px]"></div>
      </div>
      <div className="flex justify-center items-center gap-[24px]">
        <div className="flex items-center gap-[24px]">
          <div className="flex p-[6px] pr-[12px] justify-center items-center gap-[6px] rounded-[4px] border-[1px] border-solid border-[#D9D9D9] bg-white">
            <img className="w-[18px] h-[18px] text-[#4D4D4D]" src={left} alt="left"/>
            <div className="flex items-start gap-[8px] text-[#4D4D4D] text-center text-[14px] not-italic font-medium leading-[20px]">
              Previous
            </div>
          </div>
        </div>
        {/*Pages List*/}
        <div className="flex items-start gap-[8px]">
          <div className="flex w-[28px] h-[28px] py-[2px] px-[0px] flex-col justify-center items-center gap-[8px] rounded-[4px] text-[#4D4D4D]">
            1
          </div>
          <div className="flex w-[28px] h-[28px] py-[2px] px-[0px] flex-col justify-center items-center gap-[8px] rounded-[4px] text-[#4D4D4D]">
            ...
          </div>
          <div className="flex bg-[#146EB4] text-white w-[28px] h-[28px] py-[2px] px-[0px] flex-col justify-center items-center gap-[8px] rounded-[4px] text-[#4D4D4D]">
            10
          </div>
          <div className="flex w-[28px] h-[28px] py-[2px] px-[0px] flex-col justify-center items-center gap-[8px] rounded-[4px] text-[#4D4D4D]">
            11
          </div>
          <div className="flex w-[28px] h-[28px] py-[2px] px-[0px] flex-col justify-center items-center gap-[8px] rounded-[4px] text-[#4D4D4D]">
            12
          </div>
          <div className="flex w-[28px] h-[28px] py-[2px] px-[0px] flex-col justify-center items-center gap-[8px] rounded-[4px] text-[#4D4D4D]">
            13
          </div>
          <div className="flex w-[28px] h-[28px] py-[2px] px-[0px] flex-col justify-center items-center gap-[8px] rounded-[4px] text-[#4D4D4D]">
            14
          </div>
          <div className="flex w-[28px] h-[28px] py-[2px] px-[0px] flex-col justify-center items-center gap-[8px] rounded-[4px] text-[#4D4D4D]">
            15
          </div>
          <div className="flex w-[28px] h-[28px] py-[2px] px-[0px] flex-col justify-center items-center gap-[8px] rounded-[4px] text-[#4D4D4D]">
            16
          </div>
          <div className="flex w-[28px] h-[28px] py-[2px] px-[0px] flex-col justify-center items-center gap-[8px] rounded-[4px] text-[#4D4D4D]">
            17
          </div>
          <div className="flex w-[28px] h-[28px] py-[2px] px-[0px] flex-col justify-center items-center gap-[8px] rounded-[4px] text-[#4D4D4D]">
            18
          </div>
        </div>
      {/*  Next Button */}
        <div className="flex p-[6px] pl-[12px] justify-center items-center gap-[6px] rounded-[4px] border-[1px] border-solid border-[#D9D9D9] bg-white">
          <div className="flex items-start gap-[8px]">
            Next
          </div>
          <img src={right} alt="right"/>
        </div>
      </div>

    </div>
  )
}

export default Footer;