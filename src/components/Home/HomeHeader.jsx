import { BsMedium } from "react-icons/bs"
import { CiSearch } from "react-icons/ci"
import { LiaEditSolid } from "react-icons/lia"
import { IoMdNotificationsOutline } from "react-icons/io"
import { MdKeyboardArrowDown } from "react-icons/md"
import { Link } from "react-router-dom"
import Search from "./Header/Search"
import Modal from "../../utilities/Modal"
import { useState } from "react"
import UserModal from "./UserModal"

const HomeHeader = () => {
  const [modal, setModal] = useState(false)

  return (
    <header className=" border-gray-200 border-b">
      <div className=" size flex items-center justify-between h-[60px]">
          <div className=" flex items-center gap-3">
            <Link to={'/'}>
                <span className=" text-5xl"><BsMedium /></span>
            </Link>
            <Search />
          </div>
          <div className=" flex items-center gap-3 sm:gap-7">
            <Link className=" hidden md:flex items center gap-1 text-gray-500" to={'/write'}>
                <span className=" text-3xl"><LiaEditSolid /></span>
                <span className=" mt-2 text-sm">Write</span>
            </Link>
            <span className=" text-3xl text-gray-500 cursor-pointer">
                <IoMdNotificationsOutline />
            </span>
            <div className="flex items-center relative">
              <img
                onClick={() => setModal(true)}
                className="w-[2.3rem] h-[2.3rem] rounded-full bg-slate-200 cursor-pointer object-cover"
                src="/profile.png"
                alt="profile-pix"
              />
              <span className="text-gray-500 cursor-pointer">
                <MdKeyboardArrowDown />
              </span>
              {modal && (
                <Modal setModal={setModal}>
                  <div className="visible opacity-100% transition-all duration-500">
                    <UserModal />
                  </div>
                </Modal>
              )}
            </div>
          </div>
      </div>
    </header>
  )
}

export default HomeHeader