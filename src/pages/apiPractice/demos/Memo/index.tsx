import { withAnchor } from '../../../../hoc/withAnchor';
import { memoAnchorItems } from '../../anchorConfig';
import MemoInfo from './MemoInfo';

const EnhancedComponent = withAnchor(MemoInfo)

export default function Memo() {
  return <EnhancedComponent anchorItems={memoAnchorItems} />;
}
