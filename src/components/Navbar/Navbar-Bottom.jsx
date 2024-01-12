import Wallet from "../../assets/Wallet.svg";

const NavbarBottom = () => {
  return(
    <div className="flex-col gap-[10px] rounded-[4px] py-[6px] px-[12px] w-[192px] items-start bg-[#353C53]">

      <div className="flex items-center gap-[12px]">

        <div className="flex p-[6px] items-start gap-[10px] rounded-[4px]  bg-[#FFFFFF1A]">
          <img className="w-[24px] h-[24px]" src={Wallet} alt="Wallet Icon"/>
        </div>

        <div className="flex-col items-start gap-[2px]">
          <p className="text-[13px] font-normal not-italic leading-4 opacity-[0.8]">Available credits</p>
          <p className="text-[13px] font-normal not-italic leading-4">222.10</p>
        </div>

      </div>

    </div>
  )
}

export default NavbarBottom;