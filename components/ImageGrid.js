import useFirestore from '../hooks/useFirestore'

function ImageGrid({ setSelectedImg }) {
  const { documents } = useFirestore('images')

  return (
    <div className="lg:grid-col-4 mt-8 grid gap-1 sm:grid-cols-2 md:grid-cols-3">
      {documents &&
        documents.map((doc) => (
          <div
            onClick={() => {
              setSelectedImg(doc.url)
              console.log(doc.url)
            }}
            className="relative mb-5 h-60 w-80 cursor-pointer "
            key={doc.id}
          >
            <img
              // onClick={(e) => console.log(e.target.src)}
              src={doc.url}
              alt="uploaded"
              className="absolute top-3 left-5 h-full w-full rounded-lg object-cover"
            />
          </div>
        ))}
    </div>
  )
}

export default ImageGrid
