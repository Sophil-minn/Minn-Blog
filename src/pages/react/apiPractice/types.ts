export interface ComponentsMap {
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
  useReducer: React.FC,
  useRef: React.FC,
  useState: React.FC,
  useSyncExternalStore: React.FC,
  useTransition: React.FC,
}

export interface RComponentsMap {
  Hooks: React.FC,
  Components: React.FC,
  'react-API': React.FC,
}

export interface MenuItem {
  label: string | React.ReactNode;
  key: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: 'group';
  title?: string;
}
