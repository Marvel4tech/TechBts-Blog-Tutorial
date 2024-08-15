import Demo from "./components/Demo/Demo"
import Home from "./components/Home/Home"
import { Route, Routes } from "react-router-dom"
import HomeHeader from "./components/Home/HomeHeader"
import DemoHeader from "./components/Demo/DemoHeader"


function App() {
  const auth = false

  return (
    <main className=" font-poppins">
      { auth ? <HomeHeader /> : <DemoHeader /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </main>
  )
}

export default App
