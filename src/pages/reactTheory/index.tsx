import { Affix, Anchor, Card, Col, Row } from 'antd';
import './index.scss';
import DirectoryTree from '../../components/DirectoryTree';
import { breadCrumbItems } from './config';
import Breadcrumb from '../../components/Breadcrumb';
import useReactTheoryData from './hooks/useReactTheoryData';
import Introductions from './introductions';
import Loading from '../../components/Loading';
import { GlobalContext } from '../../App';
import { useContext } from 'react';

export default function ReactTheory(props: any) {

  const { treeData = [], anchorItems, contentData, contentList = [], loading } = useReactTheoryData('descriptionUI');
  const { targetOffset } = useContext(GlobalContext);

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
                <Row wrap={false} gutter={16} >
                  <Col flex="auto">
                    <Introductions dataList={contentData || contentList} anchorItems={anchorItems} />
                  </Col>
                  <Col flex="200px">
                    <Affix offsetTop={targetOffset}>
                      <Anchor
                        affix={false}
                        targetOffset={targetOffset}
                        items={anchorItems}
                        style={{ maxHeight: 700, overflow: 'auto' }}
                      />
                    </Affix>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Loading>
      </div>
    </>
  )
}
