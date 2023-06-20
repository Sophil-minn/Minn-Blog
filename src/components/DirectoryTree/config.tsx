import {
  PlusOutlined,
  FilterOutlined,
  PlusSquareFilled,
  FilterFilled,
  FileWordOutlined,
  FileWordFilled,
  FolderOpenFilled,
  FolderOutlined,
  PlusCircleOutlined,
  PlusCircleFilled,
  PlusSquareOutlined,
  FolderFilled
} from "@ant-design/icons";
import { ICON_ADD_DIR_TYPE, ICON_ADD_SQUARE_TYPE, ICON_ADD_TYPE, ICON_DIR_FOLD_TYPE, ICON_DIR_TYPE, ICON_FILTER_TYPE, ICON_LEAF_TYPE } from "./const";

// 配置icon类型默认线框风格， 
export const ICON_MAP = {
  [ICON_ADD_TYPE]: <PlusOutlined />,
  [ICON_ADD_DIR_TYPE]: <PlusCircleOutlined />,
  [ICON_ADD_SQUARE_TYPE]: <PlusSquareOutlined />,
  [ICON_FILTER_TYPE]: <FilterOutlined />,
  [ICON_DIR_TYPE]: <FolderOutlined />,
  [ICON_DIR_FOLD_TYPE]: <FolderFilled />,
  [ICON_LEAF_TYPE]: < FileWordOutlined />,
};
// 激活时icon用对应的实底风格 
export const ICON_ACTIVE_MAP = {
  [ICON_ADD_TYPE]: <PlusOutlined style={{ color: '#1677ff' }} />,
  [ICON_ADD_DIR_TYPE]: <PlusCircleFilled style={{ color: '#1677ff' }} />,
  [ICON_ADD_SQUARE_TYPE]: <PlusSquareFilled style={{ color: '#1677ff' }} />,
  [ICON_FILTER_TYPE]: <FilterFilled style={{ color: '#1677ff' }} />,
  [ICON_DIR_TYPE]: <FolderOpenFilled style={{ color: '#1677ff' }} />,
  [ICON_DIR_FOLD_TYPE]: <FolderFilled style={{ color: '#1677ff' }} />,
  [ICON_LEAF_TYPE]: <FileWordFilled style={{ color: '#1677ff' }} />,
}


// 筛选表单配置项
export const optionsFilter = [
  {
    value: "type",
    label: "类型",
    type: "select",
    options: [
      {
        value: "111",
        label: "a",
      },
      {
        value: "222",
        label: "b",
      },
      {
        value: "333",
        label: "c",
      },
    ],
  },
  {
    value: "state",
    label: "状态",
    type: "checkbox",
    options: [
      {
        value: "draft",
        label: "r",
      },
      {
        value: "offline",
        label: "h",
      },
      {
        value: "online",
        label: "y",
      },
    ],
  },
];
// 新增目录下拉选项
export const optionsDirectory = [
  {
    value: "system",
    label: "新增目录",
    type: "select",
    options: [
      {
        value: "draft",
        label: "目录1",
      },
      {
        value: "offline",
        label: "目录2",
      },
      {
        value: "online",
        label: "目录3",
      },
    ],
  },
];
