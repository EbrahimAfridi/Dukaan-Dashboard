import HeaderSearchBar from "./Header-SearchBar.jsx";
import HeaderInfo from "./Header-Info.jsx";
import HeaderOptions from "./Header-Options.jsx";

const Header = () => {
  return(
    <header className="flex w-[1216px] gap-[16px] py-[12px] px-[32px]
      border-b-[1px] border-b-[#D9D9D9] border-b-solid items-center"
    >
      <HeaderInfo/>
      <HeaderSearchBar/>
      <HeaderOptions/>
    </header>
  )
}

export default Header;