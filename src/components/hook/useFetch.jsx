import { collection, onSnapshot, orderBy, query } from "@firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../firebaseConfig/firebase"


const useFetch = (collectionName) => {
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getUsers = () => {
             const postRef = query(collection(db, collectionName), orderBy("created", "desc"));
             onSnapshot(postRef, (snapshot) => {
                 setData(
                     snapshot.docs.map((doc) => ({
                         ...doc.data(),
                         id: doc.id,
                     }))
                 )
                 setLoading(false)
             })
        }
        getUsers()
     }, [])

  return (
    {data, loading}
  )
}

export default useFetch