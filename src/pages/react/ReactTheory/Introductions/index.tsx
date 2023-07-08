import { Typography } from 'antd';
import classNames from 'classnames';
import './index.scss';
import { ReactTheoryProps } from '../types';
import Introduction from './Introduction';

const { Title, Paragraph } = Typography;

const cls = classNames({
  'min-introductions': true
});

const Introductions = (props: { dataList: ReactTheoryProps[], anchorItems: any }) => {
  const { dataList } = props;

  return (<>
    {dataList?.map(data => {
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

}


export default Introductions;
