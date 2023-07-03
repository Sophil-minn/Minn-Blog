
import { withAnchor } from '../../../../hoc/withAnchor';
import { reducerAnchorItems } from '../../anchorConfig';
import ReducerInfo from './ReducerInfo';

const EnhancedComponent = withAnchor(ReducerInfo)

export default function Reducer() {
  return <EnhancedComponent anchorItems={reducerAnchorItems} />;
}
