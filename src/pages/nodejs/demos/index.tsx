import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import NotFound from '../../NotFound';

export default function NodejsDemo() {
  const { id } = useParams() as unknown as { id: string };
  // const Comp = id ? componentsMap?.[id] || NotFound;
  const Comp = NotFound;
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id])
  return <Comp />;
}
