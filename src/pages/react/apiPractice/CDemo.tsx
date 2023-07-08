import React from 'react'
import { useParams } from 'react-router-dom';
import { componentsMap } from './config';

interface RouteParams {
  id: "useCallback" | "useContext" | "useDebugValue" | "useDeferredValue" | "useEffect" | "useImperativeHandle" | "useInsertionEffect" | "useLayoutEffect" | "useMemo" | "useReducer" | "useRef" | "useState" | "useSyncExternalStore" | "useTransition"
}

export default function Demo() {
  const { id } = useParams() as unknown as RouteParams;
  const Comp = id ? componentsMap?.[id] || undefined : undefined;
  return (
    <div>
      {Comp ? <Comp /> : null}
    </div>
  )
}
