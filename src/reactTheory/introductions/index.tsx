import { Affix, Anchor, Col, Divider, Row, Typography } from 'antd';
import classNames from 'classnames';
import './index.scss';
import { ReactTheoryProps } from '../types';
import Introduction from './Introduction';
import { GlobalContext } from '../../App';
import { useContext } from 'react';

const { Title, Paragraph } = Typography;

const cls = classNames({
  'min-introductions': true
});

const Introductions = (props: { dataList: ReactTheoryProps[], anchorItems: any }) => {
  // console.log('data: 2222', props.dataList);
  const { dataList } = props;

  return (<>
    {dataList?.map(data => {
      const { questionList = [], h2, id, summary } = data || {};
      return data && (

        <div className={cls} key={id}>
          {id !== 'descriptionUI' && <Divider />}
          <Title level={2} className='title-2' id={id}>{h2}</Title>
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
