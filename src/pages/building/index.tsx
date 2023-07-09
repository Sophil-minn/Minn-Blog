import { items } from './config';
import withMenu from '../../hoc/withMenu';
import { Outlet, useOutlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './index.scss';
import Webpack from './Webpack';
import Vite from './Vite';
import Rollup from './Rollup';

export default function Building() {
  const outlet = useOutlet();
  const { id } = useParams() as { id: string };
  let component = (<>
    <Webpack />
    <Vite />
    <Rollup />
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
