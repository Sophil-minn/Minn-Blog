import { Dropdown, MenuProps, Typography } from 'antd'
import { NavInfoProps } from '../../types';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const { Text } = Typography;

export default function DropdownNav(props: { navigationItem: NavInfoProps, title: string }) {
  const { navigationItem, title } = props;
  const list: MenuProps['items'] = navigationItem.list.map(v => ({
    key: v.title,
    label: (<Link to={v.path}>
      <Text type="secondary" className='dropdow-nav__list__item' strong>{v.title}</Text>
    </Link>)
  }));

  return (
    <Dropdown menu={{ items: list }} placement="bottom" arrow>
      <Button>{title}</Button>
    </Dropdown>
  )
}
