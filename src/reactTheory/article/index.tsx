import { Typography } from 'antd';
import classNames from 'classnames';
import './index.scss';
import { ReactTheoryProps } from '../types';

const { Title, Paragraph } = Typography;

const cls = classNames({
    'minn-article': true
  });

const Article = (props: { data: ReactTheoryProps }) => {
  const { data } = props;
  return <div className={cls} >
    <Title level={2}>{data.h2}</Title>
    <Paragraph>{data.summary}</Paragraph>
  </div>
}

export default Article ;