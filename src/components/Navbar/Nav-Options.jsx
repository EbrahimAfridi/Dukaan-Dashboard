import {pages} from "../../Data/Pages.js";

const NavOptions = () => {
  return (
    <ul className="flex flex-col items-start gap-[4px] flex-[1_0_0]">

      {pages.map((option, index) => (

          <div key={index} className={option.name === "Payment" ? "bg-[#FFFFFF1A] flex w-[208px] py-[8px] px-[16px] items-start gap-[12px] rounded-[4px]" : "flex w-[208px] py-[8px] px-[16px] items-start gap-[12px] rounded-[4px]"}>

            <img className="h-[20px] w-[20px] opacity-[0.8] shrink-0" src={option.svg} alt={option.name}/>

            <li className="text-white text-[14px] not-italic font-medium leading-[20px] opacity-[0.8]">{option.name}</li>

          </div>

        ))}

    </ul>
  )
}

export default NavOptions;
