import { useParams } from 'react-router-dom';
import { componentsMap } from './config';
import { RouteParams } from './types';
import Engineering from '..';


export default function EngineeringDemo() {
  const { id } = useParams() as unknown as RouteParams;
  const Comp = id ? componentsMap?.[id] || undefined : undefined;
  return (
    <div>
      {Comp ? <Comp /> : <Engineering />}
    </div>
  )
}
