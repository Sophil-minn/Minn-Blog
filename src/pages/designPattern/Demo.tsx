import { useParams } from 'react-router-dom';
import { componentsMap } from './config';
import {
  LAW_OF_DEMETER, DESIGN_RULE, COMMON_PATTERNS, UNCOMMON_PATTERNS
} from './const';

interface RouteParams {
  id: typeof LAW_OF_DEMETER | typeof DESIGN_RULE | typeof COMMON_PATTERNS | typeof UNCOMMON_PATTERNS
}


export default function CDemo() {
  const { id } = useParams() as unknown as RouteParams;
  const Comp = id ? componentsMap?.[id] || undefined : undefined;
  return (
    <div>
      {Comp}
    </div>
  )
}
