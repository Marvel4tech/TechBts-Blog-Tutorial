import { useState } from "react"
import Modal from "../../../utilities/Modal"

const Comments = () => {
    const [showModal, setShowModal] = useState(true)

  return (
    <Modal setModal={showModal} modal={showModal}>
        <section className={` fixed right-0 bottom-0 top `}>

        </section>
    </Modal>
  )
}

export default Comments