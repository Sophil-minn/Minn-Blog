import { withAnchor } from '../../../../hoc/withAnchor';
import { stateAnchorItems } from '../../anchorConfig';
import StateInfo from './StateInfo';

const EnhancedComponent = withAnchor(StateInfo)

export default function State() {
  return <EnhancedComponent anchorItems={stateAnchorItems} />;
}
