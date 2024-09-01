import { useState } from "react"
import Modal from "../../../utilities/Modal"
import { LiaTimesSolid } from 'react-icons/lia'

const Comments = () => {
    const [showModal, setShowModal] = useState(true)

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
        </section>
    </Modal>
  )
}

export default Comments