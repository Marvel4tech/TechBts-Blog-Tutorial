import { useState } from "react"
import Modal from "../../../utilities/Modal"

const Comments = () => {
    const [showModal, setShowModal] = useState(true)

  return (
    <Modal setModal={showModal} modal={showModal}>
        <section className={` fixed right-0 bottom-0 top-0 border border-gray-300 z-50 bg-white w-[22rem] shadow-2xl p-5 overflow-y-auto transition-all 
        duration-500`}>
            <div className=" flex items-center justify-between">
                <h3>
                    Responses(1)
                </h3>
            </div>
        </section>
    </Modal>
  )
}

export default Comments