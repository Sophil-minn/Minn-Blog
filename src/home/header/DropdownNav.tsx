import { Dropdown, MenuProps, Typography } from 'antd'
import { NavInfoProps } from '../../types';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import classNames from 'classnames';

const { Text } = Typography;

export default function DropdownNav(props: { navigationItem: NavInfoProps, title?: string, disabled?: boolean }) {
  const { navigationItem, title } = props;



  const list: MenuProps['items'] = navigationItem.list.map(v => {
    const { disabled = true } = v;
    const cls = classNames({
      'dropdow-nav__list__item': true,
      'disabled': disabled
    });
    return {
      key: v.title,
      disabled: disabled,
      label: v.path ? (<Link to={v.path}>
        <Text type="secondary" className={cls} disabled={disabled} strong>{v.title}</Text>
      </Link>) : <Text type="secondary" className={cls} disabled={disabled} strong>{v.title}</Text>
    }
  });

  return (
    <Dropdown menu={{ items: list }} placement="bottom" arrow>
      <Button>{title}</Button>
    </Dropdown>
  )
}
