import { useParams } from 'react-router-dom'
import "./common.scss";
import Title from '../components/Title';
import { breadItems, detailMap } from './config';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

export default function Detail() {
  // 获取URL中携带过来的params参数
  let { id } = useParams();
  return (
    <>
      <div className='minn__container'>
        <Breadcrumb items={breadItems} style={{ marginBottom: 16 }} />
        <Title level={4}>{`${id}示例详情`}</Title>
        {id ? detailMap[id] : null}
      </div>
    </>
  )
}
