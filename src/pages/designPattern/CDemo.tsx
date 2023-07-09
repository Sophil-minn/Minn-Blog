import { useParams } from 'react-router-dom';
import { componentsMap2 } from './config';
import {
  LAW_OF_DEMETER, DESIGN_RULE, COMMON_PATTERNS, UNCOMMON_PATTERNS,
  OBSERVER_PATTERN, DECORATOR_PATTERN, ADAPTEE_PATTERN, FACTORY_PATTERN, SINGLE_PATTERN, PROXY_PATTERN, FACADE_PATTERN, ITERATOR_PATTERN,
  INTERPRETER_PATTERN, MEDIATOR_PATTERN, VISITOR_PATTERN, MEME_PATTERN, COMMAND_PATTERN,
  ACTION_PATTERN, TEMPLATE_METHOD_PATTERN, STRATEGY_PATTERN, FLYWEIGHT_PATTERN, COMBINATION, BRIDGE_PATTERN,
  PROTOTYPE_PATTERN
} from './const';

interface RouteParams {
  id: typeof LAW_OF_DEMETER | typeof DESIGN_RULE | typeof COMMON_PATTERNS | typeof UNCOMMON_PATTERNS
}
interface RouteParams2 {
  cid: typeof OBSERVER_PATTERN | typeof DECORATOR_PATTERN | typeof ADAPTEE_PATTERN | typeof FACTORY_PATTERN | typeof SINGLE_PATTERN | typeof PROXY_PATTERN | typeof FACADE_PATTERN | typeof ITERATOR_PATTERN
}
interface RouteParams3 {
  cid: typeof INTERPRETER_PATTERN | typeof MEDIATOR_PATTERN | typeof VISITOR_PATTERN | typeof MEME_PATTERN | typeof COMMAND_PATTERN | typeof
  ACTION_PATTERN | typeof TEMPLATE_METHOD_PATTERN | typeof STRATEGY_PATTERN | typeof FLYWEIGHT_PATTERN | typeof COMBINATION | typeof BRIDGE_PATTERN | typeof
  PROTOTYPE_PATTERN
}

export default function CDemo() {
  const { cid } = useParams() as unknown as RouteParams2 & RouteParams3;
  const Comp = cid ? componentsMap2?.[cid] || undefined : undefined;
  return (
    <div>
      {cid}
      {Comp ? Comp : <div>前端打包</div>}
    </div>
  )
}
