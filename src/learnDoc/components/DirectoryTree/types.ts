export enum IconTypeProps {
  ICON_ADD_TYPE = 0, 
  ICON_ADD_DIR_TYPE = 1,
   ICON_FILTER_TYPE = 2
}

export interface TreeNodeProps {
  title: string;
  type: string;
  dirIconType?: string;
  active?: boolean;
  onClickCallback?: (type: string | undefined) => void;
  isDirectory?: boolean;
}
