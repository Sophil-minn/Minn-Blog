import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import WebEngineering from '../WebEngineering';
import NotFound from '../../NotFound';
import { RouteParams } from './types';
import { componentsMap } from './config';


export default function EngineeringDemo() {
  const { id } = useParams() as unknown as RouteParams;
  const Comp = id ? componentsMap?.[id] || NotFound : WebEngineering;
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id])
  return <Comp />;
}
