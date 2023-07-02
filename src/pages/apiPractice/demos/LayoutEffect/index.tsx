import { withAnchor } from '../../../../hoc/withAnchor';
import { layoutEffectInfoAnchorItems } from '../../anchorConfig';
import LayoutEffectInfo from './LayoutEffectInfo';

const EnhancedComponent = withAnchor(LayoutEffectInfo)

export default function InsertionEffect() {
  return <EnhancedComponent anchorItems={layoutEffectInfoAnchorItems} />;
}
