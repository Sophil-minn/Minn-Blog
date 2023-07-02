import { withAnchor } from '../../../../hoc/withAnchor';
import { effectAnchorItems } from '../../anchorConfig';
import EffectInfo from './EffectInfo';

const EnhancedComponent = withAnchor(EffectInfo);

export default function Effect() {
  return <EnhancedComponent anchorItems={effectAnchorItems} />;
}


