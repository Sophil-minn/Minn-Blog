import { Card, Col, Row, Typography } from 'antd'
const { Title, Paragraph, Text } = Typography;

export default function OverView() {
  return (
    <div className='modularization-overView'>
      <Row justify="center"><Title level={5}>前端模块化规范</Title></Row>
      <Row gutter={8} justify="space-around" align="middle" wrap={false}>
        <Col span={4} className='color6'>
          <Title level={5}>CMD规范</Title>
          <Paragraph className='color'>引用Sea.js</Paragraph>
          <Paragraph className='color'>浏览器</Paragraph>
        </Col>
        <Col span={19} className='color5'>
          <Row justify="center"><Title level={5}>Webpack可识别</Title></Row>
          <Row gutter={16} justify="space-around">
            <Col span={13} className='color4'>
              <Row justify="center"><Title level={5}>UMD规范</Title></Row>
              <Row wrap={false} gutter={6} justify="space-evenly">
                <Col className='color2'>
                  <Title level={5}>AMD规范</Title>
                  <Paragraph className='color'>引用Require.js</Paragraph>
                  <Paragraph className='color'>浏览器</Paragraph>
                </Col>
                <Col className='color2'>
                  <Title level={5}>CommonJs规范</Title>
                  <Paragraph className='color'>原生支持</Paragraph>
                  <Paragraph className='color'>node</Paragraph>
                </Col>
              </Row>
            </Col>
            <Col span={10} className='color3'>
              <Title level={5}>ES Module规范</Title>
              <Paragraph className='color'>支持度不完善</Paragraph>
              <Paragraph className='color'>统一JS全环境</Paragraph>
            </Col>
          </Row>
        </Col>
      </Row>

    </div >
  )
}
