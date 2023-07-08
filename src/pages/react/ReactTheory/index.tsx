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
import { MenuItemType } from 'antd/es/menu/hooks/useItems';

export default function ReactTheory(props: any) {
  const { questionId = '' } = useParams();
  const { data, loading } = useReactTheoryData(questionId);
  const { anchorItems, contentData, contentList = [] } = getTheoryData(data, questionId);
  console.log("🚀 ~ file: index.tsx:20 ~ ReactTheory ~ anchorItems:", anchorItems)

  const menuItems = getMenuItems(data)?.map(v => ({
    ...v,
    label: <MenuLabel keypath={v.id} path={`/react/react-theory/${v.id}`} label={v.title} />
  }));
  const dataList = questionId ? contentData : contentList;

  const WithAnchor = withAnchor(() => <Introductions dataList={dataList} anchorItems={anchorItems} />);
  // const WithMenu = withMenu(<WithAnchor anchorItems={anchorItems} /> as React.ReactNode);

  return (
    <>
      <Breadcrumb items={breadCrumbItems} />
      <div className='react-theory-container-root'>
        <SpinLoading>
          {/* <WithMenu items={menuItems} id={questionId} /> */}
          <Card bordered={false} bodyStyle={{ minHeight: 700 }}>
            <Loading loading={loading}>
              <WithAnchor anchorItems={anchorItems} />
            </Loading>
          </Card>
        </SpinLoading>
      </div>
    </>
  )
}
