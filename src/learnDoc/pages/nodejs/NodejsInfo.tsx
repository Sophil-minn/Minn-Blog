import { Typography } from 'antd';
import { lazy } from 'react'
import { code1 } from './code';

const SimpleCode = lazy(() => import('../../components/SimpleCode'));
const { Title, Paragraph, Text } = Typography;

export default function NodejsInfo() {
  return (
    <>
      <Title level={3} id="useNodejs">useNodejs</Title>
      <Paragraph></Paragraph>
      <SimpleCode value="useNodejs(,)" />
      <Paragraph></Paragraph>

    </>
  )
}
