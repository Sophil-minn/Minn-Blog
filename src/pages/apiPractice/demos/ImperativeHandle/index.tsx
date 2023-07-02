import { withAnchor } from '../../../../hoc/withAnchor';
import { imperativeHandleAnchorItems } from '../../anchorConfig';
import ImperativeHandleInfo from './ImperativeHandleInfo';

const EnhancedComponent = withAnchor(ImperativeHandleInfo)

export default function ImperativeHandle() {
  return <EnhancedComponent anchorItems={imperativeHandleAnchorItems} />;
}
