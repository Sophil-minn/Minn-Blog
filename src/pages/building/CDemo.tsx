import { useParams } from 'react-router-dom';
import { componentsMap } from './config';
import { ROLLUP, WEBPACK, VITE } from './const';

interface RouteParams {
  id: typeof ROLLUP | typeof WEBPACK | typeof VITE
}

export default function CDemo() {
  const { id } = useParams() as unknown as RouteParams;
  const Comp = id ? componentsMap?.[id] || undefined : undefined;
  return (
    <div>
      {Comp ? <Comp /> : <div>前端打包</div>}
    </div>
  )
}
