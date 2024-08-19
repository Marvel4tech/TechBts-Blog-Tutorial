import { BsMedium } from "react-icons/bs"
import { CiSearch } from "react-icons/ci"
import { LiaEditSolid } from "react-icons/lia"
import { IoMdNotificationsOutline } from "react-icons/io"
import { MdKeyboardArrowDown } from "react-icons/md"
import { Link } from "react-router-dom"
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
                className="w-[2.3rem] h-[2.3rem] object-cover rounded-full cursor-pointer"
                src="/profile.png"
                alt="profile-img"
              />
              <span className="text-gray-500 cursor-pointer">
                <MdKeyboardArrowDown />
              </span>
              <Modal modal={modal} setModal={setModal}>
                <div
                  className={`${
                    modal ? "visible opacity-100%" : "invisible opacity-0"
                  } transition-all duration-100`}>
                  <UserModal setModal={setModal} />
                </div>
              </Modal>
            </div>
          </div>
      </div>
    </header>
  )
}

export default HomeHeader