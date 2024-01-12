import TransactionSearch from "./TransactionSearch.jsx";
import TransactionHeader from "./TransactionHeader.jsx";
import DataTable from "../../Data Table/DataTable.jsx";
import Footer from "../../Data Table/Footer.jsx";

const renderComponents = () => {
  const components = [];

  for (let i = 0; i < 18; i++) {
    components.push(<DataTable key={i} />);
  }

  return components;
};

const Transaction = () => {
  return(
    <div className="flex flex-col items-start gap-[20px]">
      <p className="text-[#1A181E] text-[20px] not-italic font-medium leading-[28px]">Transactions | This Month</p>
      {/*  Table */}
      {/*Removed items-end from below class to correct the gap between input and filter*/}
      <div className="flex flex-col rounded-[8px] bg-[#FFF] shadow-3xl px-[12px] pt-[12px] pb-[24px]">
        <div className="flex h-[0px] w-[1128px] flex-col items-start"></div>
        <div className="flex flex-col items-end gap-[12px]">
          <TransactionSearch/>
          <TransactionHeader/>
        </div>
        {renderComponents()}
        <Footer/>
      </div>
    </div>
  )
}

export default Transaction;