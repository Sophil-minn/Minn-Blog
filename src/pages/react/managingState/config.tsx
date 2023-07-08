import MenuLabel from '../../../components/MenuLabel';

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
  getItem('状态管理', 'managingState', 'managingState', null, [
    getItem('使用状态响应输入', 'managingState/reacting-to-input-with-state', '1'),
    getItem('选择状态结构 ', 'managingState/choosing-the-state-structure', '2'),
    getItem('在组件间共享状态', 'managingState/sharing-state-between-components ', '3'),
    getItem('保留和重置状态', 'managingState/preserving-and-resetting-state', '5'),
    getItem('提取状态逻辑到 reducer 中', 'managingState/extracting-state-logic-into-a-reducer', '6'),
    getItem('使用 Context 进行深层数据传递', 'managingState/passing-data-deeply-with-context', '7'),
    getItem('使用 Reducer 和 Context 进行状态扩展', 'managingState/scaling-up-with-reducer-and-context', '8'),
  ]),
];

