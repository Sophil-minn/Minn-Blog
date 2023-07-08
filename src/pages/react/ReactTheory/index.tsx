import { Card} from 'antd';
import { breadCrumbItems } from './config';
import Breadcrumb from '../../../components/Breadcrumb';
import Introductions from './Introductions';
import Loading from '../../../components/Loading';
import SpinLoading from '../../../components/common/SpinLoading';
import { withAnchor } from '../../../hoc/withAnchor';
import './index.scss';
import { getTheoryData } from './util';
import useReactTheoryData from './hooks/useReactTheoryData';

export default function ReactTheory(props: any) {
  const { data, loading } = useReactTheoryData('descriptionUI');
  const { anchorItems, contentData, contentList = [] } = getTheoryData(data, 'descriptionUI');
  const WithAnchor = withAnchor(() => <Introductions dataList={contentData || contentList} anchorItems={anchorItems} />);

  return (
    <>
      <Breadcrumb items={breadCrumbItems} />
      <div className='react-theory-container-root'>
        <SpinLoading>
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
