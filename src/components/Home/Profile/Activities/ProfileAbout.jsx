import React from 'react'

const ProfileAbout = ({ getUserData }) => {
  return (
    <div className=' w-full'>
        <p className=' text-2xl first-letter:uppercase'>
            {getUserData?.bio || getUserData?.username + " has no bio"}
        </p>
    </div>
  )
}

export default ProfileAbout