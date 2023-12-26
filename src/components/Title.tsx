import { Typography } from 'antd';

const { Title } = Typography;


export default function index(props: Record<string, string | number>) {
  return (
    <Title {...props} >{props.children}</Title>
  )
}
