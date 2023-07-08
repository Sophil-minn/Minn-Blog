import { callbackAnchorItems } from '../../anchorConfig';
import { withAnchor } from '../../../../../hoc/withAnchor';
import CallbackInfo from './CallbackInfo';

const EnhancedComponent = withAnchor(CallbackInfo);

export default function Callback() {
  return <EnhancedComponent anchorItems={callbackAnchorItems} />;
}