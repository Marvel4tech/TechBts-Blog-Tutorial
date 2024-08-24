import React from 'react'
import useFetch from '../../hook/useFetch';

const PostCard = ({ post }) => {
    const { title, desc, created, postImg, id: postId, userId } = post;
    const { data, loading } = useFetch("users");
    const getUserData = data && data?.find((user) => user?.id === userId)

  return (
    <>
       <div className=' flex flex-col sm:flex-row gap-4 cursor-pointer'>
            <div className=' flex-[2.5]'>
                    <p className=' pb-2 font-semibold capitalize'>
                        {getUserData.username}
                    </p>
                    <h2 className=' text-xl font-bold line-clamp-2 leading-6 capitalize'>
                        {title}
                    </h2>
                    <div className=' py-1 text-gray-500 line-clamp-2 leading-5'
                    dangerouslySetInnerHTML={{__html: desc}}
                    />
                </div>
                <div>
                    <div className=' flex-[1]'>
                        <img src={postImg} alt="postImg" className=' w-[53rem]' />
                    </div>
            </div>
       </div>
    </>
  )
}

export default PostCard