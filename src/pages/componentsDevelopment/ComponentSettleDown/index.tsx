import React from 'react'
import DirectoryTree from '../../../components/DirectoryTree';
import { Card } from 'antd';
import { getTreeData } from '../../react/ReactTheory/util';
import useData from '../hooks/useData';

export default function ComponentSettleDown() {
  const { data, loading } = useData();
  const treeData = getTreeData(data);
  return (
    <Card title="组件抽象提取封装： 按钮、弹窗、表单封装示例">
      <DirectoryTree treeData={treeData} />
    </Card>
  )
}
