import { doc, getDoc } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../firebaseConfig/firebase'
import { toast } from 'react-toastify'
import Loading from '../../Loading/Loading'
import { Blog } from '../../../context/Context'

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

    const { title, desc, postImg, username, created, userImg } = post; //you could destructure it like this or you rather use (post.title, etc)
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
                    <img className=' w-[3rem] h-[3rem] rounded-full object-cover cursor-pointer'
                        src={userImg} alt="userImg" 
                    />
                    <div>
                        <div className=' capitalize'>
                            <span>{username}</span>
                        </div>
                    </div>
                </div>
            </section>
        )}
    </>
  )
}

export default SinglePost