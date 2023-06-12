import { Card, Col, Row } from 'antd';
import './index.scss';
// import MenuTree from './MenuTree';
import DirectoryTree from '../components/DirectoryTree';
import { breadCrumbItems } from './config';
import Breadcrumb from '../components/Breadcrumb';

export default function index(props: any) {
  const { menuData, contentData } = props;
  return (
    <>
      <Breadcrumb items={breadCrumbItems} />
      <div className='react-theory-container-root'>
        <Row gutter={8}>
          <Col flex="280px">
            <DirectoryTree />
          </Col>
          <Col flex="auto">
            <Card bordered={false} bodyStyle={{ minHeight: 700 }}>
              {/* <InfoContent contentData={contentData} /> */}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
