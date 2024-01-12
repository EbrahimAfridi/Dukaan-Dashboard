import NavbarTop from "./Navbar-Top.jsx";
import NavbarBottom from "./Navbar-Bottom.jsx";

const NavbarPayments = () => {
  return(
    <div className="bg-[#1E2640] text-white flex flex-col w-[224px] py-[16px] px-[10px]
      items-center gap-[16px] flex-[1_0_0]">
      <NavbarTop/>
      <NavbarBottom/>
    </div>
  )
}

export default NavbarPayments;
