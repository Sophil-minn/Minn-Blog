import React from 'react'
import DirectoryTree from '../../../components/DirectoryTree';
import { Card } from 'antd';
import { Outlet, useOutlet } from 'react-router-dom';

export default function CommonPatterns() {
  // const treeData = getTreeData(data);
  const outlet = useOutlet();
  return (
    <Card title="">
      {outlet ? <Outlet /> : <span>常用设计模式</span>}
    </Card>
  )
}
