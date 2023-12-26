import { items } from './config';
import withMenu from '../../hoc/withMenu';
import { Outlet, useOutlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './index.scss';
import DesignRule from './DesignRule';
import UncommonPatterns from './UncommonPatterns';
import CommonPatterns from './CommonPatterns';
import LawOfDemeter from './LawOfDemeter';

let component = (<>
  <LawOfDemeter />
  <DesignRule />
  <CommonPatterns />
  <UncommonPatterns />
</>)

export default function DesignPattern() {
  const outlet = useOutlet();
  const { id } = useParams() as { id: string };
  if (outlet) {
    component = <Outlet />;
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id])


  return component;
}
