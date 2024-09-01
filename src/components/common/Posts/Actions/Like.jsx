import { PiHandsClappingDuotone } from 'react-icons/pi'
import { Blog } from '../../../../context/Context'

const Like = ({ post }) => {
  const { currentUser } = Blog()

  const handleLike = async () => {
    try {
      
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