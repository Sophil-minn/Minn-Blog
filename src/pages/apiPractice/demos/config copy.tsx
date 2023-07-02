import React, { Suspense, lazy } from "react";
import Components from "./Components";

const Callback = lazy(() => import("./Callback"));
const Context = lazy(() => import("./Context"));
const DebugValue = lazy(() => import("./DebugValue"));
const DeferredValue = lazy(() => import("./DeferredValue"));
const Effect = lazy(() => import("./Effect/EffectInfo"));
const Hooks = lazy(() => import("./Hooks"));
const ImperativeHandle = lazy(() => import("./ImperativeHandle"));
const InsertionEffect = lazy(() => import("./InsertionEffect"));
const LayoutEffect = lazy(() => import("./LayoutEffect"));
const Memo = lazy(() => import("./Memo"));
const ReactAPI = lazy(() => import("./ReactAPI"));
const Id = lazy(() => import("./Id"));

interface ComponentsMap {
  useCallback: React.FC,
  useContext: React.FC,
  useDebugValue: React.FC,
  useDeferredValue: React.FC,
  useEffect: React.FC,
  useId: React.FC,
  useImperativeHandle: React.FC,
  useInsertionEffect: React.FC,
  useLayoutEffect: React.FC,
  useMemo: React.FC,
}

interface RComponentsMap {
  Hooks: React.FC,
  Components: React.FC,
  'react-API': React.FC,
}

export const componentsMap: ComponentsMap = {
  useCallback: () => <Callback />,
  useContext: () => <Context />,
  useDebugValue: () => <DebugValue />,
  useDeferredValue: () => <DeferredValue />,
  useEffect: () => <Effect />,
  useId: () => <Id />,
  useImperativeHandle: () => <ImperativeHandle />,
  useInsertionEffect: () => <InsertionEffect />,
  useLayoutEffect: () => <LayoutEffect />,
  useMemo: () => <Memo />,
};

export const rComponentsMap: RComponentsMap = {
  Hooks: () => <Hooks />,
  Components: () => <Components />,
  "react-API": () => <ReactAPI />,
}
