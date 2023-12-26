export const code1 = `
import { items } from './config';
import withMenu from '../../hoc/withMenu';
import { Outlet, useOutlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './index.scss';
import DesignRule from './DesignRule';
import UncommonPatterns from './UncommonPatterns';
import CommonPatterns from './CommonPatterns';
import LawOfDemeter from './LawOfDemeter';

export default function DesignPattern() {
  const outlet = useOutlet();
  const { id } = useParams() as { id: string };
  let component = (<>
    <LawOfDemeter />
    <DesignRule />
    <CommonPatterns />
    <UncommonPatterns />
  </>)
  if (outlet) {
    component = <Outlet />;
  }
  const EnhancedComponent = withMenu(component);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id])
  return <EnhancedComponent items={items} id={id} />;
}
`;

export const code2 = `
import { items } from './config';
import withMenu from '../../hoc/withMenu';
import './index.scss';
import DesignPattern from './DesignPattern';

export default function index() {
  const EnhancedComponent = withMenu(<DesignPattern />);
  return <EnhancedComponent items={items} />;
}
`;

export const code3 = `
import classNames from 'classnames';
import { Affix, Card, Col, Menu, Row } from 'antd';
import Container from '../block/container';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { Key } from 'antd/es/table/interface';
import { ReactNode } from 'react';

interface MenuTypes {
  items: MenuItemType[];
  defaultOpenKeys?: Key[];
  id?: string | undefined;
}
const cls = classNames({
  'minn-container': true
});
const withMenu = (component: ReactNode) => {
  return (props: MenuTypes) => (<Container cls={cls}>
    <Row gutter={8} wrap={false} justify="space-between">
      <Col flex="320px">
        <Affix offsetTop={70}>
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
export default withMenu; `;
