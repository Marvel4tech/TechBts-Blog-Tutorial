import { useState } from "react"
import { Blog } from "../../../context/Context"
import { db } from "../../../firebaseConfig/firebase"


const FollowBtn = () => {
    const [isFollowed, setIsFollowed] = useState(false)
    const { currentUser } = Blog()

    const handleFollow = async () => {
        try {
            if (currentUser) {
                const followRef = doc(db, "users,", currentUser?.id, "follows", userId)
            }
        } catch (error) {
            
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