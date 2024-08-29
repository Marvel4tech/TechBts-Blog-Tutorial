import Demo from "./components/Demo/Demo"
import Home from "./components/Home/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import HomeHeader from "./components/Home/HomeHeader"
import DemoHeader from "./components/Demo/DemoHeader"
import { Blog } from "./context/Context"
import { ToastContainer } from "react-toastify"
import Profile from "./components/Home/Profile/Profile"
import Write from "./components/Home/Write/Write"
import SinglePost from "./components/common/Posts/SinglePost"


function App() {
  const {currentUser} = Blog()

  return (
    <main className=" font-poppins">
      { currentUser ? <HomeHeader /> : <DemoHeader /> }
      <ToastContainer />
      <Routes>
        {currentUser && <Route path="/" element={<Home />} />}
        {!currentUser && <Route path="/demo" element={<Demo />} />}
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/write" element={<Write /> } />
        <Route path="/post/:postId" element={<SinglePost /> } />
        <Route path="*" element={ <Navigate to={!currentUser ? "/demo" : "/"} />} />
      </Routes>
    </main>
  )
}

export default App
