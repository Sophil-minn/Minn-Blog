import { items } from './config';
import EngineeringDemo from './EngineeringDemo';
import withMenu from '../../hoc/withMenu';
import { useParams } from 'react-router-dom';
import { ReactNode, useEffect } from 'react';
import './index.scss';

const EnhancedComponent = withMenu(<EngineeringDemo />);

export default function Engineering() {
  const { id } = useParams() as { id: string };
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id])
  return <EnhancedComponent items={items} id={id} defaultOpenKeys={['engineering']} />;
}
