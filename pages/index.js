import Head from 'next/head'
import { useState } from 'react'
import ImageGrid from '../components/ImageGrid'
import Modal from '../components/Modal'
import Title from '../components/Title'
import UploadForm from '../components/UploadForm'

export default function Home() {
  const [selectedImg, setSelectedImg] = useState(null)
  let [Open, setOpen] = useState(false)

  console.log(selectedImg)
  console.log(Open)

  return (
    <div className="bg-rose-200">
      <Head>
        <title>Photo Gallery App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto min-h-screen max-w-6xl px-8 ">
        <Title />
        <UploadForm />
        <ImageGrid
          setSelectedImg={setSelectedImg}
          setOpen={setOpen}
          Open={Open}
        />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </main>
    </div>
  )
}
