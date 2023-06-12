import { Affix, Anchor, Col, Row } from 'antd';
import React, { useContext } from 'react'
import { GlobalContext } from '../../App';

export default function InfoContent(props: any) {
  const { contentData } = props;
  const { targetOffset } = useContext(GlobalContext);
  console.log('contentData: ', contentData);
  return (
    <Row>
      <Col span={22}>
        <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.02)' }}>1</div>
        <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }} >2</div>
        <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }} >3</div>
      </Col>
      <Col span={2}>
        <Affix offsetTop={targetOffset}>
          <Anchor
            targetOffset={targetOffset}
            items={[
              {
                key: 'part-1',
                href: '#part-1',
                title: 'Part 1',
              },
              {
                key: 'part-2',
                href: '#part-2',
                title: 'Part 2',
              },
              {
                key: 'part-3',
                href: '#part-3',
                title: 'Part 3',
              },
            ]}
          />
        </Affix>
      </Col>
    </Row >
  )
}
