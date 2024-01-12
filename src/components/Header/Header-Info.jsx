import {Question} from "@phosphor-icons/react";


const HeaderInfo = () => {
  return(
    <div className="flex flex-[1_0_0] items-center gap-4">

      <div className="flex items-center gap-4">
        <p className="text-[15px] not-italic font-normal leading-[22px]">Payments</p>
      </div>

      <div className="flex items-center gap-[6px]">
        <span className="w-[14px] h-[14px]"><Question/></span>
        <p className="text-[12px] not-italic font-normal leading-[16px]">How it works</p>
      </div>

    </div>
  );
}

export default HeaderInfo;