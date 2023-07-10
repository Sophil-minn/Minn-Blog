import './index.scss';
import { Outlet, useParams } from 'react-router-dom';
import Optimization1 from './demos/Optimization1';
import Optimization2 from './demos/Optimization2';

const PerformanceOptimization = () => {
  const { id } = useParams() as { id: string };
  const comp = !id ? (
    <>
      <Optimization1 />
      <Optimization2 />
    </>
  ) : <Outlet />;
  return comp;
}

export default PerformanceOptimization; 
