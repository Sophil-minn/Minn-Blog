import React from 'react'
import DirectoryTree from '../../../components/DirectoryTree';
import { Card } from 'antd';
import { Outlet } from 'react-router-dom';

export default function c() {
  // const treeData = getTreeData(data);
  return (
    <Card title="">
      常用设计模式
      <Outlet />
    </Card>
  )
}
