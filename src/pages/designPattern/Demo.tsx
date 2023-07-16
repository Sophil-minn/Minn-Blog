import { useParams } from 'react-router-dom';
import { componentsMap } from './config';

export default function CDemo() {
  const { id } = useParams<{ id: designPattern.RouteIdEnumParent }>();
  const Comp = id ? componentsMap?.[id] || undefined : undefined;
  return (
    <div>
      {Comp}
    </div>
  )
}
