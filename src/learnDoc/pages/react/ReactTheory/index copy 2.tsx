import { Card } from 'antd';
import { breadCrumbItems } from './config';
import Breadcrumb from '../../../components/Breadcrumb';
import Introductions from './Introductions';
import Loading from '../../../components/Loading';
import SpinLoading from '../../../components/common/SpinLoading';
import { withAnchor } from '../../../hoc/withAnchor';
import './index.scss';
import { getMenuItems, getTheoryData } from './util';
import useReactTheoryData from './hooks/useReactTheoryData';
import { useParams } from 'react-router-dom';
import MenuLabel from '../../../components/MenuLabel';
import withMenu from '../../../hoc/withMenu';
import { useMemo } from 'react';

export default function ReactTheory(props: any) {
  const { questionId = '' } = useParams();
  const { data, loading } = useReactTheoryData();

  const menuItems = useMemo(() => getMenuItems(data)?.map((v: { id: string; title: string; }) => ({
    ...v,
    label: <MenuLabel keypath={v.id} path={`/react/react-theory/${v.id}`} label={v.title} />
  })), [data]);


  const WithMenu = useMemo(() => withMenu(<Introductions data={data} questionId={questionId} /> as React.ReactNode), [data, questionId]);

  console.log("🚀 ~ file: index.tsx:29 ~ ReactTheory ~ WithMenu:", 11111)
  return (
    <>
      <Breadcrumb items={breadCrumbItems} />
      <div className='react-theory-container-root'>
        <SpinLoading>
          <WithMenu items={menuItems as any} id={questionId} />
          {/* <Card bordered={false} bodyStyle={{ minHeight: 700 }}>
            <Loading loading={loading}>
              <WithAnchor anchorItems={anchorItems} />
            </Loading>
          </Card> */}
        </SpinLoading>
      </div>
    </>
  )
}
