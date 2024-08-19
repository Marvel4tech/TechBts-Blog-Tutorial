import { LiaUserSolid } from "react-icons/lia"
import { MdOutlineLocalLibrary } from "react-icons/md"
import { BiSpreadsheet } from "react-icons/bi"
import { HiOutlineChartBar } from "react-icons/hi"
import { LiaEditSolid } from "react-icons/lia"
import { Blog } from "../../context/Context"
import { Link } from "react-router-dom"
import { secretEmail } from "../../utilities/helper"

const UserModal = (setModal) => {
    const { currentUser } = Blog()

    const userModal = [
        {
            title: "Profile",
            icon: <LiaUserSolid />,
            path: `/profile/${currentUser?.uid}`,
        },
        {
            title: "Library",
            icon: <MdOutlineLocalLibrary />,
            path: "/library",
        },
        {
            title: "Stories",
            icon: <BiSpreadsheet />,
            path: "/Stories",
        },
        {
            title: "Stats",
            icon: <HiOutlineChartBar />,
            path: "/stats",
        },
    ]

  return (
    <section className=" absolute bg-white w-[18rem] p-6 right-0 top-[100%] shadow-2xl rounded-md z-50 text-gray-500 border">
        <Link className=" flex md:hidden items center gap-1 text-gray-500" to={'/write'}>
            <span className=" text-3xl"><LiaEditSolid /></span>
            <span className=" mt-2 text-sm">Write</span>
        </Link>
        <div className=" flex flex-col gap-4 border-b border-gray-400 pb-5">
            {userModal.map((link, i) => (
                <Link onClick={() => setModal(false)} key={i} to={link.path} className=" flex items-center gap-2 text-gray-500 hover:text-black/70">
                    <span className=" text-2xl">{link.icon}</span>
                    <h2 className=" text-base">{link.title}</h2>
                </Link>
            ))}
        </div>
        <button className=" flex flex-col pt-5 cursor-pointer hover:text-black/70">
            Sign Out
            <span className=" text-sm">{secretEmail(currentUser?.email)}</span>
        </button>
    </section>
  )
}

export default UserModal