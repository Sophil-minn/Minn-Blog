import { items } from './config';
import withMenu from '../../hoc/withMenu';
import { Outlet, useOutlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './index.scss';
import Algorithm from './Algorithm';
import DataStructure from './DataStructure';

export default function Building() {
  const outlet = useOutlet();
  const { id } = useParams() as { id: string };
  let component = (<>
    <DataStructure />
    <Algorithm />
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


