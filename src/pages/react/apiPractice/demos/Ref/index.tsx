
import { withAnchor } from '../../../../../hoc/withAnchor';
import { refAnchorItems } from '../../anchorConfig';
import RefInfo from './RefInfo';

const EnhancedComponent = withAnchor(RefInfo)

export default function Ref() {
  return <EnhancedComponent anchorItems={refAnchorItems} />;
}
