import {
  SendOutlined,
  FolderOpenOutlined,
  ApiOutlined,
  PlusOutlined,
  FilterOutlined,
  PlusSquareFilled,
  FilterFilled,
  FileWordOutlined,
  FileWordFilled,
  FolderOpenFilled,
  FolderFilled,
  FolderOutlined,
  PlusCircleOutlined,
  PlusCircleFilled,
  PlusSquareOutlined
} from "@ant-design/icons";
import { ICON_ADD_DIR_TYPE, ICON_ADD_SQUARE_TYPE, ICON_ADD_TYPE, ICON_DIR_TYPE, ICON_FILTER_TYPE, ICON_LEAF_TYPE } from "./const";
import TreeNode from "./TreeNode";

export const treeData = [
  {
    title: "描述UI",
    key: "0-0",
    icon: <FolderOpenOutlined />,
    children: [
      {
        title: "leaf 0-0",
        key: "0-0-0",
        isLeaf: true,
      },
      {
        title: "leaf 0-0",
        key: "0-0-0",
        isLeaf: true,
      },
      {
        title: "leaf 0-0",
        key: "0-0-0",
        isLeaf: true,
      },
      {
        title: "leaf 0-0",
        key: "0-0-0",
        isLeaf: true,
      },
      {
        title: "leaf 0-0",
        key: "0-0-0",
        isLeaf: true,
      },
      {
        title: "leaf 0-0",
        key: "0-0-0",
        isLeaf: true,
      },
      {
        title: "leaf 0-0",
        key: "0-0-0",
        isLeaf: true,
      },
    ]
  },
  {
    title: "添加交互",
    key: "0-1",
    children: [
      {
        title: "leaf 1-0",
        key: "0-1-0",
        isLeaf: true,
        icon: <ApiOutlined style={{ color: "#faad14" }} />
      },
      {
        title: "leaf 1-1",
        key: "0-1-1",
        isLeaf: true,
        icon: <SendOutlined style={{ color: "#1677ff" }} />
      }
    ]
  },
  {
    title: "状态管理",
    key: "0-2",
    children: [
      {
        title: "leaf 2-0",
        key: "0-2-0",
        isLeaf: true,
        icon: <ApiOutlined style={{ color: "#faad14" }} />
      },
      {
        title: "leaf 2-1",
        key: "0-2-1",
        isLeaf: true,
        icon: <SendOutlined style={{ color: "#1677ff" }} />
      }
    ]
  }
];

// 配置icon类型默认线框风格， 
export const ICON_MAP = {
  [ICON_ADD_TYPE]: <PlusOutlined />,
  [ICON_ADD_DIR_TYPE]: <PlusCircleOutlined />,
  [ICON_ADD_SQUARE_TYPE]: <PlusSquareOutlined />,
  [ICON_FILTER_TYPE]: <FilterOutlined />,
  [ICON_DIR_TYPE]: <FolderOutlined />,
  [ICON_LEAF_TYPE]: <FileWordOutlined />,
};
// 激活时icon用对应的实底风格 
export const ICON_ACTIVE_MAP = {
  [ICON_ADD_TYPE]: <PlusSquareFilled style={{ color: '#1677ff' }} />,
  [ICON_ADD_DIR_TYPE]: <PlusCircleFilled style={{ color: '#1677ff' }} />,
  [ICON_ADD_SQUARE_TYPE]: <PlusSquareFilled style={{ color: '#1677ff' }} />,
  [ICON_FILTER_TYPE]: <FilterFilled style={{ color: '#1677ff' }} />,
  [ICON_DIR_TYPE]: <FolderOpenFilled style={{ color: '#1677ff' }} />,
  [ICON_LEAF_TYPE]: <FileWordFilled style={{ color: '#1677ff' }} />,
}


// 筛选表单配置项
export const optionsFilter = [
  {
    value: "type",
    label: "类型",
    type: "select",
  },
  {
    value: "dataSourceCode",
    label: "系统",
    type: "select",
    showSearch: true,
  },
  {
    value: "state",
    label: "状态",
    type: "checkbox",
    options: [
      {
        value: "draft",
        label: "草稿",
      },
      {
        value: "offline",
        label: "已下线",
      },
      {
        value: "online",
        label: "已发布",
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
