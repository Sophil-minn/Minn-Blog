import React, { useContext, useState } from 'react';
import classNames from 'classnames';

import './index.scss';
import Container from '../../block/container';
import { Affix, Card, Col, Menu, MenuProps, Row } from 'antd';
import { Outlet } from 'react-router-dom';
import { items, rootSubmenuKeys } from './config';
import { GlobalContext } from '../../App';

const cls = classNames({
  'minn-apiPractice': true
});

const ApiPractice = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const { targetOffset } = useContext(GlobalContext) as any;
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
    <Row gutter={8} wrap={false}>
      <Col flex="260px">
        <Affix offsetTop={targetOffset - 26}><Card>
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            items={items}
            onClick={onMenuItemClick}
          />
        </Card>
        </Affix>
      </Col>
      <Col flex="auto">
        <Card><Outlet /></Card>
      </Col>
    </Row>
  </Container >
}

export default ApiPractice; 
