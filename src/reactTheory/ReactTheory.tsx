import { Card, Col, Row, Skeleton } from 'antd';
import './index.scss';
// import MenuTree from './MenuTree';
import DirectoryTree from '../components/DirectoryTree';
import { breadCrumbItems } from './config';
import Breadcrumb from '../components/Breadcrumb';
import useReactTheoryData from './hooks/useReactTheoryData';
import Article from './article';
import { ReactTheoryProps } from './types';

export default function ReactTheory(props: any) {
  const { menuData, contentData } = props;
  const { data, loading} = useReactTheoryData('descriptionUI');
  console.log('data: ', data);
  return (
    <>
      <Breadcrumb items={breadCrumbItems} />
      <div className='react-theory-container-root'>
        <Row gutter={8} wrap={false}>
          <Col flex="280px">
            <DirectoryTree />
          </Col>
          <Col flex="auto">
            <Card bordered={false} bodyStyle={{ minHeight: 700 }}>
              {loading ? <Skeleton active /> : <Article data={data as ReactTheoryProps} />}
              {/* <InfoContent contentData={contentData} /> */}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
