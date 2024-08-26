import React from 'react'
import useSingleFetch from '../../../hook/useSingleFetch'

const ProfileLists = () => {
  const { data, loading } = useSingleFetch("users", currentUser?.uid, "savePost")

  return (
    <div>ProfileLists</div>
  )
}

export default ProfileLists