import { FC } from 'react';
import { Card, Typography } from 'antd';
import { lazy } from 'react'
// import { code1, } from './code';

const SimpleCode = lazy(() => import('../../../../components/SimpleCode'));
const { Title, Paragraph, Text } = Typography;

export default function RefInfo() {
  return (
    <div>RefInfo</div>
  )
}


