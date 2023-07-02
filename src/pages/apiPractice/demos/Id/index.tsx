import { withAnchor } from '../../../../hoc/withAnchor';
import IdInfo from './IdInfo';
import { idAnchorItems } from '../../anchorConfig';

const EnhancedComponent = withAnchor(IdInfo)

export default function Id() {
  return <EnhancedComponent anchorItems={idAnchorItems} />;
}
