import MenuLabel from "../components/MenuLabel";

interface MenuItem {
  label: string | React.ReactNode;
  key: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: 'group';
  title?: string;
}

export function getMenuItem(
  label: string,
  path: string,
  key: string,
  children?: MenuItem[],
  icon?: React.ReactNode,
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
