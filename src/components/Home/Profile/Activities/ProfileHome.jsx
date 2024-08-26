import React from 'react'
import useFetch from '../../../hook/useFetch'
import Loading from '../../../Loading/Loading'
import PostCard from '../../../common/Posts/PostCard'

const ProfileHome = ({ getUserData }) => {
  const { data, loading } = useFetch("posts")
  const userPost = data && data?.filter((post) => post?.userId === getUserData?.userId)

  return (
    <div className=' flex flex-col gap-5 mb-[4rem]'>
        {userPost.length === 0 && 
          <p className=' text-gray-500'>
            <span className=' capitalize'>{getUserData?.username}</span> has no post
          </p>
        }
        {loading ? (
          <Loading/>
        ) : (
          userPost.map((post, i) => <PostCard post={post} key={i} />)
        )}
    </div>
  )
}

export default ProfileHome