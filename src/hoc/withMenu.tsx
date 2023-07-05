import classNames from 'classnames';
import { Affix, Card, Col, Menu, Row } from 'antd';
import { Outlet } from 'react-router-dom';
import Container from '../block/container';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { Key } from 'antd/es/table/interface';

interface MenuTypes {
  items?: MenuItemType[];
  defaultOpenKeys: Key[];
  id: string;
}

const cls = classNames({
  'minn-container': true
});

const withMenu = (component: React.ReactNode) => {
  return (props: MenuTypes) => (<Container cls={cls}>
    <Row gutter={16} wrap={false} justify="space-between">
      <Affix offsetTop={74}>
        <Col flex="320px">
          <Card style={{ minHeight: 999 }}>

            <Menu
              mode="inline"
              defaultOpenKeys={['engineering']}
              style={{ width: 256 }}
              items={props.items}
            />

          </Card>
        </Col>
      </Affix>
      <Col flex="auto">
        <Card style={{ minHeight: 999 }}>{props.id ? <Outlet /> : component} </Card>
      </Col>
    </Row>
  </Container>);
}

export default withMenu; 
