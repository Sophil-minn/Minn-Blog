interface MenuItem {
  label: string | React.ReactNode;
  key: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: 'group';
  title?: string;
}

interface ItemProps {
  title: string;
  tips?: string;
  path?: string;
  pathType?: string;
  statusCode?: string;
  open?: boolean;
  disabled?: boolean;
}
interface NavInfoProps {
  title: string;
  path?: string;
  description: string;
  list: ItemProps[];
}

interface BreadCrumbItemsProps {
  href?: string;
  title?: string | React.ReactNode;
}

interface AnchorItemProps {
  key: string;
  href: string;
  title: string | React.ReactNode;
  tooltip?: string | boolean;
  children?: undefined | AnchorItemProps[];
}
