import { useState } from "react"
import ProfileHome from "./Activities/ProfileHome"
import ProfileLists from "./Activities/ProfileLists"
import ProfileAbout from "./Activities/ProfileAbout"
import Modal from "../../../utilities/Modal"


const Profile = () => {
    const activities = [
        {
            title: "Home",
            component: ProfileHome,
        },
        {
            title: "Lists",
            component: ProfileLists,
        },
        {
            title: "About",
            component: ProfileAbout,
        },
    ]

    const [currentActive, setCurrentActive] = useState(activities[0])
    const [modal, setModal] = useState(true)

  return (
    <section className=" size flex gap-[4rem] relative">
        <div className=" mt-[9rem] flex-[2]">
            <div className=" flex items-end gap-4">
                <h2 className=" text-3xl font-bold sm:text-5xl capitalize">
                    Milad Tech
                </h2>
                <p className=" text-gray-500 text-xs sm:text-sm">Followers(2)</p>
                <p className=" text-gray-500 text-xs sm:text-sm">Following(2)</p>
            </div>
            <div className=" flex items-center gap-5 mt-[1rem] border-b border-gray-300 mb-[3rem]">
                {activities.map((item, i) => (
                    <div key={i} className={` py-[0.5rem] ${item.title === currentActive.title ? "border-b border-gray-500" : ""}`}>
                        <button onClick={() => setCurrentActive(item)}>{item.title}</button>
                    </div>
                ))}
            </div>
            <currentActive.component />
        </div>
        <Modal modal={modal} setModal={setModal}>
            <div className={` flex-1 border-l border-gray-300 p-[2rem] 
            z-10 fixed right-0 bottom-0 top-0 bg-white w-[18rem] md:relative ${modal ? "translate-x-0" : "translate-x-[100%] md:translate-x-0"}`}>
                Profile Details
            </div>
        </Modal>
    </section>
  )
}

export default Profile