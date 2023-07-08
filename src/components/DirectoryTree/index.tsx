import { Affix, Card, Col, Input, Row, Tree, Typography, message } from "antd";
import {
  PlusOutlined,
  FilterOutlined,
  PlusSquareOutlined,
  FolderOutlined,
  PlusCircleOutlined,
  PlusCircleFilled,
  FolderFilled,
  PlusSquareFilled,
  FilterFilled,
  FileWordOutlined,
  FileWordFilled,
  FolderOpenFilled,
} from "@ant-design/icons";
import { useCallback, useContext, useState, memo } from "react";
import { GlobalContext } from "../../App";
import TreeNode from "./TreeNode";
import './index.scss';
import ButtonHoc from "./ButtonHoc";
import { ICON_ADD_TYPE, ICON_FILTER_TYPE } from "./const";
import ModalHoc from "./ModalHoc";

const { Title, Paragraph } = Typography;

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
        <ButtonHoc
          iconType={ICON_ADD_TYPE}
          onClickCallback={() => onClickCallback?.(ICON_ADD_TYPE)}
          active={isModalOpen && iconType === ICON_ADD_TYPE}
        />
        <ButtonHoc
          iconType={ICON_FILTER_TYPE}
          onClickCallback={() => onClickCallback?.(ICON_FILTER_TYPE)}
          active={isModalOpen && iconType === ICON_FILTER_TYPE}
        />
      </Col>
    </Row>
  );

  const initIcons = (<><PlusOutlined /><PlusCircleOutlined /><PlusSquareOutlined /><FilterOutlined /><FolderOutlined /></>);
  const activeIcons = (<><PlusOutlined style={{ color: '#1677ff' }} /><PlusCircleFilled style={{ color: '#1677ff' }} /><PlusCircleFilled style={{ color: '#1677ff' }} /><FilterFilled style={{ color: '#1677ff' }} /><FolderFilled style={{ color: '#1677ff' }} /></>);
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
    <Title level={5}>一、按钮提取封装</Title>
    <Paragraph>
      {initIcons}
      被点击后高亮为,{activeIcons}
      他们被点亮的逻辑一样， 提取封装在ButtonHoc中，
    </Paragraph>
    <Title level={5}>二、弹窗封装</Title>
    <Paragraph>
      点击{initIcons}后，出现的各自对应的弹窗除了 标题和 内容不同，其他逻辑都一样， 所以可以把弹窗UI相关的部分封装在ModalHoc里，
      根据不同的按钮类型显示不同内容的逻辑封装在hooks里，
    </Paragraph>
    <Title level={5}>三、form表单封装</Title>
    <Paragraph>
      点击<PlusOutlined />和<FilterOutlined />后，出现的弹窗弹窗里的form表单，
      再次进行抽象封装为FormByConfig，这样可以根据配置去拓展，不需要每次写大量重复的代码，FormByConfig也可以复制 到其他地方用只需要改改配置项即可
    </Paragraph>
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
