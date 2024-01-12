import HeaderCell from "./HeaderCell.jsx";
import TriangleArrow from "../../../assets/TriangleArrow.svg";
import HelpIcon from "../../../assets/HelpIcon.svg";

const heading = [
  {
    title: "Order ID",
    img: null
  },
  {
    title: "Order date",
    img: TriangleArrow
  },
  {
    title: "Order amount",
    img: null
  },
  {
    title: "Transaction fee",
    img: HelpIcon
  }
]

const TransactionHeader = () => {
  return(
    <div className="flex w-[1128px] py-[10px] px-[12px] items-center gap-[40px] rounded-[4px] bg-[#F2F2F2]">
      {
        heading.map((header, index) => (
          <HeaderCell key={header.title} index={index}>
            <p>{header.title}</p>
            {
              header.img === null ? "" : <img src={header.img} alt={header.title}/>
            }
          </HeaderCell>
        ))
      }
    </div>
  )
}

export default TransactionHeader;