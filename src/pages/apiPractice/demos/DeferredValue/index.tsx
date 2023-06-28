import { withAnchor } from '../../../../hoc/withAnchor';
import DeferredValueInfo from './DeferredValueInfo';
import { deferredValueAnchorItems } from './config';

export default function DebugValue() {
  const EnhancedComponent = withAnchor(DeferredValueInfo)
  return <EnhancedComponent anchorItems={deferredValueAnchorItems} />;
}
