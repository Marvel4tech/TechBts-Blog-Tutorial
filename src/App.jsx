import Demo from "./components/Demo/Demo"
import Home from "./components/Home/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import HomeHeader from "./components/Home/HomeHeader"
import DemoHeader from "./components/Demo/DemoHeader"
import { Blog } from "./context/Context"


function App() {
  const {currentUser} = Blog()

  return (
    <main className=" font-poppins">
      { currentUser ? <HomeHeader /> : <DemoHeader /> }
      <Routes>
        {currentUser && <Route path="/" element={<Home />} />}
        {!currentUser && <Route path="/demo" element={<Demo />} />}
        <Route path="*" element={ <Navigate to={!currentUser ? "/demo" : "/"} />} />
      </Routes>
    </main>
  )
}

export default App
