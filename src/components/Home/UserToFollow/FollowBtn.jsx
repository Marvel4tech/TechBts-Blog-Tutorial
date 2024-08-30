import { useEffect, useState } from "react"
import { Blog } from "../../../context/Context"
import { db } from "../../../firebaseConfig/firebase"
import { deleteDoc, doc, setDoc } from "@firebase/firestore"
import { toast } from "react-toastify"
import useSingleFetch from "../../hook/useSingleFetch"
import { useLocation } from "react-router-dom"


const FollowBtn = ({ userId }) => {
    const [isFollowed, setIsFollowed] = useState(false)
    const { currentUser } = Blog()

    const { data, loading } = useSingleFetch(
        "users",
        currentUser?.uid,
        "follows"
    )

    useEffect(() => {
        setIsFollowed(
            data && data?.findIndex((item) => item.id === userId) !== -1
        );
    }, [data])

    const handleFollow = async () => {
        try {
            if (currentUser) {
                const followRef = doc(db, "users", currentUser?.uid, "follows", userId);
                const followerRef = doc(db, "users", userId, "followers", currentUser?.uid);
                if (isFollowed) {
                    await deleteDoc(followRef)
                    await deleteDoc(followerRef)
                    toast.success("User is unFollowed")
                } else {
                    await setDoc(followRef, {
                        userId : userId,
                    });
                    await setDoc(followerRef, {
                        userId : userId,
                    });
                    toast.success("User is Followed")
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const { pathName } = useLocation()

  return (
    <>
        <button onClick={handleFollow} className={`border border-black px-3 py-[0.2rem] rounded-full 
        ${isFollowed ? "text-gray-500 border-none" : ""}`}>
            {isFollowed ? "Following" : "Follow"}
        </button>
    </>
  )
}

export default FollowBtn