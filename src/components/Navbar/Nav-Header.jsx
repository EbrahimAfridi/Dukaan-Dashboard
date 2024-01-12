import Image from "../../assets/Image.png";
import DownArrow from "../../assets/sidebar-arrow.svg";


const NavHeader = () => {
  return(

    <div className="flex flex-row w-[192px] items-center gap-[12px]">

      <div className="w-[40px] h-[40px] shrink-0 rounded-[4px] relative">
        <img className="h-[39px] w-[39px] rounded-[4px] absolute left-[0.5px] top-[0.5px]" src={Image} alt="User Profile Picture"/>
      </div>

      <div className="flex flex-col justify-center items-start gap-[4px] flex-[1_1_0]">
          <p className="text-[15px] font-medium not-italic leading-[22px] self-stretch">Nishyan</p>
          <p className="underline opacity-[0.8] text-[13px] not-italic font-normal leading-4">Visit Store</p>
      </div>

      <img className="w-[20px] h-[20px] shrink-0"  src={DownArrow} alt="down arrow"/>

    </div>

  )
}

export default NavHeader;
