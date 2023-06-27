import { Col, Row, Typography } from 'antd';
import { lazy } from 'react'
import ContextInfo from './ContextInfo';
import AffixAncho from '../../../../components/AffixAncho';
import { contextAnchorItems } from './config';

export default function Context() {
  return (
    <Row wrap={false}>
      <Col flex="auto">
        <ContextInfo />
      </Col>
      <Col flex="280px">
        <AffixAncho anchorItems={contextAnchorItems} />
      </Col>
    </Row>
  )
}
