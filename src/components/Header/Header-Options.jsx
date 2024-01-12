import  DownArrow from '../../assets/down-arrow.svg';
import IconBackground from '../../assets/Icon Background.svg';
import  MegaPhone from '../../assets/mega-phone.svg';


const HeaderOptions = () => {
  return(

    <div className="flex justify-end items-start flex-[1_0_0] gap-[8px]">

      <div className="flex items-start gap-[12px]">

        <div className="relative w-[40px] h-[40px]">

          <img className="w-[40px] h-[40px] shrink-0" src={IconBackground} alt="icon background"/>

          <img className="absolute top-2.5 z-10 left-2.5 w-[20px] h-[20px] shrink-0" src={MegaPhone} alt="Mega Phone"/>

        </div>

        <div>

          <img className="w-[40px] h-[40px]" src={DownArrow} alt="Drop down"/>

        </div>

      </div>

    </div>
  )
}

export default HeaderOptions;
