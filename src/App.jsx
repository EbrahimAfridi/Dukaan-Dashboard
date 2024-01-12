import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import RightSide from "./components/Right-Side/RightSide.jsx";


function App() {

  return (
    <main className="w-[1440px] h-[1482px] bg-[#FAFAFA] flex">
      <Navbar/>
      <RightSide/>
    </main>
  )
}

export default App
