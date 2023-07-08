import { items } from './config';
import withMenu from '../../hoc/withMenu';
import { Outlet, useOutlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './index.scss';
import LibaryDev from './LibaryDev';
import DevEnviroment from './DevEnviroment';
import ComponentEnginering from './ComponentEnginering';
import ComponentTheory from './ComponentTheory';
import ComponentSettleDown from './ComponentSettleDown';

export default function Engineering() {
  const outlet = useOutlet();
  const { id } = useParams() as { id: string };
  let component = (<>
    <LibaryDev />
    <DevEnviroment />
    <ComponentEnginering />
    <ComponentTheory />
    <ComponentSettleDown />
  </>)

  if (outlet) {
    component = <Outlet />;
  }

  const EnhancedComponent = withMenu(component);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id])
  return <EnhancedComponent items={items} id={id} defaultOpenKeys={['engineering']} />;
}
