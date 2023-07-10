import { items } from './config';
import PerformanceOptimization from './PerformanceOptimization';
import withMenu from '../../hoc/withMenu';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './index.scss';

const EnhancedComponent = withMenu(<PerformanceOptimization />);

export default function Engineering() {
  const { id } = useParams() as { id: string };
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id])
  return <EnhancedComponent items={items} id={id} />;
}
