import { items } from './config';
import withMenu from '../../hoc/withMenu';
import './index.scss';
import DesignPattern from './DesignPattern';

export default function index() {
  const EnhancedComponent = withMenu(<DesignPattern />);
  return <EnhancedComponent items={items} />;
}
