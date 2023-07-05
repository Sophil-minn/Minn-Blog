import React, { useLayoutEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom';
import { componentsMap, rComponentsMap } from './config';
import Hooks from './Hooks';

interface RouteParams {
  pid: "Hooks" | "Components" | "react-API",
  id: "useCallback" | "useContext" | "useDebugValue" | "useDeferredValue" | "useEffect" | "useId" | "useImperativeHandle" | "useInsertionEffect" | "useLayoutEffect" | "useMemo"
}
export default function Demo() {
  const { pid, id } = useParams() as unknown as RouteParams;
  const Comp = pid ? rComponentsMap?.[pid] || undefined : undefined;
  const CComp = id ? componentsMap?.[id] || undefined : undefined;

  return (
    <div>
      {CComp ? <CComp /> : (Comp ? < Comp /> : <Hooks />)}
    </div>
  )
}
