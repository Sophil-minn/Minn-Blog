import { items } from './config';
import WebEngineering from './WebEngineering';
import withMenu from '../../hoc/withMenu';
import { useParams } from 'react-router-dom';

const EnhancedComponent = withMenu(<WebEngineering />);

export default function Engineering() {
  const { id } = useParams() as { id: string };
  return <EnhancedComponent items={items} id={id} defaultOpenKeys={['engineering']} />;
}
