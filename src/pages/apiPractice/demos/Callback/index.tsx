import { Col, Row, Typography } from 'antd';
// import Anchor from './Anchor';
import { lazy } from 'react';
import CallbackInfo from './CallbackInfo';
import AffixAncho from '../../../../components/AffixAnchor';
import { anchorItems } from './config';

export default function Callback() {

  return (
    <Row wrap={false}>
      <Col flex="auto">
        <CallbackInfo />
      </Col>
      <Col flex="260px"><AffixAncho anchorItems={anchorItems} /></Col>
    </Row>
  )
}
