export default function OverviewBottom(){
  return(
    <div className="flex items-start gap-[20px] self-stretch">
    {/*  Left */}

      <div className="flex-col p-[20px] items-start gap-4 flex-[1_0_0] rounded-[8px] shadow-[0px 2px 6px 0px rgba(26, 24, 30, 0.04)] bg-[#FFF]">
        <div className="flex-col items-start gap-4 self-stretch">
          <div className="text-[#4D4D4D] flex items-center gap-[8px] text-[16px] not-italic font-normal leading-[24px]">
            Online orders
          </div>
          <div className="flex items-center gap-[16px] self-stretch">
            <div className="flex justify-between items-center flex-[1_0_0] text-[#1A181E] text-[32px] not-italic font-medium leading-[38px]">
              321
            </div>
          </div>
        </div>
      </div>

    {/*  Right*/}

      <div className="flex-col p-[20px] items-start gap-4 flex-[1_0_0] rounded-[8px] shadow-[0px 2px 6px 0px rgba(26, 24, 30, 0.04)] bg-[#FFF]">
        <div className="flex-col items-start gap-4 self-stretch">
          <div className="text-[#4D4D4D] flex items-center gap-[8px] text-[16px] not-italic font-normal leading-[24px]">
            Amount received
          </div>
          <div className="flex items-center gap-[16px] self-stretch">
            <div className="flex justify-between items-center flex-[1_0_0] text-[#1A181E] text-[32px] not-italic font-medium leading-[38px]">
              ₹23,92,312.19
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}