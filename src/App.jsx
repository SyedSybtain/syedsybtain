import Navbar from "./components/Navbar"
import { Routes,Route } from 'react-router-dom'
import Home from "./components/Home"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Links from "./components/Links"
import WhiteBoard from "./components/WhiteBoard"
import DigitalClock from "./components/DigitalClock"
import Stopwatch from "./components/Stopwatch"
import ToDoApp from "./components/ToDoApp"
// import Solar from "./components/Solar"

function App() {
  return (
    <div className="min-w-screen min-h-screen bg-[#E5E5E5] font-mono text-white p-0 m-0 flex flex-col text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl overflow-hidden">
      <Navbar />
        <Routes>
          <Route path='/' element ={<Home /> } />
          <Route path='/profile' element ={<Profile /> } />
          {/* <Route path='/solar3d' element ={ <Solar /> }/> */}
          <Route path='/projects' element ={<Projects /> } />
          <Route path='/links' element ={<Links /> } />
          <Route path='/projects/whiteboard' element ={<WhiteBoard /> } />
          <Route path='/projects/todo' element ={<ToDoApp /> } />
          <Route path='/projects/digitalclock' element ={<DigitalClock />} />
          <Route path='/projects/stopwatch' element ={<Stopwatch />} />
        </Routes>
    </div>
  )
}

export default App
