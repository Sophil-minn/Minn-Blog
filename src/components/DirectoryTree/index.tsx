import { Affix, Card, Col, Input, Row, Tree, message } from "antd";
import { useCallback, useContext, useState, memo } from "react";
import { GlobalContext } from "../../App";
import TreeNode from "./TreeNode";
import './index.scss';
import ButtonHoc from "./ButtonHoc";
import { ICON_ADD_TYPE, ICON_FILTER_TYPE } from "./const";
import ModalHoc from "./ModalHoc";
import { useNavigate } from "react-router-dom";

const DTree = ({ treeData }: any) => {
  const { targetOffset } = useContext(GlobalContext);
  const [type, setType] = useState<string>();
  const [treeNodeId, setTreeNodeId] = useState<string>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const navigate = useNavigate();
  const onClickCallback = async (type: string, id?: string) => {
    console.log('id: ', id);
    setTreeNodeId(id);
    await setType(type);
    setIsModalOpen(true);
  }

  const submit = (values: any) => {
    message.info(`提交的数据: , ${JSON.stringify(values)}`);
    setIsModalOpen(false);
  }


  const onSelect = (keys: any, info: any) => {
    const { node } = info;
    console.log('node: ', node);
    navigate(node.path);
  };

  const onExpand = useCallback((keys: string[]) => {

    setSelectedKeys(keys)
  }, [])

  const title = (
    <Row gutter={8} wrap={false} justify={'space-between'} align={"bottom"}>
      <Col flex="auto">
        <Input size="small" placeholder="请输入" style={{ width: '100%' }} />
      </Col>
      <Col flex="60px">
        <ButtonHoc
          iconType={ICON_ADD_TYPE}
          onClickCallback={() => onClickCallback?.(ICON_ADD_TYPE)}
          active={isModalOpen && type === ICON_ADD_TYPE}
        />
        <ButtonHoc
          iconType={ICON_FILTER_TYPE}
          onClickCallback={() => onClickCallback?.(ICON_FILTER_TYPE)}
          active={isModalOpen && type === ICON_FILTER_TYPE}
        />
      </Col>
    </Row>
  );
  const titleRender = useCallback((nodeData: any) => {
    // console.log('nodeData: ', nodeData);
    return <TreeNode {...nodeData} treeNodeIdActive={isModalOpen && treeNodeId} isExpand={selectedKeys.includes(nodeData.key)} iconType={type} onTreeNodeClickCallback={onClickCallback} />
  }, [isModalOpen, selectedKeys, treeNodeId, type])
  return (
    <>
      <Affix offsetTop={targetOffset ? targetOffset - 24 : 0}>
        <Card title={title} headStyle={{ padding: '4px 8px' }} style={{ minHeight: 700 }}>
          <Tree
            multiple
            // defaultExpandAll
            onSelect={onSelect}
            rootClassName="min__tree"
            titleRender={titleRender}
            selectedKeys={selectedKeys}
            onExpand={onExpand as any}
            treeData={treeData}
          />
        </Card>
      </Affix>
      {/* 菜单栏 新增目录 过滤 新增数据源 对话框 */}
      {isModalOpen && < ModalHoc
        type={type}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setType={setType}
        submit={submit}
      />}
    </>
  );
};

export default memo(DTree);
