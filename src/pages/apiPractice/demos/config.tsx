import React from "react";
import Loading from "../../../components/Loading";
import Callback from "./Callback";
import Components from "./Components";
import Context from "./Context";
import DebugValue from "./DebugValue";
import DeferredValue from "./DeferredValue";
import Effect from "./Effect";
import Hooks from "./Hooks";
import ImperativeHandle from "./ImperativeHandle";
import InsertionEffect from "./InsertionEffect";
import LayoutEffect from "./LayoutEffect";
import Memo from "./Memo";
import ReactAPI from "./ReactAPI";

interface ComponentsMap {
  useCallback: React.FC,
  useContext: React.FC,
  useDebugValue: React.FC,
  useDeferredValue: React.FC,
  useEffect: React.FC,
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
  useCallback: () => <React.Suspense fallback={<Loading loading />}> <Callback /></React.Suspense>,
  useContext: () => <Context />,
  useDebugValue: () => <DebugValue />,
  useDeferredValue: () => <DeferredValue />,
  useEffect: () => <Effect />,
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
