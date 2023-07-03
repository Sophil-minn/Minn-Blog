import { FC } from 'react';
import { Card, Typography } from 'antd';
import { lazy } from 'react'
// import { code1, } from './code';

const SimpleCode = lazy(() => import('../../../../components/SimpleCode'));
const { Title, Paragraph, Text } = Typography;

export default function StateInfo() {
  return (
    <>
      {/* <Title level={3} id="useState">useState</Title>
      <Paragraph>useMemo 是一个 React Hook，它在每次重新渲染的时候能够缓存计算的结果</Paragraph>
      <SimpleCode value="const cachedValue = useMemo(calculateValue, dependencies)" /> */}
    </>
  )
}


