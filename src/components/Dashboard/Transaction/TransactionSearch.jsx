import {MagnifyingGlass} from "@phosphor-icons/react";
import {useState} from "react";
import TransactionSort from "./TransactionSort.jsx";

const TransactionSearch = () => {
  const [inputTrans, setInputTrans] = useState("")

  const handleInput = (e) => {
    setInputTrans(e.target.value)
  }

  return(
    <div className="flex justify-between items-center self-stretch">
      <div className="flex relative w-[248px] items-start">
        {
          inputTrans.length === 0 && <MagnifyingGlass size={19} className="w-[16px] h-[16px] shrink-0 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"/>
        }
        <input
          className="flex pl-7 placeholder:font-normal placeholder:leading-[22px] placeholder:not-italic placeholder:text-[14px] text-[#808080] placeholder:text-[#808080] py-[10px] px-[16px] shrink-0 items-center gap-[8px] flex-[1_0_0] rounded-[4px] border-[1px] border-[#D9D9D9] border-solid bg-white"
          type="text"
          name="search"
          id="input-search"
          value={inputTrans}
          placeholder="Search by order ID..."
          onChange={handleInput}
        />
      </div>
      <TransactionSort/>
    </div>
  )
}

export default TransactionSearch;
