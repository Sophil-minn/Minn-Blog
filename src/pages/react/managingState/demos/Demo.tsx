import { useParams } from 'react-router-dom';
import { componentsMap } from './config';
import ManagingState from './ManagingState';

interface RouteParams {
  [key: string]: string | undefined,
  id: managingStateProps.RouteIdEnum,
}
export default function Demo() {
  // root组件 匹配
  const { id } = useParams<RouteParams>();
  const CComp = id ? componentsMap?.[id] || undefined : undefined;
  return (
    <div>
      {CComp ? <CComp /> : <ManagingState />}
    </div>
  )
}
