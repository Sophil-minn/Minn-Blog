import { Dropdown, MenuProps, Typography } from 'antd'
import { NavInfoProps } from '../../types';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import classNames from 'classnames';
import { memo, useMemo } from 'react';

const { Text } = Typography;

function DropdownNav(props: { navigationItem: NavInfoProps }) {
  const { navigationItem } = props;
  const { title, path = '', list = [] } = navigationItem || {};
  const navigate = useNavigate();

  const items: MenuProps['items'] = useMemo(() => list.map(v => {
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
  }), [navigationItem]);

  return (
    <Dropdown menu={{ items }} placement="bottom" arrow>
      <Button onClick={() => navigate(path)}>{title}</Button>
    </Dropdown>
  )
}


export default memo(DropdownNav);
