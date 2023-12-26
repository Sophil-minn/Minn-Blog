import { withAnchor } from '../../../../../hoc/withAnchor';
import { insertionEffectAnchorItems } from '../../anchorConfig';
import InsertionEffectInfo from './InsertionEffectInfo';

const EnhancedComponent = withAnchor(InsertionEffectInfo)

export default function InsertionEffect() {
  return <EnhancedComponent anchorItems={insertionEffectAnchorItems} />;
}
