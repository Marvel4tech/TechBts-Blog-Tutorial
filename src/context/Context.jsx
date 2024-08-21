import { onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebaseConfig/firebase'
import Loading from '../components/Loading/Loading'

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
       
    }, [])

  return (
    <BlogContext.Provider value={{currentUser, setCurrentUser}}>
        {loading ? <Loading /> : children}
    </BlogContext.Provider>
  )
}

export default Context

export const Blog = () => useContext(BlogContext)