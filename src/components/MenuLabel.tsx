import { useNavigate } from 'react-router-dom'

export default function MenuLabel({ label, keypath, path }: { label: string, keypath: string, path: string }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => {
      navigate(path)
    }}>
      {label}
    </div>
  )
}
