interface ItemProps  {
  title: string;
  tips?: string;
  path?: string;
  pathType?:string;
  statusCode?: string;
  open?: boolean;
  disabled?: boolean;
}
export interface NavInfoProps {
  title: string;
  path?: string;
  description: string;
  list: ItemProps[]
}

export interface BreadCrumbItemsProps  { href?: string; title?: string | React.ReactNode }
