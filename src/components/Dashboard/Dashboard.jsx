import Overview from "./Overview/Overview.jsx";
import Transaction from "./Transaction/Transaction.jsx";

const Dashboard = () => {
  return(
    <div className="flex flex-col items-start w-[1216px] gap-[32px] pt-6 py-[12px] px-[32px]">
        <Overview/>
        <Transaction/>
    </div>
  )
}

export default Dashboard;
