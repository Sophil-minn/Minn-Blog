import { withAnchor } from '../../../hoc/withAnchor';
import { webDevStandardAnchorItems } from '../config';
import Info from './Info';

const EnhancedComponent = withAnchor(Info)

export default function WebDevStandard() {
  return <EnhancedComponent anchorItems={webDevStandardAnchorItems} />;
}
