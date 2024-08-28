import { useState } from "react"
import { Blog } from "../../../context/Context"
import { db } from "../../../firebaseConfig/firebase"
import { deleteDoc, setDoc } from "@firebase/firestore"
import { toast } from "react-toastify"


const FollowBtn = () => {
    const [isFollowed, setIsFollowed] = useState(false)
    const { currentUser } = Blog()

    const handleFollow = async () => {
        try {
            if (currentUser) {
                const followRef = doc(db, "users,", currentUser?.id, "follows", userId)
                if (isFollowed) {
                    await deleteDoc(followRef)
                    toast.success("User is unFollowed")
                } else {
                    await setDoc(followRef, {
                        userId : userId
                    });
                    toast.success("User is Followed")
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

  return (
    <>
        <button className=' border border-black px-3 py-[0.2rem] rounded-full'>
            Follow
        </button>
    </>
  )
}

export default FollowBtn