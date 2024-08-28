import { useState } from "react"
import ProfileHome from "./Activities/ProfileHome"
import ProfileLists from "./Activities/ProfileLists"
import ProfileAbout from "./Activities/ProfileAbout"
import Modal from "../../../utilities/Modal"
import { LiaTimesSolid } from "react-icons/lia"
import { discoverActions } from "../../../data"
import { IoSettingsSharp } from "react-icons/io5"
import EditProfile from "./Activities/EditProfile"
import { Blog } from "../../../context/Context"
import { useParams } from "react-router-dom"
import useSingleFetch from "../../hook/useSingleFetch"


const Profile = () => {
    const { allUsers } = Blog()
    const { userId } = useParams()

    const getUserData = allUsers.find((user) => user.id === userId)

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
    const [modal, setModal] = useState(false)
    const [editModal, setEditModal] = useState(false)

    const { data:follows } = useSingleFetch("users", userId, "follows")
    const { data:followers } = useSingleFetch("users", userId, "followers")

  return (
    <section className=" size flex gap-[4rem] relative">
        <div className=" mt-[9rem] flex-[2]">
            <div className=" flex items-end gap-4">
                <h2 className=" text-3xl font-bold sm:text-5xl capitalize">
                   {getUserData?.username}
                </h2>
                <p className=" text-gray-500 text-xs sm:text-sm">Followers({followers.length})</p>
                <p className=" text-gray-500 text-xs sm:text-sm">Following({follows.length})</p>
            </div>
            <div className=" flex items-center gap-5 mt-[1rem] border-b border-gray-300 mb-[3rem]">
                {activities.map((item, i) => (
                    <div key={i} className={` py-[0.5rem] ${item.title === currentActive.title ? "border-b border-gray-500" : ""}`}>
                        <button onClick={() => setCurrentActive(item)}>{item.title}</button>
                    </div>
                ))}
            </div>
            <currentActive.component getUserData={getUserData} setEditModal={setEditModal} />
        </div>
        <button onClick={() => setModal(true)} className=" fixed top-[8rem] right-0 w-[2rem] h-[2rem] bg-black text-white grid place-items-center md:hidden">
            {<IoSettingsSharp />}
        </button>
        <Modal modal={modal} setModal={setModal}>
            <div className={` flex-1 border-l border-gray-300 p-[2rem] z-10 fixed right-0 bottom-0 top-0 bg-white w-[18rem] md:relative 
            ${modal ? "translate-x-0" : "translate-x-[100%] md:translate-x-0"} transition-all duration-500`}>
                <div className=" pb-4 text-right">
                    <button onClick={() => setModal(false)} className=" inline-block md:hidden">
                        <LiaTimesSolid />
                    </button>
                </div>
                <div className=" sticky top-7 flex flex-col justify-between">
                    <img className=" w-[3.5rem] h-[3.5rem] rounded-full object-cover" src={getUserData?.userImg || "/profile.png"} alt="profile-pix" />
                    <h2 className=" py-2 font-bold capitalize">Marvel Ayo</h2>
                    <p className=" first-letter:uppercase text-sm text-gray-500">I am web developer and Software Enginneer.</p>
                    <button onClick={() => setEditModal(true)} className=" text-green-700 w-fit pt-6 text-sm">Edit Profile</button>
                    <div className=" flex-[1] flex items-center flex-wrap gap-3 pt-8">
                        {discoverActions.map((item, i) => (
                            <button className=" text-xs text-black1" key={i}>{item}</button>
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
        {editModal && (
            <EditProfile getUserData={getUserData} editModal={editModal} setEditModal={setEditModal} />
        )}
    </section>
  )
}

export default Profile