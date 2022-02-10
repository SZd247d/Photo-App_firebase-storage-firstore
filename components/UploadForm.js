import { useState } from 'react'
import Progressbar from './Progressbar'
import { PlusIcon } from '@heroicons/react/solid'

function UploadForm() {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const alowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg']

  const changeHandler = (e) => {
    e.preventDefault()

    const selected = e.target.files[0]
    console.log(selected.name)

    if (selected && alowedTypes.includes(selected.type)) {
      setFile(selected)
      setError(null)
    } else {
      setFile(null)
      setError('Please Select an image file (png or jpeg or jpg or gif)')
    }
  }

  return (
    <form className="container mx-auto flex w-full flex-col items-center justify-center">
      <label className="relative mt-10 flex justify-center">
        <input
          type="file"
          onChange={changeHandler}
          className="hidden border-none "
        />
        <PlusIcon className="font-sm absolute -top-10 left-1/2 mt-8 h-12 transform cursor-pointer rounded-full border-2 border-rose-700 p-2 text-sm text-rose-700 shadow-lg transition-all duration-150 ease-out hover:bg-rose-300 hover:text-white" />
      </label>

      <div className="mt-14 grow space-y-5">
        {error && <div>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <Progressbar file={file} setFile={setFile} />}
      </div>
    </form>
  )
}

export default UploadForm
