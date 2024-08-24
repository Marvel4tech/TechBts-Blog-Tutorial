import React, { useState } from 'react'
import { CiSaveDown2 } from 'react-icons/ci'
import { Blog } from '../../../../context/Context'
import { deleteDoc, doc, setDoc } from '@firebase/firestore'
import { toast } from 'react-toastify'
import { db } from '../../../../firebaseConfig/firebase'

const SavedPosts = ({ post }) => {
    const [isSaved, setIsSaved] = useState(false)
    const { currentUser } = Blog()

    const handleSave = async () => {
        try {
            if(currentUser) {
                const saveRef = doc(db, "users", currentUser?.uid, "savePost", post?.id)

                if(isSaved){
                    await deleteDoc(saveRef);
                    toast.success("Post has been unsaved")
                } else {
                    await setDoc(saveRef, {
                        ...post,
                    })
                    toast.success("Post has been Save")
                }
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