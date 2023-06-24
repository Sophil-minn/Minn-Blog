import MenuLabel from '../../components/MenuLabel';
import { COMPONENT_SETTLE_DWON, COMPONENT_THEORY, DEV_ENVIROMENT, ENGINERING, LIBARY_DEV } from './const';

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
    label: <MenuLabel keypath={key} path={path} label={label} />,
    type,
    path
  } as MenuItem;
}

export const items: MenuItem[] = [
  getItem('组件库开发', `/components-development/${LIBARY_DEV}`, LIBARY_DEV),
  getItem('组件开发环境配置', `/components-development/${DEV_ENVIROMENT}`, DEV_ENVIROMENT),
  getItem('工程化', `/components-development/${ENGINERING}`, ENGINERING),
  getItem('组件设计理论', `/components-development/${COMPONENT_THEORY}`, COMPONENT_THEORY),
  getItem('组件沉淀', `/components-development/${COMPONENT_SETTLE_DWON}`, COMPONENT_SETTLE_DWON),
];
