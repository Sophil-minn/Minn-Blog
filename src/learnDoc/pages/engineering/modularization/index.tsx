import { withAnchor } from '../../../hoc/withAnchor';
import { modularizationAnchorItems } from '../config';
import Info from './Info';
import './index.scss';

const EnhancedComponent = withAnchor(Info)

export default function Modularization() {
  return <EnhancedComponent anchorItems={modularizationAnchorItems} />;
}
