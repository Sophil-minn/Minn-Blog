import React from 'react'
import DirectoryTree from '../../../components/DirectoryTree';
import { Card } from 'antd';

export default function ComponentSettleDown() {
  // const treeData = getTreeData(data);
  return (
    <Card title="高亮按钮和弹窗封装">
      <DirectoryTree treeData={[]} />
    </Card>
  )
}
