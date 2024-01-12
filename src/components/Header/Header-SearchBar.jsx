import "../../App.css";
import {MagnifyingGlass} from "@phosphor-icons/react"
import {useState} from "react";
const HeaderSearchBar = () => {

  const [input, setInput] = useState("")

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  return(
    <form className="relative">
      {
        input.length === 0 && <MagnifyingGlass size={19} className="w-[16px] h-[16px] shrink-0 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"/>
      }
      <input
        className="flex pl-7 items-center placeholder:font-normal placeholder:leading-[22px] placeholder:not-italic placeholder:text-[15px] text-[#808080] bg-[#F2F2F2] placeholder:text-[#808080] w-[400px] rounded-[6px] py-[9px] px-[16px] shrink-0"
        type="text"
        name="search"
        id="input-search"
        value={input}
        placeholder="Search features, tutorial, etc."
        onChange={handleInput}
    />
    </form>
  )
}

export default HeaderSearchBar;
