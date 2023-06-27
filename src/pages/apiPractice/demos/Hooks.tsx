import { Col, Row, Spin, Typography } from 'antd';
import CallbackInfo from './Callback/CallbackInfo'
import ContextInfo from './Context/ContextInfo'
import Anchor from '../Anchor';

export default function Hooks() {
  return (
    <Row wrap={false}>
      <Col flex="auto">
        <div>
          <CallbackInfo />
          <ContextInfo />
        </div>
      </Col>
      <Col flex="260px"><Anchor /></Col>
    </Row>
  )
}
