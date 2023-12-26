import { useParams } from 'react-router-dom';
import { componentsMap } from './config';

interface DemoParams {
  [key: string]: string | undefined;
  id?: reactApiPractice.RouteIdEnum;
}

export default function Demo() {
  const { id } = useParams<DemoParams>();
  const Comp = id ? componentsMap?.[id] || undefined : undefined;
  return (
    <div>
      {Comp ? <Comp /> : null}
    </div>
  )
}
