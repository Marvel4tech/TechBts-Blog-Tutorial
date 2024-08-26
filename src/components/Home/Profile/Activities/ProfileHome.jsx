import React from 'react'
import useFetch from '../../../hook/useFetch'

const ProfileHome = ({ getUserData }) => {
  const [data, loading] = useFetch("posts")
  const userPost = data && data?.filter((post) => post?.userId === getUserData?.userId)

  return (
    <div className=' flex flex-col gap-5 mb-[4rem]'>
        {userPost.length === 0 && <p></p>}
    </div>
  )
}

export default ProfileHome