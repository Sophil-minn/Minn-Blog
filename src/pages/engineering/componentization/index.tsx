import { withAnchor } from '../../../hoc/withAnchor';
import { componentizationAnchorItems } from '../config';
import Info from './Info';
import './index.scss';

const EnhancedComponent = withAnchor(Info)

export default function Componentization() {
  return <EnhancedComponent anchorItems={componentizationAnchorItems} />;
}
