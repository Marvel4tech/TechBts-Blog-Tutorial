import { doc, getDoc } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../firebaseConfig/firebase'

const SinglePost = () => {
    const { postId } = useParams()
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postRef = doc(db, "posts", postId)
                const getPost = await getDoc(postRef)

                if (getPost.exists()) {
                    const postData = getPost.data()
                    setPost({ ... postData, id: postId })
                }
            } catch (error) {
                
            }
        }
    }, [])
  return (
    <div>SinglePost</div>
  )
}

export default SinglePost