import { Affix, Card, Col, Menu, Row } from 'antd';
import { breadCrumbItems } from './config';
import Breadcrumb from '../../../components/Breadcrumb';
import Introductions from './Introductions';
import Loading from '../../../components/Loading';
import SpinLoading from '../../../components/common/SpinLoading';
import './index.scss';
import { getMenuItems } from './util';
import useReactTheoryData from './hooks/useReactTheoryData';
import { useParams } from 'react-router-dom';
import MenuLabel from '../../../components/MenuLabel';
import { useMemo } from 'react';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';

export default function ReactTheory(props: any) {
  const { questionId = '' } = useParams();
  const { data, loading } = useReactTheoryData();
  const menuItems = useMemo(() => getMenuItems(data)?.map((v: { id: string; title: string; }) => ({
    ...v,
    label: <MenuLabel keypath={v.id} path={`/react/react-theory/${v.id}`} label={v.title} />
  })), [data]);

  return (
    <>
      <Breadcrumb items={breadCrumbItems} />
      <div className='react-theory-container-root'>
        <SpinLoading>
          <Loading loading={loading}>
            <Row gutter={8} wrap={false} justify="space-between">
              <Col flex="320px">
                <Affix offsetTop={70}>
                  <Card>
                    <Menu
                      mode="inline"
                      defaultOpenKeys={['engineering']}
                      style={{ width: 256 }}
                      items={menuItems as any}
                      defaultSelectedKeys={[questionId as string]}
                    />
                  </Card>
                </Affix>
              </Col>
              <Col flex="auto">
                <Card key={props.id}>
                  <Introductions data={data} questionId={questionId} />
                </Card>
              </Col>
            </Row>
          </Loading>
        </SpinLoading>
      </div>
    </>
  )
}
