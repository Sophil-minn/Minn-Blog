import { useParams } from 'react-router-dom';
import { componentsMap } from './config';
import { ROLLUP, WEBPACK, VITE } from './const';

export default function CDemo() {
  const { id } = useParams<{ id: building.RouteIdEnum }>();
  const Comp = id ? componentsMap?.[id] || undefined : undefined;
  return (
    <div>
      {Comp ? <Comp /> : <div>前端打包</div>}
    </div>
  )
}
