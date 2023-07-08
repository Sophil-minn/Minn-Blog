import React, { useContext, useLayoutEffect, useState } from 'react';
import classNames from 'classnames';

import './index.scss';
import Container from '../../../block/container';
import { Affix, Card, Col, Menu, MenuProps, Row } from 'antd';
import { Outlet, useParams } from 'react-router-dom';
import { items, rootSubmenuKeys } from './config';
import { GlobalContext } from '../../../App';
import Hooks from './Hooks';

const cls = classNames({
  'minn-apiPractice': true
});

const ApiPractice = () => {
  const [openKeys, setOpenKeys] = useState(['Hooks']);
  const { pid, id } = useParams() as unknown as { pid: string, id: string };
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
    // console.log("🚀 ~ file: index.tsx:28 ~ onMenuItemClick ~ onMenuItemClick:",)
    // console.log('item, key, keyPath: ', item, key, keyPath);
    if (window.scrollY) {
      window.scrollTo({ top: 0 });
    }
  }

  useLayoutEffect(() => {
    console.log("🚀 111111:",)
    // if (window.scrollY) {
    //   window.scrollTo({ top: 0 });
    // }
  })

  return <Container cls={cls}>
    <Row gutter={8} wrap={false}>
      <Col flex="280px">
        <Affix offsetTop={targetOffset - 26}>
          <Card bodyStyle={{ padding: 0 }}>
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
        <Card>{pid || id ? <Outlet /> : <Hooks />}</Card>
      </Col>
    </Row>
  </Container >
}

export default ApiPractice; 
