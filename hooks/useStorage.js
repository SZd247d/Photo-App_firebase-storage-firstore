import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { storage, db } from '../firebase'

const useStorage = (file) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    const fileRef = ref(storage, 'images/' + file.name)
    const uploadTask = uploadBytesResumable(fileRef, file)

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + percentage + '% done')
        setProgress(percentage)
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused')
            break
          case 'running':
            console.log('Upload is running')
            break
          default:
            break
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error)
        setError(error)
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL)
          setUrl(downloadURL)

          const docRef = addDoc(collection(db, 'images'), {
            url: downloadURL,
            createdAt: serverTimestamp(),
          }).then(() => console.log('Document written with ID: ', docRef.id)) // addDoc returns a promise
        })
      }
    )
  }, [file])
  return { progress, error, url }
}

export default useStorage
