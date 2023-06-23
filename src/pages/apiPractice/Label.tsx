import { useNavigate } from 'react-router-dom'

export default function Label({ label, keypath, path }: { label: string, keypath: string, path: string }) {
  console.log('title: ', path);
  console.log('keypath: ', label, keypath);
  const navigate = useNavigate();

  return (
    <div onClick={() => {
      navigate(path)
    }}>
      {label}
    </div>
  )
}
