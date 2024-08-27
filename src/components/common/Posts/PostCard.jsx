import React from 'react'
import useFetch from '../../hook/useFetch';
import { readTime } from '../../../utilities/helper';
import moment from 'moment';
import SavedPosts from './Actions/SavedPosts';

const PostCard = ({ post }) => {
    const { title, desc, created, postImg, id: postId, userId } = post;
    const { data } = useFetch("users");
    const getUserData = data && data?.find((user) => user?.id === userId)

  return (
    <>
       <div className=' flex flex-col sm:flex-row gap-4 cursor-pointer bg-yellow-700'>
            <div className=' bg-green-400 w-full md:w-[70%] '>
                <p className=' pb-2 font-semibold capitalize w-full'>
                    {getUserData.username}
                </p>
                <h2 className=' text-xl font-bold line-clamp-2 leading-6 capitalize'>
                    {title}
                </h2>
                <div className=' py-1 text-gray-500 line-clamp-2 leading-5'
                    dangerouslySetInnerHTML={{__html: desc}}
                />
            </div>
            <div className='  bg-red-600 w-full md:w-[30%]'>
                <img src={postImg} alt="postImg" className=" h-[8rem] w-full object-cover " />
            </div>
       </div>
       <div className=' flex items-center justify-between w-full md:w-[70%] mt-[2rem] md:mt-0'>
            <p className=' text-xs text-gray-600'>
                {readTime({__html: desc})} min read. {moment(created).format("MM DD")}
            </p>
            <div className=' flex items-center gap-3'>
                <SavedPosts post={post} getUserData={getUserData} />
            </div>
       </div>
    </>
  )
}

export default PostCard