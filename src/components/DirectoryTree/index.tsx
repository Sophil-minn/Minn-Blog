import { Affix, Card, Col, Input, Row, Space, Tree } from "antd";
// import { treeData } from "./config";
import { FilterOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { GlobalContext } from "../../App";
const { DirectoryTree } = Tree;

const DTree = ({treeData}: any) => {
  const { targetOffset } = useContext(GlobalContext);
  const onSelect = (keys: any, info: any) => {
    console.log("Trigger Select", keys, info);
  };
  const onExpand = (keys: any, info: any) => {
    console.log("Trigger Expand", keys, info);
  };
  const title = <Row gutter={8} wrap={false} justify={'space-between'} align={"bottom"}>
    <Col flex="auto">
      <Input size="small" placeholder="请输入" style={{ width: '100%' }} />
    </Col>
    <Col flex="50px">
      <Space>
        <PlusSquareOutlined />
        <FilterOutlined />
      </Space>
    </Col>
  </Row>;
  return (
    <Affix offsetTop={targetOffset ? targetOffset - 24 : 0}>
    <Card title={title} headStyle={{ padding: '4px 8px' }} style={{ minHeight: 700 }}>
      <DirectoryTree
        multiple
        showLine
        defaultExpandAll
        onSelect={onSelect}
        onExpand={onExpand}
        treeData={treeData} />
      </Card>
      </Affix>
  );
};

export default DTree;
