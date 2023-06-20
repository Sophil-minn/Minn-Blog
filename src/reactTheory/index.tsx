import { Card, Col, Row, Skeleton } from 'antd';
import './index.scss';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import DirectoryTree from '../components/DirectoryTree';
import { breadCrumbItems } from './config';
import Breadcrumb from '../components/Breadcrumb';
import useReactTheoryData from './hooks/useReactTheoryData';
import Introductions from './introductions';
import { ReactTheoryProps } from './types';
import Loading from '../components/Loading';

export default function ReactTheory(props: any) {
  // const { menuData, contentData } = props;
  const navigate = useNavigate();
  // const params = useParams();
  // console.log('params: ', params);
  const { treeData = [], anchorItems, contentData, contentList = [], loading } = useReactTheoryData('descriptionUI');
  // console.log('contentList: ', contentList);
  // console.log('contentData: ', contentData);
  const onSelect = (keys: any, info: any) => {
    // console.log('info: ', info);
    const { node } = info;
    navigate(node.path);
  };

  return (
    <>
      <Breadcrumb items={breadCrumbItems} />
      <div className='react-theory-container-root'>
        <Loading loading={loading}>
          <Row gutter={8} wrap={false}>
            <Col flex="320px">
              <DirectoryTree treeData={treeData} onSelect={onSelect} />
            </Col>
            <Col flex="auto">
              <Card bordered={false} bodyStyle={{ minHeight: 700 }}>
                <Introductions dataList={contentData || contentList} anchorItems={anchorItems} />
              </Card>
            </Col>
          </Row>
        </Loading>
      </div>
    </>
  )
}
