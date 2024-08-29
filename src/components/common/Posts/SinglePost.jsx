import { doc, getDoc } from '@firebase/firestore'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../firebaseConfig/firebase'

const SinglePost = () => {
    const { postId } = useParams()

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postRef = doc(db, "posts", postId)
                const getPost = getDoc(postRef)
            } catch (error) {
                
            }
        }
    }, [])
  return (
    <div>SinglePost</div>
  )
}

export default SinglePost