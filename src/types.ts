interface ItemProps  {
  title: string;
  tips: string;
  path: string;
  pathType:string;
  statusCode: string;
  statusText: string;
}
export interface NavInfoProps {
  title: string;
  description: string;
  list: ItemProps[]
}