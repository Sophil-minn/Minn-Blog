import { Card, Col, Row, Skeleton } from 'antd';
import './index.scss';
import { useParams, useLocation } from 'react-router-dom';
import DirectoryTree from '../components/DirectoryTree';
import { breadCrumbItems } from './config';
import Breadcrumb from '../components/Breadcrumb';
import useReactTheoryData from './hooks/useReactTheoryData';
import Introductions from './introductions';
import { ReactTheoryProps } from './types';
import Loading from '../components/Loading';

export default function ReactTheory(props: any) {
  // const { menuData, contentData } = props;
  const params = useParams();
  console.log('params: ', params);
  const { treeData = [], contentData = {}, contentList = [], loading } = useReactTheoryData('descriptionUI');
  console.log('contentList: ', contentList);


  return (
    <>
      <Breadcrumb items={breadCrumbItems} />
      <div className='react-theory-container-root'>
        <Loading loading={loading}>
          <Row gutter={8} wrap={false}>
            <Col flex="320px">
              <DirectoryTree treeData={treeData} />
            </Col>
            <Col flex="auto">
              <Card bordered={false} bodyStyle={{ minHeight: 700 }}>
                <Introductions data={contentData as ReactTheoryProps} />
              </Card>
            </Col>
          </Row>
        </Loading>
      </div>
    </>
  )
}
