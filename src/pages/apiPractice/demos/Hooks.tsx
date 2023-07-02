import { hooksAnchorItems } from '../config';
import { withAnchor } from '../../../hoc/withAnchor';
import { lazy } from 'react';
import SpinLoading from '../../../components/common/SpinLoading';

const CallbackInfo = lazy(() => import("./Callback/CallbackInfo"));
const ContextInfo = lazy(() => import("./Context/ContextInfo"));
const DebugValueInfo = lazy(() => import("./DebugValue/DebugValueInfo"));
const DeferredValueInfo = lazy(() => import("./DeferredValue/DeferredValueInfo"));
const EffectInfo = lazy(() => import("./Effect/EffectInfo"));

const EnhancedComponent = withAnchor(() => (
  <>
    <SpinLoading tip="Loading useCallback"><CallbackInfo /></SpinLoading>
    <SpinLoading tip="Loading useContext"><ContextInfo /></SpinLoading>
    <SpinLoading tip="Loading useDebugValue" ><DebugValueInfo /></SpinLoading>
    <SpinLoading tip="Loading useDeferredValue" ><DeferredValueInfo /></SpinLoading>
    <SpinLoading tip="Loading useEffect" ><EffectInfo /></SpinLoading>
  </>
))

export default function Hooks() {
  return <EnhancedComponent anchorItems={hooksAnchorItems} />;
}
