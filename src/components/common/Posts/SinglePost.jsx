import { doc, getDoc } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../firebaseConfig/firebase'
import { toast } from 'react-toastify'
import Loading from '../../Loading/Loading'

const SinglePost = () => {
    const { postId } = useParams()
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(false)

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
    }, [postId])

  return (
    <>
        {loading ? (
            <Loading /> 
        ) : (
            <section className=' w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-[3rem]'>

            </section>
        )}
    </>
  )
}

export default SinglePost