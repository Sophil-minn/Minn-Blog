

import { withAnchor } from '../../../hoc/withAnchor';
import { engineeringAnchorItems } from '../config';
import Info from './Info';

const EnhancedComponent = withAnchor(Info)

export default function WebEngineering() {
  return <EnhancedComponent anchorItems={engineeringAnchorItems} />;
}
