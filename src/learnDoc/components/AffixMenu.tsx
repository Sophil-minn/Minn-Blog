import { Affix, Card, Menu } from 'antd'
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { Key } from 'react';

export interface MenuTypes {
  items: MenuItemType[];
  defaultOpenKeys?: Key[];
  id?: string | undefined;
}


export default function AffixMenu(props: MenuTypes) {
  return (
    <>
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
    </>
  )
}
