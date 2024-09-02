/* import { collection, onSnapshot, query } from "@firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../firebaseConfig/firebase"
import { doc } from "@firebase/firestore"

const useSingleFetch = (collectionName, id, subCol) => {
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        /* const getSingleData = () => {
             const postRef = query(collection(db, collectionName, id, subCol))
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

        const getSingleData = () => {
            const docRef = collection(db, collectionName).doc(id);
            const postRef = collection(docRef, subCol);
            onSnapshot(postRef, (snapshot) => {
              setData(
                snapshot.docs.map((doc) => ({
                  ...doc.data(),
                  id: doc.id,
                }))
              );
              setLoading(false);
            });
          };

        getSingleData()
     }, [db, id])

  return (
    {data, loading}
  )
}

export default useSingleFetch */

import { collection, onSnapshot, query, doc } from "@firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../firebaseConfig/firebase"

const useSingleFetch = (collectionName, id, subCol) => {
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!collectionName || !id) return;

        const getSingleData = () => {
            const docRef = doc(db, collectionName, id);
            const postRef = collection(docRef, subCol);
            onSnapshot(postRef, (snapshot) => {
              setData(
                snapshot.docs.map((doc) => ({
                  ...doc.data(),
                  id: doc.id,
                }))
              );
              setLoading(false);
            });
          };

        getSingleData()
     }, [db, id, collectionName, subCol])

  return (
    {data, loading}
  )
}

export default useSingleFetch