import { Affix, Button, Card, Col, Input, Row, Space, Tree } from "antd";
import { FilterOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { GlobalContext } from "../../App";
import TreeNode from "./TreeNode";
import './index.less';
import ButtonHoc from "./ButtonHoc";
import { ICON_ADD_TYPE, ICON_FILTER_TYPE } from "./const";
import ModalHoc from "./ModalHoc";

// const { DirectoryTree } = Tree;

const DTree = ({ treeData, onSelect, onExpand }: any) => {
  const { targetOffset } = useContext(GlobalContext);
  const [type, setType] = useState<string>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClickCallback = (type: string) => {
    console.log('onClickCallback: ', type);
    setType(type);
    setIsModalOpen(true);
  }

  const title = <Row gutter={8} wrap={false} justify={'space-between'} align={"bottom"}>
    <Col flex="auto">
      <Input size="small" placeholder="请输入" style={{ width: '100%' }} />
    </Col>
    <Col flex="60px">
      {/* <Button type="text" size="small"><PlusSquareOutlined /></Button>
      <Button type="text" size="small"><FilterOutlined /></Button> */}
      <ButtonHoc
        iconType={ICON_ADD_TYPE}
        onClickCallback={() => onClickCallback?.(ICON_ADD_TYPE)}
      // active={active}
      />
      <ButtonHoc
        iconType={ICON_FILTER_TYPE}
        onClickCallback={() => onClickCallback?.(ICON_FILTER_TYPE)}
      // active={active}
      />
    </Col>
  </Row>;
  return (
    <>
      <Affix offsetTop={targetOffset ? targetOffset - 24 : 0}>
        <Card title={title} headStyle={{ padding: '4px 8px' }} style={{ minHeight: 700 }}>
          <Tree
            multiple
            defaultExpandAll
            onSelect={onSelect}
            rootClassName="min__tree"
            titleRender={
              (nodeData: any) => {
                console.log('nodeData: ', nodeData);
                return <TreeNode {...nodeData} onClickCallback={() => onClickCallback(nodeData.type)} />
              }
            }
            treeData={treeData} />
        </Card>
      </Affix>
      {/* 菜单栏 新增目录 过滤 新增数据源 对话框 */}
      <ModalHoc
        type={type}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setType={setType}
      />
    </>
  );
};

export default DTree;
