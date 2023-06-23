import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import Label from './Label';

// submenu keys of first level
export const rootSubmenuKeys = ['sub11', 'sub2', 'sub4'];

interface MenuItem {
  label: string | React.ReactNode;
  key: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: 'group';
  title?: string;
}

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
    label: <Label keypath={key} path={path} label={label} />,
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
