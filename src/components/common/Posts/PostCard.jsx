import React from 'react'
import useFetch from '../../hook/useFetch';
import { readTime } from '../../../utilities/helper';
import moment from 'moment';
import SavedPosts from './Actions/SavedPosts';
import { Blog } from '../../../context/Context';
import Loading from '../../Loading/Loading';
import Actions from './Actions/Actions';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
    const { title, desc, created, postImg, id: postId, userId } = post;
    const { currentUser } = Blog()
    const { data, loading } = useFetch("users");
    
    const getUserData = data && data?.find((user) => user?.id === userId)

    const navigate = useNavigate()

  return (
    <section>
       <div onClick={() => navigate(`post/${postId}`)} className=' flex flex-col sm:flex-row gap-4 cursor-pointer'>
            {loading && <Loading />}
            <div className=' w-full md:w-[70%] '>
                <p className=' pb-2 font-semibold capitalize w-full'>
                    {getUserData?.username}
                </p>
                <h2 className=' text-xl font-bold line-clamp-2 leading-6 capitalize'>
                    {title}
                </h2>
                <div className=' py-1 text-gray-500 line-clamp-2 leading-5'
                    dangerouslySetInnerHTML={{__html: desc}}
                />
            </div>
            <div className='w-full md:w-[30%]'>
                {postImg && <img src={postImg} alt="postImg" className=" h-[16rem] md:h-[8rem] w-full object-cover " />}
            </div>
       </div>
       <div className=' flex items-center justify-between w-full md:w-[70%] mt-[2rem] md:mt-0'>
            <p className=' text-xs text-gray-600'>
                {readTime({__html: desc})} min read. {moment(created).format("MM DD")}
            </p>
            <div className=' flex items-center gap-3'>
                <SavedPosts post={post} getUserData={getUserData} />
                {currentUser?.uid === userId && <Actions postId={postId} title={title} desc={desc} /> }
            </div>
       </div>
    </section>
  )
}

export default PostCard