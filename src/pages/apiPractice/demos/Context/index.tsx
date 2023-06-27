import { Col, Row, Typography } from 'antd';
import { lazy } from 'react'
import ContextInfo from './ContextInfo';
import { contextAnchorItems } from './config';
import AffixAnchor from '../../../../components/AffixAnchor';

export default function Context() {
  return (
    <Row wrap={false}>
      <Col flex="auto">
        <ContextInfo />
      </Col>
      <Col flex="280px">
        <AffixAnchor anchorItems={contextAnchorItems} />
      </Col>
    </Row>
  )
}
