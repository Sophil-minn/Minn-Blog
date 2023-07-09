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