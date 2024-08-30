import { doc, getDoc } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../../firebaseConfig/firebase'
import { toast } from 'react-toastify'
import Loading from '../../Loading/Loading'
import { Blog } from '../../../context/Context'
import FollowBtn from '../../Home/UserToFollow/FollowBtn'
import { readTime } from '../../../utilities/helper'
import moment from 'moment/moment'
import SavedPosts from './Actions/SavedPosts'
import Actions from './Actions/Actions'
import Like from './Actions/Like'
import Comment from './Actions/Comment'
import SharePost from './Actions/SharePost'

const SinglePost = () => {
    const { postId } = useParams()
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(false)
    const { currentUser } = Blog()

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true)
            try {
                const postRef = doc(db, "posts", postId)
                const getPost = await getDoc(postRef)

                if (getPost.exists()) {
                    const postData = getPost.data()
                    if (postData?.userId) {
                        const userRef = doc(db, "users", postData?.userId)
                        const getUser = await getDoc(userRef)

                        if(getUser.exists()) {
                            const userData = getUser.data()
                            setPost({ ...postData, ...userData, id: postId })
                        }
                    }
                }
                setLoading(false)
            } catch (error) {
                toast.error(error.message)
                setLoading(false)
            }
        }

        fetchPost()
    }, [postId, post?.userId])

    const navigate = useNavigate()

    const { title, desc, postImg, username, created, userImg, userId } = post; //you could destructure it like this or rather use (post.title)
  return (
    <>
        {loading ? (
            <Loading /> 
        ) : (
            <section className=' w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-[3rem]'>
                <h2 className=' text-4xl font-extrabold capitalize'>
                    {title}
                </h2>
                <div className=' flex items-center gap-2 py-[2rem]'>
                    <img onClick={() => navigate(`/profile/${userId}`)}
                        className=' w-[3rem] h-[3rem] rounded-full object-cover cursor-pointer'
                        src={userImg} alt="userImg" 
                    />
                    <div>
                        <div className=' capitalize'>
                            <span>{username}</span>
                            {currentUser?.uid !== userId && <FollowBtn userId={userId} />}
                        </div>
                        <div>
                            <p className=' text-sm text-gray-500'>
                                {readTime({__html: desc})} min read .
                                <span className=' ml'>{moment(created).fromNow()}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-between items-center border-t border-b border-gray-200'>
                    <div>
                        <Like />
                        <Comment />
                    </div>
                    <div className=' flex items-center gap-5 pt-2'>
                        <SavedPosts />
                        <SharePost />
                        <Actions />
                    </div>
                </div>
            </section>
        )}
    </>
  )
}

export default SinglePost