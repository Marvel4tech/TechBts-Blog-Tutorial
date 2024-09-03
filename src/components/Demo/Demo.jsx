import Posts from "../common/Posts/Posts"
import Banner from "./Banner"
import Discover from "./Discover"


const Demo = () => {
  return (
    <>
      <Banner />
      <div className=" size py-7 flex flex-col md:flex-row gap-[4rem] md:gap-[7rem]">
        <div className=" flex-[1.5]">
          <Posts />
        </div>
        <div className=" flex-[1] relative">
          <Discover />
        </div>
      </div>
    </>
  )
}

export default Demo