import { Card, Col, Row } from 'antd';
import './index.scss';
import MenuTree from './MenuTree';
import InfoContent from './InfoContent';
import DirectoryTree from '../../components/DirectoryTree';

export default function index(props: any) {
  const { menuData, contentData } = props;
  return (
    <div className='info-container-root'>
      <Row gutter={8}>
        <Col flex="280px">
          <Card bordered={false} bodyStyle={{ minHeight: 700 }}>
            <MenuTree menuData={menuData} />
            <DirectoryTree />
          </Card>
        </Col>
        <Col flex="auto">
          <Card bordered={false} bodyStyle={{ minHeight: 700 }}>
            <InfoContent contentData={contentData} />
          </Card>
        </Col>
      </Row>
    </div>
  )
}
