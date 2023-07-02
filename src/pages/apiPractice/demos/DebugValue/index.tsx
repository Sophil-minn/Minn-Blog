import { withAnchor } from '../../../../hoc/withAnchor';
import DebugValueInfo from './DebugValueInfo';
import { debugValueAnchorItems } from '../../anchorConfig';

const EnhancedComponent = withAnchor(DebugValueInfo);

export default function DebugValue() {
  return <EnhancedComponent anchorItems={debugValueAnchorItems} />;
}
