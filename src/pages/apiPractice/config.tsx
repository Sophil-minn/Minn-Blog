import { Tooltip } from 'antd';
import MenuLabel from '../../components/MenuLabel';
import { anchorItems } from './demos/Callback/config';
import { contextAnchorItems } from './demos/Context/config';
import { AnchorItemProps } from '../../types';
import { debugValueAnchorItems } from './demos/DebugValue/config';
import { deferredValueAnchorItems } from './demos/DeferredValue/config';
import React from "react";
import Callback from "./demos/Callback";
import Components from "./demos/Components";
import Context from "./demos/Context";
import DebugValue from "./demos/DebugValue";
import DeferredValue from "./demos/DeferredValue";
import Effect from "./demos/Effect";
import Hooks from "./demos/Hooks";
import ImperativeHandle from "./demos/ImperativeHandle";
import InsertionEffect from "./demos/InsertionEffect";
import LayoutEffect from "./demos/LayoutEffect";
import Memo from "./demos/Memo";
import ReactAPI from "./demos/ReactAPI";
import Id from "./demos/Id";
import { ComponentsMap, MenuItem, RComponentsMap } from './types';

// submenu keys of first level
export const rootSubmenuKeys = ['Hooks', 'Components', 'react-API'];

function getItem(
  label: string,
  path: string,
  key: string,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label: <MenuLabel keypath={key} path={path} label={label} />,
    type,
    path
  } as MenuItem;
}

export const items: MenuItem[] = [
  getItem('Hooks', 'Hooks', 'Hooks', null, [
    getItem('useCallback', 'Hooks/useCallback', '1'),
    getItem('useContext', 'Hooks/useContext', '2'),
    getItem('useDebugValue', 'Hooks/useDebugValue', '3'),
    getItem('useDeferredValue', 'Hooks/useDeferredValue', '5'),
    getItem('useEffect', 'Hooks/useEffect', '6'),
    getItem('useId', 'Hooks/useId', '7'),
    getItem('useImperativeHandle', 'Hooks/useImperativeHandle', '8'),
    getItem('useInsertionEffect', 'Hooks/useInsertionEffect', '9'),
    getItem('useLayoutEffect', 'Hooks/useLayoutEffect', '10'),
    getItem('useMemo', 'Hooks/useMemo', '11'),
    getItem('useReducer', 'Hooks/useReducer', '12'),
    getItem('useRef', 'Hooks/useRef', '13'),
    getItem('useState', 'Hooks/useState', '14'),
    getItem('useSyncExternalStore', 'Hooks/useSyncExternalStore', '15'),
    getItem('useTransition', 'Hooks/useTransition', '16'),
  ]),
  getItem('组件', 'components', 'Components', null, [
    getItem('Fragment', 'components/Fragment', '17'),
    getItem('Profiler', 'components/Profiler', '18'),
    getItem('StrictMode', 'components/StrictMode', '19'),
    getItem('Suspense', 'components/Suspense', '20'),
  ]),
  getItem('React API', 'react-API', 'API', null, [
    getItem('createContext', 'react-API/createContext', '21'),
    getItem('forwardRef', 'react-API/forwardRef', '22'),
    getItem('lazy', 'react-API/lazy', '23'),
    getItem('memo', 'react-API/memo', '24'),
    getItem('startTransition', 'react-API/startTransition', '25'),
  ]),
];

export const loopAnchorItems = (arr: AnchorItemProps[]): AnchorItemProps[] =>
  (arr || []).map((v: AnchorItemProps) =>
  ({
    ...v,
    title: v.tooltip ? <Tooltip title={v.title}>{v.title}</Tooltip> : v.title,
    children: loopAnchorItems(v.children as unknown as AnchorItemProps[])
  } as unknown as AnchorItemProps)
    // ({ ...v, title: <Tooltip title={v.title}>{v.title}</Tooltip>, children: loop(v.children) })
  );


export const hooksAnchorItems: AnchorItemProps[] = [
  ...loopAnchorItems(anchorItems),
  ...loopAnchorItems(contextAnchorItems),
  ...loopAnchorItems(debugValueAnchorItems),
  ...loopAnchorItems(deferredValueAnchorItems),
]

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
