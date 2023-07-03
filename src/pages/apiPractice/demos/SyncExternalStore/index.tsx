import { withAnchor } from '../../../../hoc/withAnchor';
import { syncExternalStoreAnchorItems } from '../../anchorConfig';
import SyncExternalStoreInfo from './SyncExternalStoreInfo';

const EnhancedComponent = withAnchor(SyncExternalStoreInfo)

export default function SyncExternalStore() {
  return <EnhancedComponent anchorItems={syncExternalStoreAnchorItems} />;
}
