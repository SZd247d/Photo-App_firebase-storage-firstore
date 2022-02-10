import { useState, useEffect } from 'react'
import { db } from '../firebase'
import {
  collection,
  addDoc,
  getDoc,
  doc,
  orderBy,
  onSnapshot,
  query,
} from 'firebase/firestore'

function useFirestore(col) {
  const [documents, setDocuments] = useState([])

  useEffect(() => {
    // const unsubscribe = onSnapshot(
    // query(collection(db, 'images'), orderBy('createdAt', 'desc')),(snapshot => {
    //   const images = snapshot.docs.map(doc => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }))
    //   setImages(images)
    // }));

    // return () => unsubscribe()

    return onSnapshot(
      query(collection(db, col), orderBy('createdAt', 'desc')),
      (snapshot) => {
        const documents = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setDocuments(documents)
      }
    )

    // const unsubscribe = onSnapshot(
    //   query(collection(db, 'images'), orderBy('createdAt', 'desc')),
    //   (snap) => {
    //     let documents = []
    //     snap.forEach(doc => {
    //       documents.push({
    //         id: doc.id,
    //         ...doc.data(),
    //       })
    //     })
    //   },
    //   setImages(documents)
    // )
  }, [db])
  return { documents }
}

export default useFirestore

// const unsubscribe = () => {
//   const unsub = collection(db, 'images').onSnapshot((snap) => {
//     const images = snap.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }))
//     setImages(images)
//   })
// }
