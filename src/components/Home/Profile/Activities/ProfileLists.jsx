import React from 'react'
import useSingleFetch from '../../../hook/useSingleFetch'
import { Blog } from '../../../../context/Context'

const ProfileLists = ({ getUserData }) => {
  const { currentUser } = Blog()
  const { data, loading } = useSingleFetch("users", currentUser?.uid, "savePost")

  return (
      <div>
         {currentUser?.uid === getUserData?.userId ? (
           <div className=' flex flex-col gap-[2rem] mb-[2rem]'></div>
         ) : <PrivateLists /> }
      </div>
  )
}

export default ProfileLists

const PrivateLists = () => {
  return (
    <h1>Priavte List</h1>
  )
}