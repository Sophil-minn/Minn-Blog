import { withAnchor } from '../../../../hoc/withAnchor';
import EffectInfo from './EffectInfo';
import { effectAnchorItems } from './config';

export default function Effect() {
  const EnhancedComponent = withAnchor(EffectInfo)
  return <EnhancedComponent anchorItems={effectAnchorItems} />;
}


