import React from 'react'
import { Blog } from '../../../../context/Context'

const ProfileAbout = ({ getUserData, setEditModal }) => {
  const { currentUser } = Blog()

  return (
    <div className=' w-full'>
        <p className=' text-2xl first-letter:uppercase'>
            {getUserData?.bio || getUserData?.username + " has no bio"}
        </p>
        <div className=' text-right'>
            {currentUser?.uid === getUserData.userId && <button onClick={() => setEditModal(true)} className=' py-2 px-5 rounded-full
           text-black border border-black mt-[3rem]'>
              Edit
            </button>}
        </div>
    </div>
  )
}

export default ProfileAbout