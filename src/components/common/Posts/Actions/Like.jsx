import { PiHandsClappingDuotone } from 'react-icons/pi'
import { Blog } from '../../../../context/Context'
import { deleteDoc, doc, setDoc } from '@firebase/firestore'
import { db } from '../../../../firebaseConfig/firebase'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Like = ({ post, postId }) => {
  const [isLiked, setIsLiked] = useState(false)
  const { currentUser } = Blog()

  const handleLike = async () => {
    try {
      if (currentUser) {
        const likeRef = doc(db, "posts", postId, "likes", currentUser?.uid)
        if(isLiked) {
          await deleteDoc(likeRef)
        } else {
          await setDoc(likeRef, {
            userId: currentUser?.uid
          })
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <button className=' flex items-center gap-1 text-sm'>
        <PiHandsClappingDuotone className=' text-xl' />
        <span>1</span>
    </button>
  )
}

export default Like