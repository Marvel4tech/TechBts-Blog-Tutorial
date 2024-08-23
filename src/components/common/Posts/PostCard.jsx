import React from 'react'
import useFetch from '../../hook/useFetch';

const PostCard = ({ post }) => {
    const { title, decs, created, postImg, id: postId, userId } = post;
    const { data, loading } = useFetch("users");
    const getUserData = data && data?.find((user) => user?.id === userId)

  return (
    <section className=' flex flex-col sm:flex-row gap-4 cursor-pointer'>
        <div className=' flex-[2.5]'>
            <p className=' pb-2 font-semibold capitalize'>
                {getUserData.username}
            </p>
            <h2 className=' text-xl font-bold line-clamp-2 leading-6 capitalize'>
                {title}
            </h2>
        </div>
    </section>
  )
}

export default PostCard