import CallbackInfo from './Callback/CallbackInfo'
import ContextInfo from './Context/ContextInfo'
import { hooksAnchorItems } from '../config';
import { withAnchor } from '../../../hoc/withAnchor';
import DebugValueInfo from './DebugValue/DebugValueInfo';

const EnhancedComponent = withAnchor(() => (
  <>
    <CallbackInfo />
    <ContextInfo />
    <DebugValueInfo />
  </>
))

export default function Hooks() {
  return <EnhancedComponent anchorItems={hooksAnchorItems} />;
}
