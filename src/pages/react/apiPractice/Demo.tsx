import { useParams } from 'react-router-dom';
import { componentsMap, rComponentsMap } from './config';
import Hooks from './Hooks';

interface DemoParams {
  [key: string]: string | undefined;
  pid?: reactApiPractice.RouteIdEnumParent;
  id?: reactApiPractice.RouteIdEnum;
}

export default function Demo() {
  const { pid, id } = useParams<DemoParams>();
  const Comp = pid ? rComponentsMap?.[pid] || undefined : undefined;
  const CComp = id ? componentsMap?.[id] || undefined : undefined;
  return (
    <div>
      {CComp ? <CComp /> : (Comp ? < Comp /> : <Hooks />)}
    </div>
  )
}
