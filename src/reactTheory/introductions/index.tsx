import { Typography } from 'antd';
import classNames from 'classnames';
import './index.scss';
import { ReactTheoryProps } from '../types';
import Question from './Question';

const { Title, Paragraph } = Typography;

const cls = classNames({
  'min-introductions': true
});

const Introductions = (props: { data: ReactTheoryProps }) => {
  const { data } = props;
  const { questionList = [], h2, summary } = data || {};
  return <div className={cls} >
    <Title level={2} className='title-2'>{h2}</Title>
    <Paragraph>{summary}</Paragraph>
    {
      questionList.map((v, i) => (<Question data={v} index={i} />))
    }
  </div>
}


export default Introductions;