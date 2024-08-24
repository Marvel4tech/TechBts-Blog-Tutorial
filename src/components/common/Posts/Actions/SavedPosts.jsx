import React, { useState } from 'react'
import { CiSaveDown2 } from 'react-icons/ci'
import { Blog } from '../../../../context/Context'
import { doc } from '@firebase/firestore'

const SavedPosts = ({ post }) => {
    const [isSaved, setIsSaved] = useState(false)
    const { currentUser } = Blog()

    const handleSave = async () => {
        try {
            if(currentUser) {
                const saveRef = doc(db, "users", currentUser?.uid, "savePost", post?.id)
            }
        } catch (error) {
            
        }
    }

  return (
    <>
        <button onClick={handleSave} className=' hover:opacity-60'>
            <CiSaveDown2 className={`text-2xl pointer-events-none ${isSaved ? "text-yellow-600" : ""}`} />
        </button>
    </>
  )
}

export default SavedPosts