import { withAnchor } from '../../../../hoc/withAnchor';
import DebugValueInfo from './DebugValueInfo';
import { debugValueAnchorItems } from './config';

export default function DebugValue() {
  const EnhancedComponent = withAnchor(DebugValueInfo)
  return <EnhancedComponent anchorItems={debugValueAnchorItems} />;
}
