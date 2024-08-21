import { onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebaseConfig/firebase'
import Loading from '../components/Loading/Loading'
import { collection, doc, onSnapshot, query } from '@firebase/firestore'

const BlogContext = createContext()

const Context = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false)
    const [loading, setLoading] = useState(true)
    const [allUsers, setAllUsers] = useState([])

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
            })
       }
       getUsers()
    }, [])

  return (
    <BlogContext.Provider value={{ currentUser, setCurrentUser, allUsers }}>
        {loading ? <Loading /> : children}
    </BlogContext.Provider>
  )
}

export default Context

export const Blog = () => useContext(BlogContext)