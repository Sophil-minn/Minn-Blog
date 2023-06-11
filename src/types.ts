interface ItemProps  {
  title: string;
  tips?: string;
  path?: string;
  pathType?:string;
  statusCode?: string;
  disabled?: boolean;
}
export interface NavInfoProps {
  title: string;
  description: string;
  list: ItemProps[]
}