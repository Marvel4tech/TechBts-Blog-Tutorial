import { onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebaseConfig/firebase'
import Loading from '../components/Loading/Loading'
import { collection, doc, onSnapshot, query } from '@firebase/firestore'
import useFetch from '../components/hook/useFetch'

const BlogContext = createContext()

const Context = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false)
    const [loading, setLoading] = useState(true)
    const [allUsers, setAllUsers] = useState([])
    const [userLoading, setUserLoading] = useState(true)
    const [publish, setPublish] = useState(false)
    const [showComment, setShowComment] = useState(false);
    const [commentLength, setCommentLength] = useState(0);
    const [updateData, setUpdateData] = useState({})
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser (user)
            } else {
                setCurrentUser(null)
            }
            setLoading(false)
        })

        return () => unsubscribe()
    },[currentUser])

    useEffect(() => {
       const getUsers = () => {
            const postRef = query(collection(db, "users"))
            onSnapshot(postRef, (snapshot) => {
                setAllUsers(
                    snapshot.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    }))
                )
                setUserLoading(false)
            })
       }
       getUsers()
    }, [])

    const { data, postLoading } = useFetch("posts")

  return (
    <BlogContext.Provider value={{ currentUser, setCurrentUser, allUsers, userLoading, publish, setPublish, showComment,
        setShowComment, commentLength, setCommentLength, updateData, setUpdateData, title, setTitle, description, setDescription,
        data, postLoading }}>
            {loading ? <Loading /> : children}
    </BlogContext.Provider>
  )
}

export default Context

export const Blog = () => useContext(BlogContext)