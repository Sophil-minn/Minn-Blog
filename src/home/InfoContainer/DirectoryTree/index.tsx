import { Card, Input, Row, Space, Tree } from "antd";
import { treeData } from "./config";
import { FilterOutlined, PlusSquareOutlined } from "@ant-design/icons";
const { DirectoryTree } = Tree;

const DTree = () => {
  const onSelect = (keys: any, info: any) => {
    console.log("Trigger Select", keys, info);
  };
  const onExpand = (keys: any, info: any) => {
    console.log("Trigger Expand", keys, info);
  };
  const title = <Space>
      <Input size="small" placeholder="请输入" />
      <PlusSquareOutlined />
      <FilterOutlined />
    </Space>;
  return (
    <Card title={title} headStyle={{padding: '4px 8px'}}>
      <DirectoryTree
        multiple
        showLine
        defaultExpandAll
        onSelect={onSelect}
        onExpand={onExpand}
        treeData={treeData} />
    </Card>
  );
};

export default DTree;
