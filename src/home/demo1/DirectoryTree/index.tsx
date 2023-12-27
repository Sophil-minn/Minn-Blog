import { Card, Col, Input, Row, Tree, message } from "antd";
import { useCallback, useState, memo } from "react";
import TreeNode from "./TreeNode";
import './index.scss';
import Button from "./Button";
import { ICON_ADD_TYPE, ICON_FILTER_TYPE } from "./const";
import ModalHoc from "./ModalHoc";
import Summary from "./Summary";


const DTree = ({ treeData }: any) => {
  const [iconType, setIconType] = useState<string>();
  const [treeNodeId, setTreeNodeId] = useState<string>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [expandedKeys, setExpandedKeys] = useState<string[]>(['0']);

  const onClickCallback = async (type: string, id?: string) => {
    setTreeNodeId(id);
    setIconType(type);
    setIsModalOpen(true);
  }

  const submit = (values: any) => {
    message.info(`提交的数据: , ${JSON.stringify(values)}`);
    setIsModalOpen(false);
  }


  const onSelect = (keys: any, info: any) => {
    const { node } = info;
    setSelectedKeys([node.key]);
    // navigate(node.path);
  };

  const onExpand = useCallback((keys: string[]) => {
    setExpandedKeys(keys)
  }, [])

  const title = (
    <Row gutter={8} wrap={false} justify={'space-between'} align={"bottom"}>
      <Col flex="auto">
        <Input size="small" placeholder="请输入" style={{ width: '100%' }} />
      </Col>
      <Col flex="60px">
        <Button
          iconType={ICON_ADD_TYPE}
          onClickCallback={() => onClickCallback?.(ICON_ADD_TYPE)}
          active={isModalOpen && iconType === ICON_ADD_TYPE}
        />
        <Button
          iconType={ICON_FILTER_TYPE}
          onClickCallback={() => onClickCallback?.(ICON_FILTER_TYPE)}
          active={isModalOpen && iconType === ICON_FILTER_TYPE}
        />
      </Col>
    </Row>
  );
  const titleRender = useCallback((nodeData: any) => {
    return <TreeNode
      {...nodeData}
      treeNodeIdActive={isModalOpen && treeNodeId}
      isExpand={expandedKeys.includes(nodeData.key)}
      iconType={iconType}
      onTreeNodeClickCallback={onClickCallback}
    />
  }, [isModalOpen, expandedKeys, treeNodeId, iconType])
  return (<>
    <Summary />
    <Card title={title} headStyle={{ padding: '4px 8px' }} style={{ minHeight: 700 }}>
      <Tree
        onSelect={onSelect}
        rootClassName="min__tree"
        titleRender={titleRender}
        selectedKeys={selectedKeys}
        expandedKeys={expandedKeys}
        onExpand={onExpand as any}
        treeData={treeData}
      />
    </Card>
    {/* 菜单栏 新增目录 过滤 新增数据源 对话框 */}
    {isModalOpen && < ModalHoc
      iconType={iconType}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      setIconType={setIconType}
      submit={submit}
    />}
  </>
  );
}

export default memo(DTree);
