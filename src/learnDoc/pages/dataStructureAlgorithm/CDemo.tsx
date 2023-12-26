import { useParams } from 'react-router-dom';
import { componentsMap } from './config';

export default function CDemo() {
  const { id } = useParams<{ id: dataStructureAlgorithm.RouteIdEnum }>();
  const Comp = id ? componentsMap?.[id] || undefined : undefined;
  return (
    <div>
      {Comp ? Comp : <div>前端打包</div>}
    </div>
  )
}