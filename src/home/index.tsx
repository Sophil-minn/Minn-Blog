import { Table } from 'antd';
import "./common.scss";
import { columns } from './config';
import { data } from './data';
import { Typography } from 'antd';

const { Title } = Typography;

export default function index() {
  return (
    <div className='minn__container'>
      <Title level={3}>代码示例</Title>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}
