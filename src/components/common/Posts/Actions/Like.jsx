import { PiHandsClappingDuotone } from 'react-icons/pi'
import { Blog } from '../../../../context/Context'
import { doc } from '@firebase/firestore'
import { db } from '../../../../firebaseConfig/firebase'

const Like = ({ post }) => {
  const { currentUser } = Blog()

  const handleLike = async () => {
    try {
      if (currentUser) {
        const likeRef = doc(db, "posts", post.id)
      }
    } catch (error) {
      
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