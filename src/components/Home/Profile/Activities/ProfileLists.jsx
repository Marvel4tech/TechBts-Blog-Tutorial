import React from 'react'
import useSingleFetch from '../../../hook/useSingleFetch'
import { Blog } from '../../../../context/Context'
import Loading from '../../../Loading/Loading'
import PostCard from '../../../common/Posts/PostCard'

const ProfileLists = ({ getUserData }) => {
  const { currentUser } = Blog()
  const { data, loading } = useSingleFetch("users", currentUser?.uid, "savePost")

  return (
      <div>
         {currentUser?.uid === getUserData?.userId ? (
           <div className=' flex flex-col gap-[2rem] mb-[2rem]'>
              {data.length === 0 && (
                <p className=' text-gray-500'>
                  <span className=' capitalize mr-1'>{getUserData?.username}</span> has no saved post
                </p>
              )}
              {loading ? <Loading /> : (data?.map((post, i) => <PostCard post={post} key={i} />))}
           </div>
         ) : <PrivateLists username={getUserData?.username} /> }
      </div>
  )
}

export default ProfileLists

const PrivateLists = ({ username }) => {
  return (
    <div className=' flex flex-col justify-center items-center text-center gap-[3rem]'>
        <p>
            <span className=' capitalize'>{username} saved posts are private</span>
        </p>
    </div>
  )
}