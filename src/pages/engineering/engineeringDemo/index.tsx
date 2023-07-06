import { useParams } from 'react-router-dom';
import { componentsMap } from './config';
import { RouteParams } from './types';
import { useEffect } from 'react';


export default function EngineeringDemo() {
  const { id } = useParams() as unknown as RouteParams;
  const Comp = id ? componentsMap?.[id] || undefined : undefined;
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id])
  return (
    <div>
      {Comp ? <Comp /> : null}
    </div>
  )
}
