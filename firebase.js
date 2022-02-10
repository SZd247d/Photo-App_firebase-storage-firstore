// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDN-TWyGIbh_WQTU271PvQPxq4CzpwNUS0',
  authDomain: 'photo-gallery-with-nextjs.firebaseapp.com',
  projectId: 'photo-gallery-with-nextjs',
  storageBucket: 'photo-gallery-with-nextjs.appspot.com',
  messagingSenderId: '655112948997',
  appId: '1:655112948997:web:4dc9ab80b441adb717bb6c',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
