import {
  PlusOutlined,
  FilterOutlined,
  FilterFilled,
  FileWordOutlined,
  FileWordFilled,
  FolderOpenFilled,
  FolderOutlined,
  PlusCircleOutlined,
  PlusCircleFilled,
  PlusSquareOutlined,
  FolderFilled,
  PlusSquareFilled
} from "@ant-design/icons";
import { ICON_ADD_DIR_TYPE, ICON_ADD_SQUARE_TYPE, ICON_ADD_TYPE, ICON_DIR_FOLD_TYPE, ICON_DIR_TYPE, ICON_FILTER_TYPE, ICON_LEAF_TYPE } from "./const";
import { List, Space } from "antd";
import FormByConfig from "../../../components/FormByConfig";
const { Item } = List;

// 配置icon类型默认线框风格， 
export const ICON_MAP = {
  [ICON_ADD_TYPE]: <PlusOutlined />,
  [ICON_ADD_DIR_TYPE]: <PlusCircleOutlined />,
  [ICON_ADD_SQUARE_TYPE]: <PlusSquareOutlined />,
  [ICON_FILTER_TYPE]: <FilterOutlined />,
  [ICON_DIR_TYPE]: <FolderOpenFilled />,
  [ICON_DIR_FOLD_TYPE]: <FolderFilled />,
  [ICON_LEAF_TYPE]: <FileWordOutlined />,
}
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

export const titleMap: Record<string, any> = {
  [ICON_FILTER_TYPE]: '筛选',
  [ICON_ADD_TYPE]: '新增目录',
  [ICON_ADD_DIR_TYPE]: '新增树目录节点',
  [ICON_ADD_SQUARE_TYPE]: '新增叶节点',
  [ICON_DIR_TYPE]: '文件夹',
  [ICON_DIR_FOLD_TYPE]: '未展开的文件夹',
};

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


export const getContentMap = ({ form, onFinish, onItemClick, item }: Record<string, any>) => ({
  [ICON_FILTER_TYPE]: <FormByConfig spans={24} form={form} items={optionsFilter} onFinish={onFinish} />,
  [ICON_ADD_TYPE]: <FormByConfig spans={24} form={form} items={optionsDirectory} onFinish={onFinish} />,
  [ICON_ADD_DIR_TYPE]: <List
    size="small"
    bordered
    dataSource={['数据源', 'aaa', 'bbbc', 'ccc', 'ddd', 'eee', 'fff']}
    renderItem={(each: any) => <Item className={item === each ? "active" : ""} onClick={() => onItemClick(each)}>{each}</Item>}
  />,
  [ICON_ADD_SQUARE_TYPE]: '新增叶节点',
  [ICON_DIR_TYPE]: '你点击了文件夹icon',
  [ICON_DIR_FOLD_TYPE]: '你点击了未展开的文件夹',
});

export const initIcons = (
  <Space>
    <PlusOutlined />
    <PlusCircleOutlined />
    <PlusSquareOutlined />
    <FilterOutlined />
    <FolderFilled />
    <FolderOpenFilled />
  </Space>
);
export const activeIcons = (
  <Space>
    <PlusOutlined style={{ color: '#1677ff' }} />
    <PlusCircleFilled style={{ color: '#1677ff' }} />
    <PlusSquareFilled style={{ color: '#1677ff' }} />
    <FilterFilled style={{ color: '#1677ff' }} />
    <FolderFilled style={{ color: '#1677ff' }} />
    <FolderOpenFilled style={{ color: '#1677ff' }} />
  </Space>
);