import { useState } from "react"
import Modal from "../../../utilities/Modal"
import { LiaTimesSolid } from 'react-icons/lia'
import { Blog } from "../../../context/Context"

const Comments = () => {
    const [showModal, setShowModal] = useState(true)
    const { currentUser, allUsers } = Blog()

    const getUserData = allUsers.find((user) => user.id === currentUser?.uid)

  return (
    <Modal setModal={setShowModal} modal={showModal}>
        <section className={` fixed right-0 bottom-0 top-0 border border-gray-300 z-50 bg-white w-[22rem] shadow-2xl p-5 overflow-y-auto transition-all 
        duration-500 ${showModal ? "translate-x-0" : "translate-x-[23rem]"}`}>
            <div className=" flex items-center justify-between">
                <h3 className=" text-xl font-bold">
                    Responses(1)
                </h3>
                <button onClick={() => setShowModal(false)} className=" text-xl">
                    <LiaTimesSolid />
                </button>
            </div>
            {currentUser && (
                <div className=" shadow-2xl p-3 my-5 overflow-hidden border border-gray-300">
                    <div className=" flex items-center gap-2 mb-5">
                        <img className=" w-[2rem] h-[2rem] rounded-full object-cover" src={getUserData?.userImg || "/profile.png"} alt="user-img" />
                        <h3 className=" capitalize">Maii_HD</h3>
                    </div>
                    <textarea placeholder="What are your thoughts?" className=" w-full outline-none text-sm border pt-4 px-2 resize-none" />
                    <div className=" flex items-center justify-end gap-4 mt-[1rem]">
                        <button className=" text-sm">Cancel</button>
                        <button className=" btn !text-xs !bg-green-700 !text-white !rounded-full">Response</button>
                    </div>
                </div>
            )}
        </section>
    </Modal>
  )
}

export default Comments