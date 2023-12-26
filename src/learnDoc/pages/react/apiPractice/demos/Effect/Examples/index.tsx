import { Card, Typography } from 'antd';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';
import Demo5 from './Demo5';

const { Title, Paragraph, Text } = Typography;

export default function index() {
  return (
    <>
      <Title level={4}>连接到外部系统的示例</Title>
      <Demo1 />
      <Demo2 />
      <Demo3 />
      <Demo4 />
      <Demo5 />
    </>
  )
}
