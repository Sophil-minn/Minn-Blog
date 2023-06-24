import React, { useState } from 'react';
import classNames from 'classnames';

import './index.scss';
import Container from '../../block/container';
import { Card, Col, Menu, MenuProps, Row } from 'antd';
import { Outlet } from 'react-router-dom';
import { items, rootSubmenuKeys } from './config';

const cls = classNames({
  'minn-principle': true
});

const ManagingState = () => {
  const [openKeys, setOpenKeys] = useState(['managingState']);
  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const onMenuItemClick = ({ item, key, keyPath }: Record<string, any>) => {
    // console.log('item, key, keyPath: ', item, key, keyPath);

  }


  return <Container cls={cls}>
    <Row gutter={8}>
      <Col flex="260px">
        <Card>
          <Menu
            mode="inline"
            openKeys={openKeys}
            defaultActiveFirst
            onOpenChange={onOpenChange}
            style={{ width: 256 }}
            items={items}
            onClick={onMenuItemClick}
          />
        </Card>
      </Col>
      <Col flex="auto">
        <Card>
          状态管理
          <Outlet />
        </Card>
      </Col>
    </Row>
  </Container >
}

export default ManagingState; 