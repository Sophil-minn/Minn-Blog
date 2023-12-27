import { Card, Spin } from 'antd'
import DirectoryTree from './DirectoryTree'
import useData from '../../learnDoc/pages/componentsDevelopment/hooks/useData';
import { getTreeData } from '../../learnDoc/pages/react/ReactTheory/util';

export default function Demo1() {
  const { data, loading } = useData();
  const treeData = getTreeData(data);
  return (
    <Spin spinning={loading}>
      <Card title="组件抽象提取封装： 按钮、弹窗、表单封装示例">
        <DirectoryTree treeData={treeData} />
      </Card>
    </Spin>
  )
}
