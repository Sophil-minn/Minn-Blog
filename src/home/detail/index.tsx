import { Outlet, useParams } from 'react-router-dom'
import "../common.scss";
import Title from '../../components/Title';

export default function Index() {
  // 获取URL中携带过来的params参数
  let { id } = useParams();
  console.log(id, 999);
  return (
    <div className='minn__container'>
       {id}
      <Title level={4}>示例详情</Title>
      <Outlet />
    </div>
  )
}
