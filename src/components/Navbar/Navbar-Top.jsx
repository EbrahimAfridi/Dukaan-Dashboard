
import NavOptions from "./Nav-Options.jsx";
import NavHeader from "./Nav-Header.jsx";
const NavbarTop = () => {
  return(

    <div className="flex flex-col gap-[24px] items-center flex-[1_0_0]">

      <NavHeader/>

      <NavOptions/>

    </div>

  );
}

export default NavbarTop;