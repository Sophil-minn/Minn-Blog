import classNames from 'classnames';
import { Affix, Card, Col, Menu, Row } from 'antd';
import Container from '../block/container';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { Key } from 'antd/es/table/interface';

interface MenuTypes {
  items: MenuItemType[];
  defaultOpenKeys?: Key[];
  id?: string | undefined;
}

const cls = classNames({
  'minn-container': true
});

const withMenu = (component: React.ReactNode) => {
  return (props: MenuTypes) => (<Container cls={cls}>
    <Row gutter={8} wrap={false} justify="space-between">
      <Col flex="320px">
        <Affix offsetTop={70} target={() => window}>
          <Card>
            <Menu
              mode="inline"
              defaultOpenKeys={['engineering']}
              style={{ width: 256 }}
              items={props.items}
              defaultSelectedKeys={[props.id as string]}
            />
          </Card>
        </Affix>
      </Col>
      <Col flex="auto">
        <Card key={props.id}>{component}</Card>
      </Col>
    </Row>
  </Container>);
}

export default withMenu; 
