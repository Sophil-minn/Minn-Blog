import { Col, Row, Spin, Typography } from 'antd';
// import Anchor from './Anchor';
import { Suspense, lazy, useEffect, useState } from 'react';
import Troubleshooting from './Troubleshooting';


const Reference = lazy(() => import('./Reference'));
const Usage = lazy(() => import('./Usage'));

const { Title, Paragraph } = Typography;

export default function CallbackInfo() {

  return (
    <>
      <Reference />
      <Usage />
      <Troubleshooting />
      <Title level={3}> 总结: </Title>
      <Paragraph>
        关于useCallback何时使用问题，其实主要把握一个点就行：useCallback的功能就是缓存函数定义，如果你不希望函数由于重新创建产生新的定义，而导致多余渲染或者不必要重复执行，那就可以用useCallback进行缓存。
      </Paragraph>
    </>

  )
}
