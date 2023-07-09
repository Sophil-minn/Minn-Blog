import { Typography } from 'antd';
import classNames from 'classnames';
import './index.scss';
import { ReactTheoryProps } from '../types';
import Introduction from './Introduction';
import { getTheoryData } from '../util';
import { withAnchor } from '../../../../hoc/withAnchor';
import { memo } from 'react';

const { Title, Paragraph } = Typography;

const cls = classNames({
  'min-introductions': true
});

const Introductions = (props: { data: Record<string, ReactTheoryProps>, questionId: string }) => {
  const { data, questionId } = props;
  const { anchorItems, contentList = [] } = getTheoryData(data, questionId);

  const comp = () => (<>
    {contentList?.map(data => {
      const { questionList = [], h2, id, summary } = data || {};
      return data && (
        <div className={cls} key={id} >
          <Title level={2} className='title-2' id={id} > {h2}</Title>
          <Paragraph>{summary}</Paragraph>
          {
            questionList.map((v, i) => (<Introduction data={v} key={v.id} index={i} />))
          }
        </div>
      );
    })}
  </>);
  const WithAnchor = withAnchor(comp);

  return <WithAnchor anchorItems={anchorItems} />

}



export default memo(Introductions);
