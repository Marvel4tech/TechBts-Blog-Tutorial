import { BsMedium } from "react-icons/bs"
import { CiSearch } from "react-icons/ci"
import { LiaEditSolid } from "react-icons/lia"
import { IoMdNotificationsOutline } from "react-icons/io"
import { MdKeyboardArrowDown } from "react-icons/md"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Modal from "../../utilities/Modal"
import { useState } from "react"
import UserModal from "./UserModal"
import { Blog } from "../../context/Context"
import Loading from "../Loading/Loading"
import { doc, updateDoc } from "@firebase/firestore"
import { db } from "../../firebaseConfig/firebase"
import { toast } from "react-toastify"


const HomeHeader = () => {
  const { allUsers, userLoading, currentUser, setPublish, updateData, title, description } = Blog()
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const { pathname } = useLocation()
  const getUserData = allUsers.find((user) => user.id === currentUser?.uid)

  const editPath = pathname.split("/")[1];
  const postId = pathname.split("/")[2];

  const navigate = useNavigate(null)

  const handleEdit = async () => {
    try {
      setLoading(true)
      const ref = doc(db, "posts", postId);
      await updateDoc(ref, {
        title,
        desc: description,
      })
      navigate(`/post/${postId}`)
      toast.success("Post has been updated")
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <header className=" border-gray-200 border-b">
      {userLoading && <Loading />}
      <div className=" size flex items-center justify-between h-[60px]">
          <div className=" flex items-center gap-3">
            <Link to={'/'}>
                <span className=" text-5xl"><BsMedium /></span>
            </Link>
          </div>
          <div className=" flex items-center gap-3 sm:gap-7">
            {
              pathname === "/write" ? 
                <button onClick={() => setPublish(true)} className=" btn !text-white !bg-green-700 py-1 !rounded-full">
                    Publish
                </button> : editPath === "editPost" ? (
                  <button onClick={handleEdit} className={`btn !text-white !bg-green-700 py-1 !rounded-full ${loading ? "opacity-40" : ""}`}>
                    {loading ? "Updating..." : "Save and Edit"}
                  </button>
                ) : (
                    <Link className=" hidden md:flex items-center gap-1 text-gray-500" to={'/write'}>
                      <span className=" text-3xl"><LiaEditSolid /></span>
                      <span className=" mt-2 text-sm">Write</span>
                    </Link>
                )
            }
            <span className=" text-3xl text-gray-500 cursor-pointer">
                <IoMdNotificationsOutline />
            </span>
            <div className="flex items-center relative">
              <img
                onClick={() => setModal(true)}
                className="w-[2.3rem] h-[2.3rem] object-cover rounded-full cursor-pointer"
                src={getUserData?.userImg ? getUserData?.userImg : "/profile.png"}
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