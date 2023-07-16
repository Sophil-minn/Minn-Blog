import React from 'react'
import DirectoryTree from '../../../components/DirectoryTree';
import { Card, Typography } from 'antd';
import { getTreeData } from '../../react/reactTheory/util';
import useData from '../hooks/useData';

const { Title, Paragraph, Text } = Typography;

export default function ComponentSettleDown() {
  const { data, loading } = useData();
  const treeData = getTreeData(data);
  return (
    <>
      <Title level={3}>组件沉淀</Title>
      <Card title="组件抽象提取封装： 按钮、弹窗、表单封装示例">
        <DirectoryTree treeData={treeData} />
      </Card>
    </>
  )
}
