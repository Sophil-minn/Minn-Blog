import { withAnchor } from '../../../../hoc/withAnchor';
import { transitionAnchorItems } from '../../anchorConfig';
import TransitionInfo from './TransitionInfo';

const EnhancedComponent = withAnchor(TransitionInfo)

export default function Transition() {
  return <EnhancedComponent anchorItems={transitionAnchorItems} />;
}
