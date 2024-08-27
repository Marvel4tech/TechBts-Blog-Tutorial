import { Routes, Route } from "react-router-dom"
import Posts from "../common/Posts/Posts"
import Follow from "./UserToFollow/Follow"


const Home = () => {
  return (
    <section className=" size flex relative gap-[5rem]">
        <div className=" flex-[2] py-10 mb-[4rem]">
            <Posts />
        </div>
        <div className=" hidden md:inline-block md:w-[21rem] p-7 border-l border-gray-300">
            <h3 className=" font-bold">Who to follow?</h3>
            <Follow />
        </div>
    </section>
  )
}

export default Home