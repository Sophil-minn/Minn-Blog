import { withAnchor } from '../../../../../hoc/withAnchor';
import { deferredValueAnchorItems } from '../../anchorConfig';
import DeferredValueInfo from './DeferredValueInfo';

const EnhancedComponent = withAnchor(DeferredValueInfo);

export default function DebugValue() {
  return <EnhancedComponent anchorItems={deferredValueAnchorItems} />;
}
