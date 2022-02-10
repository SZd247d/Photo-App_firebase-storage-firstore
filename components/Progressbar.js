import useStorages from '../hooks/useStorage'

function Progressbar({ file, setFile }) {
  const { progress, url } = useStorages(file)
  console.log(progress, url)
  url && setFile(null)

  return (
    <div
      className="h-2 rounded-full bg-rose-700 transition ease-linear "
      style={{ width: progress + '%' }}
    ></div>
  )
}

export default Progressbar
